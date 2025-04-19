import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';

const UsersIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="7" r="4" />
    <path d="M17 11a4 4 0 1 0-1-7.9" />
    <path d="M3 21v-1a4 4 0 0 1 4-4h6" />
    <path d="M16 17h1a4 4 0 0 1 4 4v1" />
  </svg>
);
const TargetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <path d="M22 12h-3" /><path d="M5 12H2" /><path d="M12 2v3" /><path d="M12 22v-3" />
  </svg>
);
const ChartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 20V10" /><path d="M9 20V4" /><path d="M14 20v-6" /><path d="M19 20v-9" />
  </svg>
);

export default async function AboutPage() {

  const filePath = path.join(process.cwd(), 'data', 'content.json');
  const raw = await fs.readFile(filePath, 'utf8');
  const { about } = JSON.parse(raw);

  return (
    <div dir="rtl" className="min-h-screen">
 
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#d7fce3] text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          {about.hero.title}
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          {about.hero.subtitle}
        </p>
      </section>

      {/* Gallery */}
      <section className="py-10 bg-white">
        <div className="edu-container grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {about.gallery.map((src: string) => (
            <div key={src} className="rounded-2xl overflow-hidden">
              <Image src={src} alt="گالری کلینیک" width={600} height={400} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50">
        <div className="edu-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{about.mission.heading}</h2>
          {about.mission.paragraphs.map((p: string) => (
            <p key={p.slice(0, 20)} className="text-gray-600 mb-4 leading-relaxed">{p}</p>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-white">
        <div className="edu-container flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
            <Image src={about.founder.image} alt="بنیان‌گذار کلینیک" width={700} height={500} className="object-cover w-full h-auto max-h-[600px]" />
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{about.founder.heading}</h3>
            <p className="text-gray-600 leading-relaxed">{about.founder.text}</p>
            <blockquote className="bg-[#d7fce3] border-l-4 border-[#51d387] p-6 rounded-lg italic text-gray-700">
              {about.founder.quote}
            </blockquote>
          </div>
        </div>
      </section>

      {/* Growth / Features */}
      <section className="py-16 bg-gray-50 mb-16">
        <div className="edu-container text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{about.growth.heading}</h2>
          <p className="text-gray-600">{about.growth.subtitle}</p>
        </div>

        <div className="edu-container grid grid-cols-1 md:grid-cols-3 gap-8">
          {about.growth.features.map((f: any) => (
            <div key={f.title} className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 bg-[#d7fce3] rounded-full flex items-center justify-center">
                {f.icon === 'users'  && <UsersIcon />}
                {f.icon === 'target' && <TargetIcon />}
                {f.icon === 'chart'  && <ChartIcon />}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}