// components/sections/HeroSection.tsx
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Camera } from "lucide-react";

type HeroTexts = {
	title: string;
	subtitle: string;
	cta1: string;
	cta2: string;
};

type HeroSectionProps = {
	texts: HeroTexts;
	scrollTo: (id: string) => void;
};

export default function HeroSection({ texts, scrollTo }: HeroSectionProps) {
	const hero = useMemo(
		() => ({
				srcs: [
				"/images/hero_tsutsuji_1800.webp",
				"/images/hero_alpine.webp",
				"/images/hero_streams.webp",
				"/images/hero_woodlands.webp",
				],
				alts: [
				"Azalea hillside in bloom at spring dawn",
				"Alpine slope at sunrise",
				"Mossy mountain stream",
				"Old beech tree in fresh green",
				],
		}),
		[]
	);
	
	const positions = useMemo(
		() => ["center 40%", "center 50%", "center 50%", "center 60%"],
		[]
	);
	
	const [index, setIndex] = useState(0);
	
	useEffect(() => {
			const id = setInterval(() => {
					setIndex((i) => (i + 1) % hero.srcs.length);
			}, 6000);
			return () => clearInterval(id);
	}, [hero.srcs.length]);

	const prev = () =>
	setIndex((i) => (i - 1 + hero.srcs.length) % hero.srcs.length);
	const next = () => setIndex((i) => (i + 1) % hero.srcs.length);
	
	return (
		<div className="grid md:grid-cols-2 gap-8 items-center">
		{/* 左側：タイトル＋テキスト＋ボタン */}
		<div>
		<motion.h1
		initial={{ opacity: 0, y: 8 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6 }}
		className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-md"
		>
		{texts.title}
		</motion.h1>
		<p className="mt-4 text-base sm:text-lg text-neutral-600">
		{texts.subtitle}
		</p>
		<div className="mt-6 flex gap-3">
		<Button className="rounded-2xl" onClick={() => scrollTo("book")}>
		<BookOpen className="h-4 w-4 mr-2" />
		{texts.cta1}
		</Button>
		<Button
		variant="outline"
		className="rounded-2xl"
		onClick={() => scrollTo("portfolio")}
		>
		<Camera className="h-4 w-4 mr-2" />
		{texts.cta2}
		</Button>
		</div>
		</div>
		
		{/* 右側：ヒーロー画像スライダー */}
		<motion.div
		initial={{ opacity: 0, scale: 0.98 }}
		whileInView={{ opacity: 1, scale: 1 }}
		viewport={{ once: true }}
		transition={{ duration: 0.6 }}
		className="relative"
		>
		<div className="aspect-[3/2] w-full rounded-2xl overflow-hidden shadow-xl bg-neutral-100 relative">
		<AnimatePresence mode="wait">
		<motion.img
		key={hero.srcs[index]}
		src={hero.srcs[index]}
		alt={hero.alts[index]}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.8 }}
		className="absolute inset-0 h-full w-full object-cover"
		style={{ objectPosition: positions[index] }}
		/>
		</AnimatePresence>
		
		{/* 下側にうっすらグラデーション */}
		<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />
		
		{/* 左右の切り替えボタン */}
		<div className="absolute inset-0 flex items-center justify-between px-3">
		<button
		type="button"
		onClick={prev}
		className="bg-black/30 text-white rounded-full px-2 py-1 text-lg"
		>
		←
		</button>
		<button
		type="button"
		onClick={next}
		className="bg-black/30 text-white rounded-full px-2 py-1 text-lg"
		>
		→
		</button>
		</div>
		</div>
		</motion.div>
		</div>
	);
}
