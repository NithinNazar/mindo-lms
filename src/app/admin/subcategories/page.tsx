import React from "react";
import { prisma } from "@/lib/prisma";
import SubcategoryForm from "./SubcategoryForm";
import { createSubcategory } from "./actions";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function SubCategoriesPage() {
	const [cats, subs] = await Promise.all([
		prisma.category.findMany({
			orderBy: { name: "asc" },
			select: { id: true, name: true },
		}),
		prisma.subCategory.findMany({
			orderBy: [{ categoryId: "asc" }, { name: "asc" }],
			select: { id: true, name: true, categoryId: true },
		}),
	]);

	const byCategory = new Map<number, { id: number; name: string }[]>();
	for (const c of cats) byCategory.set(c.id, []);
	for (const s of subs) {
		const arr = byCategory.get(s.categoryId) ?? [];
		arr.push({ id: s.id, name: s.name });
		byCategory.set(s.categoryId, arr);
	}

	return (
		<div className="container">
			{/* Header */}
			<div className="d-flex align-items-center justify-content-between mb-4">
				<div>
					<h1 className="h4 mb-1">Manage Subcategories</h1>
					<div className="text-muted small">
						Create and organize subcategories under each category.
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
									Categories
								</div>
								<div className="h4 mb-0">{cats.length}</div>
							</div>
							<span className="badge bg-primary">Total</span>
						</div>
					</div>
				</div>
				<div className="col-6 col-md-3">
					<div className="card border-0 shadow-sm h-100">
						<div className="card-body d-flex align-items-center justify-content-between">
							<div>
								<div className="text-muted small">
									Subcategories
								</div>
								<div className="h4 mb-0">{subs.length}</div>
							</div>
							<span className="badge bg-secondary">Total</span>
						</div>
					</div>
				</div>
			</div>

			<div className="row g-4">
				{/* Create form */}
				<div className="col-lg-5">
					<div className="card shadow-sm border-0 h-100">
						<div className="card-body">
							<h5 className="card-title mb-3">
								Create Subcategory
							</h5>
							<SubcategoryForm
								categories={cats}
								action={createSubcategory}
							/>
						</div>
					</div>
				</div>

				{/* Grouped list */}
				<div className="col-lg-7">
					<div className="card shadow-sm border-0 h-100">
						<div className="card-body">
							<div className="d-flex align-items-center justify-content-between mb-3">
								<h5 className="card-title mb-0">
									Subcategories by Category
								</h5>
								<span className="badge bg-secondary">
									{subs.length}
								</span>
							</div>

							{cats.length === 0 ? (
								<p className="text-muted mb-0">
									No categories found.
								</p>
							) : (
								<div
									className="accordion"
									id="subcategoriesAccordion"
								>
									{cats.map((cat, i) => {
										const list =
											byCategory.get(cat.id) ?? [];
										const headingId = `heading-${cat.id}`;
										const collapseId = `collapse-${cat.id}`;
										return (
											<div
												className="accordion-item"
												key={cat.id}
											>
												<h2
													className="accordion-header"
													id={headingId}
												>
													<button
														className={`accordion-button ${
															i !== 0
																? "collapsed"
																: ""
														}`}
														type="button"
														data-bs-toggle="collapse"
														data-bs-target={`#${collapseId}`}
														aria-expanded={
															i === 0
																? "true"
																: "false"
														}
														aria-controls={
															collapseId
														}
													>
														<span className="me-2">
															{cat.name}
														</span>
														<span className="badge bg-light text-dark">
															{list.length}
														</span>
													</button>
												</h2>
												<div
													id={collapseId}
													className={`accordion-collapse collapse ${
														i === 0 ? "show" : ""
													}`}
													aria-labelledby={headingId}
													data-bs-parent="#subcategoriesAccordion"
												>
													<div className="accordion-body p-0">
														{list.length === 0 ? (
															<div className="p-3 text-muted small">
																No subcategories
																yet.
															</div>
														) : (
															<ul className="list-group list-group-flush">
																{list.map(
																	(s) => (
																		<li
																			key={
																				s.id
																			}
																			className="list-group-item d-flex justify-content-between align-items-center"
																		>
																			<div>
																				<span className="text-muted me-2">
																					#
																					{
																						s.id
																					}
																				</span>
																				<span className="fw-semibold">
																					{
																						s.name
																					}
																				</span>
																			</div>
																		</li>
																	)
																)}
															</ul>
														)}
													</div>
												</div>
											</div>
										);
									})}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
