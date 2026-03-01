"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CourseResources, {
	type CourseResource,
} from "@/components/Learn/CourseResources";
import CourseFeedback from "@/components/Learn/CourseFeedback";
import IssueCertificateButton from "@/components/Learn/IssueCertificateButton";

type Lesson = {
	id: number;
	title: string;
	duration: number | null;
	isPreview: boolean;
	videoUrl: string | null;
	// Optional, provided by server: lesson watch status
	progressStatus?: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
};

type Section = {
	id: number;
	title: string;
	order: number;
	lessons: Lesson[];
};

type Props = {
	courseId: number;
	courseSlug: string;
	sections: Section[];
	canIssueCertificate?: boolean;
	hasCertificate?: boolean;
	certificateId?: number | null;
	certificateNo?: string | null;
};

export default function LearnClient({
	courseId,
	courseSlug,
	sections,
	canIssueCertificate = false,
	hasCertificate = false,
	certificateId = null,
	certificateNo = null,
}: Props) {
	const router = useRouter();

	const firstPlayableLesson = useMemo(() => {
		for (const s of sections) {
			for (const l of s.lessons) {
				if (l.videoUrl) return l.id;
			}
		}
		return sections[0]?.lessons[0]?.id ?? null;
	}, [sections]);

	const [selectedLessonId, setSelectedLessonId] = useState<number | null>(
		firstPlayableLesson
	);

	const selectedLesson = useMemo(() => {
		for (const s of sections) {
			for (const l of s.lessons) if (l.id === selectedLessonId) return l;
		}
		return null;
	}, [sections, selectedLessonId]);

	// ---- Progress update on Play ----
	async function handlePlay(lessonId: number) {
		setSelectedLessonId(lessonId);
		try {
			const res = await fetch("/api/learn/progress", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ courseId, lessonId, event: "START" }),
			});
			// Optional: check response, but even on failure we still swap the video
			if (!res.ok) {
				// console.warn("progress post failed");
			}
			// Refresh server component so the top progress bar updates
			router.refresh();
		} catch {
			// Swallow errors to keep UI responsive
		}
	}

	// ---- Resources for selected lesson (or course-level if none) ----
	type Resource = CourseResource;
	const [resources, setResources] = useState<Resource[]>([]);
	const [loadingRes, setLoadingRes] = useState(false);

	useEffect(() => {
		let alive = true;
		const run = async () => {
			if (!courseId) return;
			setLoadingRes(true);
			try {
				const params = new URLSearchParams({
					courseId: String(courseId),
				});
				const res = await fetch(`/api/resources?${params.toString()}`, {
					cache: "no-store",
				});
				const data = await res.json();
				if (!res.ok)
					throw new Error(data?.error || "Failed to load resources");

				if (alive) {
					const list = Array.isArray(data?.resources)
						? data.resources
						: [];

					const toResource = (r: unknown): Resource | null => {
						if (typeof r !== "object" || r === null) return null;
						const obj = r as Record<string, unknown>;

						const id = typeof obj.id === "number" ? obj.id : null;
						const fileUrl =
							typeof obj.fileUrl === "string"
								? obj.fileUrl
								: null;
						const fileName =
							typeof obj.fileName === "string"
								? obj.fileName
								: null;
						const title =
							typeof obj.title === "string" ? obj.title : null;

						if (
							id === null ||
							fileUrl === null ||
							fileName === null
						)
							return null;
						return { id, title, fileUrl, fileName } as Resource;
					};

					setResources(
						list
							.map(toResource)
							.filter((x: any): x is Resource => x !== null)
					);
				}
			} catch {
				if (alive) setResources([]);
			} finally {
				if (alive) setLoadingRes(false);
			}
		};
		run();
		return () => {
			alive = false;
		};
	}, [courseId]);

	// ---- Player renderer ----
	// --- Track HTML5 playback to update LessonProgress ---
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const lastTickRef = useRef<number>(0);
	const lastSentBucketRef = useRef<number>(-1);

	// Whenever selected lesson changes, reset tickers
	useEffect(() => {
		lastTickRef.current = 0;
		lastSentBucketRef.current = -1;
	}, [selectedLessonId]);

	async function sendProgress(delta: number, position: number) {
		if (!selectedLessonId) return;
		try {
			await fetch("/api/learn/progress", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					courseId,
					lessonId: selectedLessonId,
					event: "PROGRESS",
					deltaWatchedSec: Math.max(0, Math.floor(delta)),
					positionSec: Math.max(0, Math.floor(position)),
				}),
			});
		} catch {}
	}

	async function sendComplete(position: number) {
		if (!selectedLessonId) return;
		try {
			await fetch("/api/learn/progress", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					courseId,
					lessonId: selectedLessonId,
					event: "COMPLETE",
					positionSec: Math.max(0, Math.floor(position)),
				}),
			});
			// Refresh to pick up updated statuses
			router.refresh();
		} catch {}
	}

	const renderPlayer = () => {
		const url = selectedLesson?.videoUrl || null;
		if (!url) {
			return (
				<div className="ratio ratio-16x9 bg-light rounded">
					<div className="d-flex align-items-center justify-content-center text-muted">
						Select a lesson to play
					</div>
				</div>
			);
		}

		// YouTube
		const isYouTube = /youtube\.com|youtu\.be/.test(url);
		if (isYouTube) {
			const videoIdMatch = url.match(
				/[?&]v=([^&#]+)|youtu\.be\/([^?&#]+)/
			);
			const videoId = videoIdMatch
				? videoIdMatch[1] || videoIdMatch[2]
				: null;
			const embed = videoId
				? `https://www.youtube.com/embed/${videoId}`
				: url;
			return (
				<div className="ratio ratio-16x9 rounded overflow-hidden">
					<iframe
						src={embed}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="border-0"
					/>
				</div>
			);
		}

		// HTML5 video
		return (
			<div className="ratio ratio-16x9 bg-black rounded overflow-hidden">
				<video
					ref={videoRef}
					src={url}
					controls
					className="w-100 h-100"
					onTimeUpdate={(e) => {
						const v = e.currentTarget as HTMLVideoElement;
						// Bucket by 5-second intervals to limit requests
						const bucket = Math.floor((v.currentTime || 0) / 5);
						if (bucket !== lastSentBucketRef.current) {
							const last = lastTickRef.current || 0;
							const delta = Math.max(
								0,
								(v.currentTime || 0) - last
							);
							lastTickRef.current = v.currentTime || 0;
							lastSentBucketRef.current = bucket;
							if (delta > 0.5)
								void sendProgress(delta, v.currentTime || 0);
						}
					}}
					onEnded={(e) => {
						const v = e.currentTarget as HTMLVideoElement;
						void sendComplete(v.currentTime || 0);
					}}
				/>
			</div>
		);
	};

	return (
		<div className="row g-4">
			{/* Left: Modules */}
			<div className="col-lg-4">
				<div className="card shadow-sm">
					<div className="card-body">
						<h2 className="h6 fw-semibold mb-3">Course Content</h2>
						<div className="accordion" id="courseAccordion">
							{sections.map((sec) => {
								const itemId = `section-${sec.id}`;
								return (
									<div
										className="accordion-item"
										key={sec.id}
									>
										<h2
											className="accordion-header"
											id={`${itemId}-hdr`}
										>
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target={`#${itemId}`}
												aria-expanded="false"
												aria-controls={itemId}
											>
												{sec.title}
											</button>
										</h2>
										<div
											id={itemId}
											className="accordion-collapse collapse"
											aria-labelledby={`${itemId}-hdr`}
											data-bs-parent="#courseAccordion"
										>
											<div className="accordion-body p-0">
												<ul className="list-group list-group-flush">
													{sec.lessons.map((lsn) => (
														<li
															className="list-group-item d-flex justify-content-between align-items-center"
															key={lsn.id}
														>
															<span className="text-truncate pe-3 d-flex align-items-center gap-2">
																<span className="text-truncate">
																	{lsn.title}
																</span>
																{lsn.progressStatus ===
																	"COMPLETED" && (
																	<span className="badge bg-success">
																		Watched
																	</span>
																)}
															</span>
															<button
																className="btn btn-sm btn-outline-primary"
																onClick={() =>
																	handlePlay(
																		lsn.id
																	)
																}
															>
																Play
															</button>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<div className="card shadow-sm mt-4">
					<div className="card-body">
                        <h3 className="h6 fw-semibold mb-2">Quick Actions</h3>
                        <Link
                            href={`/course/${courseSlug}`}
                            className="btn btn-outline-secondary w-100"
                        >
                            View Course Page
                        </Link>
                        <Link
                            href={`/learn/${courseId}/community`}
                            className="btn btn-outline-secondary w-100 mt-2"
                        >
                            Community
                        </Link>
                        <Link
                            href={`/learn/${courseId}/quizzes`}
                            className="btn btn-outline-primary w-100 mt-2"
                        >
                            Quizzes
                        </Link>
                        {canIssueCertificate && (
                            <div className="mt-2">
                                <IssueCertificateButton
                                    courseId={courseId}
                                    hasCertificate={hasCertificate}
									certificateId={certificateId ?? null}
									certificateNo={certificateNo ?? null}
								/>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Right: Video + Tabs */}
			<div className="col-lg-8">
				<div className="card shadow-sm mb-4">
					<div className="card-body">{renderPlayer()}</div>
				</div>

				<div className="card shadow-sm">
					<div className="card-body">
						{/* Tabs */}
						<ul
							className="nav nav-tabs"
							id="learnTabs"
							role="tablist"
						>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link active"
									id="resources-tab"
									data-bs-toggle="tab"
									data-bs-target="#resources-pane"
									type="button"
									role="tab"
									aria-controls="resources-pane"
									aria-selected="true"
								>
									Resources
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link"
									id="reviews-tab"
									data-bs-toggle="tab"
									data-bs-target="#reviews-pane"
									type="button"
									role="tab"
									aria-controls="reviews-pane"
									aria-selected="false"
								>
									Give Feedback
								</button>
							</li>
						</ul>

						<div className="tab-content pt-3" id="learnTabsContent">
							{/* Resources Tab */}
							<div
								className="tab-pane fade show active"
								id="resources-pane"
								role="tabpanel"
								aria-labelledby="resources-tab"
							>
								<CourseResources
									resources={resources}
									loading={loadingRes}
								/>
							</div>

							{/* Reviews Tab */}
							<div
								className="tab-pane fade"
								id="reviews-pane"
								role="tabpanel"
								aria-labelledby="reviews-tab"
							>
								<CourseFeedback courseId={courseId} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
