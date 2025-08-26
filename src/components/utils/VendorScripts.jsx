"use client";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "swiper/css";
import "glightbox/dist/css/glightbox.min.css";

export default function VendorScripts() {
  useEffect(() => {
    // Lazy-load browser-only libraries
    (async () => {
      const { default: GLightbox } = await import("glightbox");
      const { default: Swiper } = await import("swiper");
      const { default: PureCounter } = await import("@srexi/purecounterjs");

      // Initialize GLightbox
      GLightbox({ selector: ".glightbox" });

      // Initialize Swiper
      document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
        let configElement = swiperElement.querySelector(".swiper-config");
        if (!configElement) return;
        let config = JSON.parse(configElement.innerHTML.trim());
        new Swiper(swiperElement, config);
      });

      // Initialize PureCounter
      new PureCounter();
    })();

    // Initialize AOS
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    /**
     * Scroll effects: add/remove classes, scroll top button
     */
    function toggleScrolled() {
      const body = document.querySelector("body");
      const header = document.querySelector("#header");
      if (!header) return;
      if (
        !header.classList.contains("scroll-up-sticky") &&
        !header.classList.contains("sticky-top") &&
        !header.classList.contains("fixed-top")
      )
        return;
      window.scrollY > 100
        ? body?.classList.add("scrolled")
        : body?.classList.remove("scrolled");
    }
    document.addEventListener("scroll", toggleScrolled);
    toggleScrolled();

    // Mobile nav toggle
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    function mobileNavToogle() {
      document.querySelector("body")?.classList.toggle("mobile-nav-active");
      mobileNavToggleBtn?.classList.toggle("bi-list");
      mobileNavToggleBtn?.classList.toggle("bi-x");
    }
    mobileNavToggleBtn?.addEventListener("click", mobileNavToogle);

    // Hide mobile nav on same-page/hash links
    document.querySelectorAll("#navmenu a").forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToogle();
        }
      });
    });

    // Mobile nav dropdown toggle
    document
      .querySelectorAll(".navmenu .toggle-dropdown")
      .forEach((navmenu) => {
        navmenu.addEventListener("click", function (e) {
          e.preventDefault();
          this.parentNode?.classList.toggle("active");
          this.parentNode?.nextElementSibling?.classList.toggle(
            "dropdown-active"
          );
          e.stopImmediatePropagation();
        });
      });

    // Scroll top button
    const scrollTop = document.querySelector(".scroll-top");
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      }
    }
    scrollTop?.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.addEventListener("scroll", toggleScrollTop);
    toggleScrollTop();

    // FAQ toggle
    document
      .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
      .forEach((faqItem) => {
        faqItem.addEventListener("click", () => {
          faqItem.parentNode?.classList.toggle("faq-active");
        });
      });

    // Correct scrolling for hash links
    if (window.location.hash && document.querySelector(window.location.hash)) {
      setTimeout(() => {
        let section = document.querySelector(window.location.hash);
        if (!section) return;
        let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop),
          behavior: "smooth",
        });
      }, 100);
    }

    // Navmenu scrollspy
    let navmenulinks = document.querySelectorAll(".navmenu a");
    function navmenuScrollspy() {
      navmenulinks.forEach((navmenulink) => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          document
            .querySelectorAll(".navmenu a.active")
            .forEach((link) => link.classList.remove("active"));
          navmenulink.classList.add("active");
        } else {
          navmenulink.classList.remove("active");
        }
      });
    }
    document.addEventListener("scroll", navmenuScrollspy);
    navmenuScrollspy();

    // Cleanup listeners on unmount
    return () => {
      document.removeEventListener("scroll", toggleScrolled);
      document.removeEventListener("scroll", toggleScrollTop);
      document.removeEventListener("scroll", navmenuScrollspy);
      mobileNavToggleBtn?.removeEventListener("click", mobileNavToogle);
    };
  }, []);

  return null;
}
