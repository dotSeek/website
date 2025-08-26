"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Clients({
  clients = [
    "/assets/img/client-1.png",
    "/assets/img/client-2.png",
    "/assets/img/client-3.png",
    "/assets/img/client-4.png",
    "/assets/img/client-5.png",
    "/assets/img/client-6.png",
    "/assets/img/client-7.png",
    "/assets/img/client-8.png",
  ],
}) {
  return (
    <section id="clients" className="clients section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 40 },
            480: { slidesPerView: 3, spaceBetween: 60 },
            640: { slidesPerView: 4, spaceBetween: 80 },
            992: { slidesPerView: 6, spaceBetween: 120 },
          }}
          className="swiper-wrapper align-items-center"
        >
          {clients.map((src, idx) => (
            <SwiperSlide key={idx} className="swiper-slide">
              <img src={src} className="img-fluid" alt={`Client ${idx + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
