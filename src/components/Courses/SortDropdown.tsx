"use client";

import { useRouter, useSearchParams } from "next/navigation";

function mapApiSortToUI(sort?: string) {
	switch ((sort || "price_desc").toLowerCase()) {
		case "newest":
			return "1"; // UI option "Newest"
		case "price_desc":
		default:
			return "popular"; // UI option "Most Popular"
	}
}

function mapUIToApiSort(v: string): "newest" | "price_desc" {
	if (v === "1") return "newest";
	// "popular" and any other fallbacks -> price_desc
	return "price_desc";
}

export default function SortDropdown({ sort }: { sort: string }) {
	const router = useRouter();
	const sp = useSearchParams();

	function updateSort(nextSort: string) {
		const params = new URLSearchParams(sp?.toString() || "");
		params.set("sort", nextSort);
		params.set("page", "1");
		router.push(`?${params.toString()}`, { scroll: false });
	}

	return (
		<div className="sort-dropdown">
			<label>Sort by</label>
			<select
				className="form-select"
				defaultValue={mapApiSortToUI(sort)}
				onChange={(e) => {
					const apiSort = mapUIToApiSort(e.target.value);
					updateSort(apiSort);
				}}
			>
				<option value="popular">Most Popular</option>
				<option value="1">Newest</option>
				<option value="2">Top Rated</option>
			</select>
		</div>
	);
}
