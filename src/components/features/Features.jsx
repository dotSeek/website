"use client";

import { useState } from "react";
import Image from "next/image";

export default function Features({
  title = "Features",
  description = "Transforming businesses through intelligent automation and digital solutions",
  tabs = [
    {
      id: "features-tab-1",
      label: "Web & Mobile",
      heading: "Web & Mobile App Development",
      text: "We build modern, responsive, and user-friendly applications across all devices to support your business goals.",
      list: [
        "Responsive applications for all devices",
        "Seamless user experience and intuitive design",
        "Custom solutions tailored to your business needs",
      ],
      image: "/assets/img/features-illustration-1.webp",
    },
    {
      id: "features-tab-2",
      label: "Automation",
      heading: "Automation Tools",
      text: "Custom automation frameworks to reduce manual work, increase accuracy, and boost productivity.",
      list: [
        "Workflow mapping for efficiency",
        "Reduce errors and save time",
        "Boost productivity with tailored tools",
        "Integrate smoothly with existing systems",
      ],
      image: "/assets/img/features-illustration-2.webp",
    },
    {
      id: "features-tab-3",
      label: "Data Insights",
      heading: "Data Intelligence & Insights",
      text: "Turn raw data into actionable insights with dashboards, performance tracking, and predictive analytics.",
      list: [
        "Real-time analytics and reporting",
        "Performance tracking to optimize operations",
        "Predictive insights for smarter decisions",
      ],
      image: "/assets/img/features-illustration-3.webp",
    },
  ],
}) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section id="features" className="features section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="container">
        <div className="d-flex justify-content-center">
          <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === tab.id ? "active show" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <h4>{tab.label}</h4>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${
                activeTab === tab.id ? "active show" : ""
              }`}
              id={tab.id}
            >
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>{tab.heading}</h3>
                  {tab.text && <p className="fst-italic">{tab.text}</p>}
                  <ul>
                    {tab.list.map((item, idx) => (
                      <li key={idx}>
                        <i className="bi bi-check2-all"></i> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <Image
                    src={tab.image}
                    alt={tab.label}
                    width={500}
                    height={400}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
