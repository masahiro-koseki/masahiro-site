// src/components/sections/ContactSection.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

type ContactSectionProps = {
	texts: ContactTexts;
};

export default function ContactSection({ texts }: ContactSectionProps) {
	const router = useRouter();
	
	const [form, setForm] = useState({
			name: "",
			email: "",
			subject: "",
			message: "",
	});
	const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
		"idle",
	);
	const [error, setError] = useState("");
	
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};
	
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		// 必須チェック
		if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
			setError("お名前・メールアドレス・メッセージを入力してください。");
			setStatus("idle");
			return;
		}
		
		setError("");
		setStatus("sending");
		
		try {
			const formData = new FormData();
			formData.append("name", form.name);
			formData.append("email", form.email);
			formData.append("subject", form.subject);
			formData.append("message", form.message);
			
			const res = await fetch("https://formspree.io/f/xdkyaree", {
					method: "POST",
					headers: {
						Accept: "application/json",
					},
					body: formData,
			});
			
			if (res.ok) {
				// 一応内部状態もリセット
				setStatus("success");
				setForm({ name: "", email: "", subject: "", message: "" });
				
				// 🎯 サンクスページへリダイレクト
				router.push("/thanks");
			} else {
				setStatus("error");
			}
		} catch (err) {
			console.error(err);
			setStatus("error");
		}
	};
	
	return (
		<>
		<p className="mt-3 max-w-3xl text-neutral-600">{texts.desc}</p>
		
		<form
		onSubmit={handleSubmit}
		className="mt-8 max-w-2xl"
		acceptCharset="UTF-8"
		>
		{/* お名前 + メール */}
		<div className="grid gap-4 sm:grid-cols-2">
		<Input
		name="name"
		placeholder={texts.name || "お名前 / Name"}
		className="rounded-2xl"
		value={form.name}
		onChange={handleChange}
		/>
		<Input
		type="email"
		name="email"
		placeholder={texts.email || "メールアドレス / Email"}
		className="rounded-2xl"
		value={form.email}
		onChange={handleChange}
		/>
		</div>
		
		{/* 件名（任意） */}
		<Input
		name="subject"
		placeholder="件名 / Subject（任意）"
		className="mt-4 rounded-2xl"
		value={form.subject}
		onChange={handleChange}
		/>
		
		{/* メッセージ本文 */}
		<Textarea
		name="message"
		placeholder={texts.message || "お問い合わせ内容 / Message"}
		className="mt-4 min-h-[160px] rounded-2xl"
		value={form.message}
		onChange={handleChange}
		/>
		
		{/* エラーメッセージ */}
		{error && (
				<p className="mt-2 text-sm text-red-600">
				{error}
				</p>
		)}
		
		{/* エラー時だけ画面に出す（成功時はサンクスページに飛ぶ） */}
		{status === "error" && (
				<p className="mt-2 text-sm text-red-600">
				送信中にエラーが発生しました。時間をおいて再度お試しください。
				</p>
		)}
		
		<div className="mt-4">
		<Button
		type="submit"
		className="rounded-2xl"
		disabled={status === "sending"}
		>
		<Mail className="mr-2 h-4 w-4" />
		{status === "sending" ? "送信中..." : texts.send}
		</Button>
		</div>
		</form>
		</>
	);
}
