"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type APICourse = {
	title: string;
	price: unknown; // Prisma Decimal serialized (string/number)
	link: string;
	thumbnail: string | null;
};

type APISubcategory = {
	id: number;
	name: string;
	courses: APICourse[];
};

type APICategory = {
	id: number;
	name: string;
	subcategories: APISubcategory[];
};

const CategoryMenu: React.FC = () => {
	const [categories, setCategories] = useState<APICategory[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let mounted = true;
		(async () => {
			try {
				const res = await fetch("/api/public/menu/full", {
					cache: "force-cache",
				});
				if (!res.ok) throw new Error(`HTTP ${res.status}`);
				const json = await res.json();
				if (mounted) {
					setCategories(
						Array.isArray(json) ? (json as APICategory[]) : []
					);
					setLoading(false);
				}
			} catch (e: unknown) {
				if (mounted) {
					const message =
						e instanceof Error
							? e.message
							: "Failed to load categories.";
					setError(message);
					setLoading(false);
				}
			}
		})();
		return () => {
			mounted = false;
		};
	}, []);

	return (
		<>
			<div className="category-menu">
				<span className="category-menu-toggle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="21"
						height="21"
						viewBox="0 0 21 21"
						fill="none"
					>
						<g clipPath="url(#clip0_7904_1954)">
							<path
								d="M18.6157 2.97314H6.81885C5.84932 2.97314 5.06104 3.76182 5.06104 4.73096C5.06104 5.70049 5.84932 6.48877 6.81885 6.48877H18.6157C19.5849 6.48877 20.3735 5.70049 20.3735 4.73096C20.3735 3.76182 19.5849 2.97314 18.6157 2.97314Z"
								fill="#63667D"
							/>
							<path
								d="M18.6157 8.83252H6.81885C5.84932 8.83252 5.06104 9.62119 5.06104 10.5903C5.06104 11.5599 5.84932 12.3481 6.81885 12.3481H18.6157C19.5849 12.3481 20.3735 11.5599 20.3735 10.5903C20.3735 9.62119 19.5849 8.83252 18.6157 8.83252Z"
								fill="#63667D"
							/>
							<path
								d="M18.6157 14.6919H6.81885C5.84932 14.6919 5.06104 15.4806 5.06104 16.4497C5.06104 17.4192 5.84932 18.2075 6.81885 18.2075H18.6157C19.5849 18.2075 20.3735 17.4192 20.3735 16.4497C20.3735 15.4806 19.5849 14.6919 18.6157 14.6919Z"
								fill="#63667D"
							/>
							<path
								d="M2.13135 2.97314C1.16182 2.97314 0.373535 3.76182 0.373535 4.73096C0.373535 5.70049 1.16182 6.48877 2.13135 6.48877C3.10049 6.48877 3.88916 5.70049 3.88916 4.73096C3.88916 3.76182 3.10049 2.97314 2.13135 2.97314Z"
								fill="#63667D"
							/>
							<path
								d="M2.13135 8.83252C1.16182 8.83252 0.373535 9.62119 0.373535 10.5903C0.373535 11.5599 1.16182 12.3481 2.13135 12.3481C3.10049 12.3481 3.88916 11.5599 3.88916 10.5903C3.88916 9.62119 3.10049 8.83252 2.13135 8.83252Z"
								fill="#63667D"
							/>
							<path
								d="M2.13135 14.6919C1.16182 14.6919 0.373535 15.4806 0.373535 16.4497C0.373535 17.4192 1.16182 18.2075 2.13135 18.2075C3.10049 18.2075 3.88916 17.4192 3.88916 16.4497C3.88916 15.4806 3.10049 14.6919 2.13135 14.6919Z"
								fill="#63667D"
							/>
						</g>
						<defs>
							<clipPath id="clip0_7904_1954">
								<rect
									width="20"
									height="20"
									fill="white"
									transform="translate(0.373535 0.590332)"
								/>
							</clipPath>
						</defs>
					</svg>
					Explore
				</span>

				<div className="category-dropdown-wrap">
					{loading && (
						<div className="ul category-dropdown">
							<div className="li cat-item">
								<span style={{ opacity: 0.6 }}>
									Loading categories…
								</span>
							</div>
						</div>
					)}

					{error && (
						<div className="ul category-dropdown">
							<div className="li cat-item">
								<span style={{ color: "crimson" }}>
									Failed to load menu: {error}
								</span>
							</div>
						</div>
					)}

					{!loading && !error && (
						<div className="ul category-dropdown">
							{categories.map((cat) => (
								<div key={cat.id} className="li cat-item">
									<Link href="/courses">
										{cat.name}{" "}
										<i className="ri-arrow-right-s-line"></i>
									</Link>

									<div className="ul children sub-categories">
										{cat.subcategories.map((sub) => (
											<div
												key={sub.id}
												className="li cat-item has-children"
											>
												<Link href="/courses">
													{sub.name}{" "}
													<i className="ri-arrow-right-s-line"></i>
												</Link>

												<div className="ul children course-list">
													{sub.courses.length > 0 ? (
														sub.courses.map(
															(course) => (
																<div
																	key={`${sub.id}-${course.title}`}
																	className="li course-item"
																>
																	<Link
																		href={
																			course.link ||
																			"/course-details"
																		}
																		className="course-permalink"
																	>
																		<div className="course-thumbnail">
																			{course.thumbnail ? (
																				<Image
																					src={
																						course.thumbnail
																					}
																					alt={
																						course.title
																					}
																					width={
																						1100
																					}
																					height={
																						750
																					}
																				/>
																			) : (
																				<div
																					style={{
																						width: "100%",
																						height: "100%",
																						display:
																							"flex",
																						alignItems:
																							"center",
																						justifyContent:
																							"center",
																						background:
																							"#f5f5f5",
																						color: "#888",
																						fontSize: 12,
																					}}
																				>
																					No
																					Image
																				</div>
																			)}
																		</div>
																		<div className="course-caption">
																			<h3>
																				{
																					course.title
																				}
																			</h3>
																			<div className="price">
																				<span className="new-price">
																					{typeof course.price ===
																					"string"
																						? course.price
																						: String(
																								course.price
																						  )}
																				</span>
																			</div>
																		</div>
																	</Link>
																</div>
															)
														)
													) : (
														<div
															style={{
																padding: "1rem",
																textAlign:
																	"center",
																color: "#666",
																fontStyle:
																	"italic",
															}}
														>
															No courses available
															in this subcategory.
														</div>
													)}
												</div>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default CategoryMenu;
