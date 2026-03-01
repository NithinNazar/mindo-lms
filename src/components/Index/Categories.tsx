"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

type Category = {
  title: string;
  href: string;
  iconSrc: string;
  wrapClass?: string; // optional extra class like wrap2, wrap3, etc.
};

const categories: Category[] = [
  {
    title: "Mental Wellness",
    href: "/courses",
    iconSrc: "/images/categories/icon1.svg",
  },
  {
    title: "Applied Psychology",
    href: "/courses",
    iconSrc: "/images/categories/icon2.svg",
    wrapClass: "wrap2",
  },
  {
    title: "Psychology in Real Life",
    href: "/courses",
    iconSrc: "/images/categories/icon3.svg",
    wrapClass: "wrap3",
  },
  {
    title: "Mindfulness & Meditation",
    href: "/courses",
    iconSrc: "/images/categories/icon4.svg",
    wrapClass: "wrap4",
  },
  {
    title: "Stress Management",
    href: "/courses",
    iconSrc: "/images/categories/icon5.svg",
    wrapClass: "wrap5",
  },
  {
    title: "Emotional Intelligence",
    href: "/courses",
    iconSrc: "/images/categories/icon6.svg",
    wrapClass: "wrap2",
  },
  {
    title: "Cognitive Behavioral Therapy",
    href: "/courses",
    iconSrc: "/images/categories/icon7.svg",
    wrapClass: "wrap3",
  },
  {
    title: "Positive Psychology",
    href: "/courses",
    iconSrc: "/images/categories/icon8.svg",
    wrapClass: "wrap4",
  },
  {
    title: "Self-Care & Resilience",
    href: "/courses",
    iconSrc: "/images/categories/icon9.svg",
    wrapClass: "wrap5",
  },
];

// Parent variant with stagger for the section title only
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

// Simple container for the cards row (no implicit stagger)
const rowContainer: Variants = {
  hidden: {},
  visible: {},
};

// Variant that accepts a custom index to delay each card left→right
const slideInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      // delay by index so items animate left → right in DOM order
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Categories() {
  return (
    // Start Education Categories Area
    <div className="education-categories-area ptb-140">
      <div className="container">
        {/* Section Title */}
        <motion.div
          className="section-title section-title-animation animation-style1"
          variants={containerVariants}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          suppressHydrationWarning
        >
          <motion.h2 variants={slideInUp} initial={false}>
            <span className="title-animation" suppressHydrationWarning>
              Top Course Categories
            </span>{" "}
            <Image
              src="/images/title-line.png"
              alt="image"
              width={155}
              height={12}
            />
          </motion.h2>
          <motion.p variants={slideInUp} initial={false}>
            Choose from industry-relevant topics curated by experts.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="row justify-content-center align-items-end g-4"
          variants={containerVariants}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          suppressHydrationWarning
        >
          {/* Left: 3x3 cards */}
          <div className="col-lg-9 col-md-12">
            <motion.div
              className="row justify-content-center g-4"
              variants={rowContainer}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              suppressHydrationWarning
            >
              {categories.map((cat, idx) => (
                <div className="col-xl-4 col-sm-6" key={cat.title + idx}>
                  <motion.div
                    className={`education-categories-card${
                      cat.wrapClass ? " " + cat.wrapClass : ""
                    }`}
                    variants={slideInUp}
                    custom={idx}
                  >
                    <div className="icon">
                      <Image
                        src={cat.iconSrc}
                        alt="icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="title">
                      <h3>
                        <Link href={cat.href}>{cat.title}</Link>
                      </h3>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: CTA + vector */}
          <div className="col-lg-3 col-md-12">
            <motion.div
              className="education-categories-right"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={slideInUp}>
                <Link href="/course-categories" className="circle-box">
                  <span>
                    View All <br /> Categories
                  </span>
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
              </motion.div>

              <motion.div className="vector-wrap" variants={slideInUp}>
                <Image
                  src="/images/categories/vector.png"
                  alt="image"
                  width={205}
                  height={254}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
    // End Education Categories Area
  );
}
