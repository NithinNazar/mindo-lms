"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpContainer } from "./variants";

const SectionHeader: React.FC = () => (
    <motion.div
        className="section-title section-title-animation animation-style1"
        data-cues="slideInUp"
        data-duration="1000"
        variants={fadeUpContainer}
        initial={false}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
    >
        <span className="sub">Featured Courses</span>
        <h2>
            <span className="title-animation" suppressHydrationWarning>
                Start Your Learning Journey
            </span>{" "}
            <span className="inline-block align-middle">
                <Image
                    src="/images/title-line.png"
                    alt="title line"
                    width={155}
                    height={12}
                    unoptimized
                />
            </span>
        </h2>
		<p>
			Explore high-quality, expert-led courses designed to help you grow
			your skills and advance your career.
		</p>
	</motion.div>
);

export default SectionHeader;
