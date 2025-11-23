// app/en/mountains/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GalleryVerticalEnd } from "lucide-react";
import { Button } from "@/components/ui/button";

const LANG_KEY = "mk_lang";

type SubImage = {
	src: string;
	alt: string;
	caption: string;
	bookPage?: number;
};

type Mountain = {
	id: string;
	name: string;
	height: string;
	area: string;
	mainImage: string;
	mainCaption: string;
	summary: string;
	character: string;
	bestSeason: string;
	difficulty: string;
	access: string;
	subImages: SubImage[];
};

const mountains: Mountain[] = [
{
	id: "hayachine",
	name: "Mt. Hayachine",
	height: "1,917 m",
	area: "Hanamaki & Tono, Iwate Prefecture",
	mainImage: "/images/mountains/hayachine-top.jpg",
	mainCaption: "Dawn view from the summit ridge of Mt. Hayachine.",
	subImages: [
	{
		src: "/images/mountains/hayachine-flowers-01.jpg",
		alt: "Alpine flowers and rocky trail",
		caption: "Alpine flowers along the rocky trail near the summit.",
	},
	{
		src: "/images/mountains/hayachine-flowers-02.jpg",
		alt: "Summer wildflowers blooming on the exposed ridge",
		caption: "Summer wildflowers blooming on the exposed ridge.",
	},
	{
		src: "/images/mountains/hayachine-main.jpg",
		alt: "Mt. Hayachine viewed from the Odagoe trailhead",
		caption: "Mt. Hayachine viewed from the Odagoe trailhead.",
	},
	],
	summary:
	"A symbolic peak of the Kitakami Mountains and one of Japan’s 100 Famous Mountains. Known as a treasure house of alpine flora, the mountain offers panoramic views toward the Kitakami Mountains and the distant Ōu Range.",
	character:
	"Mt. Hayachine also contains some of the oldest exposed rock layers in Japan, including Paleozoic strata and extensive serpentine areas. This unique geological environment supports many rare and endemic species, such as Hayachine-usuyukisō and Nanbu-toranoo. While the southern slopes are open and grassy, the northern slopes are covered with coniferous forests of Hinoki-asunaro, Aomori-todomatsu, and Kometsuga, which extend close to the summit and reflect the harsh, cool climate of the region.",
	bestSeason:
	"Late June to early August for alpine flowers; late September to early October for autumn colors; clear winter days for a distant, snow-covered profile.",
	difficulty:
	"Moderate. Some steep rocky sections near the summit; basic mountain hiking experience recommended.",
	access:
	"Trailheads are generally reached by car or local bus from Hanamaki or Tono. Schedules and access may change, so please check the latest local information.",
},
{
	id: "yakeishi",
	name: "Mt. Yakeishi",
	height: "1,547 m",
	area: "Oshu, Iwate & Higashinaruse, Akita Prefecture",
	mainImage: "/images/mountains/Yakeishi-main.jpg",
	mainCaption:
	"Early-summer reflections at Nakanuma, with the lingering snowfields of Mt. Yakeishi.",
	subImages: [
	{
		src: "/images/mountains/Yakeishi-kaminuma-01.jpg",
		alt: "Kobaikeiso flowers and wetland",
		caption:
		"Kobaikeisō blooming around the wetland below Mt. Yakeishi.",
		bookPage: 53,
	},
	{
		src: "/images/mountains/Yakeishi-honnnai-01.jpg",
		alt: "Chinguruma flowers on alpine slope",
		caption:
		"A wide alpine slope covered with blooming Chinguruma flowers.",
		bookPage: 49,
	},
	{
		src: "/images/mountains/Yakeishi-honnnai-02.jpg",
		alt: "Autumn marshland and ponds",
		caption:
		"Autumn marshland with small ponds along the Yakeishi highlands.",
		bookPage: 95,
	},
	],
	summary:
	"Mt. Yakeishi is known for its wetlands, ponds, and colorful alpine vegetation, with beautiful scenery especially in early summer when fresh greenery contrasts with lingering snowfields.",
	character:
	"Listed among Japan’s “100 Flower Mountains,” it hosts a remarkable variety of alpine plants, including large fields of Anemone narcissiflora and Geum pentapetalum. Surrounding the mountain are more than ten peaks over 1,000 meters, forming a compact range suitable for enjoyable ridge traverses. Despite its modest elevation, the mountain offers a concentrated taste of northern Japan’s wetlands, snow patches, and quiet highland landscapes.",
	bestSeason:
	"Late May to July for fresh green and flowers; late September to mid-October for autumn colors.",
	difficulty:
	"Moderate. Trails include some muddy or wet sections around marshes; waterproof footwear is useful. Weather can change quickly on the ridge.",
	access:
	"Access is mainly by car from Oshu City or from the Akita side. Some forest roads may be closed due to snow or damage, especially in early season.",
},
{
	id: "kurikoma",
	name: "Mt. Kurikoma",
	height: "1,626 m",
	area: "Border of Miyagi, Iwate & Akita Prefectures",
	mainImage: "/images/mountains/kurikoma-sekaiyachi-01.jpg",
	mainCaption:
	"Early-summer fields of Nikko-kisuge spreading across Sekaiyachi, with Mt. Kurikoma rising beyond.",
	subImages: [
	{
		src: "/images/mountains/kurikoma-showako.jpg",
		alt: "Lake Showa and volcanic slopes",
		caption:
		"The emerald waters of Lake Showa, surrounded by lingering snow and volcanic slopes.",
		bookPage: 61,
	},
	{
		src: "/images/mountains/iwakagami.jpg",
		alt: "Iwakagami flowers",
		caption:
		"Iwakagami flowers blooming along the forest trails of Mt. Kurikoma.",
	},
	{
		src: "/images/mountains/kurikoma-autumn.jpg",
		alt: "Autumn marshland and ponds on Kurikoma",
		caption:
		"Autumn colors and marsh spreading across the highlands of Mt. Kurikoma.",
		bookPage: 119,
	},
	],
	summary:
	"Mt. Kurikoma is one of northeastern Japan’s most famous mountains for autumn colors, with broad slopes turning vivid red and gold in fall.",
	character:
	"The mountain is celebrated for its dramatic fall scenery, often called “the carpet of the gods.” In summer, wetlands and ponds add a softer palette, offering different landscapes each season. Hot springs such as Sukawa Onsen lie at the mountain’s base, reflecting its volcanic origins. Mt. Kurikoma also has several traditional names: “Kurikoma” on the Miyagi side, “Sukawa-dake” on the Iwate side, and “Dainichi-dake” on the Akita side—each reflecting local history and geography.",
	bestSeason:
	"Late September to mid-October is the peak autumn season, but also the most crowded. Early summer offers fresh green and remaining snow patches.",
	difficulty:
	"Easy to moderate, depending on the chosen route. Popular trails are well-marked but can be busy during the foliage season.",
	access:
	"Multiple trailheads on the Miyagi, Iwate, and Akita sides. Access is mainly by car; public transport options are limited and may require taxis or seasonal buses.",
},
];

