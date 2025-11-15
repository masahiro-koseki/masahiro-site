"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const LANG_KEY = "mk_lang";
type Lang = "ja" | "en";

export default function PreviewPage() {
	//const [lang, setLang] = useState<"ja" | "en">("ja");
	const [lang, setLang] = useState<Lang>("ja");
	
	useEffect(() => {
			try {
				const saved = localStorage.getItem(LANG_KEY) as Lang | null;
				if (saved === "ja" || saved === "en") setLang(saved);
			} catch {}
	}, []);
	
	const changeLang = (l: Lang) => {
		setLang(l);
		try { localStorage.setItem(LANG_KEY, l); } catch {}
	};
	
	const previews = [
	// 1段目：表紙・序文・目次
	{ src: "/images/book_sample_cover.webp",   alt: "Book cover — spread",                  jp: "写真集 表紙",                         en: "Book cover — spread" },
	{ src: "/images/book_sample_preface.webp", alt: "Preface — JA (left) / EN (right)",     jp: "序文 見開き（左：日本語／右：English）", en: "Preface — JA (left) / EN (right)" },
	{ src: "/images/book_sample_toc.webp",     alt: "Table of Contents — spread",           jp: "目次 見開き",                         en: "Table of Contents — spread" },
	
	// 2段目：春夏秋冬
	{ src: "/images/book_sample_spring.webp",  alt: "Spring highlight spread",              jp: "春 ハイライト（見開き）",             en: "Spring highlight spread" },
	{ src: "/images/book_sample_summer.webp",  alt: "Summer highlight spread",              jp: "夏 ハイライト（見開き）",             en: "Summer highlight spread" },
	{ src: "/images/book_sample_autumn.webp",  alt: "Autumn highlight spread",              jp: "秋 ハイライト（見開き）",             en: "Autumn highlight spread" },
	{ src: "/images/book_sample_winter.webp",  alt: "Winter highlight spread",              jp: "冬 ハイライト（見開き）",             en: "Winter highlight spread" },
	];
	
	const [open, setOpen]   = useState(false);
	const [idx, setIdx]     = useState(0);
	
	const openLB  = (i: number) => { setIdx(i); setOpen(true); };
	const closeLB = () => setOpen(false);
	const next    = useCallback(() => setIdx(i => (i + 1) % previews.length), [previews.length]);
	const prev    = useCallback(() => setIdx(i => (i - 1 + previews.length) % previews.length), [previews.length]);
	
	useEffect(() => {
			if (!open) return;
			const onKey = (e: KeyboardEvent) => {
				if (e.key === "Escape") closeLB();
				if (e.key === "ArrowRight") next();
				if (e.key === "ArrowLeft")  prev();
			};
			window.addEventListener("keydown", onKey);
			document.documentElement.style.overflow = "hidden";
			return () => {
				window.removeEventListener("keydown", onKey);
				document.documentElement.style.overflow = "";
			};
	}, [open, next, prev]);
	
	return (
		<div className="min-h-screen bg-white text-neutral-900">
		<header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
		<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
		<div className="flex items-center gap-2 font-semibold">
		<BookOpen className="h-5 w-5" />
		<span>{lang === "ja" ? "プレビュー" : "Preview"}</span>
		</div>
		<div className="flex items-center gap-5 text-sm">
		<button
		onClick={() => changeLang(lang === "ja" ? "en" : "ja")}
		className="text-sm border px-2 py-1 rounded-full hover:bg-neutral-100 transition"
		>
		{lang === "ja" ? "English" : "日本語"}
		</button>
		<Link href="/" className="underline underline-offset-4 hover:opacity-70">
		← {lang === "ja" ? "ホーム" : "Home"}
		</Link>
		</div>
		</div>
		</header>
		
		<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
		<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
		{lang === "ja" ? "写真集プレビュー" : "Photo Book Preview"}
		</h1>
		<p className="mt-3 text-neutral-600 max-w-3xl">
		{lang === "ja"
			? "印刷仕上がりに近い比率で抜粋したサンプルを掲載しています。画像をクリックすると拡大表示します。"
		: "Selected sample spreads in print-like ratios. Click an image to open the lightbox."}
		</p>
		
		<div className="w-full h-px bg-neutral-200 my-8" />
		
		{/* 1段目：3列（表紙・序文・目次） */}
		<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
		{previews.slice(0, 3).map((p, i) => (
					<Card key={p.src} className="rounded-2xl overflow-hidden shadow-lg">
					<CardHeader>
					<CardTitle className="text-base">{lang === "ja" ? p.jp : p.en}</CardTitle>
					</CardHeader>
					<CardContent className="p-0">
					<button
					type="button"
					onClick={() => openLB(i)}
					className="block w-full text-left"
					aria-label={(lang === "ja" ? "拡大表示: " : "Open: ") + (lang === "ja" ? p.jp : p.en)}
					>
					<div className="aspect-[3/2] bg-neutral-100 overflow-hidden">
					<img src={p.src} alt={p.alt} className="h-full w-full object-cover" />
					</div>
					</button>
					<div className="p-4">
					<div className="text-sm text-neutral-600">{p.en}</div>
					<div className="mt-3 flex flex-wrap gap-3">
					<Link href="/#book" className="inline-flex">
					<Button className="rounded-xl">
					{lang === "ja" ? "Bookへ戻る" : "Back to Book"}
					<ArrowRight className="h-4 w-4 ml-1" />
					</Button>
					</Link>
					</div>
					</div>
					</CardContent>
					</Card>
		))}
		</div>
		
		{/* 2段目：4列（春夏秋冬） */}
		<div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
		{previews.slice(3).map((p, j) => {
					const i = 3 + j; // Lightbox用の実インデックス
					return (
						<Card key={p.src} className="rounded-2xl overflow-hidden shadow-lg">
						<CardHeader>
						<CardTitle className="text-base">{lang === "ja" ? p.jp : p.en}</CardTitle>
						</CardHeader>
						<CardContent className="p-0">
						<button
						type="button"
						onClick={() => openLB(i)}
						className="block w-full text-left"
						aria-label={(lang === "ja" ? "拡大表示: " : "Open: ") + (lang === "ja" ? p.jp : p.en)}
						>
						<div className="aspect-[3/2] bg-neutral-100 overflow-hidden">
						<img src={p.src} alt={p.alt} className="h-full w-full object-cover" />
						</div>
						</button>
						<div className="p-4">
						<div className="text-sm text-neutral-600">{p.en}</div>
						<div className="mt-3 flex flex-wrap gap-3">
						<Link href="/#book" className="inline-flex">
						<Button className="rounded-xl">
						{lang === "ja" ? "Bookへ戻る" : "Back to Book"}
						<ArrowRight className="h-4 w-4 ml-1" />
						</Button>
						</Link>
						</div>
						</div>
						</CardContent>
						</Card>
					);
		})}
		</div>

		
		<div className="mt-10 text-center">
		<Link href="/#book" className="inline-block">
		<Button variant="ghost" className="rounded-2xl">
		← {lang === "ja" ? "Bookセクションへ戻る" : "Back to Book Section"}
		</Button>
		</Link>
		</div>
		
		<div className="w-full h-px bg-neutral-200 my-10" />
		
		</main>
		
		{open && (
				<div
				className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
				role="dialog"
				aria-modal="true"
				onClick={(e) => {
						if (e.target === e.currentTarget) closeLB();
				}}
				>
				<button
				aria-label={lang === "ja" ? "閉じる" : "Close"}
				onClick={closeLB}
				className="absolute top-4 right-4 bg-white/10 text-white px-3 py-1 rounded-full"
				>
				×
				</button>
				<div className="max-w-5xl w-full">
				<div className="bg-black rounded-xl overflow-hidden">
				<img
				src={previews[idx].src}
				alt={previews[idx].alt}
				className="h-full w-full object-contain"
				/>
				</div>
				<div className="mt-3 px-3 py-2 bg-white/5 text-white/90 text-sm rounded-lg">
				{lang === "ja" ? previews[idx].jp : previews[idx].en}
				</div>
				<div className="mt-4 flex items-center justify-between">
				<Button variant="outline" onClick={prev} className="rounded-full">←</Button>
				<div className="text-white text-sm">{idx + 1} / {previews.length}</div>
				<Button variant="outline" onClick={next} className="rounded-full">→</Button>
				</div>
				</div>
				</div>
		)}
		</div>
	);
}
