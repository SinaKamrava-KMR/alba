
import fs from 'fs/promises';
import path from 'path';

import Hero from '../../components/Hero';
import BookingProcess from '@/components/BookingProcess';
import ProjectsSlider from '@/components/ProjectsSlider';
import PromoSection from '@/components/PromoSection';
import FaqSection from '@/components/FaqSection';
import BlogSection from '@/components/BlogSection';

// import BookingProcess from '../components/BookingProcess';
// import ProjectsSlider from '../components/ProjectsSlider';
// import DentalPromoSection from '../components/DentalPromoSection';
// import AwardsSection from '../components/AwardsSection';
// import BlogSection from '../components/BlogSection';
// import Footer from '../components/Footer';



export default async function HomePage() {
  const filePath = path.join(process.cwd(), 'data', 'content.json');
  const file = await fs.readFile(filePath, 'utf8');
  const content = JSON.parse(file);

  return (
    <div className="min-h-screen ">
      <Hero heroData={content.hero} />
      <BookingProcess processData={content.bookingProcess} />
      <ProjectsSlider projectsData={content.projects} />
      <PromoSection promoData={content.promo} />
      <FaqSection faqData={content.faq} />
      <BlogSection />
    </div>
  );
}
