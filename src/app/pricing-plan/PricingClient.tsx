"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type BillingCycle = "monthly" | "yearly";

type Plan = {
	name: string;
	monthly: number; // price per month when billed monthly
	yearly: number; // total price per year when billed yearly (already discounted)
	cta: string;
	href: string;
	features: string[];
};

const PLANS: Plan[] = [
	{
		name: "Free",
		monthly: 0,
		yearly: 0,
		cta: "Start for Free",
		href: "/login",
		features: [
			"Access 10 free courses",
			"Community Support",
			"Limited Certification",
			"Basic Progress Tracking",
			"Access to Weekly Webinars",
			"Public Discussion Forums",
			"Course Reminders via Email",
		],
	},
	{
		name: "Pro",
		monthly: 19,
		yearly: 182, // ~20% off vs 19*12 = 228
		cta: "Get Pro",
		href: "/login",
		features: [
			"Unlimited Course Access",
			"Priority Email Support",
			"Verified Certificates",
			"Quizzes & Assessments",
			"Offline Access (Mobile)",
			"Download Course Materials",
			"Private Community Access",
			"Monthly Live Q&A Sessions",
			"Assignment Feedback",
		],
	},
	{
		name: "Enterprise",
		monthly: 99,
		yearly: 950, // ~20% off vs 99*12 = 1188
		cta: "Contact Sales",
		href: "/login",
		features: [
			"Unlimited seats",
			"Dedicated Account Manager",
			"Custom LMS Integration",
			"SCORM & xAPI Support",
			"Custom Branding",
			"Security Reviews & DPA",
			"Uptime SLAs",
			"Enterprise SSO & SCIM",
			"24/7 Priority Support",
		],
	},
];

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.12, when: "beforeChildren" as const },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { type: "spring" as const, stiffness: 140, damping: 18 },
	},
};

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 12 },
	show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function PricingClient() {
	const [billing, setBilling] = useState<BillingCycle>("monthly");

	const labelSuffix = useMemo(
		() => (billing === "monthly" ? "/month" : "/year"),
		[billing]
	);

	return (
		<div className="pricing-plans-area ptb-140">
			<div className="container">
				<motion.div
					className="section-title section-title-animation animation-style2"
					data-cues="slideInUp"
					data-duration="1000"
					variants={fadeUp}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.3 }}
				>
					<h2 className="title-animation">
						Choose Your Plan
						{/* Update the src below to match your public assets path */}
						<Image
							src="/images/title-line.png"
							alt="title underline"
							width={140}
							height={14}
						/>
					</h2>
					<p>
						Affordable pricing for students, professionals, and
						teams. Learn without limits.
					</p>
				</motion.div>

				{/* Billing toggle */}
				<ul
					className="pricing-toggle-billing"
					role="tablist"
					aria-label="Billing cycle"
				>
					<li
						className={billing === "monthly" ? "active" : ""}
						data-billing="monthly"
						role="tab"
						aria-selected={billing === "monthly"}
						tabIndex={0}
						onClick={() => setBilling("monthly")}
						onKeyDown={(e) =>
							(e.key === "Enter" || e.key === " ") &&
							setBilling("monthly")
						}
					>
						Monthly
					</li>
					<li
						className={billing === "yearly" ? "active" : ""}
						data-billing="yearly"
						role="tab"
						aria-selected={billing === "yearly"}
						tabIndex={0}
						onClick={() => setBilling("yearly")}
						onKeyDown={(e) =>
							(e.key === "Enter" || e.key === " ") &&
							setBilling("yearly")
						}
					>
						Yearly (Save 20%)
					</li>
				</ul>

				<motion.div
					className="row justify-content-center g-5"
					data-cues="slideInUp"
					data-duration="1000"
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.15 }}
				>
					{PLANS.map((plan) => {
						const amount =
							billing === "monthly" ? plan.monthly : plan.yearly;
						return (
							<motion.div
								className="col-lg-4 col-md-6"
								key={plan.name}
								variants={cardVariants}
							>
								<div className="pricing-plans-card">
									<h2>{plan.name}</h2>

									<motion.div
										key={`${billing}-${plan.name}`}
										className="price"
										data-monthly={plan.monthly}
										data-yearly={plan.yearly}
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.2 }}
									>
										${amount}
										<span>{labelSuffix}</span>
									</motion.div>

									<motion.ul
										className="features"
										initial="hidden"
										animate="show"
										variants={{
											hidden: {},
											show: {
												transition: {
													staggerChildren: 0.04,
												},
											},
										}}
									>
										{plan.features.map((f) => (
											<motion.li
												key={f}
												variants={{
													hidden: {
														opacity: 0,
														y: 6,
													},
													show: { opacity: 1, y: 0 },
												}}
											>
												{f}
											</motion.li>
										))}
									</motion.ul>

									<div className="price-btn">
										<Link
											href={plan.href}
											className="default-btn"
										>
											{plan.cta}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="18"
												height="14"
												viewBox="0 0 18 14"
												fill="none"
												aria-hidden="true"
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
										</Link>
									</div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</div>
	);
}
