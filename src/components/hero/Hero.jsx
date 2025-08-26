"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero({
  badge = { icon: "bi-gear-fill", text: "Working with Dotseek" },
  title = [
    "Transforming Businesses",
    "Intelligent Automation",
    "Digital Innovation",
  ],
  description = "Dotseek is a technology-driven company dedicated to streamlining operations and accelerating growth through digital innovation. We specialize in developing tailored web and mobile applications, automation tools, and intelligent systems designed to match the unique needs of your business.",

  buttons = [
    { label: "Get Started", href: "#about", type: "primary" },
    {
      label: "Watch Video",
      href: "https://www.youtube.com/watch?v=Y7f98aduVJ8",
      type: "video",
    },
  ],
  heroImage = "/assets/img/illustration-1.webp",
  customers = {
    avatars: [
      "/assets/img/avatar-1.webp",
      "/assets/img/avatar-2.webp",
      "/assets/img/avatar-3.webp",
      "/assets/img/avatar-4.webp",
      "/assets/img/avatar-5.webp",
    ],
    more: "12+",
    text: "12,000+ satisfied clients powered by Dotseek solutions",
  },
  stats = [
    {
      icon: "bi-phone",
      title: "Web & Mobile Apps",
      text: "Modern, responsive, and user-friendly applications across all devices",
    },
    {
      icon: "bi-robot",
      title: "Automation Tools",
      text: "Custom frameworks to reduce manual work and boost productivity",
    },
    {
      icon: "bi-bar-chart",
      title: "Data Intelligence",
      text: "Turn raw data into actionable insights with advanced analytics",
    },
    {
      icon: "bi-cpu",
      title: "Technical Edge",
      text: "Cutting-edge technology ensuring scalability, security, and performance",
    },
  ],
}) {
  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="company-badge mb-4">
                <i className={`bi ${badge.icon} me-2`}></i>
                {badge.text}
              </div>

              <h1 className="mb-4">
                {title.slice(0, -1).map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
                <span className="accent-text">{title[title.length - 1]}</span>
              </h1>

              <p className="mb-4 mb-md-5">{description}</p>

              <div className="hero-buttons">
                {buttons.map((btn, idx) =>
                  btn.type === "primary" ? (
                    <Link
                      key={idx}
                      href={btn.href}
                      className="btn btn-primary me-0 me-sm-2 mx-1"
                    >
                      {btn.label}
                    </Link>
                  ) : (
                    <a
                      key={idx}
                      href={btn.href}
                      className="btn btn-link mt-2 mt-sm-0 glightbox"
                    >
                      <i className="bi bi-play-circle me-1"></i>
                      {btn.label}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="hero-image"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <Image
                src={heroImage}
                alt="Hero Image"
                width={600}
                height={400}
                className="img-fluid"
              />

              <div className="customers-badge">
                <div className="customer-avatars">
                  {customers.avatars.map((avatar, idx) => (
                    <Image
                      key={idx}
                      src={avatar}
                      alt={`Customer ${idx + 1}`}
                      width={40}
                      height={40}
                      className="avatar"
                    />
                  ))}
                  <span className="avatar more">{customers.more}</span>
                </div>
                <p className="mb-0 mt-2">{customers.text}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row stats-row gy-4 mt-5"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className={`bi ${stat.icon}`}></i>
                </div>
                <div className="stat-content">
                  <h4>{stat.title}</h4>
                  <p className="mb-0">{stat.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
