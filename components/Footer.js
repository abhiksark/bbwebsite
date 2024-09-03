// components/Footer.js

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const companyLinks = [
    { href: "#about", text: "About" },
    { href: "#features", text: "Features" },
    { href: "#careers", text: "Careers" },
  ];

  const resourcesLinks = [
    { href: "/blog", text: "Blog" },
    { href: "#testimonials", text: "Testimonials" },
    { href: "/contact", text: "Contact" },
  ];

  const legalLinks = [
    { href: "/terms-of-use", text: "Terms of Use" },
    { href: "/privacy-policy", text: "Privacy Policy" },
    { href: "/legal-notice", text: "Legal Notice" },
  ];

  const socialLinks = [
    { href: "https://twitter.com/bitwisebuilder", text: "Twitter", icon: "/icons/twitter.svg" },
    { href: "https://linkedin.com/company/bitwisebuilder", text: "LinkedIn", icon: "/icons/linkedin.svg" },
    { href: "https://facebook.com/bitwisebuilder", text: "Facebook", icon: "/icons/facebook.svg" },
    { href: "https://github.com/bitwisebuilder", text: "GitHub", icon: "/icons/github.svg" },
  ];

  return (
    <footer className="bg-text-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-300">Grow with us!</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-text-300 hover:text-primary-300 transition duration-300">
                    <Image src={link.icon} alt={link.text} width={24} height={24} />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <Link href="/">
                <Image src="/light-logo.png" alt="BitwiseBuilder Logo" width={150} height={150} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-300">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-text-300 hover:text-primary-300 transition duration-300">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-300">Resources</h4>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-text-300 hover:text-primary-300 transition duration-300">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-300">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-text-300 hover:text-primary-300 transition duration-300">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}