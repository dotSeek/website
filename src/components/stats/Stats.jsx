"use client";

import { useEffect } from "react";

export default function Stats({ stats = [] }) {
  useEffect(() => {
    import("@srexi/purecounterjs").then((module) => {
      new module.default();
    });
  }, []);

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {stats.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={item.start}
                  data-purecounter-end={item.end}
                  data-purecounter-duration={item.duration}
                  className="purecounter"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    display: "block",
                  }}
                ></span>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
