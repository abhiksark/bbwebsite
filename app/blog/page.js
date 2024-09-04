// app/blog/page.js

import { getAllPosts } from "../../lib/api";
import BlogList from "../../components/BlogList";
import BackgroundElements from "../../components/BackgroundElements";
import Link from "next/link";
import Header from "../../components/Header";

export default function Blog() {
  const posts = getAllPosts(["title", "date", "slug", "excerpt", "coverImage"]);

  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-gradient-to-br from-primary-50 to-white pt-24 pb-24">
        <BackgroundElements />
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Insights & <span className="text-accent-500">Innovation</span>
              <span className="inline-block w-3 h-3 bg-accent-500 rounded-full ml-2" />
            </h1>
            <p className="text-xl text-text-700 max-w-3xl mx-auto">
              Explore the latest in tech trends, industry insights, and innovation
              strategies for startups
            </p>
          </div>

          <BlogList posts={posts} />

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </>
  );
}
