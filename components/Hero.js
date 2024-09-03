import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-bg to-gray-200 py-32 min-h-screen flex items-center">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Empower Your Startup with Cutting-Edge Tech
          </h1>
          <p className="text-xl mb-6">
            We transform innovative ideas into powerful digital solutions, driving your startup's growth with engaging designs and scalable technology.
          </p>
          <Link href="#services" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-accent transition duration-300">
            Discover Our Expertise
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="/illustrations_Startup_life.svg" 
            alt="Innovative Tech Solutions" 
            width={600} 
            height={400} 
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}