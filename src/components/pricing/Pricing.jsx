"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pricing({ plans = [] }) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section id="pricing" className="pricing section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>
          Flexible plans for web & mobile app development, automation tools, and
          data intelligence solutions tailored to your business needs
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 justify-content-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className={`pricing-card ${plan.popular ? "popular" : ""}`}>
                {plan.popular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="currency">£</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/ {plan.period}</span>
                </div>
                <p className="description">{plan.description}</p>

                <h4>Featured Included:</h4>
                <ul className="features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <i className="bi bi-check-circle-fill"></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.link || "#"}
                  className={`btn ${
                    plan.popular ? "btn-light" : "btn-primary"
                  }`}
                >
                  Buy Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
