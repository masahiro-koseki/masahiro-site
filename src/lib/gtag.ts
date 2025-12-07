// src/lib/gtag.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// GA ID が設定されているか確認
export const existsGaId = GA_ID !== "";

// window.gtag の型を TypeScript に教える
declare global {
	interface Window {
		gtag: (...args: any[]) => void;
	}
}

// ページビュー送信用
export const pageview = (url: string) => {
	if (!existsGaId) return;
	if (typeof window === "undefined") return;
	if (!window.gtag) return;
	
	window.gtag("config", GA_ID, {
			page_path: url,
	});
};
