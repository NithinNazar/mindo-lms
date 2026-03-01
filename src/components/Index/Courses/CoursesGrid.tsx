"use client";

import { motion } from "framer-motion";
import { fadeItem, staggerWrap } from "./variants";
import CourseCard from "../../Courses/CourseCard";
import { Course } from "./types";

const CoursesGrid: React.FC<{
	loading: boolean;
	error: string | null;
	courses: Course[];
}> = ({ loading, error, courses }) => (
    <motion.div
        className="row justify-content-center g-4"
        variants={staggerWrap}
        initial={false}
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
    >
		{loading && <div className="col-12 text-center">Loading courses…</div>}
		{error && <div className="col-12 text-center text-danger">{error}</div>}
		{!loading && !error && courses.length === 0 && (
			<div className="col-12 text-center text-muted">
				No courses found for this subcategory.
			</div>
		)}
        {courses.map((course) => (
            <motion.div
                className="col-xl-3 col-md-6"
                key={course.id}
                variants={fadeItem}
                initial={false}
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                animate="rest"
                whileHover="hover"
            >
                <CourseCard course={course as any} />
			</motion.div>
		))}
	</motion.div>
);

export default CoursesGrid;
