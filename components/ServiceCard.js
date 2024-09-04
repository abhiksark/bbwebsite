// components/ServiceCard.js

import Image from "next/image";

export default function ServiceCard({ title, description, image, color, isHovered }) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-md transition duration-300 ${isHovered ? 'shadow-lg -translate-y-1' : ''}`}>
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
        <Image
          src={image}
          alt={title}
          width={40}
          height={40}
          className="text-white"
        />
      </div>
      <h3 className="text-xl font-semibold text-primary-600 mb-2 text-center">{title}</h3>
      <p className="text-text-600 text-center">{description}</p>
    </div>
  );
}
