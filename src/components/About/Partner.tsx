"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface PartnerLogo {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}

interface PartnerProps {
	titleLineSrc?: string;
	subtitle?: string;
	title?: string;
	description?: string;
	logos?: PartnerLogo[];
	className?: string;
}

const DEFAULT_LOGOS: PartnerLogo[] = [
	{
		src: "/images/partner/award1.png",
		alt: "Award 1",
		width: 71,
		height: 81,
	},
	{
		src: "/images/partner/award2.png",
		alt: "Award 2",
		width: 70,
		height: 83,
	},
	{
		src: "/images/partner/award3.png",
		alt: "Award 3",
		width: 70,
		height: 75,
	},
	{
		src: "/images/partner/award4.png",
		alt: "Award 4",
		width: 71,
		height: 77,
	},
	{
		src: "/images/partner/award5.png",
		alt: "Award 5",
		width: 79,
		height: 79,
	},
	{
		src: "/images/partner/award6.png",
		alt: "Award 6",
		width: 71,
		height: 74,
	},
	{
		src: "/images/partner/award7.png",
		alt: "Award 7",
		width: 71,
		height: 72,
	},
	{
		src: "/images/partner/award8.png",
		alt: "Award 8",
		width: 70,
		height: 73,
	},
	{
		src: "/images/partner/award9.png",
		alt: "Award 9",
		width: 60,
		height: 70,
	},
];

const ease = [0.22, 1, 0.36, 1] as const;
const headerVariants = {
	hidden: { opacity: 0, y: 18 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
} as const;
const gridVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
} as const;
const itemVariants = {
	hidden: { opacity: 0, y: 12 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
} as const;

export default function Partner({
	titleLineSrc = "/images/title-line.png",
	subtitle = "Our Partners",
	title = "Trusted by Leading",
	description = "Our platform supports organizations of all sizes in upskilling their workforce through expert-led training.",
	logos = DEFAULT_LOGOS,
	className = "",
}: PartnerProps) {
	return (
		<div className={`ot-partner-area ptb-140 ${className}`}>
			<div className="container">
				<div
					className="row justify-content-center align-items-center g-5"
					data-cues="slideInUp"
					data-duration="1000"
				>
					<div className="col-lg-6 col-md-12">
						<motion.div
							className="ot-partner-content section-title-animation animation-style3"
							variants={headerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.35 }}
						>
							<span className="sub">{subtitle}</span>
							<h2 className="title-animation">
								{title}{" "}
								<span>
									Organizations
									<Image
										src={titleLineSrc}
										alt=""
										width={155}
										height={12}
										style={{ verticalAlign: "middle" }}
									/>
								</span>{" "}
								Worldwide
							</h2>
							<p>{description}</p>
						</motion.div>
					</div>

					<div className="col-lg-6 col-md-12">
						<motion.div
							className="ot-partner-items"
							variants={gridVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.25 }}
						>
							{logos.map((logo, idx) => (
								<motion.div
									className="item"
									key={idx}
									variants={itemVariants}
									whileHover={{ y: -2, scale: 1.02 }}
									transition={{
										type: "spring",
										stiffness: 260,
										damping: 20,
									}}
								>
									<Image
										src={logo.src}
										alt={logo.alt}
										width={logo.width}
										height={logo.height}
									/>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</div>

			<style jsx>{`
				/* In case base CSS is missing, ensure partner items wrap nicely */
				:global(.ot-partner-items) {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					gap: 16px;
				}
				@media (max-width: 991px) {
					:global(.ot-partner-items) {
						grid-template-columns: repeat(3, 1fr);
					}
				}
				@media (max-width: 575px) {
					:global(.ot-partner-items) {
						grid-template-columns: repeat(2, 1fr);
					}
				}
				:global(.ot-partner-items .item) {
					display: grid;
					place-items: center;
					padding: 16px;
					background: transparent;
					border-radius: 12px;
				}
				:global(.ot-partner-items .item img) {
					max-height: 64px;
					object-fit: contain;
				}
			`}</style>
		</div>
	);
}
