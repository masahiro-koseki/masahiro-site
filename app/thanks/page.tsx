// app/thanks/page.tsx
export default function ThanksPage() {
	return (
		<main className="min-h-screen bg-neutral-50">
		<div className="mx-auto max-w-3xl px-4 py-24">
		<h1 className="text-2xl font-semibold tracking-wide">
		お問い合わせありがとうございました
		</h1>
		
		<p className="mt-4 text-neutral-700">
		メッセージは正常に送信されました。
		内容を確認のうえ、通常数日以内にご返信いたします。
		</p>
		<p className="mt-2 text-neutral-700">
		Thank you for your message. I will get back to you as soon as possible.
		</p>
		
		<a
		href="/"
		className="mt-8 inline-flex items-center rounded-full border border-neutral-900 px-6 py-2 text-sm font-semibold tracking-wide text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
		>
		トップページへ戻る / Back to Home
		</a>
		</div>
		</main>
	);
}
