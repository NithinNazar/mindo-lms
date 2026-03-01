"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type FunItem = {
	icon: string;
	label: string;
	target: number; // final value to count to
	suffix?: string; // e.g. '+' or '%'
};

interface FunFactProps {
	items?: FunItem[];
	className?: string;
	durationMs?: number; // per-counter duration
}

// CountUp that starts when the element becomes visible
function CountUp({
	to,
	duration = 1500,
	inView,
}: {
	to: number;
	duration?: number;
	inView: boolean;
}) {
	const [value, setValue] = useState(0);
	const rafRef = useRef<number | null>(null);
	const startTimeRef = useRef<number | null>(null);
	const startedRef = useRef(false);

	useEffect(() => {
		if (!inView || startedRef.current) return;
		startedRef.current = true;

		const tick = (ts: number) => {
			if (startTimeRef.current == null) startTimeRef.current = ts;
			const elapsed = ts - startTimeRef.current;
			const t = Math.min(1, elapsed / duration);
			// easeOutCubic
			const eased = 1 - Math.pow(1 - t, 3);
			setValue(to * eased);
			if (t < 1) rafRef.current = requestAnimationFrame(tick);
		};

		rafRef.current = requestAnimationFrame(tick);
		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [inView, to, duration]);

	return <>{Math.round(value).toLocaleString()}</>;
}

export default function FunFact({
	className = "",
	durationMs = 1500,
	items = [
		{
			icon: "/images/fun/fun1.svg",
			label: "Courses Certified",
			target: 8000,
			suffix: "+",
		},
		{
			icon: "/images/fun/fun2.svg",
			label: "Instructors Verified",
			target: 5000,
			suffix: "+",
		},
		{
			icon: "/images/fun/fun3.svg",
			label: "Companies Trained",
			target: 500,
			suffix: "+",
		},
		{
			icon: "/images/fun/fun4.svg",
			label: "Mobile Access",
			target: 100,
			suffix: "%",
		},
	],
}: FunFactProps) {
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		if (!sectionRef.current) return;
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setInView(true);
						// only trigger once
						io.disconnect();
					}
				});
			},
			{ threshold: 0.25 }
		);
		io.observe(sectionRef.current);
		return () => io.disconnect();
	}, []);

	const ease = [0.22, 1, 0.36, 1] as const;
	const itemVariants = {
		hidden: { opacity: 0, y: 16 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
	} as const;

	return (
		<div className={`ot-fun-area pt-140 ${className}`}>
			<div className="container">
				<div className="ot-fun-inner">
					<motion.div
						ref={sectionRef}
						className="row justify-content-center g-5"
						data-cues="slideInUp"
						data-duration="1000"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{
							staggerChildren: 0.1,
							delayChildren: 0.05,
						}}
					>
						{items.map((it, idx) => (
							<motion.div
								className="col-lg-3 col-sm-6"
								key={idx}
								variants={itemVariants}
							>
								<div className="ot-fun-card">
									<div className="icon">
										<Image
											src={it.icon}
											alt="image"
											width={70}
											height={70}
										/>
									</div>
									<div className="content">
										<div className="d-flex align-items-center">
											<h3 className="counter">
												<CountUp
													to={it.target}
													duration={durationMs}
													inView={inView}
												/>
											</h3>
											{it.suffix ? (
												<h3 className="sub">
													{it.suffix}
												</h3>
											) : null}
										</div>
										<p>{it.label}</p>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
}
