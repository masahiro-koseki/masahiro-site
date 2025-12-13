"use client";

import Link from "next/link";
import { event } from "@/lib/gtag";

type Props = {
	href: string;
	className?: string;
	children: React.ReactNode;
	payload: Record<string, unknown>;
};

export default function ShopifyClickLink({ href, className, children, payload }: Props) {
	return (
		<Link
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className={className}
		onClick={() => event("shopify_click", { link_url: href, ...payload })}
		>
		{children}
		</Link>
	);
}
