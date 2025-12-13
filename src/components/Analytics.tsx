"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview, setUserProperties } from "@/lib/gtag";

type Props = {
	site: "photo" | "books";
	lang: "ja" | "en";
};

export default function Analytics({ site, lang }: Props) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	
	useEffect(() => {
			// ① ユーザープロパティ（分析で超便利）
			setUserProperties({ site, lang });
			
			// ② ページビュー（SPA遷移含めて確実に）
			const qs = searchParams?.toString();
			const url = `${window.location.origin}${pathname}${qs ? `?${qs}` : ""}`;
			pageview(url, { site, lang });
	}, [pathname, searchParams, site, lang]);
	
	return null;
}
