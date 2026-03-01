"use client";

import { motion } from "framer-motion";
import { fadeItem, staggerWrap } from "./variants";
import { Course } from "./types";

type Props = {
    category: string;
    orderedSubcats: string[];
    selectedSubcat: string;
    onSelectSubcat: (label: string) => void;
    courses: Course[];
    learnersBySubcat?: Record<string, number>;
};

const SubcategoryChips: React.FC<Props> = ({
    category,
    orderedSubcats,
    selectedSubcat,
    onSelectSubcat,
    courses,
    learnersBySubcat,
}) => (
	<motion.ul
		key={category}
		className="inner_tabs"
		aria-label="Subcategories"
		variants={staggerWrap}
		initial="hidden"
		animate="show"
	>
		{orderedSubcats.map((label) => (
			<motion.li
				key={label}
				className={`tab ${selectedSubcat === label ? "active" : ""}`}
				role="button"
				tabIndex={0}
				variants={fadeItem}
				whileHover={{ y: -2 }}
				style={{ opacity: 1, visibility: "visible" }}
				onClick={() => onSelectSubcat(label)}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ")
						onSelectSubcat(label);
				}}
				data-tab={label.toLowerCase().replace(/\s+/g, "-")}
			>
                <h5>{label}</h5>
                <span>
                    {(learnersBySubcat && learnersBySubcat[label] !== undefined
                        ? learnersBySubcat[label]
                        : courses
                              .filter(
                                  (c) =>
                                      c.category === category &&
                                      c.subcategory === label
                              )
                              .reduce((sum, c) => sum + (c.learners || 0), 0)
                      ).toLocaleString()}{" "}
                    Learners
                </span>
            </motion.li>
        ))}
    </motion.ul>
);

export default SubcategoryChips;
