// app/mountains/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GalleryVerticalEnd } from "lucide-react";
import { Button } from "@/components/ui/button";

const LANG_KEY = "mk_lang";

type Mountain = {
	id: string;
	nameJa: string;
	nameEn: string;
	height: string;
	area: string;
	seasons: string;
	image: string;
	description: string;
};

const mountains: Mountain[] = [
{
	id: "hayachine",
	nameJa: "早池峰山",
	nameEn: "Mt. Hayachine",
	height: "1,917 m",
	area: "岩手県 花巻市・遠野市",
	seasons: "春〜冬（高山植物・残雪・紅葉・樹氷）",
	image: "/images/mountains/hayachine-top.jpg",
	description:
	"北上山地の主峰で、日本百名山のひとつ。固有種を含む高山植物の宝庫として知られ、山頂からは北上山地と奥羽山脈の大展望が広がります。春から初夏は花の時期、秋には紅葉、冬には樹氷と、四季折々に表情を変える山です。",
},
{
	id: "yakeishi",
	nameJa: "焼石岳",
	nameEn: "Mt. Yakeishi",
	height: "1,548 m",
	area: "岩手県 奥州市・秋田県 東成瀬村",
	seasons: "新緑〜初夏・紅葉・初冬",
	image: "/images/mountains/Yakeishi-main.jpg",
	description:
	"湿原や池塘、高山植物が彩る山として知られ、とくに新緑と残雪が重なる初夏の風景が印象的です。中沼周辺や山上の湿原では、静かな水面に空や雲が映り込み、柔らかな光の変化を楽しむことができます。",
},
{
	id: "kurikoma",
	nameJa: "栗駒山",
	nameEn: "Mt. Kurikoma",
	height: "1,626 m",
	area: "宮城・岩手・秋田 三県境",
	seasons: "夏〜秋（紅葉の名所）",
	image: "/images/mountains/kurikoma-autumn.jpg",
	description:
	"東北屈指の紅葉の名山。広大な裾野に草紅葉とブナ林が広がり、秋には山全体が燃えるような色彩に包まれます。夏は湿原や池塘の花が楽しめ、季節ごとに歩くたびに違った表情を見せてくれる山です。",
},
];

