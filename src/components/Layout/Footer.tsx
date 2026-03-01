"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const ease = [0.22, 1, 0.36, 1] as const;
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.12,
        delayChildren: 0.06,
      },
    },
  } as const;
  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
  } as const;

  const rectnglDiv =
    pathname === "/online-training"
      ? "/images/rectangle3.png"
      : pathname === "/distance-learning"
        ? "/images/rectangle1.png"
        : false;
  const footerClass =
    pathname === "/online-training"
      ? "wrap-style3"
      : pathname === "/distance-learning"
        ? "wrap-style2"
        : "pt-140";

  return (
    // Start Footer Area
    <footer className={`footer-area ${footerClass}`}>
      <div className="container">
        <div className="pb-140">
          <motion.div
            className="row justify-content-center g-5"
            data-cues="slideInUp"
            data-duration="1000"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="col-lg-4 col-md-6" variants={item}>
              <div className="single-footer-widget">
                <Link href="/" className="widget-logo">
                  {/* Next/Image for optimized logo */}
                  <Image
                    src="/images/mindo_logo_3.png"
                    alt="logo"
                    width={155}
                    height={48}
                    priority
                  />
                </Link>
                <p>
                  Empowering learners and educators worldwide through flexible,
                  expert-led online courses. Learn anytime, anywhere — with
                  tools that help you grow.
                </p>
              </div>
            </motion.div>
            <motion.div className="col-lg-4 col-md-6" variants={item}>
              <div className="single-footer-widget left-gap">
                <h3>Follow Us</h3>
                <ul className="social-list">
                  <li>
                    <a
                      href="https://www.facebook.com/"
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
                        <g clipPath="url(#clip0_7899_341)">
                          <path
                            d="M12.7038 21.999V11.9645H16.0706L16.5757 8.05274H12.7038V5.55564C12.7038 4.42344 13.0169 3.65186 14.6423 3.65186L16.712 3.65101V0.152176C16.3541 0.105663 15.1255 -0.000976562 13.6955 -0.000976562C10.7094 -0.000976562 8.66511 1.82169 8.66511 5.16822V8.05274H5.28809V11.9645H8.66511V21.999H12.7038Z"
                            fill="#1C43FE"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_7899_341">
                            <rect
                              width="22"
                              height="22"
                              fill="white"
                              transform="translate(0 -0.000976562)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21.5999 21.5997V14.5677C21.5999 11.1117 20.8559 8.47168 16.8239 8.47168C14.8799 8.47168 13.5839 9.52768 13.0559 10.5357H13.0079V8.78368H9.19189V21.5997H13.1759V15.2397C13.1759 13.5597 13.4879 11.9517 15.5519 11.9517C17.5919 11.9517 17.6159 13.8477 17.6159 15.3357V21.5757H21.5999V21.5997Z"
                          fill="#1C43FE"
                        />
                        <path
                          d="M2.71191 8.7832H6.69591V21.5992H2.71191V8.7832Z"
                          fill="#1C43FE"
                        />
                        <path
                          d="M4.7039 2.39941C3.4319 2.39941 2.3999 3.43141 2.3999 4.70341C2.3999 5.97541 3.4319 7.03141 4.7039 7.03141C5.9759 7.03141 7.0079 5.97541 7.0079 4.70341C7.0079 3.43141 5.9759 2.39941 4.7039 2.39941Z"
                          fill="#1C43FE"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_7899_367)">
                          <path
                            d="M14.1094 11.999C14.1094 13.1639 13.1649 14.1084 12 14.1084C10.8351 14.1084 9.89062 13.1639 9.89062 11.999C9.89062 10.8341 10.8351 9.88965 12 9.88965C13.1649 9.88965 14.1094 10.8341 14.1094 11.999Z"
                            fill="#1C43FE"
                          />
                          <path
                            d="M15.5625 5.62402H8.4375C6.8866 5.62402 5.625 6.88562 5.625 8.43652V15.5615C5.625 17.1124 6.8866 18.374 8.4375 18.374H15.5625C17.1134 18.374 18.375 17.1124 18.375 15.5615V8.43652C18.375 6.88562 17.1134 5.62402 15.5625 5.62402ZM12 15.5146C10.0615 15.5146 8.48438 13.9376 8.48438 11.999C8.48438 10.0605 10.0615 8.4834 12 8.4834C13.9385 8.4834 15.5156 10.0605 15.5156 11.999C15.5156 13.9376 13.9385 15.5146 12 15.5146ZM16.0312 8.6709C15.6429 8.6709 15.3281 8.35614 15.3281 7.96777C15.3281 7.57941 15.6429 7.26465 16.0312 7.26465C16.4196 7.26465 16.7344 7.57941 16.7344 7.96777C16.7344 8.35614 16.4196 8.6709 16.0312 8.6709Z"
                            fill="#1C43FE"
                          />
                          <path
                            d="M17.6719 -0.000976562H6.32812C2.83887 -0.000976562 0 2.83789 0 6.32715V17.6709C0 21.1602 2.83887 23.999 6.32812 23.999H17.6719C21.1611 23.999 24 21.1602 24 17.6709V6.32715C24 2.83789 21.1611 -0.000976562 17.6719 -0.000976562ZM19.7812 15.5615C19.7812 17.8877 17.8887 19.7803 15.5625 19.7803H8.4375C6.11133 19.7803 4.21875 17.8877 4.21875 15.5615V8.43652C4.21875 6.11035 6.11133 4.21777 8.4375 4.21777H15.5625C17.8887 4.21777 19.7812 6.11035 19.7812 8.43652V15.5615Z"
                            fill="#1C43FE"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_7899_367">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0 -0.000976562)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/" target="_blank" rel="noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_7899_365)">
                          <path
                            d="M14.2342 10.1614L22.9766 -0.000976562H20.9049L13.3139 8.82286L7.25095 -0.000976562H0.258057L9.42642 13.3422L0.258057 23.999H2.32985L10.3462 14.6808L16.7491 23.999H23.742L14.2337 10.1614H14.2342ZM11.3966 13.4598L10.4676 12.1311L3.07634 1.55863H6.2585L12.2234 10.091L13.1523 11.4196L20.9059 22.5103H17.7238L11.3966 13.4603V13.4598Z"
                            fill="#1C43FE"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_7899_365)">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0 -0.000976562)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div className="col-lg-4 col-md-12" variants={item}>
              <div className="single-footer-widget">
                <h3>Subscribe Our Newsletter</h3>
                <div className="newsletter-form">
                  <p>
                    Get the latest courses, tips & stories delivered to your
                    inbox.
                  </p>
                  <form>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email address"
                      required
                    />
                    <button type="submit" className="default-btn">
                      Subscribe
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                      >
                        <path
                          opacity="0.5"
                          d="M16.25 6.74902V7.24902H1.25V6.74902H16.25Z"
                          fill="white"
                          stroke="white"
                        />
                        <path
                          d="M10.75 0.999023L16.75 6.99902L10.75 12.999"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="pb-140">
          <motion.div
            className="row justify-content-center g-5"
            data-cues="slideInUp"
            data-duration="1000"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="col-lg-3 col-sm-6" variants={item}>
              <div className="single-footer-widget">
                <h3>Quick Links</h3>
                <ul className="links-list">
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/courses">All Courses</Link>
                  </li>
                  <li>
                    <Link href="/blog">Our Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/faq">Help Center</Link>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="col-lg-3 col-sm-6" variants={item}>
              <div className="single-footer-widget">
                <h3>Top Categories</h3>
                <ul className="links-list">
                  <li>
                    <Link href="/courses">Mental Wellness</Link>
                  </li>
                  <li>
                    <Link href="/courses">Applied Psychology</Link>
                  </li>
                  <li>
                    <Link href="/courses">Mindfulness & Meditation</Link>
                  </li>
                  <li>
                    <Link href="/courses">Stress Management</Link>
                  </li>
                  <li>
                    <Link href="/courses">Emotional Intelligence</Link>
                  </li>
                  <li>
                    <Link href="/courses">Cognitive Behavioral Therapy</Link>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="col-lg-3 col-sm-6" variants={item}>
              <div className="single-footer-widget">
                <h3>Legal</h3>
                <ul className="links-list">
                  <li>
                    <Link href="/terms-conditions">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/instructors">Instructors</Link>
                  </li>
                  <li>
                    <Link href="/success-story">Success Story</Link>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="col-lg-3 col-sm-6" variants={item}>
              <div className="single-footer-widget">
                <h3>Get in Touch</h3>
                <ul className="info-list">
                  <li>
                    <span>Email:</span>
                    <a href="mailto:support@mindohealth.com">
                      support@mindohealth.com
                    </a>
                  </li>
                  <li>
                    <span>Phone:</span>
                    <a href="tel:18001234567">+1 (800) 123-4567</a>
                  </li>
                  <li>
                    <span>Address:</span>
                    123 Learning Lane, Online City, World
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="copyright-area"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>
            © <span>Mindo Health</span>. All rights reserved. Designed by{" "}
            <a href="https://envytheme.com/" target="_blank" rel="noreferrer">
              EnvyTheme
            </a>
          </p>
        </motion.div>
      </div>

      {rectnglDiv && (
        <div className="footer-rectangle">
          <Image src={rectnglDiv} alt="image" width={1920} height={143} />
        </div>
      )}
    </footer>
    // End Footer Area
  );
}
