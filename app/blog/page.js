import { getAllPosts } from '../../lib/api';
import BlogList from '../../components/BlogList';
import BackgroundElements from '../../components/BackgroundElements';

export default function Blog() {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'coverImage']);
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <BackgroundElements />
      <div className="container relative z-10 mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
          Insights & <span className="text-primary">Innovation</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Explore the latest in tech trends, industry insights, and innovation strategies
        </p>
        <BlogList posts={posts} />
      </div>
    </section>
  );
}