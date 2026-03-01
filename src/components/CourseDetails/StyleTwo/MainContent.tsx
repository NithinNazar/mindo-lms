"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Curriculum from "./Curriculum";
import Instructor from "./Instructor";
import Reviews from "./Reviews";

const EASE_BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: EASE_BEZIER, staggerChildren: 0.06 },
	},
};

const item: Variants = {
	hidden: { opacity: 0, y: 12 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: EASE_BEZIER },
	},
};

export default function MainContent() {
	return (
		<div className="col-lg-8 col-md-12">
			<div className="course-details-desc">
				{/* Tab Content */}
				<motion.div
					className="courses-overview with-gap"
					key="overview"
					variants={container}
					initial="hidden"
					animate="show"
				>
					{/* OVERVIEW */}

					<motion.div className="courses-overview" variants={item}>
						<h2>Course Description</h2>
						<p>
							Unlock the power of Python—the most in-demand
							language in data science. This beginner-friendly
							course is designed to give you a strong foundation
							in Python programming while focusing on real-world
							applications in data analysis, visualization, and
							automation.
						</p>
						<p>
							You&apos;ll start by learning the basics of Python
							syntax, variables, data types, and control
							structures. Then, you&apos;ll move on to working
							with lists, dictionaries, functions, and file
							handling. Through hands-on exercises and guided
							examples using tools like Jupyter Notebook,
							you&apos;ll gain the confidence to manipulate
							datasets and perform simple data analysis tasks.
						</p>
						<h3>What You&apos;ll Learn</h3>

						<motion.ul className="list" variants={container}>
							{[
								"Understand Python syntax, variables, and data types from the ground up",
								"Use lists, dictionaries, and loops to structure and manipulate data",
								"Write custom functions and handle common programming errors",
								"Work with files (CSV, TXT) and read data using Python",
								"Use Jupyter Notebook for interactive coding and testing",
								"Perform basic data analysis using libraries like Pandas",
								"Create simple data visualizations using Matplotlib",
								"Build a mini project to apply your Python skills in a real-world scenario",
							].map((text, i) => (
								<motion.li key={i} variants={item}>
									{/* SVG unchanged except React casing */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
									>
										<path
											d="M2.74805 8.33401C2.43739 8.33488 2.13333 8.42369 1.87104 8.59016C1.60875 8.75663 1.39895 8.99395 1.26592 9.27468C1.13288 9.55541 1.08204 9.86807 1.11929 10.1765C1.15654 10.4849 1.28034 10.7765 1.47638 11.0175L5.6555 16.1369C5.8045 16.3219 5.9955 16.4687 6.21264 16.5651C6.42977 16.6615 6.66676 16.7046 6.90393 16.691C7.41119 16.6638 7.86915 16.3924 8.16113 15.9463L16.8422 1.9654C16.8436 1.96308 16.8451 1.96076 16.8467 1.95848C16.9281 1.83341 16.9017 1.58557 16.7336 1.42987C16.6874 1.38711 16.6329 1.35426 16.5736 1.33334C16.5142 1.31242 16.4512 1.30388 16.3884 1.30823C16.3256 1.31259 16.2644 1.32975 16.2085 1.35867C16.1526 1.38758 16.1032 1.42763 16.0633 1.47636C16.0602 1.48019 16.057 1.48396 16.0537 1.48768L7.29872 11.3795C7.26541 11.4171 7.22495 11.4478 7.17969 11.4697C7.13443 11.4915 7.08528 11.5042 7.03508 11.5069C6.98489 11.5096 6.93466 11.5023 6.88731 11.4855C6.83995 11.4686 6.79642 11.4425 6.75924 11.4087L3.85363 8.76456C3.55185 8.48792 3.15743 8.33432 2.74805 8.33401Z"
											fill="#1C43FE"
										/>
									</svg>
									<span>{text}</span>
								</motion.li>
							))}
						</motion.ul>
					</motion.div>
				</motion.div>

				{/* CURRICULUM */}
				<motion.div
					className="curriculum with-gap"
					key="curriculum"
					variants={container}
					initial="hidden"
					animate="show"
				>
					<Curriculum />
				</motion.div>

				{/* PLACEHOLDERS (fill with your converted HTML if needed) */}
				<motion.div
					className="instructor with-gap"
					key="instructor"
					variants={container}
					initial="hidden"
					animate="show"
				>
					<Instructor />
				</motion.div>

				<motion.div
					className="reviews"
					key="reviews"
					variants={container}
					initial="hidden"
					animate="show"
				>
					<Reviews />
				</motion.div>
			</div>
		</div>
	);
}
