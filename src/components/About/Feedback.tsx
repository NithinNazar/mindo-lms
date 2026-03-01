"use client";

import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";

// Swiper styles (tree-shakable)
import "swiper/css";
import "swiper/css/navigation";

export type FeedbackItem = {
  image: string; // background image for the left column
  rating: number; // 0..5
  quoteIcon?: string; // optional quote icon
  text: string;
  name: string;
  role: string;
};

interface FeedbackProps {
  items?: FeedbackItem[];
  title?: string;
  viewAllHref?: string;
  starIcon?: string;
  quoteIcon?: string;
  className?: string;
  autoplayMs?: number;
}

const DEFAULT_ITEMS: FeedbackItem[] = [
  {
    image: "/images/feedback/feedback.jpg",
    rating: 5,
    quoteIcon: "/images/feedback/quote.svg",
    text: "Mindo Health made it incredibly easy to fit learning into my busy schedule. The platform's structure, high-quality instructors, and relevant course material helped me gain the skills I needed to lead digital campaigns confidently. I've already applied what I learned to real projects and seen great results.",
    name: "Sarah Mitchell",
    role: "Marketing Manager",
  },
  {
    image: "/images/feedback/feedback2.jpg",
    rating: 5,
    quoteIcon: "/images/feedback/quote.svg",
    text: "Mindo Health made it incredibly easy to fit learning into my busy schedule. The platform's structure, high-quality instructors, and relevant course material helped me gain the skills I needed to lead digital campaigns confidently. I've already applied what I learned to real projects and seen great results.",
    name: "Maria Jackson",
    role: "UX/UI Design Mentor",
  },
];

export default function Feedback({
  items = DEFAULT_ITEMS,
  title = "Students Feedback",
  viewAllHref = "/testimonials",
  starIcon = "/images/feedback/star.svg",
  quoteIcon = "/images/feedback/quote.svg",
  className = "",
  autoplayMs = 3000,
}: FeedbackProps) {
  // Ensure unique nav selectors per component instance
  const uid = useId().replace(/[:]/g, "");
  const prevCls = `ot-button-prev-${uid}`;
  const nextCls = `ot-button-next-${uid}`;

  return (
    <div className={`ot-feedback-area pb-140 ${className}`}>
      <div className="container" data-cues="slideInUp" data-duration="1000">
        <div className="ot-feedback-inner">
          <div className="inner-top">
            <Swiper
              className="ot-feedback-slider"
              modules={[Autoplay, Navigation, A11y]}
              loop
              spaceBetween={25}
              autoHeight
              slidesPerView={1}
              autoplay={{
                delay: autoplayMs,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: `.${prevCls}`,
                nextEl: `.${nextCls}`,
              }}
            >
              {items.map((it, idx) => (
                <SwiperSlide key={idx} className="swiper-slide">
                  <div className="row justify-content-center g-4">
                    <div className="col-lg-4 col-md-12">
                      <div
                        className="ot-feedback-image"
                        style={{
                          backgroundImage: `url(${it.image})`,
                        }}
                        aria-label={it.name}
                      />
                    </div>
                    <div className="col-lg-8 col-md-12">
                      <div className="ot-feedback-content">
                        <div className="top">
                          <ul className="rating">
                            {Array.from({
                              length: it.rating,
                            }).map((_, i) => (
                              <li key={i}>
                                <Image
                                  src={starIcon}
                                  alt="star"
                                  width={21}
                                  height={20}
                                />
                              </li>
                            ))}
                          </ul>
                          <div className="quote">
                            <Image
                              src={it.quoteIcon || quoteIcon}
                              alt="quote"
                              width={34}
                              height={26}
                            />
                          </div>
                        </div>
                        <p>{it.text}</p>
                        <div className="info">
                          <h3>{it.name}</h3>
                          <span>{it.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Nav Buttons (scoped per instance with unique class names) */}
            <div className={`ot-feedback-nav-buttons`}>
              <div className={`ot-button-prev ${prevCls}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      fill="#1C43FE"
                      d="M20 12.75a.75.75 0 0 0 0-1.5zm0-1.5H4v1.5h16z"
                      opacity="0.5"
                    />
                    <path
                      stroke="#1C43FE"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m10 6-6 6 6 6"
                    />
                  </g>
                </svg>
              </div>
              <div className={`ot-button-next ${nextCls}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      fill="#1C43FE"
                      d="M4 11.25a.75.75 0 0 0 0 1.5zm0 1.5h16v-1.5H4z"
                      opacity="0.5"
                    />
                    <path
                      stroke="#1C43FE"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m14 6 6 6-6 6"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="inner-bottom section-title-animation animation-style3">
            <h2 className="title-animation">{title}</h2>
            <Link href={viewAllHref} className="default-btn">
              View All Feedback
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                aria-hidden
              >
                <path
                  opacity="0.5"
                  d="M16.25 6.75V7.25H1.25V6.75H16.25Z"
                  fill="#1C43FE"
                  stroke="#1C43FE"
                />
                <path
                  d="M10.75 1L16.75 7L10.75 13"
                  stroke="#1C43FE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
