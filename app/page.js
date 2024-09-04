// app/page.js

import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="bg-primary-900 text-white pt-24">
        <Hero />
        <Services />
        <Testimonials />
        <About />
      </main>
      {/* <Footer /> */}
    </>
  );
}
