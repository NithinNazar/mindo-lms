"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const InstApply = () => {
	const { data: session, status } = useSession();
	const role = session?.user?.role as string | undefined;
	const isInstructor = role === "INSTRUCTOR" || role === "ADMIN";
	const isUnauthenticated = status === "unauthenticated";
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [expertise, setExpertise] = useState("");
	const [topic, setTopic] = useState("");
	const [summary, setSummary] = useState("");
	useEffect(() => {
		function simpleParallax(className: string, modifier: number) {
			const paras = document.getElementsByClassName(className);
			// Apply initial background styles to each parallax element
			for (let i = 0; i < paras.length; i++) {
				const el = paras[i] as HTMLElement;
				el.setAttribute(
					"style",
					"background-repeat: no-repeat; background-attachment: fixed; background-size: cover; background-position: center center;"
				);
			}
			let rafId: number;
			const sp = () => {
				for (let i = 0; i < paras.length; i++) {
					const el = paras[i] as HTMLElement;
					const x =
						(el.getBoundingClientRect().top as number) / modifier;
					const y = Math.round(x * 100) / 100;
					el.style.backgroundPosition = "center " + y + "px";
				}
				rafId = window.requestAnimationFrame(sp);
			};
			rafId = window.requestAnimationFrame(sp);
			// Return a cleanup function to cancel the animation frame loop
			return () => {
				if (rafId) {
					window.cancelAnimationFrame(rafId);
				}
			};
		}
		const cleanup = simpleParallax("bgImageParallax", 9);
		return cleanup;
	}, []);

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch("/api/instructor/apply", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name,
					email,
					expertise,
					topic,
					summary,
				}),
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok) throw new Error(data?.error || "Failed to submit");
			toast.success("Application submitted. We will review soon.");
			setExpertise("");
			setTopic("");
			setSummary("");
		} catch (err: any) {
			toast.error(err?.message || "Something went wrong");
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="become-an-instructor-apply-area bgImageParallax">
			<div className="container">
				{isInstructor ? (
					<div className="become-an-instructor-apply-form section-title-animation animation-style2">
						<h2 className="title-animation">
							You're already an instructor
						</h2>
						<p className="text-muted">
							You can manage your content from the Instructor
							Dashboard.
						</p>
						<Link href="/instructor/dashboard" className="default-btn">
							Go to Instructor Dashboard
						</Link>
					</div>
				) : isUnauthenticated ? (
					<div className="become-an-instructor-apply-form section-title-animation animation-style2">
						<h2 className="title-animation">
							Apply to Become an Instructor
						</h2>
						<p className="text-muted mb-3">
							You need to be logged in to submit an application.
						</p>
						<Link
							href={`/login?callbackUrl=${encodeURIComponent(
								"/become-an-instructor"
							)}`}
							className="default-btn"
						>
							Login to Continue
						</Link>
					</div>
				) : (
					<form
						onSubmit={onSubmit}
						className="become-an-instructor-apply-form section-title-animation animation-style2"
					>
						<h2 className="title-animation">
							Apply to Become an Instructor
						</h2>
						<div className="form-group">
							<label>Full Name</label>
							<input
								type="text"
								className="form-control"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder={session?.user?.name ?? ""}
							/>
						</div>
						<div className="form-group">
							<label>Email Address</label>
							<input
								type="email"
								className="form-control"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder={session?.user?.email ?? ""}
							/>
						</div>
						<div className="form-group">
							<label>Area of Expertise</label>
							<input
								type="text"
								className="form-control"
								value={expertise}
								onChange={(e) => setExpertise(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Proposed Course Topic</label>
							<input
								type="text"
								className="form-control"
								value={topic}
								onChange={(e) => setTopic(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Experience Summary</label>
							<textarea
								className="form-control"
								value={summary}
								onChange={(e) => setSummary(e.target.value)}
							></textarea>
						</div>
						<button
							type="submit"
							className="default-btn"
							disabled={loading}
						>
							Submit Application
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
					</form>
				)}
			</div>
		</div>
	);
};

export default InstApply;
