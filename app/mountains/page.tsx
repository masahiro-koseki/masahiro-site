// app/mountains/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GalleryVerticalEnd } from "lucide-react";
import { Button } from "@/components/ui/button";

const LANG_KEY = "mk_lang";
type Lang = "ja" | "en";

const mountains = [
{
	id: "hayachine",
	nameJa: "早池峰山",
	nameEn: "Mt. Hayachine",
	height: "1,917 m",
	area: "岩手県 花巻市・遠野市",
	areaEn: "Hanamaki & Tono, Iwate Prefecture",
	seasons: "春〜冬（高山植物・残雪・紅葉・樹氷）",
	seasonsEn: "Spring–winter (alpine flowers, lingering snow, autumn foliage, rime ice)",
	image: "/images/mountains/hayachine-main.jpg",
	descriptionJa:
	"北上山地の主峰で、日本百名山のひとつ。固有種を含む高山植物の宝庫として知られ、山頂からは北上山地と奥羽山脈の大展望が広がります。",
	descriptionEn:
	"The symbolic peak of the Kitakami Mountains and one of Japan’s 100 Famous Mountains. Mt. Hayachine is known for its unique alpine flowers and vast panoramic views from the summit.",
},
{
	id: "yakeishi",
	nameJa: "焼石岳",
	nameEn: "Mt. Yakeishi",
	height: "1,548 m",
	area: "岩手県 奥州市・秋田県 東成瀬村",
	areaEn: "Oshu, Iwate & Higashinaruse, Akita Prefecture",
	seasons: "新緑〜初夏・紅葉・初冬",
	seasonsEn: "Fresh green to early summer, autumn foliage, early winter",
	image: "/images/mountains/yakeishi-kaminuma.jpg",
	descriptionJa:
	"湿原や池塘、高山植物が彩る山として知られ、とくに新緑と残雪が重なる初夏の風景が印象的。中沼周辺は静かな山上湿原の雰囲気を楽しめます。",
	descriptionEn:
	"Famous for its marshlands, ponds, and colorful alpine plants. Early summer offers beautiful contrasts of fresh green and lingering snow, especially around Nakanuma marsh.",
},
{
	id: "kurikoma",
	nameJa: "栗駒山",
	nameEn: "Mt. Kurikoma",
	height: "1,626 m",
	area: "宮城・岩手・秋田 三県境",
	areaEn: "Border of Miyagi, Iwate & Akita Prefectures",
	seasons: "夏〜秋（紅葉の名所）",
	seasonsEn: "Summer–autumn (renowned for autumn foliage)",
	image: "/images/mountains/kurikoma-autumn.jpg",
	descriptionJa:
	"東北屈指の紅葉の名山。広大な裾野に色づく草紅葉とブナ林が広がり、秋には山全体が燃えるような色彩に包まれます。",
	descriptionEn:
	"Renowned as one of Tohoku’s finest autumn foliage mountains, with vast slopes covered in colorful dwarf shrubs and beech forests.",
},
];

