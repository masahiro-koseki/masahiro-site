// src/components/sections/BookSection.tsx
import React from "react";
import Link from "next/link";
import { BookOpen, Camera, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type BookTexts = {
	lead: string;
	desc: string;
	specs: readonly string[];
	buttons: {
		preview: string;
		buy: string;
	};
};

type Highlight = {
	key: string;
	src: string;
	alt: string;
	jp: string;
	en: string;
	desc_ja: string;
	desc_en: string;
};

type BookSectionProps = {
	lang: "ja" | "en";
	book: BookTexts;
	highlights: readonly Highlight[];
	amazonJp: string;
	amazonEn: string;
};

export default function BookSection({
		lang,
		book,
		highlights,
		amazonJp,
		amazonEn,
}: BookSectionProps) {
	return (
		<>
		{/* リードテキスト＋説明 */}
		<p className="mt-2 text-neutral-700">
		{lang === "ja"
			? "夜明け前の静かな登山道、沢音の響く森、霧に包まれた湿原――そんな瞬間を一冊にまとめました。"
		: "Before dawn on the trail, the sound of streams in the forest, wetlands wrapped in fog — this book gathers those quiet moments into one volume."}
		</p>
		<p className="mt-3 text-neutral-600 max-w-3xl">{book.desc}</p>
		
		<div className="mt-8 grid md:grid-cols-2 gap-6">
		{/* 左：ブックカバー＋要約メッセージ＋スペック＋ボタン */}
		<Card className="rounded-2xl shadow-lg">
		<CardHeader>
		<CardTitle className="flex items-center gap-2">
		<BookOpen className="h-5 w-5" /> {book.lead}
		</CardTitle>
		</CardHeader>
		<CardContent>
		<div
		className="w-full rounded-xl overflow-hidden bg-neutral-100"
		aria-label="Photo book cover"
		>
		<img
		src="/images/book_cover.webp"
		alt="Photo book cover"
		className="h-full w-full object-cover"
		/>
		</div>
		
		{/* 著者紹介＋序文からの要約メッセージ */}
		<p className="mt-2 text-neutral-700 max-w-3xl">
		{lang === "ja"
			? "山や渓流で出会った美しい瞬間を「いつまでも残したい」と思い、写真を撮りはじめました。長い間手元にあった写真をまとめ、この地で生きた証として形に残したい――それが、この写真集を作った理由です。"
		: "I began photographing the mountains and streams, wishing to preserve the beautiful moments I encountered there. This book gathers images that have been with me for many years, as a quiet record of my life in this land."}
		</p>
		
		{/* スペック一覧 */}
		<ul className="mt-4 text-sm text-neutral-700 list-disc list-inside space-y-1">
		{book.specs.map((s: string, i: number) => (
					<li key={i}>{s}</li>
		))}
		</ul>
		
		{/* ボタン */}
		<div className="mt-6 flex flex-wrap gap-3">
		{/* プレビューへ */}
		<Link href="/preview" className="inline-flex">
		<Button className="rounded-2xl" variant="default">
		<ExternalLink className="h-4 w-4 mr-2" />{" "}
		{book.buttons.preview}
		</Button>
		</Link>
		
		{/* Amazon へ */}
		<a
		href={lang === "ja" ? amazonJp : amazonEn}
		target="_blank"
		rel="noopener noreferrer nofollow"
		className="inline-flex"
		>
		<Button
		variant="outline"
		className="rounded-2xl"
		aria-label={
			lang === "ja" ? "Amazonで購入" : "Buy on Amazon"
		}
		>
		<ExternalLink className="h-4 w-4 mr-2" />
		{book.buttons.buy}
		</Button>
		</a>
		</div>
		</CardContent>
		</Card>
		
		{/* 右：ハイライトカード */}
		<Card className="rounded-2xl shadow-lg">
		<CardHeader>
		<CardTitle className="flex items-center gap-2">
		<Camera className="h-5 w-5" />{" "}
		{lang === "ja" ? "見どころ" : "Highlights"}
		</CardTitle>
		</CardHeader>
		<CardContent>
		<div className="grid grid-cols-2 gap-3">
		{highlights.map((h) => (
					<Link
					key={h.key}
					href={`/preview#${h.key}`}
					className="group block rounded-xl overflow-hidden bg-neutral-100"
					>
					<div className="aspect-[1/1] overflow-hidden">
					<img
					src={h.src}
					alt={h.alt}
					className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
					/>
					</div>
					<div className="p-2 text-xs text-neutral-800">
					<div className="font-semibold mb-1">
					{lang === "ja" ? h.jp : h.en}
					</div>
					<div className="leading-snug">
					{lang === "ja" ? h.desc_ja : h.desc_en}
					</div>
					</div>
					</Link>
		))}
		</div>
		<p className="mt-4 text-sm text-neutral-700">
		{lang === "ja"
			? "四季の一場面を抜粋。クリックでブックプレビューの対応見開きへ。"
		: "Seasonal highlights. Click to jump to the corresponding spread in the Book Preview."}
		</p>
		</CardContent>
		</Card>
		</div>
		
		{/* セクション下の区切り線（元のまま） */}
		<div className="w-full h-px bg-neutral-200 my-8"></div>
		</>
	);
}
