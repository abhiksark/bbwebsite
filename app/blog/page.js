"use client";  // Add this at the top of the file

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data.posts);
      setAllTags(data.tags);
    }
    fetchPosts();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Insights & <span className="text-accent-500">Innovation</span>
          </h1>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Explore the latest in tech trends, industry insights, and innovation strategies
          </p>
        </motion.div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary-800 mb-4">Popular Tags</h2>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Link 
                key={tag} 
                href={`/blog/tag/${tag}`}
                className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition duration-300"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="mr-2 text-xs text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold text-primary-900 mb-2">{post.title}</h2>
                  <p className="text-primary-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-500">{post.date}</span>
                    <span className="text-sm text-primary-700">{post.author}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
