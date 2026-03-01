// Converted to a Server Component: no client hooks used; child DeleteButton remains client

import Link from "next/link";
import DeleteButton from "./DeleteButton";

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

export default function CourseCard({ course }: { course: Course }) {
	return (
		<div className="card h-100 shadow-sm">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={
					course.thumbnailUrl ??
					"https://via.placeholder.com/400x200?text=No+Image"
				}
				alt="Course thumbnail"
				className="card-img-top"
				style={{ height: "180px", objectFit: "cover" }}
			/>

			<div className="card-body">
				<h5 className="card-title">{course.title}</h5>
				<p className="card-text text-truncate">
					{course.shortDescription}
				</p>
				<p className="card-text">
					<small className="text-muted">
						{course.category?.name} / {course.subcategory?.name}
					</small>
				</p>
				<span className="badge bg-secondary">{course.status}</span>
			</div>

			<div className="card-footer d-flex justify-content-between align-items-center">
				<div className="btn-group">
					<Link
						href={`/instructor/courses/${course.id}/edit`}
						className="btn btn-link btn-sm"
					>
						Edit
					</Link>
					<Link
						href={`/instructor/courses/${course.id}/lessons`}
						className="btn btn-link btn-sm"
					>
						Lessons
					</Link>
					<Link
						href={`/instructor/courses/${course.id}/quizzes`}
						className="btn btn-link btn-sm"
					>
						Quizzes
					</Link>
					<Link
						href={`/learn/${course.id}/community`}
						className="btn btn-link btn-sm"
					>
						Community
					</Link>
					<Link
						href={`/instructor/courses/${course.id}/assets`}
						className="btn btn-link btn-sm"
					>
						Assets
					</Link>
				</div>
				<DeleteButton id={course.id} />
			</div>
		</div>
	);
}
