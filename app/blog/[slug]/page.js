// app/blog/[slug]/page.js

import { getPostBySlug, getAllPosts } from '../../../lib/api';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundElements from '../../../components/BackgroundElements';

const components = {
  h1: (props) => <h1 className="text-3xl font-bold my-4 text-gray-900" {...props} />,
  h2: (props) => <h2 className="text-2xl font-semibold my-3 text-gray-800" {...props} />,
  h3: (props) => <h3 className="text-xl font-semibold my-2 text-gray-800" {...props} />,
  p: (props) => <p className="my-2 text-gray-700" {...props} />,
  ul: (props) => <ul className="list-disc list-inside my-2" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside my-2" {...props} />,
  li: (props) => <li className="my-1" {...props} />,
  a: (props) => <a className="text-blue-600 hover:underline" {...props} />,
  blockquote: (props) => <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4" {...props} />,
  code: (props) => <code className="bg-gray-100 rounded px-1 py-0.5" {...props} />,
  pre: (props) => <pre className="bg-gray-100 rounded p-4 overflow-x-auto my-4" {...props} />,
};

export default async function BlogPost({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content', 'coverImage']);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white py-24">
      <BackgroundElements />
      <div className="container relative z-10 mx-auto px-4">
        <article className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
          {post.coverImage && (
            <div className="relative h-64 md:h-96 w-full">
              <Image 
                src={post.coverImage} 
                alt={post.title} 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
          )}
          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full ml-2" />
            </h1>
            <p className="text-lg text-gray-600 mb-8">{post.date}</p>
            <div className="prose lg:prose-xl max-w-none">
              <MDXRemote source={post.content} components={components} />
            </div>
          </div>
        </article>
        <div className="mt-16 text-center">
          <Link href="/blog"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Back to Blog
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}