
import PortfolioGrid from '@/components/PortfolioGrid';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-static';

export async function generateMetadata() {
  return {
    title: 'نمونه‌کارهای کلینیک زیبایی البا',
    description:
      'گالری نتایج واقعی خدمات لیزر، بوتاکس، فیلر و مزوتراپی در کلینیک زیبایی البا – قبل و بعد درمان.',
  };
}

export default async function PortfolioPage() {
  const raw = await fs.readFile(path.join(process.cwd(), 'data/content.json'), 'utf8');
  const { portfolio } = JSON.parse(raw);

  return (

      <main className="pt-24 pb-24">
        
        <section className="edu-container mb-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
            {portfolio.title}
          </h1>
          <p className="text-gray-600">{portfolio.subtitle}</p>
        </section>

       
        <PortfolioGrid items={portfolio.items} />
      </main>

  
  );
}
