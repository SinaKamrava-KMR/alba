'use client';

import Link from 'next/link';
import ImageCard from './ui/ImageCard';
import Stats from './ui/Stats';

interface HeroProps {
  heroData?: {
    title: string;
    subtitle: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    images?: {
      image1: string;
      image2: string;
      image3: string;
    };
  };
}

const Hero = ({ heroData }: HeroProps) => {
  const title = heroData?.title || 'A new way to learn & get knowledge';
  const subtitle = heroData?.subtitle || 'EduFlex is here for you with various courses & materials from skilled tutors all around the world';
  const primaryButtonText = heroData?.primaryButtonText || 'Join the Class';
  const secondaryButtonText = heroData?.secondaryButtonText || 'Learn more';

  const heroImage1 = heroData?.images?.image1||"" ;
  const heroImage2 = heroData?.images?.image2 ||"";
  const heroImage3 = heroData?.images?.image3||"" ;

  return (
    <section className="pt-16 md:pt-32 pb-12 md:pb-20 overflow-hidden relative ">
      <div className="edu-container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
        <div className="shape-decoration w-12 md:w-20 h-12 md:h-20 bg-edu-blue rounded-full top-0 right-4 animate-pulse-soft hidden sm:block" />
      <div
        className="shape-decoration w-6 md:w-8 h-6 md:h-8 bg-blue-200 rounded-full top-32 left-0 animate-pulse-soft hidden sm:block"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="shape-decoration bg-fuchsia-300 w-10 md:w-16 h-10 md:h-16 bg-edu-blue rounded-full bottom-30 left-8 animate-pulse-soft hidden sm:block"
        style={{ animationDelay: '1.5s' }}
      />
            {/* Stars */}
            <div className="shape-decoration text-edu-green left-8 absolute bottom-0 transform -translate-y-1/2 animate-spin-slow hidden sm:block">
              <svg width="30" height="30" viewBox="0 0 30 30" className='fill-emerald-400 '>
                <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
              </svg>
            </div>
            <div className="shape-decoration text-edu-green absolute right-10 top-5 animate-spin-slow hidden sm:block" style={{ animationDelay: '2s' }}>
              <svg width="100" height="100" viewBox="0 0 100 100" className='fill-emerald-400'>
                <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
              </svg>
            </div>
         
            <div className="shape-decoration text-edu-green right-8 absolute bottom-0 transform -translate-y-1/2 animate-spin-slow hidden sm:block">
              <svg width="30" height="30" viewBox="0 0 30 30" className='fill-emerald-400 '>
                <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
              </svg>
            </div>
          {/* right Column */}
          <div className="z-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-edu-text leading-tight mb-4 md:mb-6">
              {title}
            </h1>
            <p className="text-gray-600 mb-6 md:mb-8 max-w-lg text-sm md:text-base">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link href="/contact" className="btn-primary text-sm md:text-base">
                {primaryButtonText}
              </Link>
              <Link href="/contact" className="btn-secondary text-sm md:text-base">
                {secondaryButtonText}
              </Link>
            </div>
            <Stats />
          </div>

          {/* left Column */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
            {/* Decorations */}
            <div className="shape-decoration w-12 md:w-20 h-12 md:h-20 bg-edu-blue rounded-full top-0 right-4 animate-pulse-soft hidden sm:block absolute" />
            <div className="shape-decoration w-6 md:w-8 h-6 md:h-8 bg-blue-200 rounded-full top-32 right-0 animate-pulse-soft hidden sm:block absolute" style={{ animationDelay: '1s' }} />
            <div className="shape-decoration w-10 md:w-14 h-10 md:h-14 bg-amber-100 rounded-full bottom-12 right-8 animate-pulse-soft hidden sm:block absolute" style={{ animationDelay: '1.5s' }} />


            {/* Images Cards */}
            <ImageCard
              image={heroImage1}
              backgroundColor="#93C5FD"
              className="w-[230px] md:w-[220px] lg:w-[280px] h-[200px] md:h-[220px] lg:h-[280px] absolute top-10 md:top-0 right-0 md:right-10 animate-float  "
              name="Student 1"
            />
            <ImageCard
              image={heroImage2}
              backgroundColor="#DDD6FE"
              className="w-[150px] md:w-[180px] lg:w-[240px] h-[140px] md:h-[180px] lg:h-[240px] absolute top-10 md:top-20 left-0 md:left-auto md:right-[220px] lg:right-[320px] animate-float"
              delay={500}
              name="Student 2"
            />
            <ImageCard
              image={heroImage3}
              backgroundColor="#86EFAC"
              className="w-[200px] md:w-[230px] lg:w-[280px] h-[180px] md:h-[220px] lg:h-[280px] absolute bottom-0 md:bottom-10 right-30 md:right-40  animate-float"
              delay={1000}
              name="Student 3"
            />

            {/* Rings Decoration */}
            <div className="shape-decoration right-[160px] md:right-[260px] top-[140px] md:top-[200px] hidden sm:block">
              <svg width="40" height="30" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="#DDD6FE" strokeWidth="2" />
                <circle cx="30" cy="20" r="19" stroke="#DDD6FE" strokeWidth="2" />
                <circle cx="40" cy="20" r="19" stroke="#DDD6FE" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;