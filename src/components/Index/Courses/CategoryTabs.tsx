"use client";

import { motion } from "framer-motion";
import { fadeItem, staggerWrap } from "./variants";

type Props = {
	categories: readonly string[];
	selected: string;
	onSelect: (cat: string) => void;
};

const CategoryTabs: React.FC<Props> = ({ categories, selected, onSelect }) => (
	<motion.div
		className="top-category-tabs nav nav-tabs"
		role="tablist"
		aria-label="Top categories"
		variants={staggerWrap}
		initial="hidden"
		whileInView="show"
		viewport={{ once: true, amount: 0.2 }}
	>
		{categories.map((cat) => (
			<motion.button
				key={cat}
				type="button"
				variants={fadeItem}
				onClick={() => onSelect(cat)}
				className={`nav-link ${selected === cat ? "active" : ""}`}
				aria-pressed={selected === cat}
			>
				{cat}
			</motion.button>
		))}
	</motion.div>
);

export default CategoryTabs;
