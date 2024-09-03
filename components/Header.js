'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '/blog', label: 'Blog' }, // Add this line
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center text-primary text-2xl font-bold">
            <Image src="/images/logo.svg" alt="BitwiseBuilder Logo" width={40} height={40} className="mr-2" />
            BitwiseBuilder
          </Link>
          <div className="hidden md:flex items-center space-x-4">
          <nav>
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-text hover:text-primary transition duration-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
            <Link href="#contact" className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-accent transition duration-300">
              Get Started
            </Link>
          </div>
          <button
            className="md:hidden text-primary"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle menu"
          >
            {isNavOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {isNavOpen && (
        <nav className="md:hidden bg-white">
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <li key={item.href} className="py-2">
                <Link href={item.href} className="text-text hover:text-primary transition duration-300" onClick={() => setIsNavOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <Link href="#contact" className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-accent transition duration-300" onClick={() => setIsNavOpen(false)}>
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}