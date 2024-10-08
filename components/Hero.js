// components/Hero.js

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Empower Your <span className="text-accent-400">Startup</span> with
              Cutting-Edge Tech
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We transform innovative ideas into powerful digital solutions,
              driving your startup&apos;s growth with engaging designs and
              scalable technology.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="#services"
                className="bg-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-600 transition duration-300 text-center"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-900 transition duration-300 text-center"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <Image
                src="/illustrations_Startup_life.svg"
                alt="Innovative Tech Solutions"
                width={600}
                height={400}
                className="relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary-700 to-transparent"></div>
    </section>
  );
}
