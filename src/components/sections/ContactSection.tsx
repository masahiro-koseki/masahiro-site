// src/components/sections/ContactSection.tsx
import type { FormEvent } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactTexts = {
	title: string;
	desc: string;
	name: string;
	email: string;
	message: string;
	send: string;
};

type NoticeState = { type: "ok" | "err"; msg: string } | null;

type ContactSectionProps = {
	texts: ContactTexts;
	form: { name: string; email: string; message: string };
	onChange: (field: "name" | "email" | "message", value: string) => void;
	onSubmit: () => void;
	notice: NoticeState;
};

export default function ContactSection({
		texts,
		form,
		onChange,
		onSubmit,
		notice,
}: ContactSectionProps) {
	// Formspree 用の submit ハンドラ（ブラウザのデフォルト送信はそのまま）
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		// e.preventDefault() は呼ばない：Formspree にそのまま POST するため
		onSubmit(); // 必要ならここで notice の状態更新などを行う
	};
	
	return (
		<>
		<p className="mt-3 text-neutral-600 max-w-3xl">{texts.desc}</p>
		<form
		noValidate
		className="mt-8 max-w-2xl"
		action="https://formspree.io/f/xdkyaree"
		method="POST"
		onSubmit={handleSubmit}
		>
		<div className="grid sm:grid-cols-2 gap-4">
		<Input
		id="contact-name"
		name="name" // ← Formspree に送られるフィールド名
		placeholder={texts.name}
		className="rounded-2xl"
		value={form.name}
		onChange={(e) => onChange("name", e.target.value)}
		required
		/>
		<Input
		id="contact-email"
		name="email" // ← Formspree に送られるフィールド名
		type="email"
		placeholder={texts.email}
		className="rounded-2xl"
		value={form.email}
		onChange={(e) => onChange("email", e.target.value)}
		required
		/>
		</div>
		<Textarea
		id="contact-message"
		name="message" // ← Formspree に送られるフィールド名
		placeholder={texts.message}
		className="rounded-2xl mt-4 min-h-[160px]"
		value={form.message}
		onChange={(e) => onChange("message", e.target.value)}
		required
		/>
		
		{/* 任意：フォーム識別用の hidden フィールド */}
		<input type="hidden" name="form_name" value="masahiro-site-contact" />
		
		<div className="mt-4">
		<Button type="submit" className="rounded-2xl">
		<Mail className="h-4 w-4 mr-2" /> {texts.send}
		</Button>
		</div>
		{notice && (
				<div
				className={`mt-3 text-sm px-3 py-2 rounded-lg ${
						notice.type === "ok"
						? "bg-green-50 text-green-700"
						: "bg-red-50 text-red-700"
				}`}
				aria-live="polite"
				>
				{notice.msg}
				</div>
		)}
		</form>
		</>
	);
}
