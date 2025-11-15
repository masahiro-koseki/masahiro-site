
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://masahiro-site.vercel.app"),
	title: {
		default: "山と自然に魅せられて | Masahiro Koseki Photography",
		template: "%s | Masahiro Koseki Photography",
	},
	description:
	"岩手の山々、渓流、森の静寂。焼石岳・栗駒山・早池峰山など、地元の自然に魅せられて撮り続けた風景写真をまとめた写真集サイトです。",
	keywords: [
	"山と自然に魅せられて",
	"Masahiro Koseki",
	"風景写真",
	"岩手の山",
	"焼石岳",
	"栗駒山",
	"早池峰山",
	"渓流",
	"森",
	"写真集",
	],
	authors: [{ name: "Masahiro Koseki" }],
	creator: "Masahiro Koseki",
	openGraph: {
		type: "website",
		locale: "ja_JP",
		url: "/",
		siteName: "山と自然に魅せられて | Masahiro Koseki Photography",
		title: "山と自然に魅せられて | Masahiro Koseki Photography",
		description:
		"岩手の山岳風景と渓流、森の静けさをテーマにした写真集「山と自然に魅せられて」の公式サイト。",
		images: [
		{
			url: "/images/ogp-main.jpg",
			width: 1200,
			height: 630,
			alt: "山と自然に魅せられて | Masahiro Koseki Photography",
		},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "山と自然に魅せられて | Masahiro Koseki Photography",
		description:
		"焼石岳、栗駒山、早池峰山――地元の山々と渓流を歩きながら撮り続けた風景写真集の紹介サイト。",
		images: ["/images/ogp-main.jpg"],
	},
	alternates: {
		canonical: "/",
	},
};

export default function RootLayout({
		children,
	}: {
		children: React.ReactNode;
}) {
	return (
		<html lang="ja">
		<body className="antialiased bg-white text-neutral-900">
		{children}
		</body>
		</html>
	);
}
