export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { approveRequest, rejectRequest } from "./actions";

function ActionButtons({ id }: { id: number }) {
	return (
		<div className="d-flex gap-2">
			<form action={approveRequest}>
				<input type="hidden" name="id" value={id} />
				<button className="btn btn-success btn-sm" type="submit">
					Approve
				</button>
			</form>
			<form action={rejectRequest}>
				<input type="hidden" name="id" value={id} />
				<button className="btn btn-outline-danger btn-sm" type="submit">
					Reject
				</button>
			</form>
		</div>
	);
}

export default async function InstructorRequestsPage() {
	const user = await requireUser();
	if (user.role !== "ADMIN") return null;

	const apps = await prisma.instructorApplication.findMany({
		orderBy: { createdAt: "desc" },
		select: {
			id: true,
			name: true,
			email: true,
			expertise: true,
			topic: true,
			summary: true,
			status: true,
			createdAt: true,
			decidedAt: true,
			user: { select: { id: true } },
		},
	});

	return (
		<div className="container py-5">
			<h1 className="h4 mb-4">Instructor Applications</h1>
			{apps.length === 0 ? (
				<div className="alert alert-info" role="alert">
					No instructor applications at the moment.
				</div>
			) : (
				<div className="card shadow-sm">
					<div className="table-responsive">
						<table className="table align-middle mb-0">
							<thead className="table-light">
								<tr>
									<th>Applicant</th>
									<th>Expertise/Topic</th>
									<th>Summary</th>
									<th>Status</th>
									<th>Submitted</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{apps.map((a) => (
									<tr key={a.id}>
										<td>
											<div className="d-flex flex-column">
												<span className="fw-semibold">
													{a.name}
												</span>
												<span className="small text-muted">
													{a.email}
												</span>
											</div>
										</td>
										<td>
											<div className="small">
												{a.expertise || "—"}
												{a.topic ? (
													<>
														<br />
														Topic: {a.topic}
													</>
												) : null}
											</div>
										</td>
										<td style={{ maxWidth: 360 }}>
											<div
												className="small text-muted"
												style={{
													whiteSpace: "pre-wrap",
												}}
											>
												{a.summary || "—"}
											</div>
										</td>
										<td>
											<span
												className={`badge ${
													a.status === "PENDING"
														? "bg-warning"
														: a.status ===
														  "APPROVED"
														? "bg-success"
														: "bg-danger"
												}`}
											>
												{a.status}
											</span>
										</td>
										<td className="small text-muted">
											{new Date(
												a.createdAt
											).toLocaleString()}
										</td>
										<td>
											{a.status === "PENDING" ? (
												<ActionButtons id={a.id} />
											) : (
												<span className="text-muted small">
													—
												</span>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</div>
	);
}
