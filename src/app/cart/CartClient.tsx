"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/stores/useCartStore";
import CheckoutButton from "@/components/Cart/CheckoutButton";
import { useSession } from "next-auth/react";

export default function CartClient() {
	const items = useCartStore((s) => s.items);
	const removeItem = useCartStore((s) => s.removeFromCart);
	const [coupon, setCoupon] = useState("");
	const { data: session } = useSession();

	// Optional: flat discount & shipping like the static HTML (you can hook real logic later)
	const [discount, setDiscount] = useState<number>(0);

	const subtotal = useMemo(
		() => items.reduce((sum, it) => sum + Number(it.price) * 1, 0),
		[items]
	);
	const total = useMemo(
		() => Math.max(0, subtotal - discount),
		[subtotal, discount]
	);

	const applyCoupon = () => {
		// Example: simple demo coupons
		if (coupon.trim().toUpperCase() === "SAVE10") {
			setDiscount(Math.round(subtotal * 0.1));
		} else {
			// reset if unknown code
			setDiscount(0);
		}
	};

	const currency = (n: number | string) => {
		const num = typeof n === "number" ? n : Number(n);
		return `$${(isNaN(num) ? 0 : num).toFixed(2)}`;
	};

	return (
		<div className="cart-area ptb-140">
			<div className="container">
				<div className="cart-table table-responsive">
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Remove</th>
								<th>Products Name</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							{items.length === 0 ? (
								<tr>
									<td
										colSpan={6}
										style={{ textAlign: "center" }}
									>
										Your cart is empty.
									</td>
								</tr>
							) : (
								items.map((it) => (
									<tr key={it.id}>
										<td className="remove">
											<button
												type="button"
												aria-label={`Remove ${it.title}`}
												className="btn p-0 border-0 bg-transparent"
												onClick={() =>
													removeItem(it.id)
												}
												title="Remove"
											>
												<i className="ri-delete-bin-line" />
											</button>
										</td>

										<td className="product-thumbnail">
											<div className="image">
												<Link
													href={`/course/${it.slug}`}
												>
													<Image
														src={it.image}
														alt={it.title}
														width={792}
														height={792}
													/>
												</Link>
											</div>
											<div className="title">
												<h3>
													<Link
														href={`/course/${it.slug}`}
													>
														{it.title}
													</Link>
												</h3>
											</div>
										</td>

										<td className="product-price">
											<span className="unit-amount">
												{currency(it.price)}
											</span>
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>

				<div className="shopping-cart-buttons">
					<div className="row align-items-end g-4">
						<div className="col-lg-8 col-md-7">
							<div className="shopping-coupon-code">
								<input
									type="text"
									className="form-control"
									placeholder="Coupon code"
									name="coupon-code"
									id="coupon-code"
									value={coupon}
									onChange={(e) => setCoupon(e.target.value)}
								/>
								<button
									type="button"
									className="default-btn"
									onClick={applyCoupon}
								>
									Apply Coupon
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
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="shopping-cart-totals">
					<h3>Cart Total</h3>
					<ul>
						<li className="d-flex justify-content-between align-items-center">
							Subtotal
							<span>{currency(subtotal)}</span>
						</li>
						<li className="d-flex justify-content-between align-items-center">
							Discount
							<span>-{currency(discount)}</span>
						</li>
						<li className="d-flex justify-content-between align-items-center">
							Total
							<span>{currency(total)}</span>
						</li>
					</ul>
					<div className="bottom-btn">
						{/* <Link href="/checkout" className="default-btn">
							Proceed To Checkout
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
						</Link> */}
						<CheckoutButton studentId={session?.user?.id} />
					</div>
				</div>
			</div>
		</div>
	);
}
