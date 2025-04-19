'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';


interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  description?: string;
  size?: 'large' | 'small';
}

interface ProjectsSliderProps {
  projectsData: {
    title: string;
    subtitle: string;
    items: Project[];
  };
}

export default function ProjectsSlider({ projectsData }: ProjectsSliderProps) {
  const { title, subtitle, items } = projectsData;

  return (
    <section className="py-12 bg-gray-50/20">
      <div className="edu-container">

       
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-edu-text mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </header>

       
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {items.map((project) => (
            <Card
              key={project.id}
              className={`overflow-hidden  border-none shadow-sm hover:shadow-md transition-all duration-300 
                ${project.size === 'large'
                  ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto'
                  : 'aspect-square'}`}
            >
              <CardContent className="p-0 h-full">
                <div className="relative w-full h-full overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 
                                 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <p className="text-sm text-white/90 mt-1">
                        {project.description || project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* دکمهٔ مشاهدهٔ بیشتر */}
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#4169e1] hover:gap-3 transition-all"
          >
             <svg className='mb-2' width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h6M9 8l4 4-4 4" />
            </svg>
         <p>مشاهدهٔ گالری کامل</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
