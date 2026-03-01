import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "../styles/css/animate.min.css";
import "../styles/css/remixicon.css";
import "../styles/style.scss";
import "../styles/responsive.scss";
import Providers from "./providers";
import SidebarMenu from "@/components/Layout/SidebarMenu";
import Footer from "@/components/Layout/Footer";
export const dynamic = "force-dynamic";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mindo Health - Education LMS & Online Courses Next.js Template",
    template: "%s | Mindo Health",
  },
  description:
    "Mindo Health is your all‑in‑one online education platform. Explore curated courses and learning paths to build skills faster.",
  keywords: [
    "Mindo Health",
    "online courses",
    "e‑learning",
    "education",
    "learning platform",
    "distance learning",
    "skills",
    "training",
    "learning paths",
  ],
  applicationName: "Mindo Health",
  authors: [{ name: "Mindo Health" }],
  creator: "Mindo Health",
  publisher: "Mindo Health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Mindo Health",
    description: "Learn online with curated courses and guided learning paths.",
    url: "/",
    siteName: "Mindo Health",
    images: [
      {
        url: "/images/mindo_logo_3.png",
        alt: "Mindo Health",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindo Health",
    description: "Learn online with curated courses and guided learning paths.",
    images: ["/images/mindo_logo_3.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} font-body`}>
        <Providers>
          <SidebarMenu />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
