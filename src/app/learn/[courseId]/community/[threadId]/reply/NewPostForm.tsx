"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function NewPostForm({
	threadId,
	courseId: _courseId,
}: {
	threadId: number;
	courseId: number;
}) {
	void _courseId; // intentionally unused (prop required by parent)
	const [loading, setLoading] = useState(false);
	const [content, setContent] = useState("");
	const router = useRouter();

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch(`/api/threads/${threadId}/posts`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ content }),
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok) throw new Error(data?.error || "Failed to post");
			toast.success("Reply posted");
			setContent("");
			router.refresh();
		} catch (e: any) {
			toast.error(e?.message || "Something went wrong");
		} finally {
			setLoading(false);
		}
	}

	return (
		<form onSubmit={onSubmit} className="vstack gap-2">
			<textarea
				className="form-control"
				placeholder="Write your reply..."
				rows={3}
				value={content}
				onChange={(e) => setContent(e.target.value)}
				required
			/>
			<div>
				<button
					type="submit"
					className="btn btn-primary"
					disabled={loading}
				>
					{loading ? "Posting…" : "Post Reply"}
				</button>
			</div>
		</form>
	);
}