export default function EnMountainsPage() {
	const router = useRouter();
	const [mapOpen, setMapOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false); // ← これを追加
	const year = new Date().getFullYear();
	
	const goToJapanese = () => {
		try {
			localStorage.setItem(LANG_KEY, "ja");
		} catch {
			// ignore
		}
		router.push("/mountains");
	};
	
	return (
		<div className="min-h-screen bg-slate-50 text-gray-900">
		{/* ▼ 英語版ナビゲーション */}
		<header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
		<div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
		{/* 左：ロゴ */}
		<div className="flex items-center gap-2 font-semibold">
		<GalleryVerticalEnd className="h-5 w-5" />
		<span>Masahiro Koseki</span>
		</div>
		
		{/* --- PC 用ナビ --- */}
		<nav className="hidden md:flex items-center gap-6 text-sm">
		
		<Link href="/" className="hover:opacity-70">
		Home
		</Link>
		
		<Link href="/#book" className="hover:opacity-70">
		Photo Book
		</Link>
		
		<Link href="/#portfolio" className="hover:opacity-70">
		Portfolio
		</Link>
		
		<span className="text-gray-900 font-medium">Mountains</span>
		
		<Link href="/#about" className="hover:opacity-70">
		About
		</Link>
		
		<Link href="/#news" className="hover:opacity-70">
		News
		</Link>
		
		<Link href="/#contact" className="hover:opacity-70">
		Contact
		</Link>
		</nav>
		
		
		{/* --- モバイル用ハンバーガーボタン --- */}
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
		
		{/* --- モバイルメニュー本体 --- */}
		{menuOpen && (
				<nav className="md:hidden border-t border-neutral-300 bg-white text-sm">
				
				<Link href="/" className="block px-4 py-3 w-full text-left hover:bg-neutral-100" onClick={() => setMenuOpen(false)}>
				Home
				</Link>
				
				<Link href="/#BookSection" className="block px-4 py-3 w-full text-left hover:bg-neutral-100" onClick={() => setMenuOpen(false)}>
				Photo Book
				</Link>
				
				<Link href="/#PortfolioSection" className="block px-4 py-3 w-full text-left hover:bg-neutral-100" onClick={() => setMenuOpen(false)}>
				Portfolio
				</Link>
				
				<div className="block px-4 py-3 w-full text-left text-gray-900 font-medium">
				Mountains
				</div>
				
				<Link href="/#AboutSection" className="block px-4 py-3 w-full text-left hover:bg-neutral-100" onClick={() => setMenuOpen(false)}>
				About
				</Link>
				
				<Link href="/#NewsSection" className="block px-4 py-3 w-full text-left hover:bg-neutral-100" onClick={() => setMenuOpen(false)}>
				News
				</Link>
				
				<Link href="/#ContactSection" className="block px-4 py-3 w-full text-left hover:bg-neutral-100" onClick={() => setMenuOpen(false)}>
				Contact
				</Link>
				</nav>
		)}
		</header>
		
		{/* ▼ メインコンテンツ */}
		<main className="min-h-screen bg-slate-50 text-gray-900 pt-10 pb-16">
		<div className="mx-auto max-w-6xl px-4">
		{/* 導入 */}
		{/* Header section */}
		<section className="mb-12 md:mb-16">
		<div className="grid gap-8 md:grid-cols-[3fr,2fr] items-start">
		
		{/* Left: Title + Intro */}
		<div>
		<p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
		Mountains &amp; Nature
		</p>
		<h1 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
		Mountains of Northern Japan
		</h1>
		
		<p className="mt-6 text-sm leading-relaxed text-gray-700 md:text-base">
		The mountains featured here—including Mt. Hayachine, Mt. Yakeishi, and Mt. Kurikoma—are places I have visited since my early days of stream fishing. Their ridges, forests, waterfalls, and ever-changing seasonal scenery have continued to inspire my photography.
		</p>
		<p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
		These mountains are located mainly in Iwate Prefecture and surrounding areas. Each one offers unique landscapes: Mt. Hayachine with its alpine flora, Mt. Yakeishi with its wetlands and ponds, and Mt. Kurikoma known for its spectacular autumn colors. This page introduces their characteristics and seasonal highlights along with selected photographs.
		</p>
		</div>
		
		{/* Right: Header image */}
		<div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-2xl overflow-hidden bg-black/5">
		<Image
		src="/images/mountains/kurikoma-iwakagami.jpg"
		alt="Alpine flowers on the volcanic slopes of Mt. Kurikoma"
		fill
		className="object-cover"
		/>
		</div>
		
		</div>
		</section>
		
		{/* 地図セクション */}
		<section className="mb-16 rounded-2xl border border-gray-200 bg-white p-5 md:p-7">
		<div className="flex flex-col gap-6 md:flex-row md:items-center">
		{/* 左：説明文 */}
		<div className="md:w-2/3">
		<h2 className="text-lg font-semibold text-gray-900 md:text-xl">
		Where are these mountains?
		</h2>
		<p className="mt-3 text-sm leading-relaxed text-gray-700">
		These peaks are located in the northern part of Honshu, the
		main island of Japan. They lie inland from the Pacific coast,
		roughly between Morioka and Sendai. Travel usually involves a
		combination of Shinkansen or express trains and local buses or
		rental cars.
		</p>
		<p className="mt-3 text-sm leading-relaxed text-gray-700">
		The map on the right gives a rough idea of the region and the
		relative positions of Mt. Hayachine, Mt. Yakeishi, and Mt.
		Kurikoma. It is not for navigation, but to help you imagine
		the landscape in which these photographs were taken.
		</p>
		<p className="mt-2 text-xs text-gray-500">
		Click the map to open a larger version.
		</p>
		</div>
		
		{/* 右：地図（クリックでLightbox表示） */}
		<div className="md:w-1/3">
		<button
		type="button"
		onClick={() => setMapOpen(true)}
		className="group relative aspect-[1.166] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100"
		>
		<Image
		src="/images/maps/tohoku-region-map.jpg"
		alt="Map of northern Japan showing the area of the mountains"
		fill
		className="object-cover"
		sizes="(min-width: 1024px) 320px, 100vw"
		/>
		<div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
		<div className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold text-gray-700 shadow-sm">
		Click to enlarge
		</div>
		</button>
		</div>
		</div>
		</section>
		
		{/* 各山セクション */}
		<section className="space-y-10">
		{mountains.map((mt) => (
					<article
					key={mt.id}
					id={mt.id}
					className="rounded-2xl border border-gray-200 bg-white shadow-sm"
					>
					<div className="grid gap-0 md:grid-cols-[5fr,7fr]">
					{/* 左：メイン画像＋サムネイル */}
					<div className="p-5 md:p-6 md:pr-3 flex flex-col gap-3">
					{/* メイン画像 */}
					<div className="relative w-full h-56 md:h-64 lg:h-72 bg-black/5 rounded-xl overflow-hidden">
					<Image
					src={mt.mainImage}
					alt={mt.name}
					fill
					className="object-cover"
					/>
					</div>
					
					{/* メイン画像キャプション */}
					<p className="mt-2 text-xs text-gray-600 text-center italic">
					{mt.mainCaption}
					</p>
					
					{/* サムネイル 3枚を均等配置 */}
					{mt.subImages.length > 0 && (
							<div className="grid grid-cols-3 gap-3 w-full">
							{mt.subImages.map((img, idx) => (
										<div key={idx} className="flex flex-col">
										<div className="relative w-full aspect-[1.166] rounded-md overflow-hidden bg-black/5 border border-gray-200">
										<Image
										src={img.src}
										alt={img.alt}
										fill
										className="object-cover"
										/>
										</div>
										
										{/* サムネイルキャプション */}
										<p className="mt-1 text-[10px] text-gray-600 text-center leading-tight italic">
										{img.caption}
										</p>
										
										{/* 写真集のページ番号（ある画像だけ表示） */}
										{img.bookPage && (
												<p className="text-[9px] text-gray-500 text-center italic">
												Featured in the photo book (p. {img.bookPage})
												</p>
										)}
										</div>
							))}
							</div>
					)}
					</div>
					
					{/* 右：テキスト */}
					<div className="p-5 md:p-6 flex flex-col gap-3">
					<div className="text-xs uppercase tracking-[0.18em] text-gray-500">
					Mountain
					</div>
					<h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
					{mt.name}
					</h2>
					
					<dl className="mt-1 space-y-1 text-xs text-gray-700 md:text-sm">
					<div className="flex gap-2">
					<dt className="w-16 shrink-0 text-gray-500">Height</dt>
					<dd>{mt.height}</dd>
					</div>
					<div className="flex gap-2">
					<dt className="w-16 shrink-0 text-gray-500">Area</dt>
					<dd>{mt.area}</dd>
					</div>
					</dl>
					
					<p className="mt-2 text-sm leading-relaxed text-gray-700">
					{mt.summary}
					</p>
					
					<div className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
					<div>
					<span className="font-semibold">
					Character of the mountain:
					</span>{" "}
					{mt.character}
					</div>
					<div>
					<span className="font-semibold">Best season:</span>{" "}
					{mt.bestSeason}
					</div>
					<div>
					<span className="font-semibold">
					Difficulty (rough):
					</span>{" "}
					{mt.difficulty}
					</div>
					<div>
					<span className="font-semibold">Access notes:</span>{" "}
					{mt.access}
					</div>
					</div>
					
					<div className="mt-4 text-xs text-gray-500">
					* Conditions in the mountains can change quickly due to
					weather, trail damage, or snow. Please always check the
					latest local information and prepare appropriate gear
					before you go.
					</div>
					</div>
					</div>
					</article>
		))}
		</section>
		
		{/* 注意事項 */}
		<section className="mt-16 rounded-2xl border border-gray-200 bg-white p-5 md:p-7">
		<h2 className="text-lg font-semibold text-gray-900 md:text-xl">
		Before You Hike in These Mountains
		</h2>
		<p className="mt-3 text-sm leading-relaxed text-gray-700">
		These mountains are not technically extreme, but they are still
		real mountains with changing weather and sometimes long trails.
		Please keep in mind:
		</p>
		<ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-gray-700 space-y-1">
		<li>
		Weather can change quickly, especially on ridges. Carry rain
		gear and warm layers even in summer.
		</li>
		<li>
		Trails may be muddy, rocky, or covered with snow in early
		season. Proper hiking shoes are strongly recommended.
		</li>
		<li>
		Mobile phone reception may be weak or unavailable in some
		areas.
		</li>
		<li>
		In case of emergency, rescue can take time. Plan a route that
		matches your experience and fitness.
		</li>
		<li>
		Check recent trail and access information from local tourist
		offices, mountain huts, or official websites.
		</li>
		</ul>
		<p className="mt-4 text-sm leading-relaxed text-gray-700">
		The photographs in the photo book were taken over many years in
		different seasons. Please enjoy them as a quiet record of how
		these mountains look and feel throughout the year.
		</p>
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
		Home
		</Link>
		<Link href="/#BookSection" className="hover:text-gray-900">
		Photo Book
		</Link>
		<Link href="/en/mountains" className="hover:text-gray-900">
		Mountains
		</Link>
		<Link href="/?lang=en#ContactSection" className="hover:text-gray-900">
		Contact
		</Link>
		</div>
		</div>
		<p className="mt-0 mb-4 text-center text-[11px] text-gray-400 italic">
		* Some descriptions on this page were prepared with assistance from ChatGPT
		and may include inaccuracies.
		</p>
		</footer>
		
		{/* ▼ 地図用 Lightbox オーバーレイ */}
		{mapOpen && (
				<div
				className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70"
				onClick={() => setMapOpen(false)}
				>
				<div
				className="relative mx-4 w-full max-w-4xl aspect-[3/2] rounded-xl overflow-hidden bg-black"
				onClick={(e) => e.stopPropagation()}
				>
				<Image
				src="/images/maps/tohoku-region-map.jpg"
				alt="Map of northern Japan showing the area of the mountains"
				fill
				className="object-contain"
				sizes="(min-width: 1024px) 800px, 100vw"
				/>
				<button
				type="button"
				className="absolute top-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white"
				onClick={() => setMapOpen(false)}
				>
				Close
				</button>
				</div>
				</div>
		)}
		</div>
	);
}
