// src/components/sections/PortfolioSection.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type PortfolioCategory = {
	name: string;
	note: string;
};

type PortfolioSectionProps = {
	lang: "ja" | "en";
	desc: string;
	categories: readonly PortfolioCategory[];
	openGallery: (catIndex: number, imageIndex?: number) => void;
};

const PORTFOLIO_STAGGER = 0.04;
const PORTFOLIO_DUR = 0.35;

const THUMB_SRCS = [
"/images/cat_alpine.webp",
"/images/cat_streams.webp",
"/images/cat_woodlands.webp",
];

const THUMB_ALTS = [
"Alpine slope at sunrise",
"Mossy mountain stream",
"Old beech tree in fresh green",
];

export default function PortfolioSection({
		lang,
		desc,
		categories,
		openGallery,
}: PortfolioSectionProps) {
	return (
		<>
		{/* 説明文：section-body を適用して全体と統一 */}
		<p className="mt-3 text-neutral-600 section-body max-w-3xl">
		{desc}
		</p>
		
		{/* カテゴリーカード */}
		<div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
		{categories.map((c, i) => (
					<motion.div
					key={i}
					initial={{ opacity: 0, y: 8 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{
							duration: PORTFOLIO_DUR,
							ease: "easeOut",
							delay: i * PORTFOLIO_STAGGER,
					}}
					>
					<Card className="rounded-2xl overflow-hidden shadow-lg">
					<CardContent className="p-0">
					<div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
					<img
					src={THUMB_SRCS[i] ?? THUMB_SRCS[0]}
					alt={THUMB_ALTS[i] ?? THUMB_ALTS[0]}
					className="h-full w-full object-cover"
					/>
					</div>
					<div className="p-4">
					<div className="font-semibold text-sm mb-1">
					{c.name}
					</div>
					<div className="text-sm text-neutral-600">
					{c.note}
					</div>
					<div className="mt-3">
					<Button
					variant="outline"
					className="w-full rounded-xl"
					onClick={() => openGallery(i, 0)}
					>
					{lang === "ja" ? "ギャラリーを見る" : "Open Gallery"}
					</Button>
					</div>
					</div>
					</CardContent>
					</Card>
					</motion.div>
		))}
		</div>
		
		{/* 下の区切り線：下方向の余白をやや抑える */}
		<div className="w-full h-px bg-neutral-200 mt-8 mb-0" />
		</>
	);
}
