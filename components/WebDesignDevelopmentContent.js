// components/WebDesignDevelopmentContent.js

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WebDesignDevelopmentContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          Web Design & <span className="text-accent-500">Development</span>
        </h1>
        <p className="text-xl text-primary-700 max-w-3xl mx-auto">
          Build responsive, high-performance websites that convert visitors into loyal customers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-primary-800 mb-4">Crafting Digital Experiences</h2>
          <p className="text-primary-700 mb-6">
            Our web design and development services focus on creating visually stunning, 
            user-friendly, and technically robust websites that help your business thrive online.
          </p>
          <ul className="space-y-4 text-primary-700">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Responsive Design: Ensure your website looks great on all devices.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Performance Optimization: Fast-loading pages for better user experience and SEO.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>SEO-Friendly: Built with best practices to improve your search engine rankings.</span>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative h-96"
        >
          <Image
            src="/illustrations_Web_developer.svg"
            alt="Web Design & Development"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white rounded-lg shadow-xl p-8 mb-16"
      >
        <h2 className="text-3xl font-semibold text-primary-800 mb-6">Our Web Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Discovery & Planning", description: "We work with you to understand your goals and plan the perfect website." },
            { title: "Design & Prototyping", description: "Our designers create visually appealing mockups and interactive prototypes." },
            { title: "Development & Launch", description: "We build your site using modern technologies and deploy it to your chosen hosting." },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-primary-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-primary-800 mb-2">{step.title}</h3>
              <p className="text-primary-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-primary-100 rounded-lg p-8 mb-16"
      >
        <h2 className="text-3xl font-semibold text-primary-800 mb-6">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "React", "Next.js", "Vue.js", "Node.js",
            "WordPress", "Shopify", "Laravel", "Django"
          ].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-lg p-4 text-center shadow-md"
            >
              <p className="text-primary-700 font-semibold">{tech}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold text-primary-800 mb-6">Why Choose Us for Web Development?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Custom Solutions", description: "We create tailor-made websites that align perfectly with your brand and business goals." },
            { title: "Scalable Architecture", description: "Our websites are built to grow with your business, handling increased traffic and functionality." },
            { title: "Ongoing Support", description: "We provide continued maintenance and support to keep your website running smoothly." },
            { title: "Conversion-Focused Design", description: "We create designs that not only look great but also drive user actions and conversions." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <h3 className="text-xl font-semibold text-primary-800 mb-2">{feature.title}</h3>
              <p className="text-primary-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="text-center"
      >
        <Link
          href="/contact"
          className="inline-block bg-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-600 transition duration-300"
        >
          Start Your Web Project
        </Link>
      </motion.div>
    </>
  );
}