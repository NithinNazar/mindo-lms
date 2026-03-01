import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  href: string;
  image: string;
  tag: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  wrapStyle?: boolean;
}

const posts: BlogPost[] = [
  {
    href: "/blog/blog-details",
    image: "/images/blog/blog1.jpg", // place file in /public/images/blog/
    tag: "Learning Tips",
    title: "How to Stay Motivated While Learning Online",
    date: "June 10, 2025",
    readTime: "4 min read",
    excerpt:
      "Struggling to stay on track? These simple strategies will help you stay focused, organized, and inspired.",
    wrapStyle: true,
  },
  {
    href: "/blog/blog-details",
    image: "/images/blog/blog2.jpg",
    tag: "Success Stories",
    title: "Real Stories from Mindo Health Students",
    date: "June 5, 2025",
    readTime: "7 min read",
    excerpt:
      "Read how everyday learners turned skills into promotions, new jobs, and personal wins with the help of Mindo Health.",
  },
];

const Blog: React.FC = () => {
  return (
    <section className="education-blog-area ptb-140">
      <div className="container">
        <div
          className="row justify-content-center align-items-center g-4"
          data-cues="slideInUp"
          data-duration="1000"
        >
          <div className="col-lg-5 col-md-12">
            <div className="education-blog-content section-title-animation animation-style1">
              <span className="sub">Our Blog</span>
              <h2>
                <span className="title-animation" suppressHydrationWarning>
                  Insights & Ideas From
                </span>{" "}
                <span className="title-animation" suppressHydrationWarning>
                  The World
                </span>
                <Image
                  src="/images/title-line.png"
                  alt="image"
                  width={155}
                  height={12}
                />{" "}
                <span className="title-animation" suppressHydrationWarning>
                  Of Learning
                </span>
              </h2>
              <p>
                Stay informed, inspired, and ahead of the curve with expert
                articles, study tips, industry updates, and real success
                stories.
              </p>
              <Link href="/blog" className="default-btn">
                View All Insights
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

          <div className="col-lg-7 col-md-12">
            <div
              className="row justify-content-center g-5"
              data-cues="slideInUp"
              data-duration="1000"
            >
              {posts.map((p, idx) => (
                <div className="col-lg-6 col-md-6" key={p.title + idx}>
                  <div
                    className={`education-blog-card${
                      p.wrapStyle ? " wrap-style" : ""
                    }`}
                  >
                    <div className="image">
                      <Link href={p.href}>
                        <Image
                          src={p.image}
                          alt={p.title}
                          width={610}
                          height={610}
                        />
                      </Link>
                      <Link href={p.href} className="arrow-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.5"
                            d="M5.47015 17.4697C5.39647 17.5384 5.33736 17.6212 5.29637 17.7132C5.25538 17.8052 5.23334 17.9045 5.23156 18.0052C5.22979 18.1059 5.24831 18.2059 5.28603 18.2993C5.32375 18.3927 5.3799 18.4775 5.45112 18.5488C5.52233 18.62 5.60717 18.6761 5.70056 18.7139C5.79394 18.7516 5.89397 18.7701 5.99468 18.7683C6.09538 18.7665 6.19469 18.7445 6.28669 18.7035C6.37869 18.6625 6.46149 18.6034 6.53015 18.5297L5.47015 17.4697ZM6.53015 18.5297L18.5302 6.52973L17.4702 5.46973L5.47015 17.4697L6.53015 18.5297Z"
                            fill="#1C43FE"
                          />
                          <path
                            d="M9 6H18V15"
                            stroke="#1C43FE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
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
                      </Link>
                    </div>

                    <div className="content">
                      <Link href="/blog" className="tag-btn">
                        {p.tag}
                      </Link>
                      <h3>
                        <Link href={p.href}>{p.title}</Link>
                      </h3>
                      <ul className="meta">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M2 12C2 8.229 2 6.343 3.172 5.172C4.344 4.001 6.229 4 10 4H14C17.771 4 19.657 4 20.828 5.172C21.999 6.344 22 8.229 22 12V14C22 17.771 22 19.657 20.828 20.828C19.656 21.999 17.771 22 14 22H10C6.229 22 4.343 22 3.172 20.828C2.001 19.656 2 17.771 2 14V12Z"
                              stroke="#1C43FE"
                              strokeWidth="1.5"
                            />
                            <path
                              opacity="0.5"
                              d="M7 4V2.5M17 4V2.5M2.5 9H21.5"
                              stroke="#1C43FE"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C16.7348 18 16.4804 17.8946 16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17C16 16.7348 16.1054 16.4804 16.2929 16.2929C16.4804 16.1054 16.7348 16 17 16C17.2652 16 17.5196 16.1054 17.7071 16.2929C17.8946 16.4804 18 16.7348 18 17ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14C16.7348 14 16.4804 13.8946 16.2929 13.7071C16.1054 13.5196 16 13.2652 16 13C16 12.7348 16.1054 12.4804 16.2929 12.2929C16.4804 12.1054 16.7348 12 17 12C17.2652 12 17.5196 12.1054 17.7071 12.2929C17.8946 12.4804 18 12.7348 18 13ZM13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13ZM8 17C8 17.2652 7.89464 17.5196 7.70711 17.7071C7.51957 17.8946 7.26522 18 7 18C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17C6 16.7348 6.10536 16.4804 6.29289 16.2929C6.48043 16.1054 6.73478 16 7 16C7.26522 16 7.51957 16.1054 7.70711 16.2929C7.89464 16.4804 8 16.7348 8 17ZM8 13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13C6 12.7348 6.10536 12.4804 6.29289 12.2929C6.48043 12.1054 6.73478 12 7 12C7.26522 12 7.51957 12.1054 7.70711 12.2929C7.89464 12.4804 8 12.7348 8 13Z"
                              fill="#1C43FE"
                            />
                          </svg>
                          <span>{p.date}</span>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.5"
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              stroke="#1C43FE"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M12 8V12L14.5 14.5"
                              stroke="#1C43FE"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{p.readTime}</span>
                        </li>
                      </ul>
                      <p>{p.excerpt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
