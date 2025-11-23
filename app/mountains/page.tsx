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
	subImages: string[];
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
	"早池峰山は北上山地の主峰で、日本百名山のひとつ。固有種を含む高山植物の宝庫として知られ、山頂からは北上山地と奥羽山脈の大展望が広がります。春から初夏は花の時期、秋には紅葉、冬には樹氷と、四季折々に表情を変える山です。\n\nさらに、この山は日本でも最古級の地層が地表に現れている山としても知られ、約5億年前の古生代の岩石と蛇紋岩が広く分布しています。特殊な地質環境のもとで、早池峰ウスユキソウやナンブトラノオなどの固有種をはじめ、多くの希少な植物が適応しながら生きてきました。南側は草原状の明るい尾根が広がりますが、北側ではヒノキアスナロやアオモリトドマツ、コメツガなどの針葉樹林が山頂近くまで続き、厳しくも豊かな自然環境の対比を感じることができます。",
	subImages: [
	"/images/mountains/hayachine-flowers-01.jpg",
	"/images/mountains/hayachine-flowers-02.jpg",
	"/images/mountains/hayachine-main.jpg",
	],
},
{
	id: "yakeishi",
	nameJa: "焼石岳",
	nameEn: "Mt. Yakeishi",
	height: "1,547 m",
	area: "岩手県 奥州市・秋田県 東成瀬村",
	seasons: "新緑〜初夏・紅葉・初冬",
	image: "/images/mountains/Yakeishi-main.jpg",
	description:
	"焼石岳は、湿原や池塘、高山植物が彩る山として知られ、とくに新緑と残雪が重なる初夏の風景が印象的です。中沼周辺や山上の湿原では、静かな水面に空や雲が映り込み、柔らかな光の変化をゆっくり味わうことができます。\n\n「花の百名山」に数えられるほど高山植物の種類が豊富で、ハクサンイチゲやチングルマなどが一面を埋め尽くします。周囲には1,000m級の山々が10座以上連なる小さな連峰が形成されており、コースを組み合わせれば縦走も楽しめます。標高自体はそれほど高くないものの、湿原・池塘・残雪・草原がコンパクトに詰まった、東北らしい静けさと奥深さを味わえる山です。",
	subImages: [
	"/images/mountains/Yakeishi-kaminuma-01.jpg",
	"/images/mountains/Yakeishi-honnnai-01.jpg",
	"/images/mountains/Yakeishi-honnnai-02.jpg",
	],
},
{
	id: "kurikoma",
	nameJa: "栗駒山",
	nameEn: "Mt. Kurikoma",
	height: "1,626 m",
	area: "宮城・岩手・秋田 三県境",
	seasons: "夏〜秋（紅葉の名所）",
	image: "/images/mountains/kurikoma-sekaiyachi-01.jpg",
	description:
	"栗駒山は東北屈指の紅葉の名山で、広い裾野に草紅葉とブナ林が広がり、秋には山全体が燃えるような色彩に包まれます。その光景は「神の絨毯」とも呼ばれ、多くの登山者や写真愛好家を惹きつけています。夏には湿原や池塘の花が楽しめ、季節ごとに歩くたびに違った表情を見せてくれる山です。\n\n山麓には須川温泉をはじめ、火山地形を活かした温泉が点在し、登山と湯めぐりを合わせて楽しめるのも魅力のひとつです。また、この山には地域によって異なる呼び名があり、宮城県側では「栗駒山」、岩手県側では「須川岳」、秋田県側では「大日岳」と呼ばれてきました。複雑な地形と気候のもと、それぞれの斜面が異なる植生と景観を持ち、多彩な表情を見せてくれます。",
	subImages: [
	"/images/mountains/kurikoma-showako.jpg",
	"/images/mountains/iwakagami.jpg",
	"/images/mountains/kurikoma-autumn.jpg",
	],
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
			// ignore
		}
		router.push("/en/mountains");
	};
	
	return (
		<div className="min-h-screen bg-slate-50 text-gray-900">
		{/* ヘッダー */}
		<header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
		<div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
		<div className="flex items-center gap-2 font-semibold">
		<GalleryVerticalEnd className="h-5 w-5" />
		<span>Masahiro Koseki</span>
		</div>
		
		<nav className="hidden md:flex items-center gap-6 text-sm">
		
		<Link href="/" className="hover:opacity-70">
		ホーム
		</Link>
		
		<Link href="/#book" className="hover:opacity-70">
		写真集
		</Link>
		
		<Link href="/#portfolio" className="hover:opacity-70">
		ポートフォリオ
		</Link>
		
		<span className="text-gray-900 font-medium">山紹介</span>
		
		<Link href="/#about" className="hover:opacity-70">
		プロフィール
		</Link>
		
		<Link href="/#news" className="hover:opacity-70">
		お知らせ
		</Link>
		
		<Link href="/#contact" className="hover:opacity-70">
		コンタクト
		</Link>
				
		</nav>
		
		
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
		
		{menuOpen && (
				<nav className="md:hidden border-t border-neutral-300 bg-white text-sm">
				
				<Link href="/" className="block px-4 py-3 w-full text-left hover:bg-neutral-100" onClick={() => setMenuOpen(false)}>
				ホーム
				</Link>
				
				<Link href="/#book" className="block px-4 py-3 w-full text-left hover:bg-neutral-100" onClick={() => setMenuOpen(false)}>
				写真集
				</Link>
				
				<Link href="/#portfolio" className="block px-4 py-3 w-full text-left hover:bg-neutral-100" onClick={() => setMenuOpen(false)}>
				ポートフォリオ
				</Link>
				
				<div className="block px-4 py-3 w-full text-left text-gray-900 font-medium">
				山紹介
				</div>
				
				<Link href="/#about" className="block px-4 py-3 w-full text-left hover:bg-neutral-100" onClick={() => setMenuOpen(false)}>
				プロフィール
				</Link>
				
				<Link href="/#news" className="block px-4 py-3 w-full text-left hover:bg-neutral-100" onClick={() => setMenuOpen(false)}>
				お知らせ
				</Link>
				
				<Link href="/#contact" className="block px-4 py-3 w-full text-left hover:bg-neutral-100" onClick={() => setMenuOpen(false)}>
				コンタクト
				</Link>
				</nav>
		)}
		</header>
		
		{/* メインコンテンツ */}
		<main className="min-h-screen bg-slate-50 text-gray-900 pt-10 pb-16">
		<div className="mx-auto max-w-6xl px-4">
		<section className="mb-12 md:mb-16">
		<div className="grid gap-8 md:grid-cols-[3fr,2fr] items-start">
		{/* 左：タイトル＋テキスト */}
		<div>
		<p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
		Mountains &amp; Nature
		</p>
		<h1 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
		地元の山々の紹介
		</h1>
		
		<p className="mt-6 text-sm leading-relaxed text-gray-700 md:text-base">
		焼石岳、栗駒山、早池峰山――。中学時代の渓流釣りをきっかけに足を運ぶようになり、
		その稜線や沢、森の表情に魅せられてきました。
		このページでは、写真集に登場する主な山々の概要や特徴、季節ごとの魅力を、
		写真とともに簡単にご紹介します。
		</p>
		<p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
		ここで紹介する山々は、主に岩手県とその周辺に位置しています。
		北上山地の主峰・早池峰山、湿原と池塘が点在する焼石岳、紅葉の名所として知られる栗駒山など、
		いずれも四季折々に表情を変えながら、山と自然の魅力を見せてくれます。
		</p>
		</div>
		
		{/* 右：イメージ写真（各山のメイン画像とほぼ同じ高さ） */}
		<div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-2xl overflow-hidden bg-black/5">
		<Image
		src="/images/mountains/kurikoma-iwakagami.jpg"
		alt="初夏の栗駒山・イワカガミ咲く火山性の斜面"
		fill
		className="object-cover"
		/>
		</div>
		</div>
		</section>
		
		{/* 各山セクション（英語版と同じ 5fr:7fr レイアウト） */}
		<section className="space-y-10 md:space-y-12">
		{mountains.map((mt) => (
					<article
					key={mt.id}
					id={mt.id}
					className="rounded-2xl border border-gray-200 bg-white shadow-sm"
					>
					<div className="grid gap-0 md:grid-cols-[5fr,7fr]">
					{/* 左：メイン画像＋サムネイル */}
					<div className="p-5 md:p-6 md:pr-3 flex flex-col gap-3">
					{/* メイン画像（英語版と同じ高さ指定） */}
					<div className="relative w-full h-56 md:h-64 lg:h-72 bg-black/5 rounded-xl overflow-hidden">
					<Image
					src={mt.image}
					alt={`${mt.nameJa} / ${mt.nameEn}`}
					fill
					className="object-cover"
					/>
					</div>
					
					{/* サムネイル 3枚を均等配置（キャプションなし・画像のみ） */}
					{mt.subImages.length > 0 && (
							<div className="grid grid-cols-3 gap-3 w-full">
							{mt.subImages.map((src, idx) => (
										<div
										key={idx}
										className="relative w-full aspect-[1.166] rounded-md overflow-hidden bg-black/5 border border-gray-200"
										>
										<Image
										src={src}
										alt={`${mt.nameJa} サムネイル ${idx + 1}`}
										fill
										className="object-cover"
										/>
										</div>
							))}
							</div>
					)}
					</div>
					
					{/* 右：テキスト */}
					<div className="p-5 md:p-6 md:pl-3 flex flex-col">
					<div className="text-xs uppercase tracking-[0.2em] text-gray-500">
					{mt.nameEn}
					</div>
					<h2 className="mt-1 text-xl font-semibold text-gray-900">
					{mt.nameJa}
					</h2>
					
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
					<p className="mt-3 text-xs leading-relaxed text-gray-700 md:text-sm whitespace-pre-line">
					{mt.description}
					</p>
					</div>
					</div>
					</article>
		))}
		</section>
		</div>
		</main>
		
		{/* フッター */}
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
		<Link href="/#contact" className="hover:text-gray-900">
		コンタクト
		</Link>
		</div>
		</div>
		<p className="mt-0 mb-4 text-center text-[11px] text-gray-400 italic">
		※ 本ページの説明文は、著者の記録と写真に基づき、ChatGPT のアシスタンスを受けて作成しています。
		内容には不正確な情報が含まれる可能性があります。
		</p>
		</footer>
		</div>
	);
}
