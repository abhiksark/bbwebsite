import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      title: "App Design & Development",
      description: "Create intuitive and powerful mobile experiences that engage and delight your users.",
      image: "/illustrations_Mobile_apps.svg"
    },
    {
      title: "CRM & ERP Solutions",
      description: "Streamline your operations with tailored systems that drive efficiency and foster growth.",
      image: "/illustrations_Data_trends.svg"
    },
    {
      title: "Cloud Cost Optimization",
      description: "Maximize your cloud efficiency to reduce costs and boost overall performance.",
      image: "/illustrations_Cloud_hosting.svg"
    },
    {
      title: "AI & Machine Learning",
      description: "Harness the power of data to create intelligent, predictive systems for your business.",
      image: "/illustrations_Artificial_intelligence.svg"
    },
    {
      title: "Web Design & Development",
      description: "Build responsive, high-performance websites that convert visitors into loyal customers.",
      image: "/illustrations_Web_developer.svg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Comprehensive Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}