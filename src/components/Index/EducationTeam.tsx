import Image from "next/image";
import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  img: string;
  href: string;
  wrapStyle?: boolean;
  socials?: {
    facebook?: string;
    linkedin?: string;
    github?: string;
  };
};

const members: TeamMember[] = [
  {
    name: "Instructor 1",
    role: "Description 1",
    img: "/images/team/team1.jpg", // place under /public/images/team/
    href: "/instructor-details",
    wrapStyle: false,
    socials: {
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  },
  {
    name: "Instructor 2",
    role: "Description 2",
    img: "/images/team/team2.jpg",
    href: "/instructor-details",
    wrapStyle: true,
    socials: {
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  },
  {
    name: "Instructor 3",
    role: "Description 3",
    img: "/images/team/team3.jpg",
    href: "/instructor-details",
    wrapStyle: false,
    socials: {
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  },
  {
    name: "Instructor 4",
    role: "Description 4",
    img: "/images/team/team4.jpg",
    href: "/instructor-details",
    wrapStyle: true,
    socials: {
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  },
];

const EducationTeam: React.FC = () => {
  return (
    <section className="education-team-area pb-140">
      <div className="container">
        <div
          className="section-title section-title-animation animation-style1"
          data-cues="slideInUp"
          data-duration="1000"
        >
          <span className="sub">Meet Our Instructors</span>
          <h2>
            <span className="title-animation" suppressHydrationWarning>
              Your Learning Guides
            </span>{" "}
            <Image
              src="/images/title-line.png"
              alt="image"
              width={155}
              height={12}
            />
          </h2>
        </div>

        <div
          className="row justify-content-center g-4"
          data-cues="slideInUp"
          data-duration="1000"
        >
          {members.map((m, i) => (
            <div className="col-lg-3 col-md-6" key={m.name + i}>
              <div
                className={`education-team-card${
                  m.wrapStyle ? " wrap-style" : ""
                }`}
              >
                <div className="image">
                  <Link href={m.href}>
                    <Image src={m.img} alt={m.name} width={610} height={610} />
                  </Link>

                  <div className="share-btn">
                    {/* share icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
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
                      <li>
                        <a
                          href={m.socials?.facebook || "#"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M11.5489 20V10.8777H14.6097L15.0689 7.32156H11.5489V5.05147C11.5489 4.0222 11.8336 3.32076 13.3112 3.32076L15.1928 3.31999V0.13923C14.8674 0.0969453 13.7504 0 12.4505 0C9.73586 0 7.87739 1.65697 7.87739 4.69927V7.32156H4.80737V10.8777H7.87739V20H11.5489Z"
                              fill="#63667D"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={m.socials?.linkedin || "#"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M19.8 19.8006V13.3546C19.8 10.1866 19.118 7.7666 15.422 7.7666C13.64 7.7666 12.452 8.7346 11.968 9.6586H11.924V8.0526H8.42603V19.8006H12.078V13.9706C12.078 12.4306 12.364 10.9566 14.256 10.9566C16.126 10.9566 16.148 12.6946 16.148 14.0586V19.7786H19.8V19.8006Z"
                              fill="#63667D"
                            />
                            <path
                              d="M2.48584 8.05176H6.13784V19.7998H2.48584V8.05176Z"
                              fill="#63667D"
                            />
                            <path
                              d="M4.31195 2.2002C3.14595 2.2002 2.19995 3.1462 2.19995 4.3122C2.19995 5.4782 3.14595 6.4462 4.31195 6.4462C5.47795 6.4462 6.42395 5.4782 6.42395 4.3122C6.42395 3.1462 5.47795 2.2002 4.31195 2.2002Z"
                              fill="#63667D"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={m.socials?.github || "#"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                          >
                            <path
                              d="M9.08281 24.1187C9.86965 24.1187 10.092 23.8108 10.092 23.4174C10.092 23.024 10.092 22.1687 10.0749 20.9542C5.98676 21.8266 5.11439 19.0042 5.11439 19.0042C4.44728 17.345 3.47228 16.8832 3.47228 16.8832C2.13807 15.9937 3.57491 16.0108 3.57491 16.0108C5.04597 16.1134 5.83281 17.499 5.83281 17.499C7.14991 19.7227 9.27097 19.0727 10.1091 18.6963C10.1775 17.9608 10.5025 17.2595 11.0499 16.7463C7.78281 16.3871 4.34465 15.1384 4.34465 9.59634C4.32754 8.15949 4.87491 6.75686 5.86702 5.71344C5.69597 5.35423 5.19991 3.88318 5.98676 1.88186C5.98676 1.88186 7.21834 1.48844 10.0407 3.37002C12.4525 2.72002 14.9841 2.72002 17.396 3.37002C20.1841 1.50555 21.4328 1.88186 21.4328 1.88186C22.2197 3.86607 21.7236 5.33713 21.5868 5.71344C22.5789 6.75686 23.1091 8.15949 23.092 9.59634C23.092 15.1555 19.6539 16.37 16.3697 16.7292C16.8828 17.1569 17.3618 18.0463 17.3618 19.3976C17.3618 21.3477 17.3447 22.8871 17.3447 23.349C17.3447 23.7253 17.5157 24.0332 18.3539 24.0332L9.08281 24.1187Z"
                              fill="#63667D"
                            />
                          </svg>
                        </a>
                      </li>
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
                    <Link href={m.href}>{m.name}</Link>
                  </h3>
                  <span>{m.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTeam;
