import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

function StatusBadge({ status }: { status: string }) {
	const map: Record<string, string> = {
		DRAFT: "secondary",
		PENDING: "info",
		HOLD: "warning",
		REJECTED: "danger",
		PUBLISHED: "success",
	};
	const cls = map[status] ?? "secondary";
	return <span className={`badge bg-${cls}`}>{status}</span>;
}

type PageProps = {
	searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AdminCoursesPage({ searchParams }: PageProps) {
	const session = await auth();
	if (!session || session.user?.role !== "ADMIN") redirect("/");

	const courses = await prisma.course.findMany({
		orderBy: { createdAt: "desc" },
		select: {
			id: true,
			title: true,
			slug: true,
			status: true,
			createdAt: true,
			instructor: { select: { id: true, name: true, email: true } },
			category: { select: { name: true } },
			subcategory: { select: { name: true } },
		},
	});

	const sp = searchParams ? await searchParams : undefined;
	const errorParam = sp?.error;
	const errorMessage = Array.isArray(errorParam)
		? errorParam[0]
		: errorParam ?? null;

	return (
		<div className="container">
			{errorMessage ? (
				<div
					className="alert alert-warning d-flex justify-content-between align-items-center"
					role="alert"
				>
					<span>{errorMessage}</span>
					<Link
						href="/admin/courses"
						className="btn-close"
						title="Dismiss"
						aria-label="Dismiss"
					/>
				</div>
			) : null}
			<div className="d-flex align-items-center justify-content-between mb-4">
				<h1 className="h4 mb-0">All Courses (Admin Review)</h1>
				<Link
					href="/admin"
					className="btn btn-outline-secondary btn-sm"
				>
					Admin Home
				</Link>
			</div>

			<div className="card shadow-sm">
				<div className="card-body">
					{courses.length === 0 ? (
						<p className="text-muted mb-0">No courses yet.</p>
					) : (
						<div className="table-responsive">
							<table className="table align-middle">
								<thead>
									<tr>
										<th style={{ width: 48 }}>#</th>
										<th>Title</th>
										<th>Instructor</th>
										<th>Category</th>
										<th>Status</th>
										<th>Created</th>
										<th style={{ width: 320 }}>Actions</th>
									</tr>
								</thead>
								<tbody>
									{courses.map((c, idx) => (
										<tr key={c.id}>
											<td className="text-muted">
												{idx + 1}
											</td>
											<td>
												<div className="fw-semibold">
													{c.title}
												</div>
												<div className="small text-muted">
													/{c.slug}
												</div>
											</td>
											<td>
												<div className="small">
													{c.instructor?.name ?? "—"}
												</div>
												<div className="small text-muted">
													{c.instructor?.email}
												</div>
											</td>
											<td>
												<div className="small">
													{c.category?.name ?? "—"} /{" "}
													{c.subcategory?.name ?? "—"}
												</div>
											</td>
											<td>
												<StatusBadge
													status={c.status}
												/>
											</td>
											<td className="small text-muted">
												{new Date(
													c.createdAt
												).toLocaleString()}
											</td>
											<td>
												<div className="d-flex flex-wrap gap-2">
													{/* Approve */}
													<form
														action={async (fd) => {
															"use server";
															const {
																setCourseStatus,
															} = await import(
																"./actions"
															);
															fd.set(
																"courseId",
																String(c.id)
															);
															fd.set(
																"status",
																"PUBLISHED"
															);
															await setCourseStatus(
																fd
															);
														}}
													>
														<button
															className="btn btn-success btn-sm"
															type="submit"
															disabled={
																c.status ===
																"PUBLISHED"
															}
															title="Approve (Publish)"
														>
															Approve
														</button>
													</form>

													{/* Hold */}
													<form
														action={async (fd) => {
															"use server";
															const {
																setCourseStatus,
															} = await import(
																"./actions"
															);
															fd.set(
																"courseId",
																String(c.id)
															);
															fd.set(
																"status",
																"HOLD"
															);
															await setCourseStatus(
																fd
															);
														}}
													>
														<button
															className="btn btn-warning btn-sm"
															type="submit"
															disabled={
																c.status ===
																"HOLD"
															}
															title="Put on Hold"
														>
															Hold
														</button>
													</form>

													{/* Reject */}
													<form
														action={async (fd) => {
															"use server";
															const {
																setCourseStatus,
															} = await import(
																"./actions"
															);
															fd.set(
																"courseId",
																String(c.id)
															);
															fd.set(
																"status",
																"REJECTED"
															);
															await setCourseStatus(
																fd
															);
														}}
													>
														<button
															className="btn btn-outline-danger btn-sm"
															type="submit"
															disabled={
																c.status ===
																"REJECTED"
															}
															title="Reject"
														>
															Reject
														</button>
													</form>

													{/* Delete with modal confirm */}
													<button
														className="btn btn-danger btn-sm"
														data-bs-toggle="modal"
														data-bs-target={`#deleteCourseModal-${c.id}`}
														title="Delete course and all related data"
													>
														Delete
													</button>

													{/* Modal */}
													<div
														className="modal fade"
														id={`deleteCourseModal-${c.id}`}
														tabIndex={-1}
														aria-labelledby={`deleteCourseModalLabel-${c.id}`}
														aria-hidden="true"
													>
														<div className="modal-dialog modal-dialog-centered">
															<div className="modal-content">
																<div className="modal-header">
																	<h5
																		className="modal-title"
																		id={`deleteCourseModalLabel-${c.id}`}
																	>
																		Delete
																		Course
																	</h5>
																	<button
																		type="button"
																		className="btn-close"
																		data-bs-dismiss="modal"
																		aria-label="Close"
																	/>
																</div>
																<div className="modal-body">
																	<p className="mb-1">
																		Are you
																		sure you
																		want to
																		delete
																		<span className="fw-semibold">
																			{" "}
																			“
																			{
																				c.title
																			}
																			”
																		</span>
																		?
																	</p>
																	<p className="text-muted small mb-0">
																		This
																		will
																		remove
																		sections,
																		lessons,
																		resources,
																		reviews,
																		and
																		enrollments.
																	</p>
																</div>
																<div className="modal-footer">
																	<button
																		type="button"
																		className="btn btn-outline-secondary"
																		data-bs-dismiss="modal"
																	>
																		Cancel
																	</button>
																	<form
																		action={async (
																			fd
																		) => {
																			"use server";
																			const {
																				deleteCourse,
																			} =
																				await import(
																					"./actions"
																				);
																			fd.set(
																				"courseId",
																				String(
																					c.id
																				)
																			);
																			await deleteCourse(
																				fd
																			);
																		}}
																	>
																		<button
																			className="btn btn-danger"
																			type="submit"
																			data-bs-dismiss="modal"
																		>
																			Yes,
																			delete
																		</button>
																	</form>
																</div>
															</div>
														</div>
													</div>

													{/* (Optional) View links */}
													<Link
														href={`/instructor/courses/${c.id}/edit`}
														className="btn btn-outline-secondary btn-sm"
														title="Open in instructor edit"
													>
														Edit (Instructor)
													</Link>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
