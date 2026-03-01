"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ComponentProps } from "react";
import { useSearchParams } from "next/navigation";
import CourseCard from "./CourseCard";
import SearchBox from "./SearchBox";
import SortDropdown from "./SortDropdown";

type CourseCardProps = ComponentProps<typeof CourseCard>;
type CourseListItem = CourseCardProps["course"];

type Props = {
	courses?: CourseListItem[];
	total?: number;
	page?: number;
	perPage?: number;
};

function formatNumber(n?: number) {
	if (!n && n !== 0) return "0";
	return n.toLocaleString();
}

function buildPageHref(
	p: number,
	perPage: number,
	searchParams?: URLSearchParams
) {
	const params = new URLSearchParams(
		searchParams ? searchParams.toString() : ""
	);
	params.set("page", String(p));
	params.set("limit", String(perPage));
	const qs = params.toString();
	return qs ? `/courses?${qs}` : "/courses";
}

export default function CoursesContent({}: Props) {
	const sp = useSearchParams();
	const q = (sp.get("q") || "").trim();
	const sort = (sp.get("sort") || "price_desc").trim();
	const pageParam = parseInt(sp.get("page") || "1", 10);
	const limitParam = parseInt(sp.get("limit") || "12", 10);

	const [courses, setCourses] = useState<CourseListItem[]>([]);
	const [total, setTotal] = useState<number>(0);
	const [page, setPage] = useState<number>(pageParam);
	const [perPage, setPerPage] = useState<number>(limitParam);
    const [loading, setLoading] = useState<boolean>(true);

	// compute total pages whenever total/perPage change
	const totalPages = useMemo(
		() => Math.max(1, Math.ceil((total || 0) / (perPage || 12))),
		[total, perPage]
	);

	useEffect(() => {
		const params = new URLSearchParams();
		params.set("q", q);
		params.set("sort", sort);
		params.set("page", String(pageParam));
		params.set("limit", String(limitParam));

		setLoading(true);
		fetch(`/api/courses?${params.toString()}`, { cache: "no-store" })
			.then(async (r) => {
				if (!r.ok) throw new Error("Failed to fetch courses");
				const json = await r.json();
				setCourses(json.data || []);
				setTotal(json.meta?.total ?? 0);
				setPage(json.meta?.page ?? pageParam);
				setPerPage(json.meta?.limit ?? limitParam);
			})
			.catch(() => {
				// keep initial props if fetch fails; no UI change needed
			})
			.finally(() => setLoading(false));
	}, [q, sort, pageParam, limitParam]);

	const startIdx = total === 0 ? 0 : (page - 1) * perPage + 1;
	const endIdx = Math.min(page * perPage, total);
    const hasQuery = q.length > 0;

	const windowStart = Math.max(1, page - 2);
	const windowEnd = Math.min(totalPages, windowStart + 4);
	const pages: number[] = [];
	for (let p = Math.max(1, windowEnd - 4); p <= windowEnd; p++) pages.push(p);

	const noResults = !loading && (total || 0) === 0;

	return (
		<div className="education-courses-area without-bg-color ptb-140">
			<div
				className="container"
				data-cues="slideInUp"
				data-duration="1000"
			>
				<div className="showing-courses-bar">
					<div className="results-text">
						{loading ? (
							<span>Loading courses…</span>
						) : noResults ? (
							<span>No courses found</span>
						) : (
							<>
								Showing{" "}
								<span>
									{startIdx}-{endIdx}
								</span>{" "}
								by <span>{formatNumber(total)}</span> Results
							</>
						)}
					</div>
					<div className="search-sort-wrapper">
						<SearchBox q={q} />
						<SortDropdown sort={sort} />
					</div>
				</div>

				{loading ? (
					<div className="row">
						<div className="col-12 text-center my-4">Loading courses…</div>
					</div>
				) : noResults ? (
					<div className="row">
						<div className="col-12 text-center text-muted my-4">
							{hasQuery ? "Try a different search or filter." : "No courses available."}
						</div>
					</div>
				) : (
					<div className="row justify-content-center g-4">
						{courses.map((course) => (
							<div key={course.id} className="col-xl-3 col-md-6">
								<CourseCard course={course} />
							</div>
						))}
					</div>
				)}

				{!noResults && totalPages > 1 && (
					<div className="row mt-4">
						<div className="col-lg-12 col-md-12">
							<div className="pagination-area">
								<Link
									href={buildPageHref(
										Math.max(1, page - 1),
										perPage,
										sp
									)}
									aria-label="Previous"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											d="M13 19L7 12L13 5"
											stroke="#63667D"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											opacity="0.5"
											d="M17 19L11 12L17 5"
											stroke="#63667D"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</Link>
								{pages.map((p) => (
									<Link
										key={p}
										href={buildPageHref(p, perPage, sp)}
										className={
											p === page ? "active" : undefined
										}
									>
										{p}
									</Link>
								))}
								<Link
									href={buildPageHref(
										Math.min(totalPages, page + 1),
										perPage,
										sp
									)}
									aria-label="Next"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											d="M11 19L17 12L11 5"
											stroke="#63667D"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											opacity="0.5"
											d="M7 19L13 12L7 5"
											stroke="#63667D"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
