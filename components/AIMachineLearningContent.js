// components/AIMachineLearningContent.js

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AIMachineLearningContent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary-800 mb-4">Transform Your Business with AI</h2>
          <p className="text-primary-700 mb-6">
            Our AI and Machine Learning solutions help you unlock the full potential of your data, 
            enabling you to make smarter decisions, automate processes, and gain a competitive edge.
          </p>
          <ul className="space-y-4 text-primary-700">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Predictive Analytics: Forecast trends and make data-driven decisions.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Natural Language Processing: Enhance customer interactions with intelligent chatbots and voice assistants.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-accent-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Computer Vision: Automate visual inspections and enhance image-based decision making.</span>
            </li>
          </ul>
        </div>
        <div className="relative h-96">
          <Image
            src="/illustrations_Artificial_intelligence.svg"
            alt="AI & Machine Learning"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-semibold text-primary-800 mb-6">Our AI & ML Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Custom AI Solutions", description: "Tailor-made AI applications designed to solve your specific business challenges." },
            { title: "Machine Learning Models", description: "Develop and deploy ML models to automate decision-making processes." },
            { title: "Data Analytics", description: "Extract valuable insights from your data to drive business growth." },
            { title: "AI Integration", description: "Seamlessly integrate AI capabilities into your existing systems and workflows." },
          ].map((service, index) => (
            <div key={index} className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-2">{service.title}</h3>
              <p className="text-primary-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/contact"
          className="inline-block bg-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-600 transition duration-300"
        >
          Start Your AI Journey
        </Link>
      </div>
    </div>
  );
}