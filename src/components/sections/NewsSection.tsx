// src/components/sections/NewsSection.tsx
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
	items: NewsItem[];
};

type NewsSectionProps = {
	lang: "ja" | "en";
	news: NewsTexts;
	newsDetail: string | null;
	newsLimit: number;
	onLoadMore: () => void;
	openNews: (date: string) => void;
	closeNews: () => void;
};

export default function NewsSection({
		lang,
		news,
		newsDetail,
		newsLimit,
		onLoadMore,
		openNews,
		closeNews,
}: NewsSectionProps) {
	const currentNews = newsDetail
	? news.items.find((it) => it.date === newsDetail) || null
	: null;
	
	// 一覧モード
	if (!newsDetail) {
		return (
			<>
			<div className="grid md:grid-cols-2 gap-6 mt-6">
			{news.items.slice(0, newsLimit).map((n, i) => (
						<Card key={i} className="rounded-2xl">
						<CardHeader>
						<CardTitle className="text-base flex items-center gap-2">
						<Calendar className="h-4 w-4" />{" "}
						{lang === "ja" ? n.title_ja : n.title_en}
						</CardTitle>
						</CardHeader>
						<CardContent>
						<div className="text-sm text-neutral-700">{n.date}</div>
						{(n.place_ja || n.place_en) && (
								<div className="text-sm text-neutral-700 flex items-center gap-2 mt-1">
								<MapPin className="h-4 w-4" />
								{lang === "ja" ? n.place_ja : n.place_en}
								</div>
						)}
						<p className="text-sm text-neutral-700 mt-3 line-clamp-3">
						{lang === "ja" ? n.body_ja : n.body_en}
						</p>
						<button
						onClick={() => openNews(n.date)}
						className="inline-flex items-center gap-1 text-sm underline underline-offset-4 mt-3"
						>
						More <ArrowRight className="h-4 w-4" />
						</button>
						</CardContent>
						</Card>
			))}
			</div>
			{newsLimit < news.items.length && (
					<div className="mt-6">
					<Button
					variant="outline"
					className="rounded-full"
					onClick={onLoadMore}
					>
					{lang === "ja" ? "もっと見る" : "Load more"}
					</Button>
					</div>
			)}
			</>
		);
	}
	
	// 詳細モード
	return (
		<div className="mt-6">
		{currentNews && (
				<>
				<h3 className="text-xl font-semibold">
				{lang === "ja" ? currentNews.title_ja : currentNews.title_en}
				</h3>
				<div className="text-sm text-neutral-700 mt-1">{currentNews.date}</div>
				{(currentNews.place_ja || currentNews.place_en) && (
						<div className="text-sm text-neutral-700 flex items-center gap-2 mt-1">
						<MapPin className="h-4 w-4" />
						{lang === "ja" ? currentNews.place_ja : currentNews.place_en}
						</div>
				)}
				<p className="mt-4 text-neutral-700 leading-relaxed">
				{lang === "ja" ? currentNews.body_ja : currentNews.body_en}
				</p>
				<div className="mt-8">
				<Button
				variant="outline"
				className="rounded-full"
				onClick={closeNews}
				>
				← {lang === "ja" ? "一覧へ戻る" : "Back to News"}
				</Button>
				</div>
				</>
		)}
		</div>
	);
}
