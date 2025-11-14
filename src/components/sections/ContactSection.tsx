// src/components/sections/ContactSection.tsx
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
	return (
		<>
		<p className="mt-3 text-neutral-600 max-w-3xl">{texts.desc}</p>
		<form noValidate className="mt-8 max-w-2xl">
		<div className="grid sm:grid-cols-2 gap-4">
		<Input
		placeholder={texts.name}
		className="rounded-2xl"
		value={form.name}
		onChange={(e) => onChange("name", e.target.value)}
		/>
		<Input
		type="email"
		placeholder={texts.email}
		className="rounded-2xl"
		value={form.email}
		onChange={(e) => onChange("email", e.target.value)}
		/>
		</div>
		<Textarea
		placeholder={texts.message}
		className="rounded-2xl mt-4 min-h-[160px]"
		value={form.message}
		onChange={(e) => onChange("message", e.target.value)}
		/>
		<div className="mt-4">
		<Button type="button" onClick={onSubmit} className="rounded-2xl">
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
