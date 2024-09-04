// components/Services.js

"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "App Design & Development",
      description:
        "Create intuitive and powerful mobile experiences that engage and delight your users.",
      image: "/illustrations_Mobile_apps.svg",
      color: "from-primary-400 to-primary-600",
    },
    {
      title: "CRM & ERP Solutions",
      description:
        "Streamline your operations with tailored systems that drive efficiency and foster growth.",
      image: "/illustrations_Data_trends.svg",
      color: "from-accent-400 to-accent-600",
    },
    {
      title: "Cloud Cost Optimization",
      description:
        "Maximize your cloud efficiency to reduce costs and boost overall performance.",
      image: "/illustrations_Cloud_hosting.svg",
      color: "from-primary-400 to-primary-600",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Harness the power of data to create intelligent, predictive systems for your business.",
      image: "/illustrations_Artificial_intelligence.svg",
      color: "from-accent-400 to-accent-600",
    },
    {
      title: "Web Design & Development",
      description:
        "Build responsive, high-performance websites that convert visitors into loyal customers.",
      image: "/illustrations_Web_developer.svg",
      color: "from-primary-400 to-primary-600",
    },
    {
      title: "Migration & Integration",
      description:
        "Seamlessly transition to new systems with expert guidance and support.",
      image: "/illustrations_Migration.svg",
      color: "from-accent-400 to-accent-600",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-primary-50 to-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Our Comprehensive <span className="text-accent-500">Services</span>
            <span className="inline-block w-3 h-3 bg-accent-500 rounded-full ml-2" />
          </h2>
          <p className="text-xl text-text-600 max-w-3xl mx-auto">
            Tailored solutions to fuel your startup&apos;s growth and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-center items-center w-full max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex justify-center"
            >
              <ServiceCard {...service} isHovered={hoveredIndex === index} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
