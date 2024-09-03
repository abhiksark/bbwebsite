import Image from 'next/image';
import Link from 'next/link';
import BackgroundElements from './BackgroundElements';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-32 min-h-screen flex items-center">
      <BackgroundElements />
      <div className="container relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 leading-tight">
            Empower Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Startup</span> with Cutting-Edge Tech
          </h1>
          <p className="text-xl mb-8 text-text">
            We transform innovative ideas into powerful digital solutions, driving your startup's growth with engaging designs and scalable technology.
          </p>
          <div className="flex space-x-4">
            <Link href="#services" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-accent transition duration-300 transform hover:scale-105">
              Discover Our Expertise
            </Link>
            <Link href="#contact" className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition duration-300 transform hover:scale-105">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <Image 
            src="/illustrations_Startup_life.svg" 
            alt="Innovative Tech Solutions" 
            width={600} 
            height={400} 
            layout="responsive"
            className="relative z-10 transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}