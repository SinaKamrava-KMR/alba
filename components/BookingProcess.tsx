'use client';

import Link from 'next/link';
import { JSX } from 'react';

interface ProcessStep {
  title: string;
  description: string;
  icon: 'chat' | 'calendar' | 'smile';   // آیکون‌های مجاز
}

interface BookingProcessProps {
  processData: {
    title: string;
    subtitle?: string;
    steps: ProcessStep[];
  };
}

/*  آیکون‌های سادهٔ  SVG  (بدون کتابخانه) */
const IconChat = () => (
  <svg width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.8-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.5 8.5 0 018.5 8.5Z"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
    <rect x="3" y="5" width="18" height="16" rx="2"/>
    <path d="M16 3v4M8 3v4M3 11h18"/>
  </svg>
);
const IconSmile = () => (
  <svg width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 15s1.5 2 4 2 4-2 4-2"/>
    <path d="M9 9h.01M15 9h.01"/>
  </svg>
);

export default function BookingProcess({ processData }: BookingProcessProps) {
  const { title, subtitle, steps } = processData;

  const iconMap: Record<ProcessStep['icon'], JSX.Element> = {
    chat: <IconChat />,
    calendar: <IconCalendar />,
    smile: <IconSmile />
  };

  return (
    <section className="py-20 bg-gray-50/20">
      <div className="edu-container">

        {/* تیتر و زیرتیتر */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-edu-text mb-4">{title}</h2>
          {subtitle && <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </header>

        {/* کارت‌های مراحل */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`${idx === 0 ? 'bg-[#16C47F] text-white' : 'bg-white text-edu-text'} p-6 rounded-xl shadow-sm ${idx > 0 && 'border border-gray-100'}`}
            >
              <div className={`w-12 h-12 ${idx === 0 ? 'bg-white/20' : 'bg-[#41e196]'} rounded-full flex items-center justify-center mb-4`}>
                {iconMap[step.icon]}
              </div>
              <h3 className={`text-xl font-semibold mb-2`}>{step.title}</h3>
              <p className={`mb-6 ${idx === 0 ? 'text-white/80' : 'text-gray-600'}`}>{step.description}</p>

            </div>
          ))}
        </div>

        {/* بخش پایانی انگیزشی */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">فراتر از انتظارتان</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
              مسیری ساده تا زیبایی طبیعی و اعتمادبه‌نفس
            </h2>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link href="/contact" className="btn-primary bg-[#16C47F]">رزرو نوبت</Link>
              <Link href="/contact" className="btn-secondary">اطلاعات بیشتر</Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <p className="text-gray-600 leading-relaxed">
              در کلینیک البا، تمامی خدمات از مشاوره تا درمان، بر اساس نیازهای
              اختصاصی شما طراحی می‌شود؛ تا در کوتاه‌ترین زمان، بهترین نتیجه
              و بالاترین سطح رضایت حاصل شود.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
