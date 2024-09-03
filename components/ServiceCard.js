import Image from 'next/image';

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-md transition duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="mb-4 mx-auto w-24 h-24 relative">
        <Image src={image} alt={title} layout="fill" objectFit="contain" />
      </div>
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-text">{description}</p>
    </div>
  );
}