export default function MountainsPage() {
	const [lang, setLang] = useState<Lang>("ja");
	const [menuOpen, setMenuOpen] = useState(false);
	
	// トップページと同じ localStorage のキーで言語を共有
	useEffect(() => {
			try {
				const saved = localStorage.getItem(LANG_KEY) as Lang | null;
				if (saved === "ja" || saved === "en") setLang(saved);
			} catch {
				// SSR環境などでは何もしない
			}
	}, []);
	
	const changeLang = (l: Lang) => {
		setLang(l);
		try {
			localStorage.setItem(LANG_KEY, l);
		} catch {}
	};
	
	const navText = {
		ja: {
			home: "ホーム",
			book: "写真集",
			mountains: "山紹介",
			contact: "お問い合わせ",
		},
		en: {
			home: "Home",
			book: "Photo Book",
			mountains: "Mountains",
			contact: "Contact",
		},
	}[lang];
	
	return (
		<div className="min-h-screen bg-slate-50 text-gray-900">
		{/* ▼ トップページと同系デザインの NavBar（言語切り替え付き） */}
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
		{navText.home}
		</Link>
		<Link href="/#book" className="hover:opacity-70">
		{navText.book}
		</Link>
		<span className="text-gray-900 font-medium">
		{navText.mountains}
		</span>
		</nav>
		
		{/* PC用 言語切り替えボタン */}
		<div className="hidden md:flex items-center gap-2">
		<Button
		variant="outline"
		className="rounded-full"
		onClick={() => changeLang(lang === "ja" ? "en" : "ja")}
		>
		{lang === "ja" ? "EN" : "JP"}
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
		
		{/* モバイルメニュー本体 */}
		{menuOpen && (
				<nav className="md:hidden border-t border-neutral-300 bg-white text-sm">
				<Link
				href="/"
				className="block px-4 py-3 w-full text-left hover:bg-neutral-100"
				onClick={() => setMenuOpen(false)}
				>
				{navText.home}
				</Link>
				<Link
				href="/#book"
				className="block px-4 py-3 w-full text-left hover:bg-neutral-100"
				onClick={() => setMenuOpen(false)}
				>
				{navText.book}
				</Link>
				<div className="block px-4 py-3 w-full text-left text-gray-900 font-medium">
				{navText.mountains}
				</div>
				
				{/* モバイル用 言語切り替え */}
				<div className="border-t border-neutral-200 flex gap-2 px-4 py-3">
				<button
				className={`px-3 py-1 rounded-full ${
						lang === "ja"
						? "bg-neutral-900 text-white"
						: "bg-neutral-200"
				}`}
				onClick={() => changeLang("ja")}
				>
				JP
				</button>
				<button
				className={`px-3 py-1 rounded-full ${
						lang === "en"
						? "bg-neutral-900 text-white"
						: "bg-neutral-200"
				}`}
				onClick={() => changeLang("en")}
				>
				EN
				</button>
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
		{lang === "ja" ? "地元の山々の紹介" : "Introduction to Local Mountains"}
		</h1>
		<p className="mt-6 max-w-3xl text-sm leading-relaxed text-gray-700 md:text-base">
		{lang === "ja"
			? "焼石岳、栗駒山、早池峰山――。中学時代の渓流釣りをきっかけに足を運ぶようになり、その稜線や沢、森の表情に魅せられてきました。このページでは、写真集に登場する山々の概要や特徴、季節ごとの魅力を紹介していきます。"
		: "Mt. Yakeishi, Mt. Kurikoma, and Mt. Hayachine—these home mountains have drawn me in since my days fishing in local mountain streams as a teenager. Their ridgelines, streams, and forests continue to fascinate me. This page introduces the main mountains featured in my photo book, along with their characteristics and seasonal charm."}
		</p>
		</section>
		
		{/* エリア説明・マップ枠 */}
		<section className="mb-16 rounded-2xl border border-gray-200 bg-white p-5 md:p-7">
		<div className="flex flex-col gap-6 md:flex-row md:items-center">
		<div className="md:w-2/3">
		<h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
		{lang === "ja"
			? "岩手・東北の山域エリア"
		: "Mountain Areas in Iwate & Tohoku"}
		</h2>
		<p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
		{lang === "ja"
			? "ここで紹介する山々は、主に岩手県とその周辺に位置しています。北上山地の主峰・早池峰山、湿原と池塘が点在する焼石岳、紅葉の名所として知られる栗駒山など、いずれも四季折々に表情を変えながら、山と自然の魅力を見せてくれます。"
		: "The mountains introduced here are mainly located in Iwate Prefecture and its surrounding region. From Mt. Hayachine, the main peak of the Kitakami Mountains, to Mt. Yakeishi with its marshes and ponds, and Mt. Kurikoma, renowned for its autumn colors, each mountain reveals a different face with the changing seasons."}
		</p>
		<p className="mt-4 text-xs text-gray-500 md:text-sm">
		{lang === "ja"
			? "※ エリアマップやアクセス情報は、今後このセクションに追加していく予定です。"
		: "* A regional map and access information will be added to this section in the future."}
		</p>
		</div>
		<div className="md:w-1/3">
		<div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
		<div className="flex h-full items-center justify-center px-4 text-center text-xs text-gray-500">
		Area map / region illustration
		<br />
		{lang === "ja"
			? "（後で地図画像やイラストに差し替え）"
		: "(Map or illustration to be added later)"}
		</div>
		</div>
		</div>
		</div>
		</section>
		
		{/* 山一覧 */}
		<section className="space-y-6">
		<div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
		<h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
		{lang === "ja"
			? "山一覧（登場する主な山々）"
		: "Mountain List (Main Peaks Featured)"}
		</h2>
		<p className="text-xs text-gray-500 md:text-sm">
		{lang === "ja"
			? "※ 今後、ここから各山の個別ページ（詳細・写真ギャラリー）へリンクさせていきます。"
		: "* In the future, each card will link to a detailed page with photo galleries and more information."}
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
					{lang === "ja" ? mt.nameJa : mt.nameEn}
					</h3>
					
					<dl className="mt-3 space-y-1 text-xs text-gray-700 md:text-sm">
					<div className="flex gap-2">
					<dt className="w-12 shrink-0 text-gray-500">
					{lang === "ja" ? "標高" : "Height"}
					</dt>
					<dd>{mt.height}</dd>
					</div>
					<div className="flex gap-2">
					<dt className="w-12 shrink-0 text-gray-500">
					{lang === "ja" ? "エリア" : "Area"}
					</dt>
					<dd>{lang === "ja" ? mt.area : mt.areaEn}</dd>
					</div>
					<div className="flex gap-2">
					<dt className="w-12 shrink-0 text-gray-500">
					{lang === "ja" ? "季節" : "Seasons"}
					</dt>
					<dd>{lang === "ja" ? mt.seasons : mt.seasonsEn}</dd>
					</div>
					</dl>
					
					<p className="mt-3 flex-1 text-xs leading-relaxed text-gray-700 md:text-sm">
					{lang === "ja" ? mt.descriptionJa : mt.descriptionEn}
					</p>
					
					{/* 将来：個別ページへのリンクを追加予定 */}
					{/* <Link
					  href={`/mountains/${mt.id}`}
					  className="mt-3 text-xs font-semibold text-blue-600 hover:underline"
					>
					  {lang === "ja" ? "詳細ページへ" : "View details"}
					</Link> */}
						</div>
						</article>
			))}
			</div>
			</section>
			</div>
			</main>
			</div>
		);
	}
