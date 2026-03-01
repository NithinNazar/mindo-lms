"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function NewThreadForm({ courseId }: { courseId: number }) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/courses/${courseId}/community/threads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to create thread");
      toast.success("Thread created");
      setTitle("");
      setContent("");
      router.push(`/learn/${courseId}/community/${data.threadId}`);
    } catch (e: any) {
      toast.error(e?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="vstack gap-2">
      <input
        className="form-control"
        placeholder="Thread title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        minLength={3}
        maxLength={140}
        required
      />
      <textarea
        className="form-control"
        placeholder="What do you want to discuss?"
        rows={3}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Posting…" : "Post Thread"}
        </button>
      </div>
    </form>
  );
}

