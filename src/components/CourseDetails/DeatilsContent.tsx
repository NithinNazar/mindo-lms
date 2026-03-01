import React from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

type Props = {
  description?: string;
  whatYouWillLearn?: string;
  averageRating?: number;
  reviewCount?: number;
  reviews?: {
    id: number;
    rating: number;
    comment: string | null;
    createdAt: string | Date;
    student: { id: string; name: string; avatarUrl: string | null };
  }[];
  sections?: {
    id: number;
    title: string;
    order: number;
    lessons: {
      id: number;
      title: string;
      type: string;
      videoUrl: string | null;
      duration: number | null;
      isPreview: boolean;
    }[];
  }[];
  course?: {
    id: string; // stringified id for cart
    slug: string;
    title: string;
    price: number | string;
    language: string;
    level?: string | null;
    isCertificate?: boolean;
    thumbnailUrl?: string | null;
    promoVideoUrl?: string | null;
    instructorId?: string | null;
    instructorName?: string | null;
    categoryName?: string | null;
    subcategoryName?: string | null;
    images?: { thumb: string };
  };
};

const DeatilsContent = ({
  description,
  whatYouWillLearn,
  averageRating,
  reviewCount,
  reviews,
  sections,
  course,
}: Props) => {
  return (
    <div className="course-details-area ptb-140">
      <div className="container">
        <div
          className="row justify-content-center g-4"
          data-cues="slideInUp"
          data-duration="1000"
        >
          <MainContent
            description={description}
            whatYouWillLearn={whatYouWillLearn}
            averageRating={averageRating}
            reviewCount={reviewCount}
            reviews={reviews}
            sections={sections}
          />
          <Sidebar course={course} sections={sections} />
        </div>
      </div>
    </div>
  );
};

export default DeatilsContent;
