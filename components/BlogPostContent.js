'use client';

import { MDXRemote } from 'next-mdx-remote';
import { useState, useEffect } from 'react';
import { serialize } from 'next-mdx-remote/serialize';

export default function BlogPostContent({ content }) {
  const [mdxSource, setMdxSource] = useState(null);

  useEffect(() => {
    async function prepareMDX() {
      const serializedContent = await serialize(content);
      setMdxSource(serializedContent);
    }
    prepareMDX();
  }, [content]);

  if (!mdxSource) {
    return <div>Loading...</div>;
  }

  return <MDXRemote {...mdxSource} />;
}