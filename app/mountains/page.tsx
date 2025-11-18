import Image from "next/image";

const mountains = [
{
	id: "hayachine",
	nameJa: "早池峰山",
	nameEn: "Mt. Hayachine",
	height: "1,917 m",
	area: "岩手県 花巻市・遠野市",
	seasons: "春〜冬（高山植物・残雪・紅葉・樹氷）",
	image: "/images/mountains/hayachine.jpg", // ★実際の画像パスに変更してください
	descriptionJa:
	"北上山地の主峰で、日本百名山のひとつ。固有種を含む高山植物の宝庫として知られ、山頂からは北上山地と奥羽山脈の大展望が広がります。",
	descriptionEn:
	"The symbolic peak of the Kitakami Mountains and one of Japan’s 100 Famous Mountains. Mt. Hayachine is known for its unique alpine flowers and vast panoramic views from the summit.",
},
{
	id: "yakeishi",
	nameJa: "焼石岳",
	nameEn: "Mt. Yakeishi",
	height: "1,548 m",
	area: "岩手県 奥州市・秋田県 東成瀬村",
	seasons: "新緑〜初夏・紅葉・初冬",
	image: "/images/mountains/yakeishi-kaminuma.jpg", // ★実際の画像パスに変更してください
	descriptionJa:
	"湿原や池塘、高山植物が彩る山として知られ、とくに新緑と残雪が重なる初夏の風景が印象的。中沼周辺は静かな山上湿原の雰囲気を楽しめます。",
	descriptionEn:
	"Famous for its marshlands, ponds, and colorful alpine plants. Early summer offers beautiful contrasts of fresh green and lingering snow, especially around Nakanuma marsh.",
},
{
	id: "kurikoma",
	nameJa: "栗駒山",
	nameEn: "Mt. Kurikoma",
	height: "1,626 m",
	area: "宮城・岩手・秋田 三県境",
	seasons: "夏〜秋（紅葉の名所）",
	image: "/images/mountains/kurikoma-autumn.jpg", // ★実際の画像パスに変更してください
	descriptionJa:
	"東北屈指の紅葉の名山。広大な裾野に色づく草紅葉とブナ林が広がり、秋には山全体が燃えるような色彩に包まれます。",
	descriptionEn:
	"Renowned as one of Tohoku’s finest autumn foliage mountains, with vast slopes covered in colorful dwarf shrubs and beech forests.",
},
];

export default function MountainsPage() {
	return (
		<main className="min-h-screen bg-slate-950 text-slate-50">
		<div className="mx-auto max-w-6xl px-4 py-16">
		{/* ヘッダー */}
		<section className="mb-16">
		<p className="text-sm uppercase tracking-[0.2em] text-sky-300">
		Mountains &amp; Nature
		</p>
		<h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
		地元の山々の紹介
		</h1>
		<p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
		焼石岳、栗駒山、早池峰山――。
		中学時代の渓流釣りをきっかけに足を運ぶようになり、
		その稜線や沢、森の表情に魅せられてきました。
		このページでは、写真集に登場する山々の概要や特徴、季節ごとの魅力を紹介していきます。
		</p>
		</section>
		
		{/* エリアマップ（後で差し替えOK） */}
		<section className="mb-16 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:p-7">
		<div className="flex flex-col gap-6 md:flex-row md:items-center">
		<div className="md:w-2/3">
		<h2 className="text-xl font-semibold md:text-2xl">
		岩手・東北の山域エリア
		</h2>
		<p className="mt-4 text-sm leading-relaxed text-slate-200 md:text-base">
		ここで紹介する山々は、主に岩手県とその周辺に位置しています。
		北上山地の主峰・早池峰山、湿原と池塘が点在する焼石岳、
		紅葉の名所として知られる栗駒山など、いずれも四季折々に表情を変えながら、
		山と自然の魅力を見せてくれます。
		</p>
		<p className="mt-4 text-xs text-slate-400 md:text-sm">
		※ エリアマップやアクセス情報は、今後このセクションに追加していく予定です。
		</p>
		</div>
		<div className="md:w-1/3">
		<div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950/70">
		{/* ここに将来的に地図画像やイラストを入れる */}
		<div className="flex h-full items-center justify-center px-4 text-center text-xs text-slate-400">
		Area map / region illustration
		<br />
		（後で地図画像やイラストに差し替え）
		</div>
		</div>
		</div>
		</div>
		</section>
		
		{/* 山一覧 */}
		<section className="space-y-6">
		<div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
		<h2 className="text-xl font-semibold md:text-2xl">
		山一覧（登場する主な山々）
		</h2>
		<p className="text-xs text-slate-400 md:text-sm">
		※ ここから各山の個別ページ（詳細・写真ギャラリー）へリンクさせていきます。
		</p>
		</div>
		
		<div className="mt-4 grid gap-6 md:grid-cols-3">
		{mountains.map((mt) => (
					<article
					key={mt.id}
					className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60"
					>
					<div className="relative h-40 w-full overflow-hidden">
					<Image
					src={mt.image}
					alt={`${mt.nameJa} / ${mt.nameEn}`}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					/>
					</div>
					<div className="flex flex-1 flex-col p-4">
					<div className="text-xs uppercase tracking-[0.18em] text-sky-300">
					{mt.nameEn}
					</div>
					<h3 className="mt-1 text-lg font-semibold">{mt.nameJa}</h3>
					<dl className="mt-3 space-y-1 text-xs text-slate-300 md:text-sm">
					<div className="flex gap-2">
					<dt className="w-12 shrink-0 text-slate-400">標高</dt>
					<dd>{mt.height}</dd>
					</div>
					<div className="flex gap-2">
					<dt className="w-12 shrink-0 text-slate-400">エリア</dt>
					<dd>{mt.area}</dd>
					</div>
					<div className="flex gap-2">
					<dt className="w-12 shrink-0 text-slate-400">季節</dt>
					<dd>{mt.seasons}</dd>
					</div>
					</dl>
					<p className="mt-3 flex-1 text-xs leading-relaxed text-slate-200 md:text-sm">
					{mt.descriptionJa}
					</p>
					<p className="mt-2 text-[11px] leading-relaxed text-slate-400 md:text-xs">
					{mt.descriptionEn}
					</p>
					
					{/* 後で個別ページへのリンクに変更予定 */}
					{/* <Link href={`/mountains/${mt.id}`} className="mt-3 text-xs text-sky-300 hover:underline">
					詳細ページへ
				  </Link> */}
						</div>
						</article>
			))}
			</div>
			</section>
			</div>
			</main>
		);
	}
