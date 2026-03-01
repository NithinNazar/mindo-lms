"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface PartnerLogo {
	src: string;
	alt?: string;
	width?: number;
	height?: number;
}

interface PartnerProps {
	title?: string;
	description?: string;
	logos?: PartnerLogo[];
	className?: string;
}

const DEFAULT_LOGOS: PartnerLogo[] = [
	{
		src: "/images/partner/partner1.png",
		alt: "Partner 1",
		width: 128,
		height: 28,
	},
	{
		src: "/images/partner/partner2.png",
		alt: "Partner 2",
		width: 109,
		height: 31,
	},
	{
		src: "/images/partner/partner3.png",
		alt: "Partner 3",
		width: 183,
		height: 36,
	},
	{
		src: "/images/partner/partner4.png",
		alt: "Partner 4",
		width: 126,
		height: 37,
	},
	{
		src: "/images/partner/partner5.png",
		alt: "Partner 5",
		width: 138,
		height: 36,
	},
];

export default function Partner({
	title = "Chosen by Millions of Learners and Forward-Thinking Companies",
	description = "Our platform fuels the learning journey of users across 120+ countries.",
	logos = DEFAULT_LOGOS,
	className = "",
}: PartnerProps) {
	const ease = [0.22, 1, 0.36, 1] as const;

	const headerVariants = {
		hidden: { opacity: 0, y: 16 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
	} as const;

	const listVariants = {
		hidden: {},
		visible: {
			transition: { staggerChildren: 0.08, delayChildren: 0.12 },
		},
	} as const;

	const itemVariants = {
		hidden: { opacity: 0, y: 12 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
	} as const;

	return (
		<div className={`dl-partner-area ${className}`}>
			<div className="container">
				<div className="dl-partner-inner">
					<motion.div
						className="dl-partner-content section-title-animation animation-style1"
						data-cues="slideInUp"
						data-duration="1000"
						variants={headerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
					>
						<h3 className="title-animation">{title}</h3>
						<p>{description}</p>
					</motion.div>

					<motion.div
						className="row justify-content-center g-4 dl-partner-lists"
						data-cues="slideInUp"
						data-duration="1000"
						variants={listVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
					>
						{logos.map(
							({ src, alt, width = 128, height = 28 }, idx) => (
								<motion.div
									className="col"
									key={idx}
									variants={itemVariants}
								>
									<motion.div
										className="dl-partner-item"
										whileHover={{ y: -2, scale: 1.02 }}
										transition={{
											type: "spring",
											stiffness: 280,
											damping: 20,
										}}
									>
										<Image
											src={src}
											alt={alt ?? "Partner logo"}
											width={width}
											height={height}
										/>
									</motion.div>
								</motion.div>
							)
						)}
					</motion.div>
				</div>
			</div>

			<style jsx>{`
				/* Optional: make columns wrap nicely if your CSS framework isn't present */
				.dl-partner-lists :global(.col) {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.dl-partner-item {
					padding: 8px 12px;
					border-radius: 10px;
					background: rgba(0, 0, 0, 0.02);
				}
			`}</style>
		</div>
	);
}
