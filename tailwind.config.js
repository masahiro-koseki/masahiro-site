/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	"./app/**/*.{js,ts,jsx,tsx,mdx}",
	"./pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./components/**/*.{js,ts,jsx,tsx,mdx}",     // もし将来ルート/componentsを使う場合に備え
	"./src/components/**/*.{js,ts,jsx,tsx,mdx}", // いまの shadcn/ui はここ
	],
	theme: { extend: {} },
	plugins: [],
};



