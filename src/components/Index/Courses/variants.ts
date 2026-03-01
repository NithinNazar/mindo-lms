import type { Variants } from "framer-motion";

export const EASE_BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUpContainer: Variants = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: EASE_BEZIER },
	},
};

export const staggerWrap: Variants = {
	show: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
};

export const fadeItem: Variants = {
	hidden: { opacity: 0, y: 12 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.35, ease: EASE_BEZIER },
	},
};

export const scaleOnHover: Variants = {
	rest: { scale: 1, y: 0 },
	hover: {
		scale: 1.02,
		y: -4,
		transition: { type: "spring", stiffness: 260, damping: 18 },
	},
};
