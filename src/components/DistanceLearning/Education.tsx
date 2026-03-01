"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Social = {
  href: string;
  title: string;
  svg: React.ReactNode;
};

export interface InstructorItem {
  name: string;
  role: string;
  href?: string;
  imgSrc: string;
  wrapStyle?: boolean; // add wrap-style class
}

interface EducationProps {
  titleLineSrc?: string;
  title?: string;
  subtitle?: string;
  items?: InstructorItem[];
  className?: string;
}

const DEFAULT_ITEMS: InstructorItem[] = [
  {
    name: "Instructor 1",
    role: "Description 1",
    href: "/instructor-details",
    imgSrc: "/images/team/team1.jpg",
  },
  {
    name: "Instructor 2",
    role: "Description 2",
    href: "/instructor-details",
    imgSrc: "/images/team/team2.jpg",
    wrapStyle: true,
  },
  {
    name: "Instructor 3",
    role: "Description 3",
    href: "/instructor-details",
    imgSrc: "/images/team/team3.jpg",
  },
  {
    name: "Instructor 4",
    role: "Description 4",
    href: "/instructor-details",
    imgSrc: "/images/team/team4.jpg",
    wrapStyle: true,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;
const headerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
} as const;
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
} as const;
const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
} as const;

const socials: Social[] = [
  {
    href: "https://www.facebook.com/",
    title: "Facebook",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden
      >
        <path
          d="M11.5487 20V10.8777H14.6094L15.0686 7.32156H11.5487V5.05147C11.5487 4.0222 11.8333 3.32076 13.311 3.32076L15.1925 3.31999V0.13923C14.8671 0.0969453 13.7502 0 12.4502 0C9.73561 0 7.87715 1.65697 7.87715 4.69927V7.32156H4.80713V10.8777H7.87715V20H11.5487Z"
          fill="#1C43FE"
        />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/",
    title: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden
      >
        <path
          d="M19.8003 19.8006V13.3546C19.8003 10.1866 19.1183 7.7666 15.4223 7.7666C13.6403 7.7666 12.4523 8.7346 11.9683 9.6586H11.9243V8.0526H8.42627V19.8006H12.0783V13.9706C12.0783 12.4306 12.3643 10.9566 14.2563 10.9566C16.1263 10.9566 16.1483 12.6946 16.1483 14.0586V19.7786H19.8003V19.8006Z"
          fill="#1C43FE"
        />
        <path
          d="M2.48633 8.05176H6.13833V19.7998H2.48633V8.05176Z"
          fill="#1C43FE"
        />
        <path
          d="M4.3122 2.2002C3.1462 2.2002 2.2002 3.1462 2.2002 4.3122C2.2002 5.4782 3.1462 6.4462 4.3122 6.4462C5.4782 6.4462 6.4242 5.4782 6.4242 4.3122C6.4242 3.1462 5.4782 2.2002 4.3122 2.2002Z"
          fill="#1C43FE"
        />
      </svg>
    ),
  },
  {
    href: "https://github.com/",
    title: "GitHub",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden
      >
        <path
          d="M9.08281 24.1187C9.86965 24.1187 10.092 23.8108 10.092 23.4174C10.092 23.024 10.092 22.1687 10.0749 20.9542C5.98676 21.8266 5.11439 19.0042 5.11439 19.0042C4.44728 17.345 3.47228 16.8832 3.47228 16.8832C2.13807 15.9937 3.57491 16.0108 3.57491 16.0108C5.04597 16.1134 5.83281 17.499 5.83281 17.499C7.14991 19.7227 9.27097 19.0727 10.1091 18.6963C10.1775 17.9608 10.5025 17.2595 11.0499 16.7463C7.78281 16.3871 4.34465 15.1384 4.34465 9.59634C4.32754 8.15949 4.87491 6.75686 5.86702 5.71344C5.69597 5.35423 5.19991 3.88318 5.98676 1.88186C5.98676 1.88186 7.21834 1.48844 10.0407 3.37002C12.4525 2.72002 14.9841 2.72002 17.396 3.37002C20.1841 1.50555 21.4328 1.88186 21.4328 1.88186C22.2197 3.86607 21.7236 5.33713 21.5868 5.71344C22.5789 6.75686 23.1091 8.15949 23.092 9.59634C23.092 15.1555 19.6539 16.37 16.3697 16.7292C16.8828 17.1569 17.3618 18.0463 17.3618 19.3976C17.3618 21.3477 17.3447 22.8871 17.3447 23.349C17.3447 23.7253 17.5157 24.0332 18.3539 24.0332L9.08281 24.1187Z"
          fill="#1C43FE"
        />
      </svg>
    ),
  },
];

