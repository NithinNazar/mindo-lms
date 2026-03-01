import React from "react";
import { prisma } from "@/lib/prisma";
import CourseForm from "./CourseForm";

export const dynamic = "force-dynamic";

export default async function NewCoursePage() {
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      SubCategory: { select: { id: true, name: true } },
    },
  });

  return (
    <div className="container">
      <div>
        <h3 className="font-bold mb-4">Create a Course</h3>
				
        <CourseForm categories={categories} />
      </div>
    </div>
  );
}
