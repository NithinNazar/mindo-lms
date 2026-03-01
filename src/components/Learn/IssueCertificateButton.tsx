"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function IssueCertificateButton({
	courseId,
	hasCertificate,
	certificateId,
	certificateNo,
}: {
	courseId: number;
	hasCertificate: boolean;
	certificateId: number | null;
	certificateNo: string | null;
}) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	async function handleIssue() {
		setLoading(true);
		setError(null);
		try {
			const res = await fetch("/api/learn/certificate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ courseId }),
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok) {
				throw new Error(data?.error || "Failed to issue certificate");
			}
			// Refresh to display issued certificate info
			router.refresh();
		} catch (e: any) {
			setError(e?.message || "Something went wrong");
		} finally {
			setLoading(false);
		}
	}

	if (hasCertificate) {
		return (
			<div className="d-flex align-items-center gap-3 flex-wrap">
				<span className="badge bg-success">Certificate issued</span>
				{certificateNo && (
					<span className="text-muted small">
						No: {certificateNo}
					</span>
				)}
				{typeof certificateId === "number" && (
					<a
						href={`/certificates/${certificateId}`}
						className="btn btn-outline-primary btn-sm w-100"
					>
						View Certificate
					</a>
				)}
			</div>
		);
	}

	return (
		<div className="d-flex flex-column align-items-start gap-2">
			<button
				type="button"
				className="btn btn-primary"
				disabled={loading}
				onClick={handleIssue}
			>
				{loading ? "Issuing…" : "Generate Certificate"}
			</button>
			{error && <div className="text-danger small">{error}</div>}
		</div>
	);
}
