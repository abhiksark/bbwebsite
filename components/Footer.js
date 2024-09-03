import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const quickLinks = [
    { href: "#services", text: "Services" },
    { href: "#about", text: "About Us" },
    { href: "#contact", text: "Contact" },
  ];

  const socialLinks = [
    { href: "https://twitter.com/bitwisebuilder", text: "Twitter" },
    { href: "https://linkedin.com/company/bitwisebuilder", text: "LinkedIn" },
    { href: "https://github.com/bitwisebuilder", text: "GitHub" },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-start">
            <Image src="/images/logo-white.svg" alt="BitwiseBuilder Logo" width={150} height={40} className="mb-4" />
            <p className="text-sm">Empowering startups with cutting-edge technology solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm hover:underline transition duration-300">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <ul className="space-y-2">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline transition duration-300">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} BitwiseBuilder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}