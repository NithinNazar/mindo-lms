"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

function getInitials(name?: string) {
	if (!name) return "U";
	const parts = name.trim().split(/\s+/);
	const first = parts[0]?.[0] ?? "";
	const last = parts[parts.length - 1]?.[0] ?? "";
	return (first + last).toUpperCase() || first.toUpperCase() || "U";
}

function getAvatarSrcSafe(user: unknown): string {
	if (typeof user !== "object" || user === null) return "";
	const obj = user as Record<string, unknown>;
	const avatar =
		typeof obj.avatarUrl === "string"
			? (obj.avatarUrl as string)
			: undefined;
	const image =
		typeof obj.image === "string" ? (obj.image as string) : undefined;
	return avatar ?? image ?? "";
}

export default function AuthLinks() {
	const { data: session, status } = useSession();
	const user = session?.user;
	const role = session?.user?.role as string | undefined;
	const isAdmin = role === "ADMIN";
	const isInstructor = role === "INSTRUCTOR" || isAdmin;

	// NextAuth stores avatar at session.user.image by default; we also
	// support a custom session.user.avatarUrl if present.
	const avatarSrc = getAvatarSrcSafe(session?.user);

	const userAvatar = (
		<span
			className="user-avatar d-inline-flex align-items-center justify-content-center rounded-circle overflow-hidden"
			style={{ width: 36, height: 36, background: "#EFF3F7" }}
		>
			{avatarSrc ? (
				<Image
					src={avatarSrc}
					alt={user?.name || user?.email || "User"}
					width={36}
					height={36}
				/>
			) : (
				<span
					className="fw-semibold"
					style={{ fontSize: 12, color: "#131F34" }}
				>
					{getInitials(
						session?.user?.name || session?.user?.email || "U"
					)}
				</span>
			)}
		</span>
	);

	return (
		<>
			{status === "authenticated" ? (
				<div className="dropdown">
					<button
						className="btn d-inline-flex align-items-center gap-2 p-0 border-0 bg-transparent"
						type="button"
						id="userMenuDropdown"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{userAvatar}
						<span
							className="d-none d-xxl-inline text-dark ms-2"
							style={{ fontWeight: 600 }}
						>
							{session?.user?.name || session?.user?.email}
						</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M6 9l6 6 6-6"
								stroke="#131F34"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
					<ul
						className="dropdown-menu dropdown-menu-end"
						aria-labelledby="userMenuDropdown"
					>
						<li>
							<h6 className="dropdown-header">Student</h6>
						</li>
						<li>
							<Link
								className="dropdown-item"
								href="/dashboard"
								style={{ fontSize: 14 }}
							>
								Dashboard
							</Link>
						</li>
						<li>
							<Link
								className="dropdown-item"
								href="/dashboard/enrollments"
								style={{ fontSize: 14 }}
							>
								My Enrollments
							</Link>
						</li>
						<li>
							<Link
								className="dropdown-item"
								href="/favorites"
								style={{ fontSize: 14 }}
							>
								Favorites
							</Link>
						</li>
						<li>
							<Link
								className="dropdown-item"
								href="/account/profile"
								style={{ fontSize: 14 }}
							>
								Profile
							</Link>
						</li>
						<li>
							<hr className="dropdown-divider" />
						</li>
						{isInstructor && (
							<>
								<li>
									<h6 className="dropdown-header">
										Instructor
									</h6>
								</li>
								<li>
									<Link
										className="dropdown-item"
										href="/instructor/dashboard"
										style={{ fontSize: 14 }}
									>
										My Dashboard
									</Link>
								</li>
								<li>
									<Link
										className="dropdown-item"
										href="/instructor/courses"
										style={{ fontSize: 14 }}
									>
										My Courses
									</Link>
								</li>
								<li>
									<Link
										className="dropdown-item"
										href="/instructor/students"
										style={{ fontSize: 14 }}
									>
										My Students
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
							</>
						)}
						{isAdmin && (
							<>
								<li>
									<h6 className="dropdown-header">Admin</h6>
								</li>
								<li>
									<Link
										className="dropdown-item"
										href="/admin"
										style={{ fontSize: 14 }}
									>
										Admin Panel
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
							</>
						)}
						<li>
							<button
								className="dropdown-item text-danger border-0"
								onClick={() => signOut({ callbackUrl: "/" })}
								style={{ fontSize: 14 }}
							>
								Logout
							</button>
						</li>
					</ul>
				</div>
			) : (
				<Link
					href="/register"
					className="default-btn"
					style={{ gap: 0 }}
				>
					Register{" "}
					<span
						className="d-none d-xxl-flex align-items-center"
						style={{ gap: 10 }}
					>
						- It&rsquo;s Free{" "}
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
					</span>
				</Link>
			)}
		</>
	);
}
