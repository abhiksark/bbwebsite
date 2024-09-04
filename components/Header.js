// components/Header.js

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-900 shadow-lg' : 'bg-primary-900/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white flex items-center">
          <Image
            src="/light-logo.png"
            alt="BitwiseBuilder Logo"
            width={150}
            height={50}
            className="max-w-full h-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <motion.li
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="text-lg font-medium text-white hover:text-accent-400 transition duration-300"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="px-6 py-2 rounded-full font-semibold transition duration-300 bg-accent-500 text-white hover:bg-accent-600"
          >
            Get Started
          </Link>
        </motion.div>
        <button
          className="md:hidden text-white hover:text-accent-400"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle menu"
        >
          {isNavOpen ? "✕" : "☰"}
        </button>
      </div>
      {isNavOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-primary-800 shadow-md"
        >
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <motion.li
                key={item.href}
                className="py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-accent-400 transition duration-300"
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}
