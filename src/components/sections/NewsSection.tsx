// src/components/sections/NewsSection.tsx
"use client";

import { useState } from "react";
import { Calendar, MapPin, ChevronDown } from "lucide-react";

type NewsItem = {
	date: string;
	title_ja: string;
	title_en: string;
	place_ja?: string;
	place_en?: string;
	body_ja: string;
	body_en: string;
};

type NewsTexts = {
	title: string;
	items: readonly NewsItem[];
};

type NewsSectionProps = {
	lang: "ja" | "en";
	news: NewsTexts;
};

export default function NewsSection({ lang, news }: NewsSectionProps) {
	// 開いているニュース（日付で識別）
	const [openDate, setOpenDate] = useState<string | null>(null);
	
	const toggleNews = (date: string) => {
		setOpenDate((prev) => (prev === date ? null : date));
	};
	
	// 最新4件に絞る（新しい順）
	const latestNews = [...news.items]
	.sort((a, b) => b.date.localeCompare(a.date))
	.slice(0, 4);
	
	return (
		<>
		{/* 一覧表風リスト：外枠＋ストライプ行 */}
		<div className="mt-4 border border-neutral-200 rounded-2xl overflow-hidden text-sm">
		{latestNews.map((n, idx) => {
					const isOpen = openDate === n.date;
					const title = lang === "ja" ? n.title_ja : n.title_en;
					const place = lang === "ja" ? n.place_ja : n.place_en;
					const body = lang === "ja" ? n.body_ja : n.body_en;
					
					const rowBg = idx % 2 === 0 ? "bg-neutral-50" : "bg-white";
					
					return (
						<div key={n.date} className={rowBg}>
						{/* 1行目：タイトル行（クリックで開閉） */}
						<button
						type="button"
						onClick={() => toggleNews(n.date)}
						className="w-full text-left"
						>
						<div className="flex items-center justify-between gap-4 px-4 py-3">
						<div className="min-w-0">
						{/* タイトル行 */}
						<div className="font-semibold flex items-center gap-2">
						<Calendar className="h-4 w-4 flex-shrink-0" />
						<span className="truncate">{title}</span>
						</div>
						{/* 日付・場所など */}
						<div className="mt-1 text-[11px] text-neutral-600 flex flex-wrap items-center gap-x-3 gap-y-1">
						<span>{n.date}</span>
						{place && (
								<span className="inline-flex items-center gap-1">
								<MapPin className="h-3 w-3" />
								{place}
								</span>
						)}
						</div>
						</div>
						
						{/* ▼ アイコン（開閉） */}
						<ChevronDown
						className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
								isOpen ? "rotate-180" : ""
						}`}
						/>
						</div>
						</button>
						
						{/* 2行目：本文（開いているときだけ表示） */}
						{isOpen && (
								<div className="px-4 pb-4 pt-1 border-t border-neutral-200/70">
								<p className="mt-1 section-body text-neutral-700">
								{body}
								</p>
								</div>
						)}
						</div>
					);
		})}
		</div>
		
		{/* セクションの締めの区切り線（他セクションと統一） */}
		<div className="w-full h-px bg-neutral-200 mt-8 mb-0" />
		</>
	);
}
