// components/AppDesignDevelopmentContent.js

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AppDesignDevelopmentContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          App Design & <span className="text-accent-500">Development</span>
        </h1>
        <p className="text-xl text-primary-700 max-w-3xl mx-auto">
          Create intuitive and powerful mobile experiences that engage and delight your users.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-primary-800 mb-4">Why Choose Our App Development Services?</h2>
          <ul className="space-y-4 text-primary-700">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>User-Centric Design: We prioritize user experience to ensure your app is intuitive and enjoyable to use.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Cross-Platform Development: Build once, deploy everywhere with our expertise in React Native and Flutter.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Scalable Architecture: We build apps that can grow with your business, handling increased users and features.</span>
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
            src="/illustrations_Mobile_apps.svg"
            alt="App Design & Development"
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
        <h2 className="text-3xl font-semibold text-primary-800 mb-6">Our App Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Discovery & Planning", description: "We work closely with you to understand your vision, target audience, and business goals." },
            { title: "Design & Prototyping", description: "Our designers create intuitive interfaces and interactive prototypes for your approval." },
            { title: "Development & Testing", description: "We build your app using the latest technologies and perform rigorous testing to ensure quality." },
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
        className="text-center"
      >
        <Link
          href="/contact"
          className="inline-block bg-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-600 transition duration-300"
        >
          Start Your App Project
        </Link>
      </motion.div>
    </>
  );
}