"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBox({ q }: { q: string }) {
	const router = useRouter();
	const sp = useSearchParams();

	function updateQuery(nextQ: string) {
		const params = new URLSearchParams(sp?.toString() || "");
		if (nextQ) params.set("q", nextQ);
		else params.delete("q");
		params.set("page", "1");
		router.push(`?${params.toString()}`, { scroll: false });
	}

	return (
		<div className="search-box">
			<input
				type="text"
				className="form-control"
				placeholder="Search instructors by name"
				defaultValue={q}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						const val = (
							e.currentTarget as HTMLInputElement
						).value.trim();
						updateQuery(val);
					}
				}}
			/>
			<button
				type="button"
				onClick={() => {
					const input =
						(document.querySelector(
							".search-box input.form-control"
						) as HTMLInputElement) || null;
					const val = (input?.value || "").trim();
					updateQuery(val);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<mask
						id="mask0_8036_13959"
						style={{ maskType: "luminance" }}
						maskUnits="userSpaceOnUse"
						x="1"
						y="1"
						width="22"
						height="22"
					>
						<path
							d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
							stroke="white"
							strokeWidth="1.5"
						/>
						<path
							opacity="0.5"
							d="M20 20L22 22"
							stroke="white"
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
					</mask>
					<g mask="url(#mask0_8036_13959)">
						<path d="M0 0H24V24H0V0Z" fill="#131F34" />
					</g>
				</svg>
			</button>
		</div>
	);
}
