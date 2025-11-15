// app/page.tsx rewritten version placeholder
// full code rewrite will be placed next turn after structure scaffold confirmation
"use client";
import React, { useMemo, useState, useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import BookSection from "@/components/sections/BookSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import AboutSection from "@/components/sections/AboutSection";
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GalleryVerticalEnd, BookOpen, Camera, Mail, ExternalLink, ArrowRight, MapPin, Calendar, Globe } from "lucide-react";
import Link from "next/link";

// --- Amazon Links ---
const AMAZON_JP = "https://www.amazon.co.jp/dp/B0G1CNPJ1L";
const AMAZON_EN = "https://www.amazon.com/Fascinated-Mountains-Nature-Landscape-Photography/dp/B0G1GZVWKW?ref_=ast_author_dp&th=1&psc=1";

const LANG_KEY = "mk_lang";
type Lang = "ja" | "en";

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => {
  const safeId = typeof id === "string" ? id : "";
  const extra = typeof className === "string" ? className : "";
  

  return (
    <section id={safeId} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-1 ${extra}`}>
      {children}
    </section>
  );
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
  >
    {children}
  </motion.h2>
);

const Lightbox = ({
		src,
		alt,
		caption,
		onPrev,
		onNext,
		onClose,
		index,
		total,
	}: {
		src: string;
		alt: string;
		caption: string;
		onPrev: () => void;
		onNext: () => void;
		onClose: () => void;
		index: number;
		total: number;
}) => {
	if (!src) return null;
	
	return (
		<div
		className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex"
		role="dialog"
		aria-modal="true"
		onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
		}}
		style={{ paddingBottom: "max(24px, env(safe-area-inset-bottom, 24px))" }}
		>
		<button
		aria-label="Close"
		onClick={onClose}
		className="absolute top-4 right-4 sm:top-5 sm:right-5 text-white/90 bg-white/10 hover:bg-white/20 rounded-full px-3 py-1"
		>
		×
		</button>
		
		<div
		className="m-auto w-full max-w-5xl"
		onClick={(e) => e.stopPropagation()}
		>
		<div className="w-full rounded-xl overflow-hidden bg-black grid place-items-center">
		<img
		src={src}
		alt={alt || "image"}
		className="max-h-[calc(100vh-260px)] w-auto h-auto object-contain"
		draggable={false}
		/>
		</div>
		
		<div className="mt-3 px-3 py-2 rounded-lg bg-white/10 text-white/90 text-sm leading-relaxed">
		{caption}
		</div>
		
		<div className="mt-4 flex items-center justify-between gap-3 text-white">
		<button
		onClick={onPrev}
		className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20"
		>
		←
		</button>
		<div className="text-sm select-none">
		{index + 1} / {total}
		</div>
		<button
		onClick={onNext}
		className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20"
		>
		→
		</button>
		</div>
		</div>
		</div>
	);
};


export default function Page() {
  const [lang, setLang] = useState<Lang>("ja");
  //const [lang, setLang] = useState<"ja" | "en">("ja");
  const [lbOpen, setLbOpen] = useState(false);
  const [lbCat, setLbCat] = useState(0);
  const [lbIndex, setLbIndex] = useState(0);
	
	useEffect(() => {
			if (!lbOpen) return;
			const onKey = (e: KeyboardEvent) => {
				if (e.key === "Escape") closeGallery();
				if (e.key === "ArrowRight") nextImg();
				if (e.key === "ArrowLeft")  prevImg();
			};
			window.addEventListener("keydown", onKey);
			const root = document.documentElement;
			const prev = root.style.overflow;
			root.style.overflow = "hidden";
			return () => {
				window.removeEventListener("keydown", onKey);
				root.style.overflow = prev;
			};
	}, [lbOpen]);
	
	// マウント時に localStorage から復元
	useEffect(() => {
			try {
				const saved = localStorage.getItem(LANG_KEY) as Lang | null;
				if (saved === "ja" || saved === "en") setLang(saved);
			} catch {}
	}, []);
	
	const changeLang = (l: Lang) => {
		setLang(l);
		try { localStorage.setItem(LANG_KEY, l); } catch {}
	};
	// 既存の切替ボタンを setLang から changeLang に置換
	// 例：ヘッダーのトグル
	<Button
	variant="outline"
	className="rounded-full"
	onClick={() => changeLang(lang === "ja" ? "en" : "ja")}
	>
	{lang === "ja" ? "EN" : "JP"}
	</Button>

	const galleryMeta = [
	// 0) Alpine
	{
		alts: [
		"Summer ridgeline with sea of clouds, Hayachine",
		"Ridge at dawn, Hayachine (Iwate / Hayachine Range)",
		"Autumn moor in Minamihonnai Highland with distant ranges",
		"Frosty morning light facing Kurikoma."
		],
		jp: [
		"雲海の向こうへほどける、早池峰の夏稜線。",
		"早池峰の稜線、朝焼けが静かに満ちる。",
		"秋の湿原、遠景の稜線が息をひそめる。",
		"霜光にふれる朝、栗駒を望む。"
		],
		en: [
		"A summer ridgeline of Hayachine fading beyond a sea of clouds.",
		"Dawn seeps over Hayachine’s ridge.",
		"Autumn moor, distant ridges holding their breath.",
		"Frost-bright morning facing Kurikoma."
		]
	},
	
	// 1) Streams  ← 1枚目を新キャプションに更新
	{
		alts: [
		"A mountain stream framed by fresh green leaves, with late snow and wild cherry blossoms along the bank.",
		"Mossy boulders with silky flow in spring forest",
		"Overhanging leaves above a clear rushing stream",
		"Moss-covered fallen log across a quiet flow"
		],
		jp: [
		"残雪を抱く岸にヤマザクラが咲き、流れは萌黄色の森を渡る。",
		"緑に包まれた岩肌を水がさらう。",
		"葉影の下を、澄んだ沢が走る。",
		"倒木の苔が流れに溶けこむ。"
		],
		en: [
		"Snow still lingers as cherry blossoms bloom above a rushing spring stream.",
		"Water sweeps gently across green stones.",
		"A clear stream runs beneath the shade of leaves.",
		"Moss on the fallen tree blends into the flowing water."
		]
	},
	
	// 2) Woodlands
	{
		alts: [
		"Snowy cedar grove in winter wind",
		"Moss and vine on weathered trunk, humid forest",
		"Summer fog in subalpine forest",
		"Old beech overlooking a ravine, dawn light"
		],
		jp: [
		"雪の杉林、風だけが行き来する。",
		"湿りを帯びた樹皮に、苔が静かに息づく。",
		"夏霧の森、足音まで吸いこまれる。",
		"朝の光、古いブナの肌が目を覚ます。"
		],
		en: [
		"A quiet cedar plantation covered by fresh winter snow.",
		"Moss spreads across the weathered bark within a humid summer forest.",
		"A mountain forest wrapped in dense midsummer fog.",
		"Early morning sunlight reveals the character of an old beech tree."
		]
	}
	];
  
const gallerySources = [
  [
    "/images/alpine_01.webp",
    "/images/alpine_02.webp",
    "/images/alpine_03.webp",
    "/images/alpine_04.webp"
  ],
  [
    "/images/stream_01.webp",
    "/images/stream_02.webp",
    "/images/stream_03.webp",
    "/images/stream_04.webp"
  ],
  [
    "/images/woodland_04.webp",
    "/images/woodland_02.webp",
    "/images/woodland_03.webp",
    "/images/woodland_01.webp"
  ],
];
	
	// --- Highlights (Spring / Summer / Autumn / Winter) ---
	const HIGHLIGHTS = [
	{
		key: "spring",
		src: "/images/highlight_spring.webp",
		alt: "Spring: Fresh green stream in forest",
		jp: "春 ― 芽吹きの沢",
		en: "Spring — Awakening Stream",
		desc_ja: "雪解け水が流れ、森が芽吹く。生命が再び動き出す季節。",
		desc_en: "Snowmelt flows through the forest — a quiet awakening of life.",
	},
	{
		key: "summer",
		src: "/images/highlight_summer.webp",
		alt: "Summer: Sea of clouds at dawn from ridge",
		jp: "夏 ― 雲海の夜明け",
		en: "Summer — Dawn above a Sea of Clouds",
		desc_ja: "山頂からの夜明け、雲海が静かに広がり、光が世界を染める。",
		desc_en: "At dawn, a sea of clouds stretches below — morning light paints the world anew.",
	},
	{
		key: "autumn",
		src: "/images/highlight_autumn.webp",
		alt: "Autumn: Quiet pond reflecting foliage",
		jp: "秋 ― 静かな映り込み",
		en: "Autumn — Mirror of the Woods",
		desc_ja: "風も止まり、水面に映る紅葉。静寂の中に季節の深まりを感じる。",
		desc_en: "Still air, mirrored leaves — autumn deepens in serene reflection.",
	},
	{
		key: "winter",
		src: "/images/highlight_winter.webp",
		alt: "Winter: Rimed trees under blue sky",
		jp: "冬 ― 霧氷の樹々",
		en: "Winter — Rime under Blue Sky",
		desc_ja: "凍てつく朝、霧氷が陽光に輝く。静けさの中の白い輝き。",
		desc_en: "Frozen morning, branches shimmering with frost — the silence glows white.",
	},
	] as const;
	
const NEWS_ITEMS = [
  {
    date: "2025-11-05",
    title_ja: "写真集制作進行",
    title_en: "Photo Book Production Progress",
    place: "Online",
    body_ja:
      "この日はレイアウト検討と、写真セレクトの再精査を進めました。制作ノートの整理も同時に行い、ページ構成の方向性が少しずつ固まってきています。",
    body_en:
      "This day was spent refining layout directions and reviewing image selections again. Production notes are gradually forming a more concrete page structure."
  },
  {
    date: "2025-10-25",
    title_ja: "写真集制作進行",
    title_en: "Photo Book Production Progress",
    place: "Online",
    body_ja:
      "候補写真の入れ替えと順序の再検討を実施。静けさと流れが両立するよう、各章の冒頭と終わりのバランスを微調整しました。",
    body_en:
      "Reworked candidate images and their order. Fine-tuned chapter openings and endings to balance quietness and flow."
  },
  {
    date: "2025-09-30",
    title_ja: "写真集制作進行",
    title_en: "Photo Book Production Progress",
    place: "Online",
    body_ja:
      "試作PDFで通読チェック。トーンの揺れを抑えるため、一部写真の現像パラメータを小さく調整しました。",
    body_en:
      "Read-through check with a draft PDF. Made small adjustments to development parameters to keep tonal consistency."
  },
  {
    date: "2025-06-06",
    title_ja: "写真集制作進行",
    title_en: "Photo Book Production Progress",
    place: "Online",
    body_ja:
      "収録範囲を検討。焼石岳・栗駒・早池峰の比率を見直し、各章のテーマを再定義しました。",
    body_en:
      "Reviewed coverage scope. Rebalanced Yakeishidake/Kurikoma/Hayachine and redefined the themes for each chapter."
  }
] as const;

  const t = useMemo(
    () =>
      ({
        ja: {
          nav: { home: "ホーム", book: "写真集", portfolio: "ポートフォリオ", about: "プロフィール", news: "お知らせ", contact: "お問い合わせ" },
					hero: { title: "山と自然に魅せられて", subtitle: "岩手・東北の山と四季を写した日本の自然風景写真。", cta1: "写真集を見る", cta2: "作品をみる" },
          book: {
            lead: "写真集『山と自然に魅せられて』",
            desc: "焼石岳、栗駒山、早池峰山――地元の山と沢で出会った光景を、静けさと臨場感を大切に編み上げた一冊。",
            specs: ["判型：210×210mm / Kindle版", "ページ数：およそ140ページ", "言語：日本語・英語併記"],
			buttons: { preview: "プレビュー", buy: "Amazonで買う" },
          },
          portfolio: {
            lead: "ポートフォリオ",
            desc: "山岳風景、渓流、樹木、湿原、厳冬の森など、テーマ別に作品を厳選。",
            categories: [
						{ name: "山岳・夜明け", note: "焼石岳・早池峰など" },
						{ name: "渓流・沢音", note: "沢・湿原・湖沼" },
						{ name: "森・樹影", note: "ブナ林・杉美林" },
            ]
          },
			about: {
						title: "プロフィール",
						bio: "岩手県の山々と渓流に魅せられ、四季折々の自然を撮り続ける写真家。中学時代の渓流釣りをきっかけに自然と深く関わり、17歳頃から栗駒山、焼石岳、早池峰山など地元の山へ足を運ぶようになる。朝焼けの稜線や静かな渓谷の佇まいに心を奪われ、「この瞬間を残したい」という思いから写真撮影を始める。山岳風景から渓流、樹木、湿原の息づかいまで、自然そのものが持つ“静けさの美しさ”を丁寧に写し取ることを大切にしている。岩手を中心とした東北の風景と向き合いながら、今も変わらずフィールドに立ち続けている。",
						location: "拠点：岩手県（日本）",
						focus: "主なテーマ：山岳・渓流・森の光",
						links: "詳しいプロフィール"
					},
          news: {
            title: "お知らせ",
              items: NEWS_ITEMS
          },
          contact: { title: "お問い合わせ", desc: "撮影のご依頼／作品使用／展示のご相談など、お気軽にお知らせください。", name: "お名前", email: "メールアドレス", message: "メッセージ", send: "送信" },
          footer: { rights: "© Masahiro Koseki", lang: "言語", jp: "日本語", en: "English" }
        },
        en: {
          nav: { home: "Home", book: "Photo Book", portfolio: "Portfolio", about: "About", news: "News", contact: "Contact" },
					hero: { title: "Fascinated by Mountains and Nature", subtitle: "A Landscape Photography Journey through the Mountains and Four Seasons of Northern Japan.", cta1: "View Photo Book", cta2: "View Portfolio" },
          book: {
						lead: "Photo Book ｢ Fascinated by Mountains and Nature 」",
            desc: "Yakeishidake, Kurikomayama, and Hayachine—quiet moments gathered from home mountains and streams.",
            specs: ["Format: 210×210mm / Kindle Paperback", "~140 pages", "Bilingual: Japanese & English"],
						buttons: { preview: "Preview", buy: "Buy on Amazon", },
          },
          portfolio: {
            lead: "Portfolio",
            desc: "Curated works by theme: alpine dawns, streams, woodlands, marshes.",
						categories: [
						{ name: "Alpine / Dawn", note: "Yakeishidake, Hayachine" },
						{ name: "Streams & Waterside", note: "Streams, marshes, ponds" },
						{ name: "Woodlands", note: "Beech & Cedar" },
            ]
          },
			about: {
						title: "About",
						bio: "A photographer captivated by the mountains and streams of Iwate, Japan. His connection with nature began in junior high school while fishing in local mountain streams. By the age of seventeen, he started exploring nearby peaks such as Mt. Kurikoma, Mt. Yakeishi, and Mt. Hayachine. The glow of dawn on the ridgeline and the quiet presence of deep valleys inspired him to pick up a camera, hoping to preserve those unforgettable moments. From mountain landscapes to streams, forests, and wetlands, he seeks to capture the subtle and tranquil beauty found in nature. Based in the Tohoku region, he continues to spend time in the field, photographing the changing seasons of his home mountains.",
						location: "Base: Iwate, Japan",
						focus: "Main themes: mountains, streams, forest light",
						links: "Detailed profile"
					},
          news: {
            title: "News",
            items: NEWS_ITEMS
          },
          contact: { title: "Contact", desc: "For commissions, licensing, and exhibitions, please get in touch.", name: "Name", email: "Email", message: "Message", send: "Send" },
          footer: { rights: "© Masahiro Koseki", lang: "Language", jp: "日本語", en: "English" }
        }
      } as const)[lang],
    [lang]
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(typeof id === "string" ? id : "");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  const openGallery = (cat: number, index = 0) => {
    if (!Array.isArray(gallerySources[cat])) return;
    const max = gallerySources[cat].length || 0;
    const safeIndex = Math.min(Math.max(index, 0), Math.max(0, max - 1));
    setLbCat(cat);
    setLbIndex(safeIndex);
    setLbOpen(true);
  };
  const closeGallery = () => setLbOpen(false);
  const nextImg = () => setLbIndex((i) => (i + 1) % gallerySources[lbCat].length);
  const prevImg = () => setLbIndex((i) => (i - 1 + gallerySources[lbCat].length) % gallerySources[lbCat].length);
 

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <div className="flex items-center gap-2 font-semibold">
            <GalleryVerticalEnd className="h-5 w-5" />
            <span>Masahiro Koseki</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => scrollTo("home")} className="hover:opacity-70">
              {t.nav.home}
            </button>
            <button onClick={() => scrollTo("book")} className="hover:opacity-70">
              {t.nav.book}
            </button>
            <button onClick={() => scrollTo("portfolio")} className="hover:opacity-70">
              {t.nav.portfolio}
            </button>
            <button onClick={() => scrollTo("about")} className="hover:opacity-70">
              {t.nav.about}
            </button>
            <button onClick={() => scrollTo("news")} className="hover:opacity-70">
              {t.nav.news}
            </button>
            <button onClick={() => scrollTo("contact")} className="hover:opacity-70">
              {t.nav.contact}
            </button>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-full" onClick={() => changeLang(lang === "ja" ? "en" : "ja")}>
              {lang === "ja" ? "EN" : "JP"}
            </Button>
          </div>
        </div>
      </header>

      <Section id="home" className="pt-12 pb-12">
		<HeroSection texts={t.hero} scrollTo={scrollTo} />
        <div className="w-full h-px bg-neutral-200 my-8"></div>
	  </Section>
		
		<Section id="book" className="section-spacing">
		<H2>{t.book.lead}</H2>
		
		<BookSection
		lang={lang}
		book={t.book}
		highlights={HIGHLIGHTS}
		amazonJp={AMAZON_JP}
		amazonEn={AMAZON_EN}
		/>
		</Section>
		
		<Section id="portfolio" className="section-spacing">
		<H2>{t.portfolio.lead}</H2>
		
		<PortfolioSection
		lang={lang}
		desc={t.portfolio.desc}
		categories={t.portfolio.categories}
		openGallery={openGallery}
		/>
		</Section>

		<Section id="about" className="section-spacing">
		<H2>{t.about.title}</H2>
		<AboutSection lang={lang} about={t.about} />
		</Section>

		<Section id="news" className="section-spacing">
		<H2>{t.news.title}</H2>
		<NewsSection lang={lang} news={t.news} />
		</Section>

		<Section id="contact" className="section-spacing">
		<H2>{t.contact.title}</H2>
		<ContactSection texts={t.contact} />
		</Section>

		{lbOpen && Array.isArray(gallerySources[lbCat]) && gallerySources[lbCat][lbIndex] && (
				<Lightbox
				src={gallerySources[lbCat][lbIndex]}
				alt={galleryMeta[lbCat]?.alts?.[lbIndex] || "image"}
				caption={(lang === "ja" ? galleryMeta[lbCat]?.jp?.[lbIndex] : galleryMeta[lbCat]?.en?.[lbIndex]) || ""}
				onPrev={prevImg}
				onNext={nextImg}
				onClose={closeGallery}
				index={lbIndex}
				total={gallerySources[lbCat].length}
				/>
		)}

      <footer className="border-t">
		<Section id="footer" className="section-spacing py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral-600">
              {t.footer.rights} — {new Date().getFullYear()}
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <span>{t.footer.lang}:</span>
              <button onClick={() => changeLang("ja")} className={`px-2 py-1 rounded-full ${lang === "ja" ? "bg-neutral-900 text-white" : "bg-neutral-100"}`}>
                {t.footer.jp}
              </button>
              <button onClick={() => changeLang("en")} className={`px-2 py-1 rounded-full ${lang === "en" ? "bg-neutral-900 text-white" : "bg-neutral-100"}`}>
                {t.footer.en}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 text-neutral-600 text-sm">
            <a href="https://www.instagram.com/mkoseki423/" target="_blank" className="underline underline-offset-4 hover:opacity-70" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.facebook.com/mkoseki/" target="_blank" className="underline underline-offset-4 hover:opacity-70" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.threads.com/@mkoseki423" target="_blank" className="underline underline-offset-4 hover:opacity-70" rel="noopener noreferrer">
              Threads
            </a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