function Triangle() {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      aria-hidden
    >
      <path
        d="M11 0L0 0L0 11C0 4.92487 4.92487 0 11 0Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function TeamCard({ item }: { item: InstructorItem }) {
  const Card = (
    <motion.div
      className={`education-team-card${item.wrapStyle ? " wrap-style" : ""}`}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
    >
      <div className="image">
        <Link href={item.href ?? "#"}>
          <Image
            src={item.imgSrc}
            alt={item.name}
            width={610}
            height={610}
            priority={false}
          />
        </Link>
        <div className="share-btn" aria-label="Share profile">
          {/* Share icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M9 11.5C9 12.163 8.73661 12.7989 8.26777 13.2678C7.79893 13.7366 7.16304 14 6.5 14C5.83696 14 5.20107 13.7366 4.73223 13.2678C4.26339 12.7989 4 12.163 4 11.5C4 10.837 4.26339 10.2011 4.73223 9.73223C5.20107 9.26339 5.83696 9 6.5 9C7.16304 9 7.79893 9.26339 8.26777 9.73223C8.73661 10.2011 9 10.837 9 11.5Z"
              stroke="#1C43FE"
              strokeWidth="1.5"
            />
            <path
              opacity="0.5"
              d="M14.32 16.8018L9 13.2898M14.42 6.83984L9.1 10.3518"
              stroke="#1C43FE"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M19 18.5C19 19.163 18.7366 19.7989 18.2678 20.2678C17.7989 20.7366 17.163 21 16.5 21C15.837 21 15.2011 20.7366 14.7322 20.2678C14.2634 19.7989 14 19.163 14 18.5C14 17.837 14.2634 17.2011 14.7322 16.7322C15.2011 16.2634 15.837 16 16.5 16C17.163 16 17.7989 16.2634 18.2678 16.7322C18.7366 17.2011 19 17.837 19 18.5ZM19 5.5C19 6.16304 18.7366 6.79893 18.2678 7.26777C17.7989 7.73661 17.163 8 16.5 8C15.837 8 15.2011 7.73661 14.7322 7.26777C14.2634 6.79893 14 6.16304 14 5.5C14 4.83696 14.2634 4.20107 14.7322 3.73223C15.2011 3.26339 15.837 3 16.5 3C17.163 3 17.7989 3.26339 18.2678 3.73223C18.7366 4.20107 19 4.83696 19 5.5Z"
              stroke="#1C43FE"
              strokeWidth="1.5"
            />
          </svg>

          <ul className="list">
            {socials.map((s) => (
              <li key={s.title}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.title}
                >
                  {s.svg}
                </a>
              </li>
            ))}
          </ul>

          <div className="shape1" aria-hidden>
            <Triangle />
          </div>
          <div className="shape2" aria-hidden>
            <Triangle />
          </div>
        </div>
      </div>

      <div className="content">
        <h3>
          <Link href={item.href ?? "#"}>{item.name}</Link>
        </h3>
        <span>{item.role}</span>
      </div>
    </motion.div>
  );

  return Card;
}

export default function Education({
  titleLineSrc = "/images/title-line.png",
  title = "Your Learning Guides",
  subtitle = "Meet Our Instructors",
  items = DEFAULT_ITEMS,
  className = "",
}: EducationProps) {
  return (
    <div className={`education-team-area ptb-140 ${className}`}>
      <div className="container">
        <motion.div
          className="section-title section-title-animation animation-style1"
          data-cues="slideInUp"
          data-duration="1000"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="sub">{subtitle}</span>
          <h2 className="title-animation">
            {title} <Image src={titleLineSrc} alt="" width={155} height={12} />
          </h2>
        </motion.div>

        <motion.div
          className="row justify-content-center g-4"
          data-cues="slideInUp"
          data-duration="1000"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((item, idx) => (
            <motion.div
              className="col-lg-3 col-md-6"
              key={idx}
              variants={cardVariants}
            >
              <TeamCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        /* Ensure share menu and shapes stack correctly if your base CSS is missing */
        .education-team-card {
          position: relative;
        }
        .education-team-card .image {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }
        .education-team-card .share-btn {
          position: absolute;
          right: 12px;
          top: 12px;
          display: grid;
          place-items: center;
        }
        .education-team-card .share-btn .list {
          position: absolute;
          top: 44px;
          right: 0;
          display: flex;
          gap: 8px;
          background: #fff;
          padding: 8px 10px;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          opacity: 0;
          pointer-events: none;
          transform: translateY(-6px);
          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }
        .education-team-card .share-btn:hover .list {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        .education-team-card .shape1,
        .education-team-card .shape2 {
          position: absolute;
          color: rgba(28, 67, 254, 0.15);
        }
        .education-team-card .shape1 {
          bottom: 8px;
          left: 8px;
        }
        .education-team-card .shape2 {
          top: 8px;
          right: 8px;
        }
      `}</style>
    </div>
  );
}
