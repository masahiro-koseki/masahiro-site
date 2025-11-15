// src/components/sections/AboutSection.tsx
import { MapPin, Camera, Globe, Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type AboutTexts = {
	title: string;
	bio: string;
	location: string;
	focus: string;
	links: string;
};

type AboutSectionProps = {
	lang: "ja" | "en";
	about: AboutTexts;
};

export default function AboutSection({ lang, about }: AboutSectionProps) {
	return (
		<div className="mt-6">
		{/* 紹介文（プロフィール画像なしで横幅いっぱい） */}
		<p className="text-neutral-700 leading-relaxed">
		{about.bio}
		</p>
		
		{/* 場所・撮影対象・リンク */}
		<ul className="mt-4 text-sm text-neutral-700 space-y-1">
		<li className="flex items-center gap-2">
		<MapPin className="h-4 w-4" /> {about.location}
		</li>
		<li className="flex items-center gap-2">
		<Camera className="h-4 w-4" /> {about.focus}
		</li>
		</ul>
		
		{/* 略歴・掲載など：2列カード */}
		<div className="mt-6 grid sm:grid-cols-2 gap-4">
		<Card className="rounded-2xl h-full">
		<CardHeader>
		<CardTitle className="text-base flex items-center gap-2">
		<Calendar className="h-4 w-4" />
		{lang === "ja" ? "略歴" : "Timeline"}
		</CardTitle>
		</CardHeader>
		<CardContent>
		<ul className="text-sm text-neutral-700 space-y-2">
		<li>
		1962 –{" "}
		{lang === "ja"
			? "岩手県金ケ崎町生まれ"
		: "Born in Kanegasaki, Iwate, Japan"}
		</li>
		<li>
		1980s –{" "}
		{lang === "ja"
			? "山岳・渓流の撮影を開始"
		: "Began photographing mountains and streams"}
		</li>
		<li>
		2025 –{" "}
		{lang === "ja"
			? "写真集「山と自然に魅せられて」制作"
		: 'Working on the photo book "Fascinated by Mountains & Nature"'}
		</li>
		</ul>
		</CardContent>
		</Card>
		
		<Card className="rounded-2xl h-full">
		<CardHeader>
		<CardTitle className="text-base">
		{lang === "ja" ? "掲載・活動" : "Features & Activities"}
		</CardTitle>
		</CardHeader>
		<CardContent>
		<ul className="text-sm text-neutral-700 space-y-2">
		<li>
		{lang === "ja"
			? "写真集・Webサイトで岩手の山や渓流の魅力を発信"
		: "Sharing the beauty of Iwate’s mountains and streams through photo books and the web"}
		</li>
		</ul>
		</CardContent>
		</Card>
		</div>
		</div>
	);
}
