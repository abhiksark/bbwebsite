import { getPostBySlug, getAllPosts } from '../../../lib/api';
import BlogPostContent from '../../../components/BlogPostContent';
import BackgroundElements from '../../../components/BackgroundElements';
import Image from 'next/image';

export default async function BlogPost({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content', 'coverImage']);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <BackgroundElements />
      <main className="container relative z-10 mx-auto px-4">
        <article className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 w-full">
            <Image 
              src={post.coverImage || "/illustrations_Startup_life.svg"} 
              alt={post.title} 
              layout="fill" 
              objectFit="cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
              <p className="text-gray-300">{post.date}</p>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <div className="prose lg:prose-xl max-w-none">
              <BlogPostContent content={post.content} />
            </div>
          </div>
        </article>
      </main>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
