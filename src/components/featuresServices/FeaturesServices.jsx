"use client";

import Image from "next/image";

export default function FeaturesServices({
  leftFeatures = [
    {
      title: "Cross-Platform Apps",
      text: "Build modern web and mobile applications that work seamlessly on any device, ensuring a smooth user experience.",
      icon: "bi-display",
      delay: 200,
    },
    {
      title: "Custom Automation",
      text: "Design intelligent automation tools tailored to your workflows, boosting efficiency and reducing manual effort.",
      icon: "bi-gear-fill",
      delay: 300,
    },
    {
      title: "Data-Driven Insights",
      text: "Leverage analytics and dashboards to gain actionable insights for smarter business decisions.",
      icon: "bi-graph-up",
      delay: 400,
    },
  ],
  rightFeatures = [
    {
      title: "Scalable Technology",
      text: "Our solutions are built with cutting-edge technologies, ensuring security, performance, and scalability.",
      icon: "bi-code-square",
      delay: 200,
    },
    {
      title: "Seamless Integrations",
      text: "Connect your systems efficiently with our tailored integrations for smooth business workflows.",
      icon: "bi-phone",
      delay: 300,
    },
    {
      title: "Tailored Solutions",
      text: "We craft solutions specific to your business requirements, optimizing operations and growth potential.",
      icon: "bi-puzzle",
      delay: 400,
    },
  ],
  centerImage = "/assets/img/mobile-app.webp",
}) {
  return (
    <section id="features-2" className="features-2 section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          {/* Left features */}
          <div className="col-lg-4">
            {leftFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="feature-item text-end mb-5"
                data-aos="fade-right"
                data-aos-delay={feature.delay}
              >
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className={`bi ${feature.icon}`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="phone-mockup text-center">
              <Image
                src={centerImage}
                alt="Phone Mockup"
                width={400}
                height={600}
                className="img-fluid"
              />
            </div>
          </div>

          {/* Right features */}
          <div className="col-lg-4">
            {rightFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="feature-item mb-5"
                data-aos="fade-left"
                data-aos-delay={feature.delay}
              >
                <div className="d-flex align-items-center gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <i className={`bi ${feature.icon}`}></i>
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
