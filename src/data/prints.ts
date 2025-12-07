// src/data/prints.ts
export type PrintWork = {
	id: string;
	titleEn: string;
	titleJa: string;
	locationEn: string;
	locationJa: string;
	descriptionEn: string;
	descriptionJa: string;
	imageSrc: string;
	shopifyUrl: string;
};

export const PRINT_WORKS: PrintWork[] = [
{
	id: "koke-keiryu",
	titleEn: "Mossy Mountain Stream",
	titleJa: "苔の渓流",
	locationEn: "Kamaishi, Iwate, Japan",
	locationJa: "岩手県 釜石市",
	descriptionEn:
	"A quiet mountain stream flowing through a deep moss-covered forest, with soft light and rich green tones.",
	descriptionJa:
	"苔むした岩とやわらかな光に包まれた、山あいの静かな渓流。深い緑の奥行きが印象的な一枚です。",
	imageSrc: "/images/prints/koke-keiryu.jpg", // 実際のパスに合わせて変更
	shopifyUrl: "https://YOUR-SHOPIFY-STORE.myshopify.com/products/koke-no-keiryu", // 実際のURLに変更
},
// 今後ここに作品を追加していくイメージ
];
