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
	titleJa: "桜と新緑の春の胆沢川",
	locationEn: "Yakeishi Mountains, Iwate, Japan",
	locationJa: "岩手県 奥州市",
	descriptionEn:
	"Fresh spring greens and soft cherry blossoms color the mountain valley of the Isawa River, flowing from the Yakeishi Mountains in Oshu, Iwate, Japan.",
	descriptionJa:
	"岩手県奥州市・焼石連峰を源とする胆沢川上流の渓谷で撮影した一枚。",
	imageSrc: "/images/prints/spring-valley-with-cherry-blossoms.webp", // 実際のパスに合わせて変更
	shopifyUrl: "https://prints.masahiro-koseki.com/products/spring-valley-with-cherry-blossoms", // 実際のURLに変更
},

{
	id: "snowy-cedar-forest",
	titleEn: "Snowy Cedar Forest",
	titleJa: "雪に包まれた杉林",
	locationEn: "Mt. Murone in Ichinoseki, Iwate, Japan",
	locationJa: "岩手県 一関・室根山",
	descriptionEn:
	"A quiet cedar forest covered in fresh snow and soft winter mist on the slopes of Mt. Murone in Ichinoseki, Iwate, Japan.",
	descriptionJa:
	"岩手県一関市・室根山の中腹で撮影した、雪に包まれた静かな杉林。",
	imageSrc: "/images/prints/snowy-cedar-forest.webp", // 実際のパスに合わせて変更
	shopifyUrl: "https://prints.masahiro-koseki.com/products/snowy-cedar-forest-nature-photography-poster", // 実際のURLに変更
},

{
	id: "frosted-trees-under-blue-sky",
	titleEn: "Frosted Trees under Blue Sky",
	titleJa: "青空の下、白く輝く霧氷",
	locationEn: "At the base of Mt. Hayachine, Iwate, Japan",
	locationJa: "岩手県 遠野市・早池峰山麓",
	descriptionEn:
	"Frost-covered trees shining brightly beneath a clear blue sky on the Arakawa Highlands at the base of Mt. Hayachine in Tono, Iwate, Japan.",
	descriptionJa:
	"岩手県遠野市・早池峰山麓の荒川高原で撮影した霧氷の光景。",
	imageSrc: "/images/prints/frosted-trees-under-blue-sky.webp", // 実際のパスに合わせて変更
	shopifyUrl: "https://prints.masahiro-koseki.com/products/frosted-trees-under-blue-sky", // 実際のURLに変更
},

{
	id: "morning-beech-forest-in-spring-light",
	titleEn: "Morning Beech Forest in Spring Light",
	titleJa: "春の光を浴びて萌葱色に輝くブナの森",
	locationEn: "Near Geto Hot Springs, Iwate, Japan",
	locationJa: "岩手県 北上市・夏油温泉近く",
	descriptionEn:
	"Step into a serene beech forest glowing in the soft morning light. Captured near Geto Hot Springs in Iwate, Japan.",
	descriptionJa:
	"春の柔らかな光を浴びて萌葱色に輝く、静かなブナの森。岩手県北上市・夏油温泉近く",
	imageSrc: "/images/prints/morning-beech-forest-in-spring-light.webp", // 実際のパスに合わせて変更
	shopifyUrl: "https://prints.masahiro-koseki.com/products/morning-beech-forest-in-spring-light", // 実際のURLに変更
},

{
	id: "misty-summer-primeval-forest",
	titleEn: "Misty Summer Primeval Forest",
	titleJa: "霧に包まれた夏の原生林",
	locationEn: "Mount Hayachine, Iwate, Japan",
	locationJa: "岩手県 宮古市川井・早池峰山北側原生林",
	descriptionEn:
	"This atmospheric photograph captures a mist-filled primeval forest on the northern slopes of Mount Hayachine in Iwate, Japan. Soft light, ancient trees, and drifting fog create an almost mythical mood.",
	descriptionJa:
	"岩手県の名峰・早池峰山北側の中腹に広がる、霧に包まれた夏の原生林。",
	imageSrc: "/images/prints/misty-summer-primeval-forest.webp", // 実際のパスに合わせて変更
	shopifyUrl: "https://prints.masahiro-koseki.com/products/misty-summer-primeval-forest-hayachine-mountain-japan", // 実際のURLに変更
},

{
	id: "early-spring-riverside-trees",
	titleEn: "Early Spring Riverside Trees",
	titleJa: "北上川沿いの芽吹き始めた樹木",
	locationEn: "Along the Kitakami River in Kanegasaki, Iwate, Japan",
	locationJa: "岩手県 金ケ崎町・北上川にて",
	descriptionEn:
	"Captured along the Kitakami River in early May, this peaceful landscape showcases budding trees in soft spring light.",
	descriptionJa:
	"5月初旬の北上川沿いで撮影した、芽吹き始めた樹木の風景。",
	imageSrc: "/images/prints/early-spring-riverside-trees.webp", // 実際のパスに合わせて変更
	shopifyUrl: "https://prints.masahiro-koseki.com/products/early-spring-riverside-trees-kitakami-river-landscape-print", // 実際のURLに変更
},

{
	id: "summer-beech-tree-in-mountain-mist",
	titleEn: "Summer Beech Tree in Mountain Mist",
	titleJa: "雨上がりのブナ",
	locationEn: "Along the Komagatake hiking trail, Iwate, Japan",
	locationJa: "岩手県 金ケ崎町・駒ヶ岳中腹",
	descriptionEn:
	"Photographed along the Komagatake hiking trail, this beech tree stands in a lush, rain-soaked summer forest filled with deep greens and soft humidity.",
	descriptionJa:
	"岩手県金ケ崎町、駒ヶ岳登山コースで撮影した雨上がりのブナ。",
	imageSrc: "/images/prints/summer-beech-tree-in-mountain-mist.webp", // 実際のパスに合わせて変更
	shopifyUrl: "https://prints.masahiro-koseki.com/products/summer-beech-tree-in-mountain-mist-komagatake-print", // 実際のURLに変更
},

{
	id: "summer-beech-tree-in-mountain-mist",
	titleEn: "Moss-Covered Boulder and Mountain Stream",
	titleJa: "苔に覆われた岩と清らかな流れ",
	locationEn: "In the Kitamata River of Oshu, Iwate, Japan",
	locationJa: "岩手県 奥州市衣川・北股川上流",
	descriptionEn:
	"This refreshing photograph captures a moss-covered boulder surrounded by clear flowing water in the Kitamata River of Iwate, Japan.",
	descriptionJa:
	"岩手県奥州市・北股川で撮影した、苔に覆われた大きな岩と清らかな流れ。",
	imageSrc: "/images/prints/moss-covered-boulder-and-mountain-stream.webp", // 実際のパスに合わせて変更
	shopifyUrl: "https://prints.masahiro-koseki.com/products/moss-covered-boulder-and-mountain-stream-nature-photography-poster", // 実際のURLに変更
},

];
