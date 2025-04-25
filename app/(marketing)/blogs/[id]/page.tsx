// app/blogs/[id]/page.tsx
import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/ui/badge';

type ContentBlock =
  | { type: 'heading'; content: string }
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; alt?: string };

type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: { name: string; avatar: string };
  category: string;
  date: string;
  content: ContentBlock[] | string;
};

type Blogs = {
  title: string;
  subtitle: string;
  postsPerPage: number;
  posts: Post[];
};

async function getBlogs(): Promise<Blogs> {
  const raw = await fs.readFile(
    path.join(process.cwd(), 'data/content.json'),
    'utf8'
  );
  const { blogs } = JSON.parse(raw);
  return blogs;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const blogs = await getBlogs();
  const post = blogs.posts.find((p) => p.id === Number(params.id));
  if (!post) return { title: 'مقاله یافت نشد' };
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const blogs = await getBlogs();
  const post = blogs.posts.find((p) => p.id === Number(params.id));
  if (!post) notFound();

  // normalize content to array of blocks
  const contentBlocks: ContentBlock[] = Array.isArray(post.content)
    ? post.content
    : [{ type: 'text', content: String(post.content) }];

  // related posts (exclude current)
  const related = blogs.posts.filter((p) => p.id !== post.id).slice(0, 3);

  return (

      <main className="pt-24 pb-16 bg-gray-50 min-h-[calc(100vh-200px)]">
        <div className="edu-container space-y-12">
          {/* Hero */}
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
              <div className="text-white/80 text-sm mb-2">
                <span>تاریخ: {post.date}</span>
                <span className="mx-2">•</span>
                <span>دسته: {post.category}</span>
              </div>
              <h1 className="text-4xl font-bold text-white">{post.title}</h1>
              <div className="flex items-center mt-4">
                <Image src={post.author.avatar} alt={post.author.name} width={40} height={40} className="rounded-full" />
                <span className="text-white font-medium mr-3">{post.author.name}</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Article */}
            <article className="lg:col-span-2 bg-white rounded-xl p-8 shadow-sm space-y-6">
              {contentBlocks.map((block, i) => {
                if (block.type === 'heading')
                  return (
                    <h2 key={i} className="text-2xl font-bold">
                      {block.content}
                    </h2>
                  );
                if (block.type === 'text')
                  return (
                    <p key={i} className="text-gray-700 leading-relaxed">
                      {block.content}
                    </p>
                  );
                if (block.type === 'image')
                  return (
                    <div key={i} className="my-6">
                      <Image
                        src={block.src!}
                        alt={block.alt || ''}
                        width={800}
                        height={500}
                        className="w-full rounded-lg object-cover"
                      />
                    </div>
                  );
                return null;
              })}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4">دسته</h3>
                <Badge variant="outline">{post.category}</Badge>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4">نویسنده</h3>
                <div className="flex items-center">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-3"
                  />
                  <span className="font-medium">{post.author.name}</span>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Posts */}
          <section>
            <h2 className="text-2xl font-bold mb-6">مطالب مرتبط</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link 
                  key={r.id} 
                  href={`/blogs/${r.id}`} 
                  className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >  
                  <div className="h-40 relative">
                    <Image src={r.image} alt={r.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 line-clamp-2">{r.title}</h3>
                    <p className="text-sm text-gray-500">{r.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

  );
}
