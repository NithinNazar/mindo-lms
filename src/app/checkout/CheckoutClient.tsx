"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface OrderItem {
	id: number;
	title: string;
	price: number;
	image: string;
	href: string;
}

type Payment = "card" | "paypal" | "bank" | "";

const INITIAL_ORDER: OrderItem[] = [
	{
		id: 1,
		title: "Mastering Python for Data Science (2nd Edition)",
		price: 79,
		image: "/images/product/product1.jpg",
		href: "/product-details",
	},
	{
		id: 2,
		title: "The Remote Learner's Productivity Playbook",
		price: 99,
		image: "/images/product/product2.jpg",
		href: "/product-details",
	},
];

export default function CheckoutClient() {
	// Billing form state
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [product, setProduct] = useState("");

	// Address
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [postcode, setPostcode] = useState("");
	const [createAccount, setCreateAccount] = useState(false);
	const [shipDifferent, setShipDifferent] = useState(false);
	const [note, setNote] = useState("");

	// Sidebar
	const [payment, setPayment] = useState<Payment>("");
	const [items] = useState<OrderItem[]>(INITIAL_ORDER);

	// Totals (you can swap these with real cart totals)
	const subTotal = useMemo(
		() => items.reduce((s, it) => s + it.price, 0),
		[items]
	);
	const shipping = 5.0;
	const grandTotal = useMemo(() => subTotal + shipping, [subTotal]);

	const currency = (n: number) => `$${n.toFixed(2)}`;

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Minimal validation
		if (
			!firstName ||
			!lastName ||
			!email ||
			!street ||
			!city ||
			!postcode
		) {
			alert("Please fill in all required fields.");
			return;
		}
		if (!payment) {
			alert("Please select a payment method.");
			return;
		}

		// Replace with server action / API call
		const payload = {
			billing: { firstName, lastName, email, phone, product },
			address: {
				street,
				city,
				postcode,
				createAccount,
				shipDifferent,
				note,
			},
			payment,
			items,
			totals: { subTotal, shipping, grandTotal },
		};

		console.log("Checkout payload", payload);
		alert("Order placed (demo) — check console for payload");
	};

	return (
		<div className="checkout-area ptb-140">
			<div className="container">
				<div
					className="row justify-content-center g-4"
					data-cues="slideInUp"
					data-duration="1000"
				>
					<div className="col-lg-8 col-md-12">
						<form className="checkout-form" onSubmit={onSubmit}>
							<h2>Billing Details</h2>

							<h3 className="info-title">Personal Info</h3>
							<div className="row justify-content-center">
								<div className="col-lg-6 col-md-12">
									<div className="form-group">
										<label htmlFor="firstName">
											First Name
										</label>
										<input
											id="firstName"
											type="text"
											className="form-control"
											placeholder="Enter first name"
											value={firstName}
											onChange={(e) =>
												setFirstName(e.target.value)
											}
											required
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-12">
									<div className="form-group">
										<label htmlFor="lastName">
											Last Name
										</label>
										<input
											id="lastName"
											type="text"
											className="form-control"
											placeholder="Enter last name"
											value={lastName}
											onChange={(e) =>
												setLastName(e.target.value)
											}
											required
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-12">
									<div className="form-group">
										<label htmlFor="email">
											Email Address
										</label>
										<input
											id="email"
											type="email"
											className="form-control"
											placeholder="Enter email address"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
											required
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-12">
									<div className="form-group">
										<label htmlFor="phone">Phone</label>
										<input
											id="phone"
											type="tel"
											className="form-control"
											placeholder="Enter number"
											value={phone}
											onChange={(e) =>
												setPhone(e.target.value)
											}
										/>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<label htmlFor="product">
											Product ...
										</label>
										<input
											id="product"
											type="text"
											className="form-control"
											placeholder="Product ..."
											value={product}
											onChange={(e) =>
												setProduct(e.target.value)
											}
										/>
									</div>
								</div>
							</div>

							<h3 className="info-title">Address Details</h3>
							<div className="row justify-content-center">
								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<label htmlFor="street">
											House Number & Street Name
										</label>
										<input
											id="street"
											type="text"
											className="form-control"
											value={street}
											onChange={(e) =>
												setStreet(e.target.value)
											}
											required
										/>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<label htmlFor="city">
											Town / City
										</label>
										<input
											id="city"
											type="text"
											className="form-control"
											value={city}
											onChange={(e) =>
												setCity(e.target.value)
											}
											required
										/>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<label htmlFor="postcode">
											Postcode*
										</label>
										<input
											id="postcode"
											type="text"
											className="form-control"
											value={postcode}
											onChange={(e) =>
												setPostcode(e.target.value)
											}
											required
										/>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="createAccount"
												checked={createAccount}
												onChange={(e) =>
													setCreateAccount(
														e.target.checked
													)
												}
											/>
											<label
												className="form-check-label"
												htmlFor="createAccount"
											>
												Create An Account?
											</label>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												id="shipDifferent"
												checked={shipDifferent}
												onChange={(e) =>
													setShipDifferent(
														e.target.checked
													)
												}
											/>
											<label
												className="form-check-label"
												htmlFor="shipDifferent"
											>
												Ship To Different Address?
											</label>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="form-group gap-zero">
										<label htmlFor="note">
											Additional Comment
										</label>
										<textarea
											id="note"
											className="form-control"
											placeholder="Your note"
											value={note}
											onChange={(e) =>
												setNote(e.target.value)
											}
										/>
									</div>
								</div>
							</div>
						</form>
					</div>

					<div className="col-lg-4 col-md-12">
						<div className="checkout-sidebar">
							<div className="order-box">
								<h3>Your Order</h3>
								<ul className="list">
									{items.map((it) => (
										<li key={it.id}>
											<div className="info">
												<div className="image">
													<Link href={it.href}>
														<Image
															src={it.image}
															alt={it.title}
															width={65}
															height={85}
														/>
													</Link>
												</div>
												<div className="title">
													<h4>
														<Link href={it.href}>
															{it.title}
														</Link>
													</h4>
													<div className="price">
														{currency(it.price)}
													</div>
												</div>
											</div>
										</li>
									))}
								</ul>
								<ul className="order-list">
									<li className="d-flex justify-content-between align-items-center">
										Subtotal
										<span>{currency(subTotal)}</span>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										Shipping
										<span>{currency(shipping)}</span>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										Total
										<span>{currency(grandTotal)}</span>
									</li>
								</ul>
							</div>

							<div className="payment-container">
								<h3>Select Payment Method</h3>
								<div className="payment-methods">
									<label className="payment-option">
										<input
											type="radio"
											name="payment"
											value="card"
											checked={payment === "card"}
											onChange={(e) =>
												setPayment(
													e.target.value as Payment
												)
											}
										/>{" "}
										Credit / Debit Card
									</label>
									<label className="payment-option">
										<input
											type="radio"
											name="payment"
											value="paypal"
											checked={payment === "paypal"}
											onChange={(e) =>
												setPayment(
													e.target.value as Payment
												)
											}
										/>{" "}
										PayPal
									</label>
									<label className="payment-option">
										<input
											type="radio"
											name="payment"
											value="bank"
											checked={payment === "bank"}
											onChange={(e) =>
												setPayment(
													e.target.value as Payment
												)
											}
										/>{" "}
										Bank Transfer
									</label>
								</div>
							</div>

							<div className="order-btn">
								<button
									type="button"
									className="default-btn"
									onClick={onSubmit}
								>
									Place Order Now
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
			</div>
		</div>
	);
}
