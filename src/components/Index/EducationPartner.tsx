"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import type { Variants } from "framer-motion";

// If your images live in `public/assets/images/partner/...`,
// using "/assets/..." paths below will work at runtime.

// --- Framer Motion variants ---
const EASE_BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeUp: Variants = {
	hidden: { opacity: 0, y: 16 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: EASE_BEZIER },
	},
};
const stagger: Variants = {
	show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};
const fadeItem: Variants = {
	hidden: { opacity: 0, y: 8 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.35, ease: EASE_BEZIER },
	},
};

const partners = [
	{
		src: "/images/partner/partner1.png",
		width: 128,
		height: 28,
		alt: "Partner 1",
	},
	{
		src: "/images/partner/partner2.png",
		width: 109,
		height: 31,
		alt: "Partner 2",
	},
	{
		src: "/images/partner/partner3.png",
		width: 183,
		height: 36,
		alt: "Partner 3",
	},
	{
		src: "/images/partner/partner4.png",
		width: 126,
		height: 37,
		alt: "Partner 4",
	},
	{
		src: "/images/partner/partner5.png",
		width: 138,
		height: 36,
		alt: "Partner 5",
	},
];

const EducationPartner: React.FC = () => {
	return (
		<section className="education-partner-area ptb-140">
			<div className="container">
				<motion.div
					className="education-partner-title"
					data-cues="slideInUp"
					data-duration="1000"
					variants={fadeUp}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.3 }}
				>
					<span>
						Trusted by Over 10 Million Learners and Leading Global
						Companies
					</span>
				</motion.div>

				<motion.div
					className="row justify-content-center g-4 education-partner-lists"
					data-cues="slideInUp"
					data-duration="1000"
					variants={stagger}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.2 }}
				>
					{partners.map((p) => (
						<motion.div
							className="col"
							key={p.src}
							variants={fadeItem}
							whileHover={{ y: -2 }}
						>
							<div className="education-partner-item">
								<Image
									src={p.src}
									alt={p.alt}
									width={p.width}
									height={p.height}
									sizes="(max-width: 576px) 120px, (max-width: 992px) 140px, 160px"
								/>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default EducationPartner;
