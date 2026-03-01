// Converted to a Server Component: no hooks or browser APIs used

import Link from "next/link";
import CourseCard from "./CourseCard";

type Course = {
	id: number;
	slug: string;
	title: string;
	shortDescription: string;
	status: string;
	thumbnailUrl: string | null;
	category: { name: string } | null;
	subcategory: { name: string } | null;
};

export default function CoursesList({ courses }: { courses: Course[] }) {
	return (
		<div className="container">
			<div className="mb-4 d-flex align-items-center justify-content-between">
				<h3 className="font-bold m-0">My Courses</h3>
				<Link
					href="/instructor/courses/new"
					className="btn btn-dark"
					style={{ fontSize: "14px" }}
				>
					New Course
				</Link>
			</div>

			{courses.length === 0 ? (
				<p className="text-sm text-muted">
					You have no courses yet. Create your first one.
				</p>
			) : (
				<div className="row g-4">
					{courses.map((c) => (
						<div key={c.id} className="col-md-6 col-lg-4">
							<CourseCard course={c} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}
