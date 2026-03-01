"use client";

import React from "react";
import CountUp from "react-countup";

export default function FunFact() {
	return (
		<div className="dl-fun-area">
			<div className="container">
				<div
					className="row justify-content-center g-4"
					data-cues="slideInUp"
					data-duration="1000"
				>
					{/* Card 1 */}
					<div className="col-lg-3 col-sm-6">
						<div className="dl-fun-card">
							<div className="d-flex align-items-center justify-content-center">
								<h3 className="counter">
									<CountUp
										end={6.8}
										decimals={1}
										decimal="."
										duration={1.6}
										enableScrollSpy
										scrollSpyOnce
									/>
								</h3>
								<h3 className="sub">M+</h3>
							</div>
							<p>ACTIVE LEARNERS</p>
						</div>
					</div>

					{/* Card 2 */}
					<div className="col-lg-3 col-sm-6">
						<div className="dl-fun-card wrap2">
							<div className="d-flex align-items-center justify-content-center">
								<h3 className="counter">
									<CountUp
										end={7.5}
										decimals={1}
										decimal="."
										duration={1.6}
										enableScrollSpy
										scrollSpyOnce
									/>
								</h3>
								<h3 className="sub">K+</h3>
							</div>
							<p>COURSES AVAILABLE</p>
						</div>
					</div>

					{/* Card 3 */}
					<div className="col-lg-3 col-sm-6">
						<div className="dl-fun-card wrap3">
							<div className="d-flex align-items-center justify-content-center">
								<h3 className="counter">
									<CountUp
										end={120}
										duration={1.6}
										separator=","
										enableScrollSpy
										scrollSpyOnce
									/>
								</h3>
								<h3 className="sub">+</h3>
							</div>
							<p>COUNTRIES REACHED</p>
						</div>
					</div>

					{/* Card 4 */}
					<div className="col-lg-3 col-sm-6">
						<div className="dl-fun-card wrap4">
							<div className="d-flex align-items-center justify-content-center">
								<h3 className="counter">
									<CountUp
										end={4.9}
										decimals={1}
										decimal="."
										duration={1.6}
										enableScrollSpy
										scrollSpyOnce
									/>
								</h3>
							</div>
							<p>AVERAGE COURSE RATING</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
