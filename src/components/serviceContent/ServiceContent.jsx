"use client";

import Image from "next/image";

const ServiceContent = ({ image, heading, description, features, details }) => {
  return (
    <div className="col-lg-8 ps-lg-5" data-aos="fade-up" data-aos-delay="200">
      <Image
        src={image}
        alt="Service Image"
        width={800}
        height={500}
        className="img-fluid services-img"
      />
      <h3>{heading}</h3>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <i className="bi bi-check-circle"></i> <span>{feature}</span>
          </li>
        ))}
      </ul>
      {details.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default ServiceContent;
