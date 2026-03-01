// src/components/Cart/CheckoutButton.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/stores/useCartStore";

// If you’re using NextAuth, get studentId from session on server
// For now, we accept an optional prop override
type Props = { studentId?: string };

export default function CheckoutButton({ studentId }: Props) {
	const [loading, setLoading] = useState(false);
	const items = useCartStore((s) => s.items);
	const router = useRouter();

	const handleCheckout = async () => {
		if (!items.length) return;

		if (!studentId) {
			router.push("/login?callbackUrl=/cart");
			return;
		}

		try {
			setLoading(true);
			const res = await fetch("/api/checkout/create-session", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					items,
					studentId, // optional if your API resolves from auth/email
				}),
			});

			const data = await res.json();
			if (!res.ok) {
				throw new Error(data?.error || "Failed to create session");
			}

			if (data.url) {
				window.location.href = data.url;
				return;
			}

			throw new Error("No checkout URL returned from server.");
		} catch (err) {
			console.error(err);
			alert("Checkout failed. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<button
			type="button"
			className="default-btn"
			onClick={handleCheckout}
			disabled={loading || items.length === 0}
		>
			{loading ? "Redirecting..." : "Proceed To Checkout"}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="14"
				viewBox="0 0 18 14"
				fill="none"
			>
				<path
					opacity="0.5"
					d="M16.25 6.75V7.25H1.25V6.75H16.25Z"
					fill="white"
					stroke="white"
				/>
				<path
					d="M10.75 1L16.75 7L10.75 13"
					stroke="white"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
}
