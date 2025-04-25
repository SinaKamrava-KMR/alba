/* app/contact/page.tsx */
import fs from 'fs/promises';
import path from 'path';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const dynamic = 'force-static';

/* ───── SEO meta ───── */
export async function generateMetadata() {
  return {
    title: 'تماس با کلینیک زیبایی البا | رشت',
    description:
      'آدرس، تلفن و ساعات کاری کلینیک زیبایی البا در رشت. همین حالا برای رزرو نوبت یا مشاوره تماس بگیرید.',
  };
}

/* ───── Page component ───── */
export default async function ContactPage() {
  const raw = await fs.readFile(
    path.join(process.cwd(), 'data/content.json'),
    'utf8'
  );
  const { contact } = JSON.parse(raw);

  return (
      <main className="pt-24 pb-16 flex-grow">
        <div className="edu-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{contact.title}</h1>
          <p className="text-gray-600 mb-10">{contact.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* ───── اطلاعات تماس ───── */}
            <section>
              <h2 className="text-xl font-bold mb-4">{contact.clinic}</h2>

              <address className="not-italic text-gray-700 mb-6 leading-relaxed">
                {contact.addressLines.map((line: string) => (
                  <p key={line}>{line}</p>
                ))}
              </address>

              {/* تلفن / ایمیل */}
              <ul className="space-y-2 mb-8 text-gray-800 text-sm">
                <li className="flex items-center gap-2">
                  {/* تلفن (آیکون SVG) */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.77 12.77 0 0 0 .57 2.57 2 2 0 0 1-.45 2L8.09 10.91a16 16 0 0 0 5 5l1.62-1.62a2 2 0 0 1 2-.45 12.77 12.77 0 0 0 2.57.57A2 2 0 0 1 22 16.92Z" />
                  </svg>
                  <Link href={`tel:${contact.phone}`} className="hover:underline">
                    {contact.phone}
                  </Link>
                </li>

                <li className="flex items-center gap-2">
                  {/* ایمیل (SVG) */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <Link
                    href={`mailto:${contact.email}`}
                    className="hover:underline break-all"
                  >
                    {contact.email}
                  </Link>
                </li>
              </ul>

              {/* ساعات کاری */}
              <div className="space-y-1 text-sm">
                {contact.openingHours.map(
                  (o: { day: string; hours: string }) => (
                    <div key={o.day} className="flex justify-between">
                      <span>{o.day}</span>
                      <span>{o.hours}</span>
                    </div>
                  )
                )}
              </div>

              {/* دکمهٔ مسیر‌یابی */}
              <Link
                href={contact.googleMapUrl}
                target="_blank"
                className="inline-block mt-8 border border-gray-300 px-6 py-2 text-sm hover:bg-gray-100 transition rounded-none"
              >
                مسیر‌یابی در نقشه
              </Link>
            </section>

            {/* ───── نقشه (Embed یا Placeholder) ───── */}
            <section className="min-h-[380px] bg-gray-200 rounded overflow-hidden">
              <iframe
                title="آدرس کلینیک البا"
                src={contact.googleMapUrl + '&output=embed'}
                className="w-full h-full"
                loading="lazy"
              />
            </section>
          </div>
        </div>
      </main>
  );
}
