"use client";

import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

type Announcement = {
	label: string;
	highlight: string | null;
	linkUrl: string | null;
};

const TopHeader: React.FC = () => {
	const { status } = useSession();

	const [announcement, setAnnouncement] = React.useState<Announcement | null>(
		null
	);

	React.useEffect(() => {
		let mounted = true;

		async function loadAnnouncement() {
			try {
				const res = await fetch("/api/announcement", {
					cache: "no-store",
				});
				if (!res.ok) return;
				const data = (await res.json()) as
					| (Announcement & { id?: number })
					| null;
				if (mounted) {
					setAnnouncement(
						data
							? {
									label: data.label,
									highlight: data.highlight,
									linkUrl: data.linkUrl,
							  }
							: null
					);
				}
			} catch (error) {
				console.error("Failed to load announcement", error);
			}
		}

		loadAnnouncement();

		return () => {
			mounted = false;
		};
	}, []);

	const fallbackAnnouncement: Announcement = React.useMemo(
		() => ({
			label: "",
			highlight: "",
			linkUrl: "/courses",
		}),
		[]
	);

	const activeAnnouncement = announcement ?? fallbackAnnouncement;

	const messageContent = React.useMemo(() => {
		const { label, highlight } = activeAnnouncement;
		if (!highlight) {
			return <span>{label}</span>;
		}

		const idx = label.indexOf(highlight);
		if (idx === -1) {
			return (
				<span>
					{label} <strong>{highlight}</strong>
				</span>
			);
		}

		return (
			<span>
				{label.slice(0, idx)}
				<strong>{label.slice(idx, idx + highlight.length)}</strong>
				{label.slice(idx + highlight.length)}
			</span>
		);
	}, [activeAnnouncement]);

	const messageWrapper = activeAnnouncement.linkUrl ? (
		<Link
			href={activeAnnouncement.linkUrl}
			aria-label={activeAnnouncement.label}
			className="d-inline-flex align-items-center gap-2"
		>
			{messageContent}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="14"
				viewBox="0 0 18 14"
				fill="none"
				aria-hidden="true"
				focusable="false"
			>
				<path
					opacity="0.5"
					d="M0.75 6.25C0.551088 6.25 0.360322 6.32902 0.21967 6.46967C0.0790175 6.61032 0 6.80109 0 7C0 7.19891 0.0790175 7.38968 0.21967 7.53033C0.360322 7.67098 0.551088 7.75 0.75 7.75V6.25ZM0.75 7.75H16.75V6.25H0.75V7.75Z"
					fill="white"
				/>
				<path
					d="M10.75 1L16.75 7L10.75 13"
					stroke="white"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</Link>
	) : (
		<span className="d-inline-flex align-items-center gap-2 text-white">
			{messageContent}
		</span>
	);

	return (
		// Start Top Header Area
		<div className={`top-header-area`}>
			<div className="container">
				<div className="row justify-content-center align-items-center">
					<div className="col-lg-6 col-md-6">
						<div className="top-header-content">
							{messageWrapper}
						</div>
					</div>

					<div className="col-lg-6 col-md-6">
						<div className="top-header-link">
							{status === "authenticated" ? (
								<button
									type="button"
									className="account-btn"
									onClick={() =>
										signOut({ callbackUrl: "/" })
									}
									aria-label="Logout"
									style={{ border: "none" }}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										aria-hidden="true"
										focusable="false"
									>
										<path
											d="M2.00098 11.999H16.001M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999"
											stroke="white"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											opacity="0.5"
											d="M9.00195 7C9.01395 4.825 9.11095 3.647 9.87895 2.879C10.758 2 12.172 2 15 2H16C18.829 2 20.243 2 21.122 2.879C22 3.757 22 5.172 22 8V16C22 18.828 22 20.243 21.122 21.121C20.242 22 18.829 22 16 22H15C12.172 22 10.758 22 9.87895 21.121C9.11095 20.353 9.01395 19.175 9.00195 17"
											stroke="white"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
									</svg>
									<span>Logout</span>
								</button>
							) : (
								<Link
									href="/login"
									className="account-btn"
									aria-label="Login"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										aria-hidden="true"
										focusable="false"
									>
										<path
											d="M2.00098 11.999H16.001M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999"
											stroke="white"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											opacity="0.5"
											d="M9.00195 7C9.01395 4.825 9.11095 3.647 9.87895 2.879C10.758 2 12.172 2 15 2H16C18.829 2 20.243 2 21.122 2.879C22 3.757 22 5.172 22 8V16C22 18.828 22 20.243 21.122 21.121C20.242 22 18.829 22 16 22H15C12.172 22 10.758 22 9.87895 21.121C9.11095 20.353 9.01395 19.175 9.00195 17"
											stroke="white"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
									</svg>
									<span>Login</span>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
		// End Top Header Area
	);
};

export default TopHeader;
