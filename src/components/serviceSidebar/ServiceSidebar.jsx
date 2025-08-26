"use client";

import Image from "next/image";

const ServiceSidebar = ({ services, contact }) => {
  return (
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
      {/* Services List */}
      <div className="service-box">
        <h4>Our Services</h4>
        <div className="services-list">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className={index === 0 ? "active" : ""}
            >
              <i className="bi bi-arrow-right-circle"></i>
              <span>{service.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="service-box">
        <h4>Download Catalog</h4>
        <div className="download-catalog">
          <a href="#">
            <i className="bi bi-filetype-pdf"></i>
            <span>Catalog PDF</span>
          </a>
          <a href="#">
            <i className="bi bi-file-earmark-word"></i>
            <span>Catalog DOC</span>
          </a>
        </div>
      </div>

      <div className="help-box d-flex flex-column justify-content-center align-items-center">
        <i className="bi bi-headset help-icon"></i>
        <h4>Have a Question?</h4>
        <p className="d-flex align-items-center mt-2 mb-0">
          <i className="bi bi-telephone me-2"></i> <span>{contact.phone}</span>
        </p>
        <p className="d-flex align-items-center mt-1 mb-0">
          <i className="bi bi-envelope me-2"></i>{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </div>
    </div>
  );
};

export default ServiceSidebar;
