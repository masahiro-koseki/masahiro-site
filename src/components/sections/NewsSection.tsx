// src/components/sections/NewsSection.tsx
import { useState } from "react";
import { Calendar, MapPin, ChevronDown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
	
	// 最新4件に絞る（→ページ全体がすっきりする）
	const latestNews = [...news.items]
	.sort((a, b) => b.date.localeCompare(a.date))
	.slice(0, 4);
	
	return (
		<>
		<div className="mt-4 space-y-4">
		{latestNews.map((n) => {
					const isOpen = openDate === n.date;
					const title = lang === "ja" ? n.title_ja : n.title_en;
					const place = lang === "ja" ? n.place_ja : n.place_en;
					const body = lang === "ja" ? n.body_ja : n.body_en;
					
					return (
						<Card key={n.date} className="rounded-2xl shadow-sm">
						{/* === タイトル行（全体がボタン） === */}
						<button
						type="button"
						onClick={() => toggleNews(n.date)}
						className="w-full text-left"
						>
						<CardHeader className="flex flex-row items-center justify-between gap-4 py-4">
						<div>
						{/* 見出しを控えめに */}
						<CardTitle className="text-base font-semibold flex items-center gap-2">
						<Calendar className="h-4 w-4" />
						{title}
						</CardTitle>
						
						{/* 日付・場所 */}
						<div className="mt-1 text-xs text-neutral-600 flex flex-wrap items-center gap-x-3 gap-y-1">
						<span>{n.date}</span>
						{place && (
								<span className="inline-flex items-center gap-1">
								<MapPin className="h-3 w-3" />
								{place}
								</span>
						)}
						</div>
						</div>
						
						{/* ▼ アイコン（回転） */}
						<ChevronDown
						className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
								isOpen ? "rotate-180" : ""
						}`}
						/>
						</CardHeader>
						</button>
						
						{/* === 本文（トグル） === */}
						{isOpen && (
								<CardContent className="pb-4">
								<p className="mt-1 section-body text-neutral-700">
								{body}
								</p>
								</CardContent>
						)}
						</Card>
					);
		})}
		</div>
		
		{/* セクションの締めの区切り線（他セクションと統一） */}
		<div className="w-full h-px bg-neutral-200 mt-8 mb-0" />
		</>
	);
}
