"use client";

import { useEffect, useState } from "react";

export default function CourseFeedback({ courseId }: { courseId: number }) {
	const [rating, setRating] = useState<number>(5);
	const [comment, setComment] = useState<string>("");
	const [submitting, setSubmitting] = useState(false);
	const [message, setMessage] = useState<{
		type: "success" | "error";
		text: string;
	} | null>(null);

	// NEW: store any existing review and view/edit mode
	const [existing, setExisting] = useState<{
		id: number;
		rating: number;
		comment: string | null;
	} | null>(null);
	const [mode, setMode] = useState<"view" | "edit">("view");

	// NEW: fetch the current user's review for this course
	useEffect(() => {
		let alive = true;
		(async () => {
			try {
				const res = await fetch(`/api/reviews?courseId=${courseId}`, {
					cache: "no-store",
				});
				const data = await res.json();
				if (!res.ok)
					throw new Error(data?.error || "Failed to load review");

				if (alive && data?.review) {
					setExisting({
						id: data.review.id,
						rating: data.review.rating,
						comment: data.review.comment ?? null,
					});
					// Prefill form with existing data
					setRating(data.review.rating);
					setComment(data.review.comment ?? "");
					setMode("view");
				} else {
					// No review yet → start in edit mode
					setMode("edit");
				}
			} catch {
				// If fetch fails, allow user to submit a new one
				setMode("edit");
			}
		})();
		return () => {
			alive = false;
		};
	}, [courseId]);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setSubmitting(true);
		setMessage(null);
		try {
			const res = await fetch("/api/reviews", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ courseId, rating, comment }),
			});
			const data = await res.json();
			if (!res.ok) {
				throw new Error(data?.error || "Failed to submit feedback");
			}
			// Reflect saved review locally and go back to view mode
			setExisting({
				id: data.review.id,
				rating: data.review.rating,
				comment: data.review.comment ?? null,
			});
			setMessage({
				type: "success",
				text: "Thanks! Your feedback was saved.",
			});
			setMode("view");
		} catch (err: unknown) {
			const text = err instanceof Error ? err.message : String(err);
			setMessage({ type: "error", text });
		} finally {
			setSubmitting(false);
		}
	}

	// VIEW mode — shows current review with an Edit button
	if (existing && mode === "view") {
		return (
			<div className="mt-2 border rounded p-3">
				<div className="d-flex justify-content-between align-items-start mb-2">
					<div>
						<div className="fw-semibold">Your Feedback</div>
						<div className="small text-muted">
							Rating: {existing.rating}/5
						</div>
					</div>
					<button
						className="btn btn-sm btn-outline-secondary"
						onClick={() => setMode("edit")}
					>
						Edit
					</button>
				</div>
				{existing.comment ? (
					<p className="mb-0">{existing.comment}</p>
				) : (
					<p className="text-muted mb-0">No comment added.</p>
				)}
			</div>
		);
	}

	// EDIT mode — your original form
	return (
		<form onSubmit={handleSubmit} className="mt-2">
			{message && (
				<div
					className={`alert ${
						message.type === "success"
							? "alert-success"
							: "alert-danger"
					}`}
					role="alert"
				>
					{message.text}
				</div>
			)}

			<div className="mb-3">
				<label className="form-label">Rating</label>
				<select
					className="form-select"
					value={rating}
					onChange={(e) => setRating(Number(e.target.value))}
					aria-label="Rating"
					required
				>
					<option value={5}>5 - Excellent</option>
					<option value={4}>4 - Good</option>
					<option value={3}>3 - Average</option>
					<option value={2}>2 - Poor</option>
					<option value={1}>1 - Terrible</option>
				</select>
			</div>

			<div className="mb-3">
				<label className="form-label">Your feedback</label>
				<textarea
					className="form-control"
					rows={4}
					placeholder="Share your thoughts about this course..."
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
			</div>

			<div className="d-flex gap-2">
				<button
					type="submit"
					className="btn btn-primary"
					disabled={submitting}
				>
					{submitting
						? "Saving..."
						: existing
						? "Update Feedback"
						: "Submit Feedback"}
				</button>
				{existing && (
					<button
						type="button"
						className="btn btn-outline-secondary"
						onClick={() => setMode("view")}
					>
						Cancel
					</button>
				)}
			</div>
		</form>
	);
}
