"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SectionHeader from "./Courses/SectionHeader";
import CategoryTabs from "./Courses/CategoryTabs";
import SubcategoryChips from "./Courses/SubcategoryChips";
import CoursesGrid from "./Courses/CoursesGrid";
import { Course, MenuCategory } from "./Courses/types";

// Fisher–Yates shuffle (returns a new array)
function shuffle<T>(input: T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const EducationCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Dynamic categories/subcategories from DB
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
  const [menuLoading, setMenuLoading] = useState(true);
  const [menuError, setMenuError] = useState<string | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [learnersBySubcat, setLearnersBySubcat] = useState<
    Record<string, number>
  >({});

  // Fetch 4 courses for the current category/subcategory (server-side filter)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!selectedCategory || !selectedSubcategory) return;
      try {
        setLoading(true);
        setError(null);
        const params = new URLSearchParams({
          category: selectedCategory,
          subcategory: selectedSubcategory,
          limit: "4",
          shuffle: "1",
        });
        const res = await fetch(`/api/public/courses?${params.toString()}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`Failed to load courses: ${res.status}`);
        const json: Course[] = await res.json();
        if (!cancelled) setCourses(json);
      } catch (err: unknown) {
        if (!cancelled) {
          const message =
            err instanceof Error ? err.message : "Failed to load courses";
          setError(message);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [selectedCategory, selectedSubcategory]);

  // Fetch learners count per subcategory for the selected category
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!selectedCategory) return;
      try {
        const res = await fetch(
          `/api/public/subcategory-stats?category=${encodeURIComponent(
            selectedCategory
          )}`,
          { cache: "no-store" }
        );
        if (!res.ok) return;
        const json = await res.json();
        const map: Record<string, number> = {};
        for (const s of json?.subcategories ?? [])
          map[s.name] = s.learners ?? 0;
        if (!cancelled) setLearnersBySubcat(map);
      } catch {}
    })();
    return () => {
      cancelled = true;
    };
  }, [selectedCategory]);

  // Fetch categories & subcategories
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setMenuLoading(true);
        setMenuError(null);
        const res = await fetch("/api/public/menu/full", {
          cache: "no-store",
        });
        if (!res.ok)
          throw new Error(`Failed to load categories: ${res.status}`);
        const json: MenuCategory[] = await res.json();
        if (!cancelled) setMenuCategories(json);
      } catch (err: unknown) {
        if (!cancelled) {
          const message =
            err instanceof Error ? err.message : "Failed to load categories";
          setMenuError(message);
        }
      } finally {
        if (!cancelled) setMenuLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Build category names list from fetched data (shuffled, top 7)
  const CATEGORY_LIST = useMemo(() => {
    if (!menuCategories.length) return [] as string[];
    const names = menuCategories.map((c) => c.name);
    const randomized = shuffle(names);
    return randomized.slice(0, Math.min(7, randomized.length));
  }, [menuCategories]);

  // Initialize selection from the shuffled list
  useEffect(() => {
    if (selectedCategory || !CATEGORY_LIST.length) return;
    const firstCatName = CATEGORY_LIST[0];
    setSelectedCategory(firstCatName);
    const catObj = menuCategories.find((c) => c.name === firstCatName);
    const firstSub = catObj?.subcategories?.[0]?.name || "";
    if (firstSub) setSelectedSubcategory(firstSub);
  }, [CATEGORY_LIST, menuCategories, selectedCategory]);

  // Safety: keep selection within the shuffled set
  useEffect(() => {
    if (!selectedCategory || !CATEGORY_LIST.length) return;
    if (!CATEGORY_LIST.includes(selectedCategory)) {
      const first = CATEGORY_LIST[0];
      setSelectedCategory(first);
      const catObj = menuCategories.find((c) => c.name === first);
      const firstSub = catObj?.subcategories?.[0]?.name || "";
      setSelectedSubcategory(firstSub);
    }
  }, [CATEGORY_LIST, menuCategories, selectedCategory]);

  // Ordered subcategories for the selected category (from API; fallback to seen in courses)
  const orderedSubcats = useMemo(() => {
    const cat = menuCategories.find((c) => c.name === selectedCategory);
    const listed = cat?.subcategories?.map((s) => s.name) ?? [];
    if (listed.length > 0) return listed;
    const present = new Set<string>();
    courses
      .filter((c) => c.category === selectedCategory)
      .forEach((c) => present.add(c.subcategory));
    return Array.from(present);
  }, [menuCategories, selectedCategory, courses]);

  // Ensure selected subcategory is valid / default to first available
  useEffect(() => {
    if (!orderedSubcats.length) return;
    if (!orderedSubcats.includes(selectedSubcategory)) {
      setSelectedSubcategory(orderedSubcats[0]);
    }
  }, [orderedSubcats, selectedSubcategory]);

  // Courses are already filtered server-side; show 4 results

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    const catObj = menuCategories.find((c) => c.name === cat);
    const listed = catObj?.subcategories?.map((s) => s.name) ?? [];
    if (listed.length) {
      setSelectedSubcategory(listed[0]);
      return;
    }
    const present = courses
      .filter((c) => c.category === cat)
      .map((c) => c.subcategory);
    const unique = Array.from(new Set(present));
    setSelectedSubcategory(unique[0] || "");
  };

  return (
    <section className="education-courses-area ptb-140">
      <div className="container">
        <SectionHeader />

        <div
          className="education-courses-tabs"
          data-cues="slideInUp"
          data-duration="1000"
        >
          {menuLoading ? (
            <div className="text-center my-3">Loading categories…</div>
          ) : menuError ? (
            <div className="text-danger my-3 text-center">{menuError}</div>
          ) : (
            <CategoryTabs
              categories={CATEGORY_LIST}
              selected={selectedCategory}
              onSelect={handleSelectCategory}
            />
          )}

          {!menuLoading && !menuError && selectedCategory && (
            <SubcategoryChips
              category={selectedCategory}
              orderedSubcats={orderedSubcats}
              selectedSubcat={selectedSubcategory}
              onSelectSubcat={setSelectedSubcategory}
              courses={courses}
              learnersBySubcat={learnersBySubcat}
            />
          )}

          <CoursesGrid loading={loading} error={error} courses={courses} />
        </div>

        <div className="education-courses-bottom-content">
          <p>
            Master powerful skills with proven learning methods. Your career is
            in your hands—we’ll be with you every step of the way.
          </p>
          <Link href="/courses" className="link-btn">
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
                d="M16.375 6.75V7.25H1.375V6.75H16.375Z"
                fill="white"
                stroke="#1C43FE"
              />
              <path
                d="M10.875 1L16.875 7L10.875 13"
                stroke="#1C43FE"
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
};

export default EducationCourses;
