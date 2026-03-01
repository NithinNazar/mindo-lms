"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, type Variants, cubicBezier } from "framer-motion";
import CategoryMenu from "./CategoryMenu";
import AuthLinks from "./AuthLinks";
import CartIcon from "./CartIcon";

const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

// Menu item type; supports nested dropdowns (children)
export type MenuItem = {
  title: string;
  href?: string; // optional for dropdown toggles
  order: number;
  children?: MenuItem[];
  active?: boolean; // optional manual active flag
};

function byOrder(a: MenuItem, b: MenuItem) {
  return (a.order ?? 0) - (b.order ?? 0);
}

function isActivePath(pathname: string, href?: string) {
  if (!href) return false;
  // normalize legacy .html links to Next routes
  const norm = href
    .replace(/index\.html$/i, "/")
    .replace(/\.html$/i, "")
    .replace(/\/$/, "");
  const current = pathname.replace(/\/$/, "");
  return norm !== "" && current === norm;
}

export default function NavbarTwo() {
  const pathname = usePathname();
  const router = useRouter();
  const [menu, setMenu] = useState<MenuItem[]>([]);
  // Avoid SSR/client HTML mismatches by rendering only after mount
  const [hasMounted, setHasMounted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Add sticky when scrolled down a bit
      setIsSticky(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/data/menu.json", {
          cache: "no-store",
        });
        const data = (await res.json()) as MenuItem[];
        if (!cancelled) setMenu(data);
      } catch (e) {
        console.error("Failed to load menu:", e);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const ordered = useMemo(() => {
    const clone = menu.map((m) => ({ ...m }));
    clone.sort(byOrder);
    const sortChildren = (items?: MenuItem[]): MenuItem[] | undefined => {
      if (!items) return undefined;
      const mapped = items.map((c) => ({
        ...c,
        children: sortChildren(c.children),
      }));
      mapped.sort(byOrder);
      return mapped;
    };
    return clone.map((m) => ({ ...m, children: sortChildren(m.children) }));
  }, [menu]);

  // --- render helpers ---
  const renderLinkLabel = (title: string) => (
    <>
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
      >
        <path
          d="M13 1.5L7 6.5L1 1.5"
          stroke="#131F34"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  const renderMenuLevel = (items: MenuItem[], level = 0) => (
    <motion.ul
      className={level === 0 ? "navbar-nav" : "dropdown-menu"}
      variants={listVariants}
      initial={level === 0 ? "hidden" : undefined}
      animate={level === 0 ? "visible" : undefined}
    >
      {items.map((item, idx) => {
        const hasChildren =
          Array.isArray(item.children) && item.children.length > 0;
        const active = item.active || isActivePath(pathname, item.href);

        // Preserve exact classes/structure from your HTML
        return (
          <motion.li
            key={`${level}-${idx}-${item.title}`}
            className={`nav-item${hasChildren ? "" : ""}`}
            variants={level === 0 ? itemVariants : undefined}
            initial={undefined}
            animate={undefined}
          >
            {hasChildren ? (
              <a
                href="javascript:void(0)"
                className={`dropdown-toggle nav-link${active ? " active" : ""}`}
              >
                {renderLinkLabel(item.title)}
              </a>
            ) : item.href ? (
              <Link
                href={item.href}
                className={`nav-link${active ? " active" : ""}`}
              >
                {item.title}
              </Link>
            ) : (
              <a href="#" className={`nav-link${active ? " active" : ""}`}>
                {item.title}
              </a>
            )}

            {hasChildren &&
              renderMenuLevel(item.children as MenuItem[], level + 1)}
          </motion.li>
        );
      })}
    </motion.ul>
  );

  // If not mounted yet, don't render to prevent hydration mismatch
  if (!hasMounted) {
    return null;
  }

  return (
    // Start Navbar Area
    <motion.nav
      className={`navbar navbar-expand-xl style-wrap2 ${
        isSticky ? "sticky" : ""
      }`}
      id="navbar"
      variants={navVariants}
      initial={false}
      animate="visible"
    >
      <div className="container-fluid position-relative">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand" href="/">
            <Image
              src="/images/mindo_logo_3.png"
              alt="logo"
              width={155}
              height={48}
            />
          </Link>
          <CategoryMenu />
        </div>

        <motion.button
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarOffcanvas"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <span className="burger-menu">
            <span className="top-bar"></span>
            <span className="middle-bar"></span>
            <span className="bottom-bar"></span>
          </span>
        </motion.button>

        <div className="collapse navbar-collapse">
          {/* Dynamic menu from JSON (keeps original classes/structure) */}
          {renderMenuLevel(ordered)}

          <div className="others-option d-flex align-items-center">
            <div className="option-item">
              <form
                className="search-form"
                role="search"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const fd = new FormData(form);
                  const q = String(fd.get("q") || "").trim();
                  const params = new URLSearchParams();
                  if (q) params.set("q", q);
                  // Smooth client-side navigation (no full page reload)
                  router.push(
                    params.toString()
                      ? `/courses?${params.toString()}`
                      : "/courses",
                  );
                }}
              >
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Courses"
                  name="q"
                  autoComplete="off"
                />
                <button type="submit" aria-label="Search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_7812_541"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="1"
                      y="1"
                      width="22"
                      height="22"
                    >
                      <path
                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <path
                        opacity="0.5"
                        d="M20 20L22 22"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </mask>
                    <g mask="url(#mask0_7812_541)">
                      <path d="M0 0H24V24H0V0Z" fill="#131F34" />
                    </g>
                  </svg>
                </button>
              </form>
            </div>

            <CartIcon />
          </div>
        </div>

        <div className="auth-links">
          <AuthLinks />
        </div>
      </div>
    </motion.nav>
    // End Navbar Area
  );
}
