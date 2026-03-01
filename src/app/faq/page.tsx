import Banner from "@/components/Common/Banner";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-static";

export default async function Page() {
  return (
    <>
      <Banner
        title="Help Center: Your Learning Questions Answered"
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <div className="faq-area wrap-bg-transparent ptb-140">
        <div className="container">
          <div
            className="section-title section-title-animation animation-style1"
            data-cues="slideInUp"
            data-duration="1000"
          >
            <span className="sub">FAQs</span>
            <h2 className="title-animation">
              Everything You Need to Know About Mindo Health{" "}
              <Image
                src="/images/title-line.png"
                alt="title underline"
                width={160}
                height={16}
              />
            </h2>
          </div>

          <div className="faq-tabs">
            <div
              className="row justify-content-center g-4"
              data-cues="slideInUp"
              data-duration="1000"
            >
              <div className="col-lg-6 col-md-12">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="faq-1-tab"
                      data-bs-toggle="tab"
                      href="#faq-1"
                      role="tab"
                      aria-controls="faq-1"
                    >
                      <span>General Information</span>
                      <i className="ri-arrow-right-long-line"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="faq-2-tab"
                      data-bs-toggle="tab"
                      href="#faq-2"
                      role="tab"
                      aria-controls="faq-2"
                    >
                      <span>Courses &amp; Learning Experience</span>
                      <i className="ri-arrow-right-long-line"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="faq-3-tab"
                      data-bs-toggle="tab"
                      href="#faq-3"
                      role="tab"
                      aria-controls="faq-3"
                    >
                      <span>Certificates &amp; Credentials</span>
                      <i className="ri-arrow-right-long-line"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="faq-4-tab"
                      data-bs-toggle="tab"
                      href="#faq-4"
                      role="tab"
                      aria-controls="faq-4"
                    >
                      <span>Payments &amp; Pricing</span>
                      <i className="ri-arrow-right-long-line"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="faq-5-tab"
                      data-bs-toggle="tab"
                      href="#faq-5"
                      role="tab"
                      aria-controls="faq-5"
                    >
                      <span>Instructors</span>
                      <i className="ri-arrow-right-long-line"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="faq-6-tab"
                      data-bs-toggle="tab"
                      href="#faq-6"
                      role="tab"
                      aria-controls="faq-6"
                    >
                      <span>Platform &amp; Accessibility</span>
                      <i className="ri-arrow-right-long-line"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="faq-7-tab"
                      data-bs-toggle="tab"
                      href="#faq-7"
                      role="tab"
                      aria-controls="faq-7"
                    >
                      <span>Support &amp; Technical Help</span>
                      <i className="ri-arrow-right-long-line"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="tab-content" id="myTabContent">
                  {/* Tab 1 */}
                  <div
                    className="tab-pane fade show active"
                    id="faq-1"
                    role="tabpanel"
                  >
                    <div className="accordion" id="faqAccordion">
                      <div className="accordion-item">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_1"
                          aria-expanded="true"
                          aria-controls="collapse_1"
                        >
                          What is Mindo Health?
                        </button>
                        <div
                          id="collapse_1"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              eStuda is an online education and training
                              platform offering high-quality, expert-led courses
                              across various fields like data science,
                              programming, business, and more — all accessible
                              anytime, anywhere.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_2"
                          aria-expanded="false"
                          aria-controls="collapse_2"
                        >
                          Who are the courses designed for?
                        </button>
                        <div
                          id="collapse_2"
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              eStuda is an online education and training
                              platform offering high-quality, expert-led courses
                              across various fields like data science,
                              programming, business, and more — all accessible
                              anytime, anywhere.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_3"
                          aria-expanded="false"
                          aria-controls="collapse_3"
                        >
                          How do I join Mindo Health?
                        </button>
                        <div
                          id="collapse_3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              eStuda is an online education and training
                              platform offering high-quality, expert-led courses
                              across various fields like data science,
                              programming, business, and more — all accessible
                              anytime, anywhere.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_4"
                          aria-expanded="false"
                          aria-controls="collapse_4"
                        >
                          Can I access Mindo Health courses on mobile devices?
                        </button>
                        <div
                          id="collapse_4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              eStuda is an online education and training
                              platform offering high-quality, expert-led courses
                              across various fields like data science,
                              programming, business, and more — all accessible
                              anytime, anywhere.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_5"
                          aria-expanded="false"
                          aria-controls="collapse_5"
                        >
                          Are the courses self-paced or scheduled?
                        </button>
                        <div
                          id="collapse_5"
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              eStuda is an online education and training
                              platform offering high-quality, expert-led courses
                              across various fields like data science,
                              programming, business, and more — all accessible
                              anytime, anywhere.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 2 */}
                  <div className="tab-pane fade" id="faq-2" role="tabpanel">
                    <div className="accordion" id="faqAccordion2">
                      <div className="accordion-item">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_6"
                          aria-expanded="true"
                          aria-controls="collapse_6"
                        >
                          Are Mindo Health courses self-paced or live?
                        </button>
                        <div
                          id="collapse_6"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#faqAccordion2"
                        >
                          <div className="accordion-body">
                            <p>
                              Most courses are self-paced, but we also offer
                              live classes, webinars, and scheduled cohort-based
                              programs for certain topics.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_7"
                          aria-expanded="false"
                          aria-controls="collapse_7"
                        >
                          Do I get lifetime access to courses?
                        </button>
                        <div
                          id="collapse_7"
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion2"
                        >
                          <div className="accordion-body">
                            <p>
                              Most courses are self-paced, but we also offer
                              live classes, webinars, and scheduled cohort-based
                              programs for certain topics.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_8"
                          aria-expanded="false"
                          aria-controls="collapse_8"
                        >
                          Are there any free courses available?
                        </button>
                        <div
                          id="collapse_8"
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion2"
                        >
                          <div className="accordion-body">
                            <p>
                              Most courses are self-paced, but we also offer
                              live classes, webinars, and scheduled cohort-based
                              programs for certain topics.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_9"
                          aria-expanded="false"
                          aria-controls="collapse_9"
                        >
                          Do I need any prior knowledge?
                        </button>
                        <div
                          id="collapse_9"
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion2"
                        >
                          <div className="accordion-body">
                            <p>
                              Most courses are self-paced, but we also offer
                              live classes, webinars, and scheduled cohort-based
                              programs for certain topics.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 3 */}
                  <div className="tab-pane fade" id="faq-3" role="tabpanel">
                    <div className="accordion" id="faqAccordion3">
                      <div className="accordion-item">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_10"
                          aria-expanded="true"
                          aria-controls="collapse_10"
                        >
                          Will I receive a certificate after completing a
                          course?
                        </button>
                        <div
                          id="collapse_10"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#faqAccordion3"
                        >
                          <div className="accordion-body">
                            <p>
                              Yes, you will receive a digital certificate of
                              completion for all eligible paid courses.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_11"
                          aria-expanded="false"
                          aria-controls="collapse_11"
                        >
                          Are Mindo Health certificates recognized by employers?
                        </button>
                        <div
                          id="collapse_11"
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion3"
                        >
                          <div className="accordion-body">
                            <p>
                              Yes, you will receive a digital certificate of
                              completion for all eligible paid courses.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 4 */}
                  <div className="tab-pane fade" id="faq-4" role="tabpanel">
                    <div className="accordion" id="faqAccordion4">
                      <div className="accordion-item">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_12"
                          aria-expanded="true"
                          aria-controls="collapse_12"
                        >
                          How much do courses cost?
                        </button>
                        <div
                          id="collapse_12"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#faqAccordion4"
                        >
                          <div className="accordion-body">
                            <p>
                              Course prices vary. Many start at $19-$49, and we
                              regularly offer bundle deals and discounts.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_13"
                          aria-expanded="false"
                          aria-controls="collapse_13"
                        >
                          What payment methods do you accept?
                        </button>
                        <div
                          id="collapse_13"
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion4"
                        >
                          <div className="accordion-body">
                            <p>
                              Course prices vary. Many start at $19-$49, and we
                              regularly offer bundle deals and discounts.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_14"
                          aria-expanded="false"
                          aria-controls="collapse_14"
                        >
                          Is there a refund policy?
                        </button>
                        <div
                          id="collapse_14"
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion4"
                        >
                          <div className="accordion-body">
                            <p>
                              Course prices vary. Many start at $19-$49, and we
                              regularly offer bundle deals and discounts.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 5 */}
                  <div className="tab-pane fade" id="faq-5" role="tabpanel">
                    <div className="accordion" id="faqAccordion5">
                      <div className="accordion-item">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_15"
                          aria-expanded="true"
                          aria-controls="collapse_15"
                        >
                          Who teaches the courses?
                        </button>
                        <div
                          id="collapse_15"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#faqAccordion5"
                        >
                          <div className="accordion-body">
                            <p>
                              All courses are created and led by experienced
                              educators, certified professionals, and industry
                              experts.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_16"
                          aria-expanded="false"
                          aria-controls="collapse_16"
                        >
                          Can I contact instructors directly?
                        </button>
                        <div
                          id="collapse_16"
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion5"
                        >
                          <div className="accordion-body">
                            <p>
                              All courses are created and led by experienced
                              educators, certified professionals, and industry
                              experts.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 6 */}
                  <div className="tab-pane fade" id="faq-6" role="tabpanel">
                    <div className="accordion" id="faqAccordion6">
                      <div className="accordion-item">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_17"
                          aria-expanded="true"
                          aria-controls="collapse_17"
                        >
                          Can I access Mindo Health on mobile?
                        </button>
                        <div
                          id="collapse_17"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#faqAccordion6"
                        >
                          <div className="accordion-body">
                            <p>
                              Yes! eStuda is fully mobile-friendly, and you can
                              learn through any modern browser on your
                              smartphone or tablet.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_18"
                          aria-expanded="false"
                          aria-controls="collapse_18"
                        >
                          Do I need to install any software to learn?
                        </button>
                        <div
                          id="collapse_18"
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion6"
                        >
                          <div className="accordion-body">
                            <p>
                              Yes! eStuda is fully mobile-friendly, and you can
                              learn through any modern browser on your
                              smartphone or tablet.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 7 */}
                  <div className="tab-pane fade" id="faq-7" role="tabpanel">
                    <div className="accordion" id="faqAccordion7">
                      <div className="accordion-item">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_19"
                          aria-expanded="true"
                          aria-controls="collapse_19"
                        >
                          I’m having trouble accessing my course — what should I
                          do?
                        </button>
                        <div
                          id="collapse_19"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#faqAccordion7"
                        >
                          <div className="accordion-body">
                            <p>
                              Reach out to our support team at{" "}
                              <Link href="/contact-us">support@eStuda.com</Link>{" "}
                              or use the live chat. We’re available 24/7 to
                              assist you.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_20"
                          aria-expanded="false"
                          aria-controls="collapse_20"
                        >
                          How can I reset my password?
                        </button>
                        <div
                          id="collapse_20"
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion7"
                        >
                          <div className="accordion-body">
                            <p>
                              Reach out to our support team at{" "}
                              <Link href="/contact-us">support@eStuda.com</Link>{" "}
                              or use the live chat. We’re available 24/7 to
                              assist you.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
