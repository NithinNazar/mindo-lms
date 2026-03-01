import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import AssetForm from "./AssetForm";

export const dynamic = "force-dynamic";

export default async function AssetsPage({
	params,
}: {
	params: { id: string };
}) {
	const session = await auth();
	if (!session || !["ADMIN", "INSTRUCTOR"].includes(session.user?.role))
		redirect("/");

	const courseId = Number(params.id);
	const course = await prisma.course.findUnique({
		where: { id: courseId },
		include: { resources: { orderBy: { id: "desc" } } },
	});

	if (!course) notFound();

	return (
		<div className="container">
			<div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
				<h4 className="h4 mb-0">Course Assets — {course.title}</h4>
				<Link
					href="/instructor/courses"
					className="btn btn-outline-secondary btn-sm"
				>
					Back to Courses
				</Link>
			</div>

			<div className="row g-4">
				<div className="col-lg-5">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Add Asset</h5>
							<AssetForm courseId={courseId} />
						</div>
					</div>
				</div>

				<div className="col-lg-7">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Assets</h5>
							{course.resources.length === 0 ? (
								<p className="text-muted">
									No assets yet. Upload your first file on the
									left.
								</p>
							) : (
								<ul className="list-group list-group-flush">
									{course.resources.map((a) => (
										<li
											key={a.id}
											className="list-group-item d-flex justify-content-between align-items-start gap-3"
										>
											<div>
												<div className="fw-semibold">
													{a.title}
												</div>
												{a.description && (
													<div className="small text-muted mb-1">
														{a.description}
													</div>
												)}
												<div className="d-flex align-items-center gap-2">
													<span className="small">
														{a.fileName}
													</span>
													<a
														href={`/api/resources/${a.id}/download`}
														className="btn btn-sm btn-outline-primary d-inline-flex align-items-center"
														aria-label={`Download ${a.fileName}`}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															viewBox="0 0 24 24"
															fill="none"
														>
															<path
																d="M12 3v10"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
															/>
															<path
																d="M8 11l4 4 4-4"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
															<path
																d="M4 20h16"
																stroke="currentColor"
																strokeWidth="1.5"
																strokeLinecap="round"
															/>
														</svg>
														<span className="ms-1 d-none d-sm-inline">
															Download
														</span>
													</a>
													{a.fileSize ? (
														<span className="small text-muted ms-1">
															(
															{Math.round(
																a.fileSize /
																	1024
															)}{" "}
															KB)
														</span>
													) : null}
												</div>
											</div>
											<form
												action={async (fd) => {
													"use server";
													const { deleteResource } =
														await import(
															"./actions"
														);
													fd.set(
														"resourceId",
														String(a.id)
													);
													fd.set(
														"courseId",
														String(courseId)
													);
													await deleteResource(
														undefined,
														fd
													); // return type must be void/Promise<void>
												}}
											>
												<button className="btn btn-sm btn-outline-danger">
													Delete
												</button>
											</form>
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
