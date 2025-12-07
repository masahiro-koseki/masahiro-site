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
	id: "mossy-stream",
	titleEn: "Mossy Mountain Stream",
	titleJa: "苔の渓流",
	locationEn: "Kamaishi, Iwate, Japan",
	locationJa: "岩手県 釜石市",
	descriptionEn:
	"A quiet mountain stream flowing through a deep moss-covered forest, with soft light and rich green tones.",
	descriptionJa:
	"苔むした岩とやわらかな光に包まれた、山あいの静かな渓流。深い緑の奥行きが印象的な一枚です。",
	imageSrc: "/images/prints/mossy-stream.webp", // 実際のパスに合わせて変更
	shopifyUrl: "https://prints.masahiro-koseki.com/products/mossy-stream-fine-art-print", // 実際のURLに変更
},
// 今後ここに作品を追加していくイメージ
{
	id: "spring-Light-Beech-Tree",
	titleEn: "Spring Light Beech Tree",
	titleJa: "春光を受けて輝くブナの巨木",
	locationEn: "Kitakami, Iwate, Japan",
	locationJa: "岩手県 北上市",
	descriptionEn:
	"A majestic beech tree illuminated by soft spring light near Geto Onsen in Kitakami, Iwate, Japan.",
	descriptionJa:
	"岩手県北上市・夏油温泉近くで撮影した、春光を受けて輝くブナの巨木。",
	imageSrc: "/images/prints/spring-light-beech-tree.webp", // 実際のパスに合わせて変更
	shopifyUrl: "https://prints.masahiro-koseki.com/products/spring-light-beech-tree-fine-art-print", // 実際のURLに変更
},

{
	id: "spring-valley-with-cherry-blossoms",
	titleEn: "Spring Valley with Cherry Blossoms",
	titleJa: "苔の渓流",
	locationEn: "Yakeishi Mountains in Oshu, Iwate, Japan",
	locationJa: "岩手県 奥州市",
	descriptionEn:
	"Fresh spring greens and soft cherry blossoms color the mountain valley of the Isawa River, flowing from the Yakeishi Mountains in Oshu, Iwate, Japan.",
	descriptionJa:
	"岩手県奥州市・焼石連峰を源とする胆沢川上流の渓谷で撮影した一枚。",
	imageSrc: "/images/prints/spring-valley-with-cherry-blossoms.webp", // 実際のパスに合わせて変更
	shopifyUrl: "https://prints.masahiro-koseki.com/products/spring-valley-with-cherry-blossoms", // 実際のURLに変更
},

];
