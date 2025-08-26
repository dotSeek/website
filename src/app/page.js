"use client";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Features from "@/components/features/Features";
import FeaturesCards from "@/components/featuresCards/FeaturesCards";
import FeaturesServices from "@/components/featuresServices/FeaturesServices";
import CallToAction from "@/components/callToAction/CallToAction";
import Clients from "@/components/clients/Clients";
import Testimonials from "@/components/testimonials/Testimonials";
import Stats from "@/components/stats/Stats";
import Services from "@/components/services/Services";
import Pricing from "@/components/pricing/Pricing";
import Faq from "@/components/faq/Faq";
import Contact from "@/components/contact/Contact";

const testimonialData = [
  {
    image: "/assets/img/placeholder.png",
    name: "Saul Goodman",
    role: "CEO & Founder",
    text: "Dotseek transformed our operations with a tailored web application, streamlining workflows and boosting productivity across all teams.",
    stars: 5,
  },
  {
    image: "/assets/img/placeholder.png",
    name: "Sara Wilsson",
    role: "Lead Designer",
    text: "The mobile app developed by Dotseek offers a seamless user experience, allowing us to engage clients more effectively than ever.",
    stars: 5,
  },
  {
    image: "/assets/img/placeholder.png",
    name: "Jena Karlis",
    role: "Store Owner",
    text: "Their automation tools reduced manual errors and saved hours of work daily, helping our business scale efficiently.",
    stars: 5,
  },
  {
    image: "/assets/img/placeholder.png",
    name: "Matt Brandon",
    role: "Freelancer",
    text: "With Dotseek’s data insights, we now make smarter decisions backed by analytics, enhancing our strategy and outcomes.",
    stars: 5,
  },
];

const statsData = [
  { start: 0, end: 232, duration: 1, label: "Clients" },
  { start: 0, end: 521, duration: 1, label: "Projects" },
  { start: 0, end: 1453, duration: 1, label: "Hours Of Support" },
  { start: 0, end: 32, duration: 1, label: "Workers" },
];

const servicesData = [
  {
    icon: "bi-activity",
    title: "Web & Mobile App Development",
    description:
      "We build modern, responsive, and user-friendly applications that deliver seamless experiences across all devices, tailored to your business goals.",
    link: "/service-details",
  },
  {
    icon: "bi-diagram-3",
    title: "Automation Tools",
    description:
      "Custom automation frameworks designed to reduce manual work, increase accuracy, and boost productivity across your workflows.",
    link: "/service-details",
  },
  {
    icon: "bi-easel",
    title: "Data Intelligence & Insights",
    description:
      "Transform raw data into actionable insights using real-time dashboards, performance tracking, and predictive analytics for smarter decisions.",
    link: "/service-details",
  },
  {
    icon: "bi-clipboard-data",
    title: "Technical Edge",
    description:
      "Cutting-edge technology ensures scalability, security, and performance, with AI-powered automation and seamless system integrations.",
    link: "/service-details",
  },
];

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "9.9",
    period: "month",
    description:
      "Ideal for startups and small businesses looking to get started with web and mobile app development.",
    features: [
      "Responsive Web & Mobile App",
      "Basic Automation Tools",
      "Standard Analytics Dashboard",
    ],
    popular: false,
  },
  {
    name: "Standard Plan",
    price: "19.9",
    period: "month",
    description:
      "Best for growing businesses seeking enhanced automation and data-driven insights.",
    features: [
      "Advanced Web & Mobile App Features",
      "Custom Automation Frameworks",
      "Real-time Analytics & Reports",
      "Seamless System Integrations",
    ],
    popular: true,
  },
  {
    name: "Premium Plan",
    price: "39.9",
    period: "month",
    description:
      "Comprehensive package for enterprises requiring scalable solutions, intelligent automation, and predictive insights.",
    features: [
      "Full-featured Web & Mobile Apps",
      "AI-powered Automation Tools",
      "Predictive Analytics & Insights",
      "End-to-End System Integrations",
      "Dedicated Support & Consulting",
    ],
    popular: false,
  },
];

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <FeaturesCards />
      <FeaturesServices />
      <CallToAction />
      <Clients />
      <Testimonials testimonials={testimonialData} />
      <Stats stats={statsData} />
      <Services services={servicesData} />
      <Pricing plans={pricingPlans} />
      <Faq />
      <Contact />
    </div>
  );
}
