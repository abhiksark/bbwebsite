// app/services/migration-integration/page.js

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MigrationIntegration() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Migration & <span className="text-accent-500">Integration</span>
          </h1>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Seamlessly transition to new systems with expert guidance and support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-primary-800 mb-4">Smooth Transitions, Seamless Integrations</h2>
            <p className="text-primary-700 mb-6">
              Our migration and integration services ensure that your business can adopt new technologies 
              and systems without disrupting your operations. We specialize in:
            </p>
            <ul className="space-y-4 text-primary-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Data Migration: Securely move your data to new systems or cloud platforms.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>System Integration: Connect disparate systems for improved workflow and efficiency.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Legacy System Modernization: Update outdated systems to leverage modern technologies.</span>
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
              src="/illustrations_Migration.svg"
              alt="Migration & Integration"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-semibold text-primary-800 mb-6">Our Migration & Integration Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Assessment & Planning", description: "We analyze your current systems and create a detailed migration or integration plan." },
              { title: "Implementation", description: "Our experts execute the plan, ensuring minimal disruption to your business operations." },
              { title: "Testing & Optimization", description: "We rigorously test the new setup and optimize for performance and reliability." },
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
        </div>

        <div className="bg-primary-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold text-primary-800 mb-6">Why Choose Us for Migration & Integration?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Expertise Across Platforms", description: "Our team has experience with a wide range of systems and technologies." },
              { title: "Minimal Downtime", description: "We prioritize your business continuity throughout the migration process." },
              { title: "Data Security", description: "We employ industry-leading security measures to protect your sensitive information." },
              { title: "Ongoing Support", description: "We provide continued assistance to ensure smooth operation post-migration." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <h3 className="text-xl font-semibold text-primary-800 mb-2">{feature.title}</h3>
                <p className="text-primary-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-600 transition duration-300"
          >
            Start Your Migration Project
          </Link>
        </div>
      </div>
    </div>
  );
}