// app/prints/page.tsx
import Image from "next/image";
import Link from "next/link";
import { PRINT_WORKS } from "@/data/prints";

export const metadata = {
	title: "Fine Art Prints | Masahiro Koseki",
	description:
	"Fine art photography prints by Masahiro Koseki – selected works from “Fascinated by Mountains and Nature”, available as high-quality prints.",
};

export default function PrintsPage() {
	return (
		<main className="min-h-screen bg-neutral-50">
		<section className="max-w-6xl mx-auto px-4 pt-6">
		<Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900 hover:underline">
		← Back to Home / ホームへ戻る
		</Link>
		</section>

		{/* Hero */}
		<section className="max-w-5xl mx-auto px-4 pt-8 pb-16 text-center">
		<p className="text-sm tracking-wide text-neutral-500 uppercase">
		Prints
		</p>
		
		{/* ▼ ロゴ表示 */}
		<div className="flex justify-center mb-0">
		<Image
		src="/images/forest-stream-logo.png"
		alt="Forest & Stream Photography"
		width={240}          // 好みで調整
		height={240}
		className="opacity-90"
		priority
		/>
		</div>
		{/* ▲ ロゴ表示ここまで */}

		<h1 className="mt-2 text-3xl md:text-4xl font-semibold text-neutral-900">
		Fine Art Prints
		</h1>
		<p className="mt-4 text-neutral-700 leading-relaxed">
		Selected works from my photo book{" "}
		<span className="italic">“Fascinated by Mountains and Nature”</span>{" "}
		are available as high-quality fine art prints.
		</p>
		<p className="mt-2 text-neutral-700 leading-relaxed">
		写真集『山と自然に魅せられて』から選んだ作品を、高品質なアートプリントとしてお届けします。<br />
		静かな渓流や森の光景を、お部屋の中でもゆっくりと眺めていただけたら嬉しく思います。
		</p>
		</section>
		
		{/* Works grid */}
		<section className="max-w-6xl mx-auto px-4 pb-16">
		<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4">
		{PRINT_WORKS.map((work) => (
					<article
					key={work.id}
					className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col max-w-xs mx-auto
					transform transition duration-200 ease-out
					hover:-translate-y-1 hover:shadow-lg hover:scale-[1.02]"
					>
					<div className="relative mt-3 aspect-[2/1]">
					<Image
					src={work.imageSrc}
					alt={`${work.titleEn} / ${work.titleJa}`}
					fill
					className="object-contain"
					sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
					/>
					</div>
					
					<div className="p-4 flex flex-col flex-1">
					{/* Titles */}
					<h2 className="font-semibold text-neutral-900 leading-tight">
					{work.titleEn}
					</h2>
					<p className="text-sm text-neutral-600">{work.titleJa}</p>
					
					{/* Location */}
					<p className="mt-2 text-xs text-neutral-500">
					{work.locationEn}
					<br />
					{work.locationJa}
					</p>
					
					{/* Descriptions */}
					<div className="mt-3 flex-1">
					<p className="text-sm text-neutral-700 leading-snug line-clamp-2">
					{work.descriptionEn}
					</p>
					<p className="mt-1 text-xs text-neutral-600 leading-snug line-clamp-3">
					{work.descriptionJa}
					</p>
					</div>
					
					{/* Button */}
					<div className="mt-4 pt-2 border-t border-neutral-100 flex justify-center">
					<Link
					href={work.shopifyUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium border border-neutral-800 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
					>
					View on Shopify
					</Link>
					</div>
					</div>
					</article>
		))}
		</div>
		</section>
		
		{/* Purchase Guide */}
		<section className="border-t border-neutral-200 bg-white">
		<div className="max-w-5xl mx-auto px-4 py-4">
		
		{/* ▼ ロゴ */}
		<div className="flex justify-center mb-0">
		<Image
		src="/images/forest-stream-logo.png"
		alt="Forest & Stream Photography"
		width={220}
		height={220}
		className="opacity-90"
		/>
		</div>
		{/* ▲ ロゴ */}

		<h2 className="text-xl font-semibold text-neutral-900">
		About the prints / プリントについて
		</h2>
		<p className="mt-3 text-sm text-neutral-700 leading-relaxed">
		Prints are produced on demand via a trusted print lab and shipped
		worldwide through my Shopify store. High-quality paper and inks are
		used to preserve the subtle tones of mountain light, streams, and
		forests.
		</p>
		<p className="mt-2 text-sm text-neutral-700 leading-relaxed">
		プリントは、信頼できるプリントラボでオンデマンド印刷され、
		Shopifyストアを通じて世界各地へお届けします。山の光や渓流の
		空気感が伝わるよう、発色と階調に優れた用紙・インクを使用しています。
		</p>
		
		<ul className="mt-4 text-sm text-neutral-700 space-y-1 list-disc pl-5">
		<li>High-quality fine art paper (e.g. matte / semi-gloss)</li>
		<li>Multiple sizes available depending on each work</li>
		<li>Secure payment and worldwide shipping via Shopify</li>
		<li>
		フレームは付属しません（作品に合わせて、お好みの額装をお楽しみください）
		</li>
		</ul>
		
		<div className="mt-6">
		<Link
		href="https://prints.masahiro-koseki.com"
		target="_blank"
		rel="noopener noreferrer"
		className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-neutral-800 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
		>
		Visit Shopify Store
		</Link>
		</div>
		</div>
		</section>
		
		{/* ▼ 下部のHomeリンク追加 */}
		<section className="max-w-6xl mx-auto px-4 py-8">
		<Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900 hover:underline">
		← Back to Home / ホームへ戻る
		</Link>
		</section>
		{/* ▲ Homeリンクここまで */}
		</main>
	);
}
