// components/Header.js

'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <img src="logo.png" alt="BitwiseBuilder Logo" width="150" height="150" style={{ maxWidth: '100%', height: 'auto' }} />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition duration-300"
          >
            Get Started
          </Link>
          <button
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle menu"
          >
            {isNavOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {isNavOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <li key={item.href} className="py-2">
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}