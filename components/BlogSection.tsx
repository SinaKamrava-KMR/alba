/* components/BlogSection.tsx ---------------------------------- */
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/utils/date';


export default async function BlogSection() {
  const raw = await fs.readFile(path.join(process.cwd(), 'data', 'content.json'), 'utf8');
  const { blog } = JSON.parse(raw);

  const featured = blog.posts.filter((p: any) => p.featured);
  const regular  = blog.posts.filter((p: any) => !p.featured);

  return (
    <section className="py-16 bg-gray-50/20" aria-labelledby="blog-heading">
      <div className="edu-container">

   
        <header className="text-center mb-12">
          <h2 id="blog-heading" className="text-3xl md:text-4xl font-bold text-edu-text">
            {blog.title}
          </h2>
        </header>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featured.map((post: any) => (
            <article
              key={post.id}
              className={`rounded-2xl overflow-hidden ${post.bgColor} ${
                post.bgColor.startsWith('bg-[#') ? 'text-white' : 'text-edu-text'
              } shadow-sm hover:shadow-md transition-shadow`}
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <Link href={`/blogs/${post.id}`} className="block h-full">
                {post.id === featured[0].id ? (
                  <div className="grid md:grid-cols-2 h-full">
                    <figure className="relative h-64 md:h-auto">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        itemProp="image"
                      />
                    </figure>
                    <div className="p-6 flex flex-col">
                      <h3 className="text-xl font-bold mb-3" itemProp="headline">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-sm opacity-80 mb-4" itemProp="description">
                          {post.excerpt}
                        </p>
                      )}
                      <footer className="mt-auto flex items-center gap-2 text-sm opacity-80">
                        <span itemProp="author">{post.author}</span>
                        <span>•</span>
                        <time itemProp="datePublished" dateTime={post.date}>
               {formatDate(post.date)}
         </time>
                      </footer>
                    </div>
                  </div>
                ) : (
                  <div className="pb-6">
                    <figure className="relative h-56 mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-lg"
                        itemProp="image"
                      />
                    </figure>
                    <h3 className="text-xl font-bold mr-6" itemProp="headline">
                      {post.title}
                    </h3>
                    <footer className="mt-3 mr-6 flex items-center gap-2 text-sm opacity-80">
                      <span itemProp="author">{post.author}</span>
                      <span>•</span>
                      <time itemProp="datePublished" dateTime={post.date}>
  {formatDate(post.date)}
</time>
                    </footer>
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {regular.map((post: any) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <figure className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    itemProp="image"
                  />
                </figure>
                <div className="p-4">
                  <h3 className="font-bold mb-1 text-edu-text" itemProp="headline">
                    {post.title}
                  </h3>
                  <footer className="flex items-center text-xs text-gray-500">
                    <span itemProp="author">{post.author}</span>
                    <span className="mx-1">•</span>
                    <time itemProp="datePublished" dateTime={post.date}>
  {formatDate(post.date)}
</time>
                  </footer>
                </div>
              </Link>
            </article>
          ))}
        </div>

       
        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center bg-emerald-400 hover:bg-emerald-600 text-white rounded-full px-10 py-2 font-medium transition-colors"
          >
              <svg width="16" height="16" stroke="currentColor" strokeWidth="1" fill="none" className="ml-2 mb-2">
              <path d="M5 12h6M9 8l4 4-4 4" />
            </svg>
           <p> مشاهده همه مقالات</p>
          
          </Link>
        </div>
      </div>
    </section>
  );
}
