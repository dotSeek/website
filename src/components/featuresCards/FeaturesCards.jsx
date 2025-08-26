"use client";

import { useEffect } from "react";

export default function FeaturesCards({
  cards = [
    {
      color: "orange",
      icon: "bi-award",
      title: "Web & Mobile Apps",
      text: "Modern, responsive applications designed to deliver seamless user experiences across all devices.",
      delay: 100,
    },
    {
      color: "blue",
      icon: "bi-patch-check",
      title: "Automation Tools",
      text: "Custom frameworks that reduce manual work, increase accuracy, and boost productivity for your business.",
      delay: 200,
    },
    {
      color: "green",
      icon: "bi-sunrise",
      title: "Data Intelligence",
      text: "Turn raw data into actionable insights with advanced analytics, dashboards, and predictive tracking.",
      delay: 300,
    },
    {
      color: "red",
      icon: "bi-shield-check",
      title: "Technical Edge",
      text: "Cutting-edge technology ensuring scalability, security, and seamless integration with your systems.",
      delay: 400,
    },
  ],
}) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <section id="features-cards" className="features-cards section">
      <div className="container">
        <div className="row gy-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={card.delay}
            >
              <div className={`feature-box ${card.color}`}>
                <i className={`bi ${card.icon}`}></i>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
