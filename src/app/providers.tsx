"use client";

import type { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import GsapSplitTextClient from "@/components/effects/GsapSplitTextClient";
import BootstrapClient from "@/components/effects/bootstrap.client";
import TopHeader from "@/components/Layout/TopHeader";
import Navbar from "@/components/Layout/Navbar";
import NavbarTwo from "@/components/Layout/NavbarTwo";

export default function Providers({ children }: PropsWithChildren) {
	const pathname = usePathname();
	return (
		<>
			<SessionProvider>
				{(pathname === "/" || pathname === "/online-training") && (
					<TopHeader />
				)}
				{pathname === "/" || pathname === "/online-training" ? (
					<Navbar />
				) : (
					<NavbarTwo />
				)}
				<GsapSplitTextClient />
				<BootstrapClient />

				{children}
				<Toaster position="top-right" />
			</SessionProvider>
		</>
	);
}
