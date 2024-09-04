"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "BitwiseBuilder&apos;s innovative approach revolutionized our workflow. Their solutions are cutting-edge and perfectly tailored for fast-growing startups.",
    name: "Alex Chen",
    role: "CTO, TechNova Ventures",
  },
  {
    quote: "Working with BitwiseBuilder was a game-changer. Their team&apos;s expertise in scaling systems is unparalleled. They&apos;re not just vendors; they&apos;re growth partners.",
    name: "Sarah Patel",
    role: "CEO, QuantumLeap AI",
  },
  {
    quote: "BitwiseBuilder&apos;s solutions gave us the competitive edge we needed. Their understanding of both technology and business strategy is impressive.",
    name: "Marcus Johnson",
    role: "Founder, Nexus Innovations",
  },
];

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const index = Math.abs(page % testimonials.length);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Innovators
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto h-[300px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-2xl">
                <svg className="w-12 h-12 text-accent-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl md:text-2xl text-white italic mb-8">
                  &quot;{testimonials[index].quote}&quot;
                </p>
                <div className="text-right">
                  <p className="font-semibold text-lg text-accent-400">{testimonials[index].name}</p>
                  <p className="text-sm text-gray-300">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full shadow-md hover:bg-opacity-30 transition duration-300"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full shadow-md hover:bg-opacity-30 transition duration-300"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > index ? 1 : -1])}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                i === index ? 'bg-accent-500 w-6' : 'bg-white bg-opacity-30'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
