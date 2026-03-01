import React from "react";
import { prisma } from "@/lib/prisma";
import CategoryForm from "./CategoryForm";
import { createCategory } from "./actions";
import DeleteCategoryButton from "./DeleteCategoryButton";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
	const items = await prisma.category.findMany({
		orderBy: { id: "desc" },
		select: {
			id: true,
			name: true,
			_count: { select: { Course: true, SubCategory: true } },
		},
	});

	return (
		<div className="container">
			<div className="d-flex align-items-center justify-content-between mb-4">
				<div>
					<h1 className="h4 mb-1">Manage Categories</h1>
					<div className="text-muted small">
						Create and organize course categories for instructors.
					</div>
				</div>
				<Link
					href="/admin"
					className="btn btn-outline-secondary btn-sm"
				>
					Back to Admin
				</Link>
			</div>

			{/* Quick stats */}
			<div className="row g-3 mb-4">
				<div className="col-6 col-md-3">
					<div className="card border-0 shadow-sm h-100">
						<div className="card-body d-flex align-items-center justify-content-between">
							<div>
								<div className="text-muted small">
									Total Categories
								</div>
								<div className="h4 mb-0">{items.length}</div>
							</div>
							<span className="badge bg-primary">Categories</span>
						</div>
					</div>
				</div>
			</div>

			<div className="row g-4">
				{/* Create form */}
				<div className="col-lg-5">
					<div className="card shadow-sm border-0 h-100">
						<div className="card-body">
							<h5 className="card-title mb-3">Create Category</h5>
							<CategoryForm action={createCategory} />
						</div>
					</div>
				</div>

				{/* List */}
				<div className="col-lg-7">
					<div className="card shadow-sm border-0 h-100">
						<div className="card-body">
							<div className="d-flex align-items-center justify-content-between mb-3">
								<h5 className="card-title mb-0">Categories</h5>
								<span className="badge bg-secondary">
									{items.length}
								</span>
							</div>

							{items.length === 0 ? (
								<p className="text-muted mb-0">
									No categories yet. Create your first one on
									the left.
								</p>
							) : (
								<div className="table-responsive">
									<table className="table align-middle">
										<thead>
											<tr>
												<th style={{ width: 72 }}>#ID</th>
												<th>Name</th>
												<th className="text-center" style={{ width: 140 }}>
													Subcategories
												</th>
												<th className="text-center" style={{ width: 120 }}>
													Courses
												</th>
												<th style={{ width: 140 }}>Actions</th>
											</tr>
										</thead>
										<tbody>
											{items.map((c) => {
												const subCount = c._count.SubCategory ?? 0;
												const courseCount = c._count.Course ?? 0;
												const locked = subCount > 0 || courseCount > 0;
												const parts: string[] = [];
												if (subCount) {
													parts.push(
														`${subCount} subcategor${subCount === 1 ? "y" : "ies"}`
													);
												}
												if (courseCount) {
													parts.push(
														`${courseCount} course${courseCount === 1 ? "" : "s"}`
													);
												}
												const reason = locked
													? `Linked to ${parts.join(" and ")}.`
													: null;

												return (
													<tr key={c.id}>
														<td className="text-muted">{c.id}</td>
														<td className="fw-semibold">{c.name}</td>
														<td className="text-center">{subCount}</td>
														<td className="text-center">{courseCount}</td>
														<td>
															<DeleteCategoryButton
																categoryId={c.id}
																disabled={locked}
																reason={reason}
															/>
														</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
