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
	"A symbolic peak of the Kitakami Mountains and one of Japan’s 100 Famous Mountains. Famous for endemic alpine flowers and wide-open views.",
	character:
	"Trails climb through forest and dwarf pine to a rocky summit. In early summer the slopes are covered with alpine plants, including several rare and endemic species. On a clear day, you can see the Kitakami Mountains and the Ou Range stretching into the distance.",
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
	height: "1,548 m",
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
	"A mountain known for its wetlands, ponds, and rich alpine vegetation. The contrast of fresh green and lingering snow in early summer is especially striking.",
	character:
	"Around Nakanuma and Kaminuma you will find quiet highland marshes, ponds, and gentle ridges. In summer the wetlands are filled with flowers, while autumn brings warm colors to the grass and shrubs. The area is less crowded than major tourist mountains, offering a quieter experience.",
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
	"One of Tohoku’s best-known mountains for autumn foliage. The wide slopes are covered with colorful dwarf shrubs and beech forests.",
	character:
	"The upper slopes are open and rounded, giving wide views in many directions. In autumn the entire mountain turns red, orange, and yellow, attracting many visitors. In other seasons, you can enjoy wetlands, small ponds, and quiet forest trails.",
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
		<div className="flex items-center gap-2 font-semibold">
		<GalleryVerticalEnd className="h-5 w-5" />
		<span>Masahiro Koseki</span>
		</div>
		
		<nav className="hidden md:flex items-center gap-6 text-sm">
		<Link href="/" className="hover:opacity-70">
		Home (JP)
		</Link>
		<Link href="/en" className="hover:opacity-70">
		Home (EN)
		</Link>
		<Link href="/#book" className="hover:opacity-70">
		Photo Book
		</Link>
		<span className="text-gray-900 font-medium">Mountains (EN)</span>
		</nav>
		
		<div className="hidden md:flex items-center gap-2">
		<Button
		variant="outline"
		className="rounded-full"
		onClick={goToJapanese}
		>
		JP
		</Button>
		</div>
		</div>
		</header>
		
		{/* ▼ メインコンテンツ */}
		<main className="min-h-screen bg-slate-50 text-gray-900 pt-10 pb-16">
		<div className="mx-auto max-w-6xl px-4">
		{/* 導入 */}
		<section className="mb-12">
		<p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
		Mountains of Iwate &amp; Northern Japan
		</p>
		<h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
		Quiet Trails and Seasons in Northern Japan
		</h1>
		<p className="mt-6 max-w-3xl text-sm leading-relaxed text-gray-700 md:text-base">
		The mountains introduced here are located in and around Iwate
		Prefecture in the Tohoku region of northern Japan. They are not as
		crowded as the famous peaks around Tokyo or Kyoto. Instead, they
		offer quiet trails, wide views, rich wetlands, and the changing
		colors of four distinct seasons.
		</p>
		<p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-700 md:text-base">
		This page is written especially for visitors from overseas who are
		curious about these mountains after seeing the photo book{" "}
		<span className="italic">
		“Fascinated by Mountains and Nature”.
		</span>{" "}
		It is not a complete guidebook, but an introduction to the
		character of each mountain and what kind of experience you may
		find there.
		</p>
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
		Japanese Top
		</Link>
		<Link href="/#book" className="hover:text-gray-900">
		Photo Book
		</Link>
		<Link href="/mountains" className="hover:text-gray-900">
		山の紹介（JP）
		</Link>
		<Link href="/en/mountains" className="hover:text-gray-900">
		Mountains (EN)
		</Link>
		<Link href="/#contact" className="hover:text-gray-900">
		Contact
		</Link>
		</div>
		</div>
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
