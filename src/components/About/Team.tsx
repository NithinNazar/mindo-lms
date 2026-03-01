"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const headerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
} as const;
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
} as const;
const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
} as const;

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  profileHref?: string;
  facebook?: string;
  linkedin?: string;
  wrapStyle?: boolean; // add 'wrap-style' class
};

interface TeamProps {
  titleLineSrc?: string;
  subtitle?: string;
  title?: string;
  items?: TeamMember[];
  className?: string;
}

const DEFAULT_ITEMS: TeamMember[] = [
  {
    name: "Instructor 1",
    role: "Description 1",
    photo: "/images/team/team5.jpg",
    profileHref: "/instructor-details",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    wrapStyle: true,
  },
  {
    name: "Instructor 2",
    role: "Description 2",
    photo: "/images/team/team6.jpg",
    profileHref: "/instructor-details",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Instructor 3",
    role: "Description 3",
    photo: "/images/team/team7.jpg",
    profileHref: "/instructor-details",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    wrapStyle: true,
  },
  {
    name: "Instructor 4",
    role: "Description 4",
    photo: "/images/team/team8.jpg",
    profileHref: "/instructor-details",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
  },
];

export default function Team({
  titleLineSrc = "/images/title-line.png",
  subtitle = "Meet Our Instructors",
  title = "Your Learning Guides",
  items = DEFAULT_ITEMS,
  className = "",
}: TeamProps) {
  return (
    <div className={`ot-team-area pb-140 ${className}`}>
      <div className="container">
        <motion.div
          className="section-title section-title-animation animation-style1"
          data-cues="slideInUp"
          data-duration="1000"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="sub">{subtitle}</span>
          <h2 className="title-animation">
            {title}{" "}
            <Image
              src={titleLineSrc}
              alt=""
              width={160}
              height={10}
              style={{ verticalAlign: "middle" }}
            />
          </h2>
        </motion.div>

        <motion.div
          className="row justify-content-center g-4"
          data-cues="slideInUp"
          data-duration="1000"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((m, idx) => (
            <motion.div
              className="col-lg-3 col-sm-6"
              key={idx}
              variants={cardVariants}
            >
              <motion.div
                className={`ot-team-card${m.wrapStyle ? " wrap-style" : ""}`}
                whileHover={{ y: -4 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="image">
                  <Link href={m.profileHref ?? "#"}>
                    <Image
                      src={m.photo}
                      alt={m.name}
                      width={612}
                      height={560}
                    />
                  </Link>

                  <div className="share-btn">
                    <ul className="list">
                      {m.facebook && (
                        <li>
                          <a href={m.facebook} target="_blank" rel="noreferrer">
                            <Image
                              src="/images/team/facebook.svg"
                              alt="facebook"
                              width={20}
                              height={20}
                            />
                          </a>
                        </li>
                      )}
                      {m.linkedin && (
                        <li>
                          <a href={m.linkedin} target="_blank" rel="noreferrer">
                            <Image
                              src="/images/team/linkedin.svg"
                              alt="linkedin"
                              width={22}
                              height={22}
                            />
                          </a>
                        </li>
                      )}
                    </ul>

                    <div className="shape1">
                      <svg
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                      >
                        <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"></path>
                      </svg>
                    </div>
                    <div className="shape2">
                      <svg
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                      >
                        <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="content">
                  <h3>
                    <Link href={m.profileHref ?? "#"}>{m.name}</Link>
                  </h3>
                  <span>{m.role}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
