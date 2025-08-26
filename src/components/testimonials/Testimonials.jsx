"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials({ testimonials = [] }) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section
      id="testimonials"
      className="testimonials section light-background"
    >
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Streamlining operations and accelerating growth through intelligent
          digital solutions.
        </p>
      </div>

      <div className="container">
        <div className="row g-5">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="testimonial-item">
                <img
                  src={item.image}
                  className="testimonial-img"
                  alt={item.name}
                />
                <h3>{item.name}</h3>
                <h4>{item.role}</h4>
                <div className="stars">
                  {Array.from({ length: item.stars || 5 }).map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{item.text}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
