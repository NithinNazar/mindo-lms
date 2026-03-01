"use client";

import React, { useEffect, useState } from "react";
import CourseCard from "@/components/Courses/CourseCard";

type Course = {
	id: string;
	title: string;
	slug: string;
	price: number;
	rating: number;
	reviewsCount: number;
	lessons: number;
	learners: number;
	level?: string | null;
	images: { thumb: string };
	isFavorited?: boolean;
};

export default function RelatedItems({
	categoryId,
	excludeId,
	limit = 4,
}: {
	categoryId: number;
	excludeId: number;
	limit?: number;
}) {
	const [items, setItems] = useState<Course[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let alive = true;
		async function run() {
			setLoading(true);
			setError(null);
			try {
				const params = new URLSearchParams({
					categoryId: String(categoryId),
					excludeId: String(excludeId),
					limit: String(limit),
				});
				const res = await fetch(
					`/api/courses/related?${params.toString()}`,
					{
						cache: "no-store",
					}
				);
				const json = await res.json();
				if (!res.ok)
					throw new Error(
						json?.error || "Failed to load related courses"
					);
				if (!alive) return;
				setItems(Array.isArray(json?.data) ? json.data : []);
			} catch (e: any) {
				if (!alive) return;
				setError(e?.message || "Failed to load related courses");
				setItems([]);
			} finally {
				if (alive) setLoading(false);
			}
		}
		if (categoryId) run();
		return () => {
			alive = false;
		};
	}, [categoryId, excludeId, limit]);

	return (
		<div className="education-courses-area without-bg-color pb-140">
			<div
				className="container"
				data-cues="slideInUp"
				data-duration="1000"
			>
				<h2 className="courses-you-may-like-title">
					Courses You May Like
				</h2>
				{error && <p style={{ color: "#e11d48" }}>{error}</p>}
				<div className="row justify-content-center g-4">
					{loading && (
						<div className="col-12">
							<p>Loading...</p>
						</div>
					)}
					{!loading && (items?.length ?? 0) === 0 && (
						<div className="col-12">
							<p>No related courses found.</p>
						</div>
					)}
					{items?.map((course) => (
						<div className="col-xl-3 col-md-6" key={course.id}>
							<CourseCard course={course} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
