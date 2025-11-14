"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export default function PreviewPage() {
  const [lang, setLang] = useState<"ja" | "en">("ja");

  const previews = [
    {
		src: "/images/book_sample_alpine.webp",
      alt: "Sample spread – Alpine",
      jp: "アルパイン（サンプル見開き）",
      en: "Alpine — sample spread",
    },
    {
		src: "/images/book_sample_stream.webp",
      alt: "Sample spread – Streams",
      jp: "渓流（サンプル見開き）",
      en: "Streams — sample spread",
    },
    {
		src: "/images/book_sample_woodlands.webp",
      alt: "Sample spread – Woodlands",
      jp: "森（サンプル見開き）",
      en: "Woodlands — sample spread",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <BookOpen className="h-5 w-5" />
            <span>{lang === "ja" ? "プレビュー" : "Preview"}</span>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <button
              onClick={() => setLang(lang === "ja" ? "en" : "ja")}
              className="text-sm border px-2 py-1 rounded-full hover:bg-neutral-100 transition"
            >
              {lang === "ja" ? "English" : "日本語"}
            </button>
            <Link href="/" className="underline underline-offset-4 hover:opacity-70">
              ← {lang === "ja" ? "ホーム" : "Home"}
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          {lang === "ja" ? "写真集プレビュー" : "Photo Book Preview"}
        </h1>
        <p className="mt-3 text-neutral-600 max-w-3xl">
          {lang === "ja"
            ? "本ページはプレビュー用のサンプルです。実装では印刷仕上がりに近い比率（例：1:1や3:2）で数ページの見開きを抜粋して掲載します。"
            : "This page is a sample preview. In the final version, selected spreads will be displayed in ratios close to the printed layout (e.g., 1:1 or 3:2)."}
        </p>

        <div className="w-full h-px bg-neutral-200 my-8" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {previews.map((p, i) => (
            <Card key={i} className="rounded-2xl overflow-hidden shadow-lg">
              <CardHeader>
                <CardTitle className="text-base">{lang === "ja" ? p.jp : p.en}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-[3/2] bg-neutral-100 overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm text-neutral-600">{p.en}</div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href={p.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Button variant="outline" className="rounded-xl">
                        {lang === "ja" ? "原寸で開く" : "Open full-size"}
                      </Button>
                    </a>
                    <Link href="/#book" className="inline-flex">
                      <Button className="rounded-xl">
                        {lang === "ja" ? "Bookへ戻る" : "Back to Book"}
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/#book" className="inline-block">
            <Button variant="ghost" className="rounded-2xl">
              ← {lang === "ja" ? "Bookセクションへ戻る" : "Back to Book Section"}
            </Button>
          </Link>
        </div>

        <div className="w-full h-px bg-neutral-200 my-10" />

        <section>
          <h2 className="text-xl font-semibold">
            {lang === "ja" ? "差し替え方法" : "How to Replace Preview Images"}
          </h2>
          <ol className="mt-3 list-decimal list-inside text-sm text-neutral-700 space-y-1">
            <li>
              {lang === "ja"
                ? "プレビューに使う画像を public/images/ に配置します。"
                : "Place preview images in public/images/."}
            </li>
            <li>
              {lang === "ja"
                ? "このページの previews 配列の src を差し替えます。"
                : "Replace the src values in the previews array."}
            </li>
            <li>
              {lang === "ja"
                ? "見出し（jp/en）や枚数も自由に調整できます。"
                : "You can adjust the jp/en captions or number of images freely."}
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
