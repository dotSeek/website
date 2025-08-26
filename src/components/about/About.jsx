"use client";

import Image from "next/image";

export default function About({
  meta = "MORE ABOUT US",
  title = "Transforming Businesses Through Intelligent Automation",
  description = "Dotseek is a technology-driven company dedicated to streamlining operations and accelerating growth through digital innovation. We specialize in developing tailored web and mobile applications, automation tools, and intelligent systems designed to match the unique needs of your business. With a focus on efficiency, accuracy, and data-driven decision-making, we help organizations unlock their full potential in a competitive digital world.",
  features = [
    [
      "Web & Mobile Apps: Modern, responsive, and user-friendly",
      "Automation Tools: Reduce manual work and boost productivity",
      "Data Insights: Turn data into actionable intelligence",
    ],
    [
      "Technical Edge: Scalable, secure, and high-performing",
      "Seamless Integrations: Connect systems efficiently",
      "Tailored Solutions: Customized for your business needs",
    ],
  ],
  profiles = [
    {
      image: "/assets/img/avatar-1.webp",
      name: "Vineeth Pradeep",
      position: "Founder",
    },
    {
      image: "/assets/img/avatar-2.webp",
      name: "Ajith Balakrishnan",
      position: "Director",
    },
  ],
  //   contact = {
  //     label: "Call us anytime",
  //     number: "+44 7587 925198",
  //   },
  images = {
    main: "/assets/img/about-5.webp",
    small: "/assets/img/about-2.webp",
  },
  experience = {
    years: "10+",
    label: "Years",
    text: "Of experience in delivering digital solutions",
  },
}) {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center justify-content-between">
          {/* Left content */}
          <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
            <span className="about-meta">{meta}</span>
            <h2 className="about-title">{title}</h2>
            <p className="about-description">{description}</p>

            {/* Features */}
            <div className="row feature-list-wrapper">
              {features.map((col, colIdx) => (
                <div key={colIdx} className="col-md-6">
                  <ul className="feature-list">
                    {col.map((item, idx) => (
                      <li key={idx}>
                        <i className="bi bi-check-circle-fill"></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Profile & Contact */}
            <div className="info-wrapper">
              <div className="row gy-4">
                <div className="row">
                  {profiles.map((profile, index) => (
                    <div className="col-lg-5" key={index}>
                      <div className="profile d-flex align-items-center gap-3">
                        <Image
                          src={profile.image}
                          alt={`${profile.name} Profile`}
                          width={60}
                          height={60}
                          className="profile-image"
                        />
                        <div>
                          <h4 className="profile-name">{profile.name}</h4>
                          <p className="profile-position">{profile.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <div className="col-lg-7">
                  <div className="contact-info d-flex align-items-center gap-2">
                    <i className="bi bi-telephone-fill"></i>
                    <div>
                      <p className="contact-label">{contact.label}</p>
                      <p className="contact-number">{contact.number}</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right content (images + badge) */}
          <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
            <div className="image-wrapper">
              <div
                className="images position-relative"
                data-aos="zoom-out"
                data-aos-delay="400"
              >
                <Image
                  src={images.main}
                  alt="Business Meeting"
                  width={600}
                  height={400}
                  className="img-fluid main-image rounded-4"
                />
                <Image
                  src={images.small}
                  alt="Team Discussion"
                  width={280}
                  height={180}
                  className="img-fluid small-image rounded-4"
                />
              </div>
              <div className="experience-badge floating">
                <h3>
                  {experience.years} <span>{experience.label}</span>
                </h3>
                <p>{experience.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
