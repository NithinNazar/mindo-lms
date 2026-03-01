"use client";

import { FormEvent, useState } from "react";

type VerificationResult = {
	certificateNo: string;
	verificationCode: string;
	issuedAt: string;
	courseTitle: string;
	recipientName: string | null;
	hours: number | null;
	grade: string | null;
	status: string;
};

export default function VerifyCertificateClient() {
	const [identifier, setIdentifier] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [result, setResult] = useState<VerificationResult | null>(null);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError(null);
		setResult(null);

		const trimmed = identifier.trim();
		if (!trimmed) {
			setError("Enter a certificate number or verification code.");
			return;
		}

		try {
			setLoading(true);
			const res = await fetch("/api/certificates/verify", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ identifier: trimmed }),
			});

			const data = await res.json();
			if (!res.ok) {
				setError(data?.error || "Unable to verify certificate.");
				return;
			}

			setResult({
				certificateNo: data.certificate.certificateNo,
				verificationCode: data.certificate.verificationCode,
				issuedAt: data.certificate.issuedAt,
				courseTitle: data.certificate.courseTitle,
				recipientName: data.certificate.recipientName,
				hours: data.certificate.hours,
				grade: data.certificate.grade,
				status: data.certificate.status,
			});
		} catch {
			setError("Unable to verify certificate. Please try again later.");
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="card shadow-sm">
			<div className="card-body">
				<form className="row gy-3" onSubmit={handleSubmit}>
					<div className="col-12">
						<label
							htmlFor="certificate-identifier"
							className="form-label"
						>
							Certificate Number or Verification Code
						</label>
						<input
							id="certificate-identifier"
							className="form-control"
							type="text"
							placeholder="e.g. ACAD-2025-123456 or ABC123XYZ9"
							value={identifier}
							onChange={(e) => setIdentifier(e.target.value)}
							autoComplete="off"
							required
						/>
					</div>

					<div className="col-12 d-flex align-items-center gap-3">
						<button
							type="submit"
							className="btn btn-primary"
							disabled={loading}
						>
							{loading ? "Verifying..." : "Verify Certificate"}
						</button>
						<button
							type="button"
							className="btn btn-link px-0"
							onClick={() => {
								setIdentifier("");
								setResult(null);
								setError(null);
							}}
							disabled={loading}
						>
							Clear
						</button>
					</div>
				</form>

				{error && (
					<div className="alert alert-danger mt-4" role="alert">
						{error}
					</div>
				)}

				{result && (
					<div className="alert alert-success mt-4" role="status">
						<h2 className="h5 mb-3">Certificate Verified</h2>
						<dl className="row mb-0">
							<div className="col-sm-5">Certificate Number</div>
							<div className="col-sm-7 fw-semibold">
								{result.certificateNo}
							</div>
							<div className="col-sm-5">Verification Code</div>
							<div className="col-sm-7 fw-semibold text-uppercase">
								{result.verificationCode}
							</div>
							<div className="col-sm-5">Recipient</div>
							<div className="col-sm-7">
								{result.recipientName || "Not available"}
							</div>
							<div className="col-sm-5">Course</div>
							<div className="col-sm-7">{result.courseTitle}</div>
							<div className="col-sm-5">Issued On</div>
							<div className="col-sm-7">
								{new Date(result.issuedAt).toLocaleDateString()}
							</div>
							<div className="col-sm-5">Grade</div>
							<div className="col-sm-7">
								{result.grade ?? "-"}
							</div>
							<div className="col-sm-5">Hours</div>
							<div className="col-sm-7">
								{result.hours ?? "-"}
							</div>
							<div className="col-sm-5">Status</div>
							<div className="col-sm-7 text-capitalize">
								{result.status.toLowerCase()}
							</div>
						</dl>
					</div>
				)}
			</div>
		</div>
	);
}
