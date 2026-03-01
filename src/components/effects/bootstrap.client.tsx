"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
	useEffect(() => {
		// Dynamically load the Bootstrap JS (includes Offcanvas)
		// @ts-expect-error – this bundle path has no TypeScript types
		import("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);
	return null;
}
