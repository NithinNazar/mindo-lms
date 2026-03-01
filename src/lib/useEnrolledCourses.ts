"use client";

import { useEffect, useState } from "react";

// Simple in-memory cache + in-flight dedupe by studentId
const enrolledCache = new Map<string, number[]>(); // studentId -> courseIds
const inFlight = new Map<string, Promise<number[]>>(); // studentId -> promise

async function fetchEnrolledIds(studentId: string): Promise<number[]> {
	// If cached, return immediately
	if (enrolledCache.has(studentId)) return enrolledCache.get(studentId)!;

	// If a request is in-flight, reuse it
	const existing = inFlight.get(studentId);
	if (existing) return existing;

	// Start a new request
	const p = (async () => {
		const res = await fetch(
			`/api/enrollments?studentId=${encodeURIComponent(studentId)}`,
			{
				method: "GET",
				headers: { "Cache-Control": "no-store" },
			}
		);
		if (!res.ok) throw new Error("Failed to load enrollments");
		const data = await res.json();
		const list = Array.isArray(data?.enrolledCourseIds)
			? data.enrolledCourseIds
			: [];
		// Normalize to numbers
		const ids = list
			.map((x: unknown) => Number(x))
			.filter((n: number) => Number.isFinite(n));
		enrolledCache.set(studentId, ids);
		return ids;
	})();

	inFlight.set(studentId, p);
	try {
		const ids = await p;
		return ids;
	} finally {
		inFlight.delete(studentId); // cleanup regardless of success/fail
	}
}

export function useEnrolledCourses(studentId?: string) {
	const [enrolledIds, setEnrolledIds] = useState<number[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		let alive = true;
		if (!studentId) {
			setEnrolledIds([]);
			return () => {
				alive = false;
			};
		}

		setLoading(true);

		// First try cache synchronously to avoid a paint + flash
		if (enrolledCache.has(studentId)) {
			const cached = enrolledCache.get(studentId)!;
			setEnrolledIds(cached);
			setLoading(false);
			return () => {
				alive = false;
			};
		}

		// Otherwise, fetch (deduped) once for this studentId
		fetchEnrolledIds(studentId)
			.then((ids) => {
				if (alive) setEnrolledIds(ids);
			})
			.catch(() => {
				if (alive) setEnrolledIds([]);
			})
			.finally(() => {
				if (alive) setLoading(false);
			});

		return () => {
			alive = false;
		};
	}, [studentId]);

	return { enrolledIds, loading };
}
