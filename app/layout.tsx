
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"), // 本番は https://your-domain.example に変更
	title: "Masahiro Koseki | Fascinated by Mountains & Nature",
	description: "東北の山々と渓流の光を追う、写真家・小関政弘の作品と写真集。",
	openGraph: {
		type: "website",
		title: "Masahiro Koseki | Fascinated by Mountains & Nature",
		description: "東北の山々と渓流の光を追う、写真家・小関政弘の作品と写真集。",
		images: ["/og-image.jpg"], // metadataBase を付けたので相対パスでOK
	},
	icons: {
		icon: [
		{ url: "/favicon.ico" },
		{ url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Masahiro Koseki | Fascinated by Mountains & Nature",
		description: "東北の山々と渓流の光を追う、写真家・小関政弘の作品と写真集。",
		images: ["/og-image.jpg"],
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
