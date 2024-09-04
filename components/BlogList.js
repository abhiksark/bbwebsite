// components/BlogList.js

import BlogPost from "./BlogPost";

export default function BlogList({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <BlogPost key={post.slug} post={post} index={index} />
      ))}
    </div>
  );
}
