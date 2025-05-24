// app/(marketing)/blogs/page.tsx
import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Badge from '@/components/ui/badge';
import Pagination from '@/components/ui/pagination';

/* ---------- types ---------- */
type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: { name: string; avatar?: string };
  category: string;
  date: string;
};

type BlogData = {
  title: string;
  subtitle: string;
  postsPerPage: number;
  posts: BlogPost[];
};

/* ---------- helpers ---------- */
async function getBlogData(): Promise<BlogData> {
  const raw = await fs.readFile(
    path.join(process.cwd(), 'data/content.json'),
    'utf8'
  );
  const { blogs } = JSON.parse(raw);
  return blogs;
}

/* ---------- metadata ---------- */
export async function generateMetadata() {
  return {
    title: 'مقالات کلینیک البا | آرشیو',
    description:
      'آرشیو کامل مقالات آموزشی کلینیک زیبایی البا درباره لیزر، بوتاکس، فیلر و مراقبت پوست.',
  };
}

/* ---------- page ---------- */
export default async function BlogArchive({
  searchParams,
}: {
  /** ⇐ در Next.js 15 یک Promise است  */
  searchParams: Promise<{ page?: string }>;
}) {
  /* ابتدا searchParams را resolve می‌کنیم */
  const { page: pageQuery } = await searchParams;

  const blog = await getBlogData();
  const per = blog.postsPerPage;
  const all = blog.posts;
  const totalPages = Math.ceil(all.length / per);

  /* عدد صفحه */
  const currentPage = Math.max(1, Number(pageQuery ?? 1));

  /* 404 اگر صفحه بیش از حد است */
  if (currentPage > totalPages && totalPages > 0) notFound();

  /* slice پست‌های همین صفحه */
  const start = (currentPage - 1) * per;
  const posts = all.slice(start, start + per);

  /* ---------------- render -------------- */
  return (
    <main className="pt-28 pb-20 bg-gray-50 min-h-[calc(100vh-320px)]">
      <div className="edu-container">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {blog.title}
          </h1>
          <p className="text-gray-600 max-w-2xl">{blog.subtitle}</p>
        </header>

        {/* Grid of posts */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.id}`}
              className="bg-white w-full h-full flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width:1024px)33vw,(min-width:768px)50vw,100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <Badge variant="outline" className="mb-3 bg-blue-400/30">
                  {post.category}
                </Badge>

                <h3 className="font-bold text-lg mb-2 line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 grow">
                  {post.author.avatar ? (
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="rounded-full object-cover overflow-hidden"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-xs text-white">?</span>
                    </div>
                  )}

                  <div className="text-xs text-gray-500">
                    <p className="font-medium text-emerald-600">
                      {post.author.name}
                    </p>
                    <p>{post.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            current={currentPage}
            hrefBuilder={(p) => (p === 1 ? '/blogs' : `/blogs?page=${p}`)}
          />
        )}
      </div>
    </main>
  );
}