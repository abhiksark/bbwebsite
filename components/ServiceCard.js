// components/ServiceCard.js

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceCard({ title, description, image, color, isHovered, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`bg-white rounded-xl p-6 shadow-lg transition duration-300 ${
        isHovered ? 'shadow-xl' : ''
      } h-full flex flex-col`}
    >
      <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
        <Image
          src={image}
          alt={title}
          width={48}
          height={48}
          className="text-white"
        />
      </div>
      <h3 className="text-2xl font-bold text-primary-900 mb-3 text-center">{title}</h3>
      <p className="text-primary-600 text-center leading-relaxed flex-grow">{description}</p>
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Link href={link} className="text-accent-500 font-semibold hover:text-accent-600 transition duration-300">
          Learn More →
        </Link>
      </motion.div>
    </motion.div>
  );
}