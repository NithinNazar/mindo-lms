import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import SectionForm from "./SectionForm";
import LessonForm from "./LessonForm";
import DeleteLessonButton from "./DeleteLessonButton";

export const dynamic = "force-dynamic";

export default async function LessonsPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const session = await auth();
	if (!session || !["ADMIN", "INSTRUCTOR"].includes(session.user?.role))
		redirect("/");

	const courseId = Number(id);
	const course = await prisma.course.findUnique({
		where: { id: courseId },
		include: {
			sections: {
				orderBy: { order: "asc" },
				include: { lessons: { orderBy: { id: "asc" } } },
			},
		},
	});

	if (!course) notFound();

	return (
		<div className="container">
			<div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
				<h1 className="h4 mb-0">
					Manage Sections & Lessons — {course.title}
				</h1>
				<Link
					href="/instructor/courses"
					className="btn btn-outline-secondary btn-sm"
				>
					Back to Courses
				</Link>
			</div>

			<div className="row g-4">
				<div className="col-lg-4">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Add Section</h5>
							<SectionForm courseId={courseId} />
						</div>
					</div>
				</div>

				<div className="col-lg-8">
					<div className="accordion" id="sectionsAccordion">
						{course.sections.length === 0 ? (
							<p className="text-muted">
								No sections yet. Add your first section on the
								left.
							</p>
						) : (
							course.sections.map((s, idx) => (
								<div className="accordion-item" key={s.id}>
									<h2
										className="accordion-header"
										id={`heading-${s.id}`}
									>
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target={`#collapse-${s.id}`}
											aria-expanded="false"
											aria-controls={`collapse-${s.id}`}
										>
											{idx + 1}. {s.title}
										</button>
									</h2>
									<div
										id={`collapse-${s.id}`}
										className="accordion-collapse collapse"
										aria-labelledby={`heading-${s.id}`}
										data-bs-parent="#sectionsAccordion"
									>
										<div className="accordion-body">
											<div className="mb-3">
												<h6>
													Add Lesson to this section
												</h6>
												<LessonForm
													courseId={courseId}
													sectionId={s.id}
												/>
											</div>

											{s.lessons.length === 0 ? (
												<p className="text-muted">
													No lessons in this section
													yet.
												</p>
											) : (
												<ul className="list-group">
													{s.lessons.map((l) => (
														<li
															key={l.id}
															className="list-group-item d-flex justify-content-between align-items-center"
														>
															<div>
																<div className="fw-semibold">
																	{l.title}
																</div>
																<div className="small text-muted">
																	{l.type}
																	{l.isPreview
																		? " • Preview"
																		: ""}
																	{l.duration
																		? ` • ${Math.floor(
																				l.duration /
																					60
																		  )}m ${
																				l.duration %
																				60
																		  }s`
																		: ""}
																</div>
															</div>
														<DeleteLessonButton
															lessonId={l.id}
															courseId={courseId}
														/>
														</li>
													))}
												</ul>
											)}
										</div>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
