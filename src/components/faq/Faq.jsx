"use client";

import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqItems = [
  {
    question: "What services does Dotseek offer?",
    answer:
      "Dotseek specializes in web and mobile app development, automation tools, and data intelligence solutions tailored to your business needs.",
  },
  {
    question: "How can your automation tools help my business?",
    answer:
      "Our custom automation frameworks reduce manual work, increase accuracy, and boost productivity by streamlining your workflows.",
  },
  {
    question: "Do you provide analytics and insights?",
    answer:
      "Yes, we transform raw data into actionable insights through real-time dashboards, performance tracking, and predictive analytics.",
  },
  {
    question: "Are your solutions scalable and secure?",
    answer:
      "Absolutely. We use cutting-edge technology to ensure our solutions are secure, scalable, and high-performing across platforms.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes, our solutions are designed for seamless integrations, connecting your systems for efficient workflows and data sharing.",
  },
  {
    question: "How do I get started with Dotseek?",
    answer:
      "You can reach out to us via our contact form or call us directly. We'll assess your needs and provide a tailored solution.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="faq-9 faq section light-background" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-5" data-aos="fade-up">
            <h2 className="faq-title">Have a question? Check out the FAQ</h2>
            <p className="faq-description">
              Learn how Dotseek can help your business with web & mobile apps,
              automation, and data-driven solutions. Find answers to common
              questions below.
            </p>
            {/* Optional SVG arrow can be added here */}
          </div>

          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="300">
            <div className="faq-container">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "faq-active" : ""
                  }`}
                >
                  <h3
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? -1 : index)
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {item.question}
                  </h3>
                  <div
                    className="faq-content"
                    style={{
                      maxHeight: activeIndex === index ? "500px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
