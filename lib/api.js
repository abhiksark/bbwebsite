// lib/api.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts(fields = []) {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // Sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'tags' && !data[field]) {
      items[field] = []; // Ensure tags is always an array
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  // Add reading time estimate
  if (fields.includes('readingTime')) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/g).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    items.readingTime = readingTime;
  }

  return items;
}

export function getAllTags() {
  const posts = getAllPosts(['tags']);
  const tags = new Set();
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
}

export function getPostsByTag(tag) {
  const posts = getAllPosts(['slug', 'title', 'date', 'tags', 'excerpt', 'coverImage', 'author']);
  return posts.filter(post => post.tags.includes(tag));
}

export function getFeaturedPosts() {
  const posts = getAllPosts(['slug', 'title', 'date', 'tags', 'excerpt', 'coverImage', 'author', 'featured']);
  return posts.filter(post => post.featured);
}

export function getRelatedPosts(currentSlug, currentTags, limit = 3) {
  const allPosts = getAllPosts(['slug', 'title', 'tags', 'excerpt', 'coverImage']);
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug) // Exclude current post
    .map(post => ({
      ...post,
      relevanceScore: post.tags.filter(tag => currentTags.includes(tag)).length
    }))
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);
  return relatedPosts;
}