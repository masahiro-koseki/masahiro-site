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
	// どのニュースが開いているか（日付で管理）
	const [openDate, setOpenDate] = useState<string | null>(null);
	
	const toggleNews = (date: string) => {
		setOpenDate((prev) => (prev === date ? null : date));
	};
	
	// 新しい順にソートして最新4件を取得
	const latestNews = [...news.items]
	.sort((a, b) => b.date.localeCompare(a.date))
	.slice(0, 4);
	
	return (
		<div className="mt-6 space-y-4">
		{latestNews.map((n) => {
					const isOpen = openDate === n.date;
					const title = lang === "ja" ? n.title_ja : n.title_en;
					const place = lang === "ja" ? n.place_ja : n.place_en;
					const body = lang === "ja" ? n.body_ja : n.body_en;
					
					return (
						<Card key={n.date} className="rounded-2xl">
						{/* タイトル部分全体をクリック可能に */}
						<button
						type="button"
						onClick={() => toggleNews(n.date)}
						className="w-full text-left"
						>
						<CardHeader className="flex flex-row items-center justify-between gap-4">
						<div>
						<CardTitle className="text-base flex items-center gap-2">
						<Calendar className="h-4 w-4" />
						{title}
						</CardTitle>
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
						<ChevronDown
						className={`h-4 w-4 flex-shrink-0 transition-transform ${
								isOpen ? "rotate-180" : ""
						}`}
						/>
						</CardHeader>
						</button>
						
						{/* トグルで表示/非表示になる本文 */}
						{isOpen && (
								<CardContent>
								<p className="mt-1 text-sm leading-relaxed text-neutral-700">
								{body}
								</p>
								</CardContent>
						)}
						</Card>
					);
		})}
		</div>
	);
}
