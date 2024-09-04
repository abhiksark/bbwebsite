import { getAllPosts, getAllTags } from "../../../lib/api";
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt", "tags"]);
  const tags = getAllTags();

  return NextResponse.json({ posts, tags });
}