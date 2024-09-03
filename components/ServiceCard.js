// components/ServiceCard.js

import Image from 'next/image';

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-md transition duration-300 hover:shadow-lg hover:-translate-y-1">
      <Image src={image} alt={title} width={100} height={100} className="mb-4 mx-auto" />
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-text">{description}</p>
    </div>
  );
}