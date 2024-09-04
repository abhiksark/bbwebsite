// components/CRMERPSolutionsContent.js

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CRMERPSolutionsContent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-primary-800 mb-4">Transforming Business Operations</h2>
            <p className="text-primary-700 mb-6">
              Our CRM and ERP solutions are designed to integrate seamlessly with your existing processes, 
              providing a unified platform for managing customer relationships, inventory, finance, and more.
            </p>
            <ul className="space-y-4 text-primary-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Customized Solutions: Tailored to fit your unique business needs and processes.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Data-Driven Insights: Powerful analytics to help you make informed decisions.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Scalable Architecture: Grow your system as your business expands.</span>
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
              src="/illustrations_Data_trends.svg"
              alt="CRM & ERP Solutions"
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
          <h2 className="text-3xl font-semibold text-primary-800 mb-6">Our CRM & ERP Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Customer Relationship Management", description: "Manage leads, track interactions, and improve customer satisfaction." },
              { title: "Enterprise Resource Planning", description: "Integrate core business processes for improved efficiency and productivity." },
              { title: "Business Intelligence", description: "Gain valuable insights with advanced reporting and analytics tools." },
              { title: "Cloud-Based Solutions", description: "Access your data and tools from anywhere, anytime with secure cloud hosting." },
            ].map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-primary-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-primary-800 mb-2">{offering.title}</h3>
                <p className="text-primary-700">{offering.description}</p>
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
            Streamline Your Business
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}