// app/layout.js

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BitwiseBuilder - Cutting-Edge Tech Solutions for Innovative Startups",
  description:
    "BitwiseBuilder empowers startups with innovative App Development, CRM & ERP Solutions, Cloud Optimization, AI & ML, and Web Development services.",
  keywords:
    "startup, technology, app development, CRM, ERP, cloud optimization, AI, ML, web development",
  author: "BitwiseBuilder",
  ogTitle: "BitwiseBuilder - Empowering Startups with Tech",
  ogDescription: "Transform your startup with our cutting-edge tech solutions.",
  ogImage: "/images/og-image.jpg",
  ogUrl: "https://www.bitwisebuilder.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
