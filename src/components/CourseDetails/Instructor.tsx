import Image from "next/image";
import React from "react";

const Instructor = () => {
  return (
    <div className="instructor">
      <h2>Instructor</h2>
      <div className="row justify-content-center align-items-center g-4">
        <div className="col-lg-5 col-md-6">
          <div className="i-image">
            <Image
              src="/images/team/team4.jpg"
              alt="image"
              width={610}
              height={610}
            />
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="i-content">
            <h3>Jane Doe</h3>
            <span className="sub">Senior Data Analyst</span>
            <ul className="list">
              <li>
                <span>Experience:</span>
                <b>10+ years in data science & analytics</b>
              </li>
              <li>
                <span>Courses on Mindo Health:</span>
                <b>6</b>
              </li>
              <li>
                <span>Languages:</span>
                <b>English, Spanish</b>
              </li>
              <li>
                <span>Rating:</span>
                <b>
                  ⭐ 4.9 <span>(5,200+ student reviews)</span>
                </b>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text">
        <p>
          Jane is a seasoned data professional with over a decade of experience
          working with Python, machine learning models, and business
          intelligence tools. At TechCorp, she leads analytics teams that
          transform complex data into actionable insights. Jane is passionate
          about teaching and has trained over 50,000 students globally through
          online platforms, workshops, and corporate training sessions.
        </p>
        <p>
          Her courses are known for clarity, hands-on examples, and real-world
          relevance—especially for those beginning their data journey.
        </p>
      </div>
    </div>
  );
};

export default Instructor;
