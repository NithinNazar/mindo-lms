"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Banner() {
  useEffect(() => {
    // --- Existing data-cues animations ---
    const elements = document.querySelectorAll("[data-cues]");
    elements.forEach((el) => {
      const cue = (el as HTMLElement).getAttribute("data-cues");
      const durationAttr = (el as HTMLElement).getAttribute("data-duration");
      const duration = durationAttr ? parseFloat(durationAttr) / 1000 : 1;

      if (cue === "zoomIn") {
        gsap.fromTo(
          el,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          },
        );
      }

      if (cue === "bounceIn") {
        gsap.fromTo(
          el,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            ease: "bounce.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          },
        );
      }

      if (cue === "slideInUp") {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          },
        );
      }
    });

    // --- Mousemove parallax for .mesh-grad (window-centered math) ---
    const area = document.querySelector<HTMLElement>(".education-banner-area");
    if (!area) return;

    let raf = 0;
    let lastEvent: MouseEvent | null = null;

    const animateFromEvent = (e: MouseEvent) => {
      const wx = window.innerWidth;
      const wy = window.innerHeight;
      const x = e.clientX; // window coordinates
      const y = e.clientY;
      const newx = x - wx / 2;
      const newy = y - wy / 2;

      const meshes = area.querySelectorAll<HTMLElement>(".mesh-grad");
      meshes.forEach((el) => {
        const speedAttr = el.getAttribute("data-speed");
        const revertAttr = el.getAttribute("data-revert");
        const speed = speedAttr ? parseFloat(speedAttr) : 0.02;
        const revert = revertAttr === "true" || revertAttr === "1";

        const s = revert ? -speed : speed;
        // Match the legacy formula: {x: (1 - newx*speed), y: (1 - newy*speed)}
        const tx = 1 - newx * s;
        const ty = 1 - newy * s;

        gsap.to(el, {
          x: tx,
          y: ty,
          duration: 1,
          overwrite: "auto",
          ease: "power2.out",
        });
      });
    };

    const onMove = (e: Event) => {
      const me = e as MouseEvent;
      lastEvent = me;
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        if (lastEvent) animateFromEvent(lastEvent);
        raf = 0;
      });
    };

    area.addEventListener("mousemove", onMove);

    return () => {
      area.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    // Start Education Banner Area
    <div className="education-banner-area">
      <div className="container">
        <div
          className="row justify-content-center align-items-center g-5"
          data-cues="slideInUp"
          data-duration="1000"
        >
          <div className="col-lg-6 col-md-12">
            <div className="education-banner-content section-title-animation animation-style1">
              <h1 className="title-animation">
                Every Course, Every Skill — One{" "}
                <span>
                  Powerful Platform.
                  {/* line underline image */}
                  <Image
                    src="/images/banner/line.png"
                    alt="image"
                    width={270}
                    height={18}
                    priority
                  />
                </span>
              </h1>
              <p>
                Mindo Health is your all-in-one online education platform—built
                for students, instructors, and institutions to thrive in a
                connected learning world.
              </p>
              <div className="banner-btn">
                <Link href="/courses" className="default-btn">
                  Explore Courses
                  {/* inline SVG kept as-is */}
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
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="education-banner-image">
              {/* teacher main image */}
              <Image
                src="/images/banner/teacher.png"
                alt="image"
                width={492}
                height={730}
                priority
              />

              <div
                className="mesh-grad"
                data-cues="zoomIn"
                data-duration="1000"
                data-speed="0.02"
                data-revert="true"
              >
                <Image
                  src="/images/banner/mesh-grad.png"
                  alt="image"
                  width={854}
                  height={622}
                  priority
                />
              </div>

              <div
                className="trust-review"
                data-cues="bounceIn"
                data-duration="1500"
              >
                <span className="sub">Review on</span>
                <h5>
                  <Image
                    src="/images/banner/star.svg"
                    alt="star"
                    width={24}
                    height={23}
                  />{" "}
                  Trustpilot
                </h5>
                <ul className="list">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i}>
                      <Image
                        src="/images/banner/star2.svg"
                        alt="star2"
                        width={21}
                        height={21}
                      />
                    </li>
                  ))}
                </ul>
                <span>4,500k+ Reviews</span>
                <div className="arrow">
                  <Image
                    src="/images/banner/arrow.png"
                    alt="image"
                    width={91}
                    height={38}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="education-banner-vector">
        <Image
          src="/images/banner/vector.png"
          alt="image"
          width={1920}
          height={788}
          priority
        />
      </div>
      <div className="education-banner-shape1">
        <Image
          src="/images/banner/shape1.png"
          alt="image"
          width={96}
          height={191}
        />
      </div>
      <div className="education-banner-shape2">
        <Image
          src="/images/banner/shape2.png"
          alt="image"
          width={50}
          height={35}
        />
      </div>
      <div className="education-banner-shape3">
        <Image
          src="/images/banner/shape3.png"
          alt="image"
          width={51}
          height={35}
        />
      </div>
      <div className="education-banner-shape4">
        <Image
          src="/images/banner/shape4.png"
          alt="image"
          width={101}
          height={183}
        />
      </div>
    </div>
    // End Education Banner Area
  );
}
