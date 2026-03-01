"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/stores/useCartStore";

export default function ClearCartOnSuccess({
	sessionId,
}: {
	sessionId: string | null;
}) {
	const clearCart = useCartStore((s) => s.clearCart);
	const [status, setStatus] = useState<
		"idle" | "verifying" | "cleared" | "skipped" | "error"
	>("idle");

	useEffect(() => {
		let mounted = true;

		const run = async () => {
			if (!sessionId) {
				setStatus("skipped");
				return;
			}
			setStatus("verifying");
			try {
				const res = await fetch(
					`/api/checkout/verify-session?session_id=${encodeURIComponent(
						sessionId
					)}`,
					{
						method: "GET",
						headers: { "Cache-Control": "no-store" },
					}
				);
				const data = await res.json();
				if (!res.ok || !data.ok) {
					throw new Error(data?.error || "Verification failed");
				}
				if (data.paid) {
					clearCart();
					if (mounted) setStatus("cleared");
				} else {
					if (mounted) setStatus("skipped");
				}
			} catch (e) {
				console.error(e);
				if (mounted) setStatus("error");
			}
		};

		run();
		return () => {
			mounted = false;
		};
	}, [sessionId, clearCart]);

	// Optional: you can render small UX hints
	if (status === "verifying") return null;
	return null;
}
