"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/Courses/CourseCard";

type Course = Parameters<typeof CourseCard>[0]["course"];

export default function FeaturedCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const params = new URLSearchParams({ limit: "4", sort: "newest" });
        const res = await fetch(`/api/courses?${params.toString()}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`Failed to load courses: ${res.status}`);
        const json = await res.json();
        const data: Course[] = json?.data ?? [];
        if (!cancelled) setCourses(data);
      } catch (e: unknown) {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Failed to load courses");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="dl-courses-area ptb-140">
      <div className="container">
        <div
          className="section-title section-title-animation animation-style2"
          data-cues="slideInUp"
          data-duration="1000"
        >
          <span className="sub">Featured Courses</span>
          <h2 className="title-animation">
            Affordable Learning. Real-World Skills.
            <Image
              src="/images/title-line.png"
              alt="image"
              width={155}
              height={12}
            />
          </h2>
          <p>
            Explore high-quality, expert-led courses designed to help you grow
            your skills and advance your career.
          </p>
        </div>

        <div
          className="row justify-content-center g-4"
          data-cues="slideInUp"
          data-duration="1000"
        >
          {loading && (
            <div className="col-12 text-center">Loading courses…</div>
          )}
          {error && (
            <div className="col-12 text-center text-danger">{error}</div>
          )}
          {!loading && !error && courses.length === 0 && (
            <div className="col-12 text-center text-muted">
              No courses found.
            </div>
          )}
          {!loading && !error &&
            courses.slice(0, 4).map((course) => (
              <div key={course.id} className="col-xl-3 col-md-6">
                <CourseCard course={course} />
              </div>
            ))}
        </div>

        <div className="dl-courses-all-btn">
          <Link href="/courses" className="default-btn">
            View All Courses
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
            >
              <path
                opacity="0.5"
                d="M16.25 6.75V7.25H1.25V6.75H16.25Z"
                fill="white"
                stroke="white"
              />
              <path
                d="M10.75 1L16.75 7L10.75 13"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

