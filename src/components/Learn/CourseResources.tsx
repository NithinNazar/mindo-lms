"use client";

import React from "react";

export type CourseResource = {
	id: number;
	title: string | null;
	fileUrl: string;
	fileName: string;
};

export default function CourseResources({
	resources,
	loading,
}: {
	resources: CourseResource[];
	loading: boolean;
}) {
	if (loading) {
		return <div className="text-muted">Loading resources…</div>;
	}

	if (!resources || resources.length === 0) {
		return (
			<p className="text-muted mb-0">
				No resources available for this course.
			</p>
		);
	}

	return (
		<ul className="list-group">
			{resources.map((r) => (
				<li
					key={r.id}
					className="list-group-item d-flex justify-content-between align-items-center"
				>
					<div className="me-3">
						<div className="fw-semibold">
							{r.title || r.fileName}
						</div>
						<div className="small text-muted">{r.fileName}</div>
					</div>
					<a
						href={r.fileUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-sm btn-outline-primary"
					>
						Download
					</a>
				</li>
			))}
		</ul>
	);
}