export default function MountainsPage() {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);
	const year = new Date().getFullYear();
	
	const goToEnglish = () => {
		try {
			localStorage.setItem(LANG_KEY, "en");
		} catch {
			// 失敗しても特に問題なし
		}
		router.push("/en/mountains");
	};
	
	return (
		<div className="min-h-screen bg-slate-50 text-gray-900">
		{/* ▼ ヘッダー（トップと同系デザイン） */}
		<header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
		<div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
		{/* 左：ロゴ */}
		<div className="flex items-center gap-2 font-semibold">
		<GalleryVerticalEnd className="h-5 w-5" />
		<span>Masahiro Koseki</span>
		</div>
		
		{/* PC用ナビ */}
		<nav className="hidden md:flex items-center gap-6 text-sm">
		<Link href="/" className="hover:opacity-70">
		ホーム
		</Link>
		<Link href="/#book" className="hover:opacity-70">
		写真集
		</Link>
		<span className="text-gray-900 font-medium">山紹介</span>
		</nav>
		
		{/* PC用 言語切り替え（EN へジャンプ） */}
		<div className="hidden md:flex items-center gap-2">
		<Button
		variant="outline"
		className="rounded-full"
		onClick={goToEnglish}
		>
		EN
		</Button>
		</div>
		
		{/* モバイル用ハンバーガー */}
		<button
		className="md:hidden flex items-center justify-center px-2 py-2 border border-neutral-300 rounded-lg bg-white"
		onClick={() => setMenuOpen((v) => !v)}
		aria-label="menu"
		>
		<div className="flex flex-col gap-[4px]">
		<span className="w-5 h-[2px] bg-neutral-800" />
		<span className="w-5 h-[2px] bg-neutral-800" />
		<span className="w-5 h-[2px] bg-neutral-800" />
		</div>
		</button>
		</div>
		
		{/* モバイルメニュー */}
		{menuOpen && (
				<nav className="md:hidden border-t border-neutral-300 bg-white text-sm">
				<Link
				href="/"
				className="block px-4 py-3 w-full text-left hover:bg-neutral-100"
				onClick={() => setMenuOpen(false)}
				>
				ホーム
				</Link>
				<Link
				href="/#book"
				className="block px-4 py-3 w-full text-left hover:bg-neutral-100"
				onClick={() => setMenuOpen(false)}
				>
				写真集
				</Link>
				<div className="block px-4 py-3 w-full text-left text-gray-900 font-medium">
				山紹介（JP）
				</div>
				
				{/* モバイル用 EN ボタン */}
				<div className="border-t border-neutral-200 px-4 py-3">
				<Button
				variant="outline"
				className="w-full rounded-full"
				onClick={() => {
						setMenuOpen(false);
						goToEnglish();
				}}
				>
				Mountains (EN)
				</Button>
				</div>
				</nav>
		)}
		</header>
		
		{/* ▼ メインコンテンツ */}
		<main className="min-h-screen bg-slate-50 text-gray-900 pt-10 pb-16">
		<div className="mx-auto max-w-6xl px-4">
		{/* ヘッダーセクション */}
		<section className="mb-16">
		<p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
		Mountains &amp; Nature
		</p>
		<h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
		地元の山々の紹介
		</h1>
		<p className="mt-6 max-w-3xl text-sm leading-relaxed text-gray-700 md:text-base">
		焼石岳、栗駒山、早池峰山――。中学時代の渓流釣りをきっかけに足を運ぶようになり、
		その稜線や沢、森の表情に魅せられてきました。
		このページでは、写真集に登場する主な山々の概要や特徴、季節ごとの魅力を、
		写真とともに簡単にご紹介します。
		</p>
		</section>
		
		{/* 山一覧 */}
		<section className="space-y-6">
		<div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
		<h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
		山一覧（写真集に登場する主な山々）
		</h2>
		<p className="text-xs text-gray-500 md:text-sm">
		※ 各カードには主なエリア・季節・特徴を簡単にまとめています。
		</p>
		</div>
		
		<div className="mt-4 grid gap-6 md:grid-cols-3">
		{mountains.map((mt) => (
					<article
					key={mt.id}
					className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
					>
					{/* 画像エリア */}
					<div className="relative aspect-[4/3] w-full bg-black/5">
					<Image
					src={mt.image}
					alt={`${mt.nameJa} / ${mt.nameEn}`}
					fill
					className="object-cover"
					sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
					/>
					</div>
					
					<div className="flex flex-1 flex-col p-4">
					<div className="text-xs uppercase tracking-[0.18em] text-gray-500">
					{mt.nameEn}
					</div>
					<h3 className="mt-1 text-lg font-semibold text-gray-900">
					{mt.nameJa}
					</h3>
					
					<dl className="mt-3 space-y-1 text-xs text-gray-700 md:text-sm">
					<div className="flex gap-2">
					<dt className="w-12 shrink-0 text-gray-500">標高</dt>
					<dd>{mt.height}</dd>
					</div>
					<div className="flex gap-2">
					<dt className="w-12 shrink-0 text-gray-500">エリア</dt>
					<dd>{mt.area}</dd>
					</div>
					<div className="flex gap-2">
					<dt className="w-12 shrink-0 text-gray-500">季節</dt>
					<dd>{mt.seasons}</dd>
					</div>
					</dl>
					
					<p className="mt-3 flex-1 text-xs leading-relaxed text-gray-700 md:text-sm">
					{mt.description}
					</p>
					</div>
					</article>
		))}
		</div>
		</section>
		</div>
		</main>
		
		{/* ▼ フッター */}
		<footer className="border-t bg-white">
		<div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
		<div>
		<p className="font-medium">Masahiro Koseki</p>
		<p className="text-xs text-gray-500">
		© {year} Masahiro Koseki. All rights reserved.
		</p>
		</div>
		<div className="flex flex-wrap items-center gap-4 text-xs">
		<Link href="/" className="hover:text-gray-900">
		ホーム
		</Link>
		<Link href="/#book" className="hover:text-gray-900">
		写真集
		</Link>
		<Link href="/mountains" className="hover:text-gray-900">
		山の紹介
		</Link>
		<Link href="/#contact" className="hover:text-gray-900">
		コンタクト
		</Link>
		</div>
		</div>
		</footer>
		</div>
	);
}
