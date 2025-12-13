// src/lib/gtag.ts
export const GA_ID = "G-B3W4BL798N";

declare global {
	interface Window {
		gtag?: (...args: any[]) => void;
	}
}

export function pageview(url: string, params?: Record<string, any>) {
	if (!window.gtag) return;
	window.gtag("config", GA_ID, {
			page_location: url,
			...params,
	});
}

export function event(name: string, params?: Record<string, any>) {
	if (!window.gtag) return;
	window.gtag("event", name, params || {});
}

export function setUserProperties(props: Record<string, any>) {
	if (!window.gtag) return;
	window.gtag("set", "user_properties", props);
}
