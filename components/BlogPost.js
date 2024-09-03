// components/BlogPost.js

import Link from 'next/link';
import Image from 'next/image';

export default function BlogPost({ post, index }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col"
         style={{animationDelay: `${index * 0.1}s`}}>
      <div className="relative h-48 w-full">
        <Image 
          src={post.coverImage || "/illustrations_Startup_life.svg"} 
          alt={post.title} 
          layout="fill" 
          objectFit="cover" 
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white text-sm mb-2">{post.date}</p>
          <h2 className="text-xl font-semibold text-white">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300">
          Read More
        </Link>
      </div>
    </div>
  );
}