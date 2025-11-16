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
	const [openDate, setOpenDate] = useState<string | null>(null);
	const toggleNews = (date: string) => {
		setOpenDate((prev) => (prev === date ? null : date));
	};
	
	const latestNews = [...news.items]
	.sort((a, b) => b.date.localeCompare(a.date))
	.slice(0, 4);
	
	return (
		<>
		<div className="mt-3 border border-neutral-200 rounded-2xl overflow-hidden text-sm">
		{latestNews.map((n, idx) => {
					const isOpen = openDate === n.date;
					const title = lang === "ja" ? n.title_ja : n.title_en;
					const place = lang === "ja" ? n.place_ja : n.place_en;
					const body = lang === "ja" ? n.body_ja : n.body_en;
					
					const rowBg = idx % 2 === 0 ? "bg-neutral-50" : "bg-white";
					
					return (
						<div key={n.date} className={rowBg}>
						{/* タイトル行 */}
						<button
						type="button"
						onClick={() => toggleNews(n.date)}
						className="w-full text-left"
						>
						<div className="flex items-center justify-between px-4 py-2.5">
						{/* 左エリア：日付・タイトル */}
						<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 min-w-0">
						
						{/* 日付（左固定） */}
						<div className="flex items-center text-neutral-600 text-[12px] flex-shrink-0">
						<Calendar className="h-3.5 w-3.5 mr-1" />
						{n.date}
						</div>
						
						{/* タイトル（改行しない／はみ出し時省略） */}
						<div className="font-semibold text-neutral-800 truncate">
						{title}
						</div>
						
						{/* 場所（あれば） */}
						{place && (
								<div className="hidden sm:flex items-center text-neutral-500 text-[12px] flex-shrink-0">
								<MapPin className="h-3.5 w-3.5 mr-1" />
								{place}
								</div>
						)}
						</div>
						
						{/* 右端の ▼ ボタン */}
						<ChevronDown
						className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
								isOpen ? "rotate-180" : ""
						}`}
						/>
						</div>
						</button>
						
						{/* 本文（開いているときだけ） */}
						{isOpen && (
								<div className="px-4 pb-3 pt-1 border-t border-neutral-200">
								<p className="text-[13px] leading-relaxed text-neutral-700 mt-1">
								{body}
								</p>
								</div>
						)}
						</div>
					);
		})}
		</div>
		
		<div className="w-full h-px bg-neutral-200 mt-8" />
		</>
	);
}
