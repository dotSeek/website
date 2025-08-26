"use client";

import ServiceSidebar from "@/components/serviceSidebar/ServiceSidebar";
import ServiceContent from "@/components/serviceContent/ServiceContent";

const services = [
  { name: "Web & Mobile App Development", link: "#" },
  { name: "Automation Tools", link: "#" },
  { name: "Data Intelligence & Insights", link: "#" },
  { name: "Technical Edge Solutions", link: "#" },
  { name: "Seamless Integrations", link: "#" },
];

const contact = {
  phone: "+44 7587 925198",
  email: "seekingsupport@dotseek.co.uk",
};

const content = {
  image: "/assets/img/services.jpg",
  heading: "Transforming businesses with intelligent digital solutions",
  description:
    "Dotseek develops custom web and mobile applications, automation tools, and data-driven solutions to streamline your operations and accelerate growth.",
  features: [
    "Web & Mobile App Development: modern, responsive, and user-friendly",
    "Automation Tools: reduce manual work and increase productivity",
    "Data Intelligence: actionable insights for smarter decisions",
  ],
  details: [
    "Our team leverages cutting-edge technology to deliver scalable, secure, and efficient solutions tailored to your unique business needs.",
    "We integrate systems seamlessly and provide ongoing support to ensure your digital platforms evolve with your business. Partner with Dotseek to unlock your organization's full potential in the competitive digital landscape.",
  ],
};

export default function ServiceDetailsPage() {
  return (
    <section id="service-details" className="service-details section">
      <div className="container">
        <div className="row gy-5">
          <ServiceSidebar services={services} contact={contact} />
          <ServiceContent {...content} />
        </div>
      </div>
    </section>
  );
}
