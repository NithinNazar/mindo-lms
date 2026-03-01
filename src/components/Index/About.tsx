"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function About({
  classStyle,
  imgPath = "/images/about/about.jpg",
}: {
  classStyle: string;
  imgPath?: string;
}) {
  // Animation timing helpers so the button shows after the list items
  const LIST_LENGTH = 3; // number of <li> items below
  const STAGGER = 0.12; // matches list's staggerChildren
  const DELAY_CHILDREN = 0.08; // matches list's delayChildren
  const ITEM_DURATION = 0.45; // matches each li duration
  const BUTTON_EXTRA_DELAY = 0.08; // small breathing room
  const BUTTON_DELAY =
    DELAY_CHILDREN + STAGGER * LIST_LENGTH + BUTTON_EXTRA_DELAY;
  useEffect(() => {
    if (typeof window === "undefined") return;

    const counters = Array.from(
      document.querySelectorAll<HTMLElement>(".education-about-area .counter"),
    );
    const animated = new WeakSet<HTMLElement>();

    const animateCounter = (el: HTMLElement) => {
      if (animated.has(el)) return;
      animated.add(el);
      const target = parseInt(el.innerText.replace(/[^0-9]/g, ""), 10) || 0;
      const duration = 2000; // ms
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const value = Math.floor(target * p);
        el.innerText = String(value);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target as HTMLElement);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 },
      );

      counters.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      // Fallback: animate immediately
      counters.forEach(animateCounter);
    }
  }, []);
  return (
    <>
      <div className={`education-about-area ${classStyle}`}>
        <div className="container">
          <div
            className="row justify-content-center align-items-center g-5"
            data-cues="slideInUp"
            data-duration="1000"
          >
            <div className="col-xl-6 col-md-12">
              <div className="education-about-image">
                <Image
                  src={imgPath}
                  alt="image"
                  width={834}
                  height={1048}
                  priority
                />

                <div className="fun-wrap">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <path
                        d="M19.1667 19.1668C23.4008 19.1668 26.8333 15.7343 26.8333 11.5002C26.8333 7.26598 23.4008 3.8335 19.1667 3.8335C14.9325 3.8335 11.5 7.26598 11.5 11.5002C11.5 15.7343 14.9325 19.1668 19.1667 19.1668Z"
                        stroke="#1BC9E4"
                        strokeWidth="2.875"
                      />
                      <path
                        opacity="0.5"
                        d="M34.4999 33.5415C34.4999 38.3044 34.4999 42.1665 19.1666 42.1665C3.83325 42.1665 3.83325 38.3044 3.83325 33.5415C3.83325 28.7786 10.6988 24.9165 19.1666 24.9165C27.6344 24.9165 34.4999 28.7786 34.4999 33.5415Z"
                        stroke="#1BC9E4"
                        strokeWidth="2.875"
                      />
                      <path
                        d="M36.4168 16.5673L35.3972 17.5793C35.5308 17.7137 35.6896 17.8204 35.8646 17.8932C36.0396 17.966 36.2273 18.0035 36.4168 18.0035C36.6064 18.0035 36.794 17.966 36.969 17.8932C37.144 17.8204 37.3029 17.7137 37.4365 17.5793L36.4168 16.5673ZM35.5428 22.8885C34.6094 22.1774 33.7699 21.6081 33.0933 20.8702C32.4666 20.186 32.1043 19.4806 32.1043 18.5894H29.2293C29.2293 20.4102 30.0228 21.7768 30.9735 22.8137C31.8762 23.797 33.0377 24.5962 33.7987 25.175L35.5428 22.8885ZM32.1043 18.5894C32.1043 17.7997 32.5643 17.1634 33.1527 16.9027C33.6645 16.6765 34.4752 16.6535 35.3972 17.5793L37.4365 15.5534C35.769 13.8763 33.7086 13.5121 31.9893 14.273 31.1619 14.65 30.4611 15.2583 29.9714 16.0244 29.4817 16.7906 29.224 17.6801 29.2293 18.5894H32.1043ZM33.7987 25.175C34.0823 25.3916 34.4542 25.6734 34.8432 25.8957C35.2323 26.118 35.7767 26.3538 36.4168 26.3538V23.4788C36.482 23.4788 36.4494 23.4999 36.2597 23.3945C36.068 23.2871 35.8533 23.1261 35.5428 22.8885L33.7987 25.175ZM39.035 25.175C39.7959 24.5943 40.9574 23.797 41.8582 22.8137C42.8108 21.7768 43.6043 20.4083 43.6043 18.5913H40.7293C40.7293 19.4806 40.3671 20.186 39.7403 20.8721C39.0637 21.6081 38.2242 22.1774 37.2908 22.8885L39.035 25.175ZM43.6043 18.5913C43.6043 16.6746 42.4831 14.9975 40.8443 14.273C39.127 13.5121 37.0627 13.8763 35.3972 15.5534L37.4365 17.5793C38.3565 16.6535 39.1692 16.6765 39.679 16.9027C39.9971 17.0538 40.2652 17.2931 40.4514 17.5921C40.6376 17.8911 40.734 18.2391 40.7293 18.5913H43.6043ZM37.2908 22.8885C37.0617 23.0707 36.8224 23.2396 36.574 23.3945C36.3842 23.5018 36.3517 23.4788 36.4168 23.4788V26.3538C37.057 26.3538 37.5994 26.118 37.9885 25.8957C38.3795 25.6753 38.7513 25.3916 39.035 25.175L37.2908 22.8885Z"
                        fill="#1BC9E4"
                      />
                    </svg>
                  </div>
                  <div className="d-flex align-items-center">
                    <h3 className="counter">60</h3>
                    <h3 className="sub">K+</h3>
                  </div>
                  <p>Active Learners</p>
                </div>

                <div className="fun-color-wrap">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <path
                        d="M17.2499 19.1668C21.4841 19.1668 24.9166 15.7343 24.9166 11.5002C24.9166 7.26598 21.4841 3.8335 17.2499 3.8335C13.0157 3.8335 9.58325 7.26598 9.58325 11.5002C9.58325 15.7343 13.0157 19.1668 17.2499 19.1668Z"
                        stroke="white"
                        strokeWidth="2.88"
                      />
                      <path
                        opacity="0.5"
                        d="M23.9583 8.32025C24.6413 7.29119 25.6375 6.50941 26.7994 6.09062C27.9613 5.67184 29.2272 5.63832 30.4097 5.99502C31.5921 6.35173 32.6283 7.0797 33.3648 8.07116C34.1014 9.06263 34.499 10.2649 34.499 11.5C34.499 12.7351 34.1014 13.9374 33.3648 14.9288C32.6283 15.9203 31.5921 16.6483 30.4097 17.005 29.2272 17.3617 27.9613 17.3282 26.7994 16.9094 25.6375 16.4906 24.6413 15.7088 23.9583 14.6797"
                        stroke="white"
                        strokeWidth="2.88"
                      />
                      <path
                        d="M17.2499 40.2503C24.6597 40.2503 30.6666 36.8178 30.6666 32.5837C30.6666 28.3495 24.6597 24.917 17.2499 24.917C9.8401 24.917 3.83325 28.3495 3.83325 32.5837C3.83325 36.8178 9.8401 40.2503 17.2499 40.2503Z"
                        stroke="white"
                        strokeWidth="2.88"
                      />
                      <path
                        opacity="0.5"
                        d="M34.5 26.8335C37.8618 27.5714 40.25 29.4382 40.25 31.6252C40.25 33.5993 38.3065 35.3109 35.4583 36.1677"
                        stroke="white"
                        strokeWidth="2.88"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="d-flex align-items-center">
                    <h3 className="counter">4500</h3>
                    <h3 className="sub">+</h3>
                  </div>
                  <p>Expert Instructors</p>
                </div>

                <div className="shape1" data-speed="0.03" data-revert="true">
                  <Image
                    src="/images/about/shape1.png"
                    alt="image"
                    width={282}
                    height={282}
                  />
                </div>
                <div className="shape2" data-speed="0.03" data-revert="true">
                  <Image
                    src="/images/about/shape2.png"
                    alt="image"
                    width={191}
                    height={191}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-12">
              <div className="education-about-content section-title-animation animation-style1">
                <span className="sub">About Mindo Health</span>
                <h2>
                  <span className="title-animation" suppressHydrationWarning>
                    One Platform. Infinite
                  </span>{" "}
                  <span className="title-animation" suppressHydrationWarning>
                    Learning
                  </span>
                  <Image
                    src="/images/title-line.png"
                    alt="image"
                    width={155}
                    height={12}
                  />{" "}
                  <span className="title-animation" suppressHydrationWarning>
                    Possibilities.
                  </span>
                </h2>
                <p>
                  At Mindo Health, we believe quality education should be
                  accessible, engaging, and empowering—for everyone, everywhere.
                </p>
                <motion.ul
                  className="list"
                  data-cues="fadeIn"
                  data-duration="1000"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.12,
                        delayChildren: 0.08,
                      },
                    },
                  }}
                >
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: ITEM_DURATION,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="22"
                        viewBox="0 0 23 22"
                        fill="none"
                      >
                        <path
                          d="M9.12945 18.8897C9.04169 18.8897 8.95545 18.8667 8.8793 18.8231C8.80314 18.7795 8.73971 18.7168 8.69528 18.6411C7.01694 15.7816 2.54231 9.69345 2.49736 9.63229C2.4257 9.5349 2.39148 9.41498 2.40097 9.29444C2.41045 9.1739 2.463 9.0608 2.54901 8.97582L3.925 7.61622C4.00874 7.53347 4.11883 7.48268 4.23614 7.4727C4.35345 7.46271 4.47055 7.49415 4.56708 7.56155L9.02463 10.6741C12.0069 6.8495 14.777 4.20773 16.5994 2.64892C18.6509 0.894184 19.9569 0.104511 20.0115 0.0717886C20.0897 0.024819 20.1793 4.61886e-06 20.2705 6.63063e-10H22.4965C22.5985 -5.23576e-06 22.6982 0.0310049 22.7822 0.0889194C22.8662 0.146834 22.9307 0.228918 22.967 0.32429C23.0033 0.419662 23.0098 0.523819 22.9855 0.622952C22.9613 0.722086 22.9075 0.811514 22.8313 0.879383C16.5099 6.50979 9.6356 18.5148 9.56708 18.6354C9.52338 18.7121 9.46025 18.776 9.38404 18.8207C9.30784 18.8653 9.22123 18.8891 9.13292 18.8897H9.12945Z"
                          fill="#1C43FE"
                        />
                        <path
                          d="M17.6202 21.6082H0.503434C0.369915 21.6082 0.241865 21.5551 0.147452 21.4607C0.0530402 21.3663 0 21.2383 0 21.1047V3.98829C0 3.85477 0.0530402 3.72672 0.147452 3.63231C0.241865 3.5379 0.369915 3.48486 0.503434 3.48486H11.6036C11.7371 3.48486 11.8652 3.5379 11.9596 3.63231C12.054 3.72672 12.107 3.85477 12.107 3.98829C12.107 4.12181 12.054 4.24985 11.9596 4.34426C11.8652 4.43867 11.7371 4.49171 11.6036 4.49171H1.00687V20.6013H17.1168V10.0048C17.1168 9.87131 17.1698 9.74326 17.2642 9.64885C17.3586 9.55444 17.4867 9.5014 17.6202 9.5014C17.7537 9.5014 17.8818 9.55444 17.9762 9.64885C18.0706 9.74326 18.1236 9.87131 18.1236 10.0048V21.1047C18.1236 21.2383 18.0706 21.3663 17.9762 21.4607C17.8818 21.5551 17.7537 21.6082 17.6202 21.6082Z"
                          fill="#1C43FE"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h3>Learn from Anywhere</h3>
                      <p>
                        Access your courses anytime, on any device—at home, at
                        work, or on the go.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: ITEM_DURATION,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="22"
                        viewBox="0 0 23 22"
                        fill="none"
                      >
                        <path
                          d="M9.12945 18.8897C9.04169 18.8897 8.95545 18.8667 8.8793 18.8231C8.80314 18.7795 8.73971 18.7168 8.69528 18.6411C7.01694 15.7816 2.54231 9.69345 2.49736 9.63229C2.4257 9.5349 2.39148 9.41498 2.40097 9.29444C2.41045 9.1739 2.463 9.0608 2.54901 8.97582L3.925 7.61622C4.00874 7.53347 4.11883 7.48268 4.23614 7.4727C4.35345 7.46271 4.47055 7.49415 4.56708 7.56155L9.02463 10.6741C12.0069 6.8495 14.777 4.20773 16.5994 2.64892C18.6509 0.894184 19.9569 0.104511 20.0115 0.0717886C20.0897 0.024819 20.1793 4.61886e-06 20.2705 6.63063e-10H22.4965C22.5985 -5.23576e-06 22.6982 0.0310049 22.7822 0.0889194C22.8662 0.146834 22.9307 0.228918 22.967 0.32429C23.0033 0.419662 23.0098 0.523819 22.9855 0.622952C22.9613 0.722086 22.9075 0.811514 22.8313 0.879383C16.5099 6.50979 9.6356 18.5148 9.56708 18.6354C9.52338 18.7121 9.46025 18.776 9.38404 18.8207C9.30784 18.8653 9.22123 18.8891 9.13292 18.8897H9.12945Z"
                          fill="#1C43FE"
                        />
                        <path
                          d="M17.6202 21.6082H0.503434C0.369915 21.6082 0.241865 21.5551 0.147452 21.4607C0.0530402 21.3663 0 21.2383 0 21.1047V3.98829C0 3.85477 0.0530402 3.72672 0.147452 3.63231C0.241865 3.5379 0.369915 3.48486 0.503434 3.48486H11.6036C11.7371 3.48486 11.8652 3.5379 11.9596 3.63231C12.054 3.72672 12.107 3.85477 12.107 3.98829C12.107 4.12181 12.054 4.24985 11.9596 4.34426C11.8652 4.43867 11.7371 4.49171 11.6036 4.49171H1.00687V20.6013H17.1168V10.0048C17.1168 9.87131 17.1698 9.74326 17.2642 9.64885C17.3586 9.55444 17.4867 9.5014 17.6202 9.5014C17.7537 9.5014 17.8818 9.55444 17.9762 9.64885C18.0706 9.74326 18.1236 9.87131 18.1236 10.0048V21.1047C18.1236 21.2383 18.0706 21.3663 17.9762 21.4607C17.8818 21.5551 17.7537 21.6082 17.6202 21.6082Z"
                          fill="#1C43FE"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h3>Teach with Confidence</h3>
                      <p>
                        All the tools you need to build, launch, and scale your
                        courses—stress-free.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: ITEM_DURATION,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="22"
                        viewBox="0 0 23 22"
                        fill="none"
                      >
                        <path
                          d="M9.12945 18.8897C9.04169 18.8897 8.95545 18.8667 8.8793 18.8231C8.80314 18.7795 8.73971 18.7168 8.69528 18.6411C7.01694 15.7816 2.54231 9.69345 2.49736 9.63229C2.4257 9.5349 2.39148 9.41498 2.40097 9.29444C2.41045 9.1739 2.463 9.0608 2.54901 8.97582L3.925 7.61622C4.00874 7.53347 4.11883 7.48268 4.23614 7.4727C4.35345 7.46271 4.47055 7.49415 4.56708 7.56155L9.02463 10.6741C12.0069 6.8495 14.777 4.20773 16.5994 2.64892C18.6509 0.894184 19.9569 0.104511 20.0115 0.0717886C20.0897 0.024819 20.1793 4.61886e-06 20.2705 6.63063e-10H22.4965C22.5985 -5.23576e-06 22.6982 0.0310049 22.7822 0.0889194C22.8662 0.146834 22.9307 0.228918 22.967 0.32429C23.0033 0.419662 23.0098 0.523819 22.9855 0.622952C22.9613 0.722086 22.9075 0.811514 22.8313 0.879383C16.5099 6.50979 9.6356 18.5148 9.56708 18.6354C9.52338 18.7121 9.46025 18.776 9.38404 18.8207C9.30784 18.8653 9.22123 18.8891 9.13292 18.8897H9.12945Z"
                          fill="#1C43FE"
                        />
                        <path
                          d="M17.6202 21.6082H0.503434C0.369915 21.6082 0.241865 21.5551 0.147452 21.4607C0.0530402 21.3663 0 21.2383 0 21.1047V3.98829C0 3.85477 0.0530402 3.72672 0.147452 3.63231C0.241865 3.5379 0.369915 3.48486 0.503434 3.48486H11.6036C11.7371 3.48486 11.8652 3.5379 11.9596 3.63231C12.054 3.72672 12.107 3.85477 12.107 3.98829C12.107 4.12181 12.054 4.24985 11.9596 4.34426C11.8652 4.43867 11.7371 4.49171 11.6036 4.49171H1.00687V20.6013H17.1168V10.0048C17.1168 9.87131 17.1698 9.74326 17.2642 9.64885C17.3586 9.55444 17.4867 9.5014 17.6202 9.5014C17.7537 9.5014 17.8818 9.55444 17.9762 9.64885C18.0706 9.74326 18.1236 9.87131 18.1236 10.0048V21.1047C18.1236 21.2383 18.0706 21.3663 17.9762 21.4607C17.8818 21.5551 17.7537 21.6082 17.6202 21.6082Z"
                          fill="#1C43FE"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h3>Earn Real Certificates</h3>
                      <p>
                        Complete courses and receive professional certificates
                        to boost your career.
                      </p>
                    </div>
                  </motion.li>
                </motion.ul>

                <motion.div
                  className="about-btn"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: BUTTON_DELAY,
                      },
                    },
                  }}
                >
                  <Link href="/about-us" className="default-btn">
                    Learn More About Us
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
