"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export type FavoriteCourse = {
	id: number; // course id
	slug: string;
	title: string;
	shortDescription: string | null;
	thumbnailUrl: string | null;
	price: number | string; // Prisma Decimal can be string
	isFree: boolean;
};

export default function FavoriteCard({ course }: { course: FavoriteCourse }) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [busy, setBusy] = useState(false);

	const priceLabel = course.isFree
		? "Free"
		: (() => {
				const num =
					typeof course.price === "string"
						? parseFloat(course.price)
						: Number(course.price);
				return Number.isFinite(num) ? `$${num.toFixed(2)}` : "Paid";
		  })();

	async function toggleFavorite() {
		try {
			setBusy(true);
			const res = await fetch(`/api/courses/${course.id}/favorite`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			});
			if (!res.ok) return; // could show a toast here
			startTransition(() => router.refresh());
		} finally {
			setBusy(false);
		}
	}

	return (
		<div className="card h-100 shadow-sm">
			{/* Cover */}
			<div className="position-relative bg-light" style={{ height: 176 }}>
				{course.thumbnailUrl ? (
					<Image
						src={course.thumbnailUrl}
						alt={course.title}
						fill
						className="card-img-top object-fit-cover"
						sizes="(max-width: 1200px) 100vw, 33vw"
					/>
				) : null}
			</div>

			<div className="card-body d-flex flex-column">
				<div className="d-flex justify-content-between align-items-start gap-3 mb-1">
					<h3
						className="h6 fw-semibold mb-0 text-truncate"
						title={course.title}
					>
						{course.title}
					</h3>
					<span className="badge text-bg-light border">
						{priceLabel}
					</span>
				</div>

				{course.shortDescription ? (
					<p
						className="text-muted small mb-3"
						style={{
							display: "-webkit-box",
							WebkitLineClamp: 2,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
						}}
					>
						{course.shortDescription}
					</p>
				) : (
					<p className="text-muted small mb-3">&nbsp;</p>
				)}

				<div className="mt-auto d-flex gap-2">
					<Link
						href={`/course/${course.slug}`}
						className="btn btn-primary"
					>
						View Course
					</Link>
					<button
						type="button"
						className="btn btn-outline-danger btn-sm"
						onClick={toggleFavorite}
						disabled={busy || isPending}
						aria-disabled={busy || isPending}
					>
						{busy || isPending ? "Updating..." : "Unfavorite"}
					</button>
				</div>
			</div>
		</div>
	);
}
