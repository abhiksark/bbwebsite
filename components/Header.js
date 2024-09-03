'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center text-primary text-2xl font-bold">
          <Image src="/images/logo.svg" alt="BitwiseBuilder Logo" width={40} height={40} className="mr-2" />
          BitwiseBuilder
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav className={`md:block ${isNavOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-8">
            <li><Link href="#services" className="text-text hover:text-primary">Services</Link></li>
            <li><Link href="#about" className="text-text hover:text-primary">About</Link></li>
            <li><Link href="#contact" className="text-text hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
        <Link href="#contact" className="hidden md:inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-accent transition duration-300">
          Get Started
        </Link>
      </div>
    </header>
  );
}