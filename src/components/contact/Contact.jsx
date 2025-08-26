"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // "loading", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Example: Replace with your API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact section light-background">
      <div className="container">
        <div className="container section-title" data-aos="fade-up">
          <h2>Get in Touch with Dotseek</h2>
          <p>
            Whether you have questions, need support, or want to explore our
            digital solutions, our team is ready to assist. Connect with us via
            phone, email, or visit our office to discuss your project.
          </p>
        </div>

        <div className="row g-4 g-lg-5">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="info-box" data-aos="fade-up" data-aos-delay="200">
              <h3>Contact Info</h3>
              <p>
                Connect with us for support or inquiries. We’re available via
                phone, email, or at our office to guide you through our
                services.
              </p>

              <div
                className="info-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content">
                  <h4>Our Location</h4>
                  <p>58 King Edwards Road</p>
                  <p>Swansea, UK SA14LN</p>
                </div>
              </div>

              <div
                className="info-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content">
                  <h4>Phone Number</h4>
                  <p>+44 7587 925198</p>
                </div>
              </div>

              <div
                className="info-item"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content">
                  <h4>Email Address</h4>
                  <p>seekingsupport@dotseek.co.uk</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div
              className="contact-form"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3>Get In Touch</h3>
              <p>
                Reach out to Dotseek to discuss your digital transformation
                needs. Our team is ready to help you build web & mobile apps,
                automation tools, and data-driven solutions.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="6"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    {status === "loading" && (
                      <div className="loading">Loading</div>
                    )}
                    {status === "error" && (
                      <div className="error-message">
                        Something went wrong. Try again!
                      </div>
                    )}
                    {status === "success" && (
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    )}

                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
