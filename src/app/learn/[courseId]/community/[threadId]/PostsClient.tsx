"use client";

import { useState } from "react";
import toast from "react-hot-toast";

type Post = {
  id: number;
  authorName: string;
  createdAt: string; // ISO
  content: string;
  votes: number;
  isUpvoted: boolean;
};

export default function PostsClient({
  threadId,
  posts: initialPosts,
  acceptedPostId,
  canAccept,
}: {
  threadId: number;
  posts: Post[];
  acceptedPostId: number | null;
  canAccept: boolean;
}) {
  const [posts, setPosts] = useState(initialPosts);
  const [accepted, setAccepted] = useState<number | null>(acceptedPostId);

  async function toggleUpvote(postId: number) {
    try {
      const res = await fetch(`/api/posts/${postId}/upvote`, { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to upvote");
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, votes: data.count, isUpvoted: data.upvoted } : p))
      );
    } catch (e: any) {
      toast.error(e?.message || "Something went wrong");
    }
  }

  async function accept(postId: number | null) {
    try {
      const res = await fetch(`/api/threads/${threadId}/accept`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to update");
      setAccepted(data.acceptedPostId ?? null);
      toast.success(data.acceptedPostId ? "Accepted answer set" : "Accepted answer cleared");
    } catch (e: any) {
      toast.error(e?.message || "Something went wrong");
    }
  }

  return (
    <div className="vstack gap-3 mb-4">
      {posts.map((p) => (
        <div key={p.id} className={`card shadow-sm ${accepted === p.id ? "border-success" : ""}`}>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="small text-muted">{p.authorName}</div>
              <div className="d-flex align-items-center gap-2">
                {accepted === p.id ? (
                  <span className="badge bg-success">Accepted</span>
                ) : null}
                <div className="small text-muted">{new Date(p.createdAt).toLocaleString()}</div>
              </div>
            </div>
            <div style={{ whiteSpace: "pre-wrap" }}>{p.content}</div>
            <div className="d-flex align-items-center gap-2 mt-3">
              <button
                type="button"
                className={`btn btn-sm ${p.isUpvoted ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => toggleUpvote(p.id)}
              >
                ▲ Upvote ({p.votes})
              </button>
              {canAccept && (
                accepted === p.id ? (
                  <button className="btn btn-sm btn-outline-success" onClick={() => accept(null)}>
                    Unmark Answer
                  </button>
                ) : (
                  <button className="btn btn-sm btn-success" onClick={() => accept(p.id)}>
                    Mark as Answer
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

