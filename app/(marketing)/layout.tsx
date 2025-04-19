import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import fs from 'fs/promises';
import path from 'path';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "کلینیک زیبایی البا",
  description: "کلینیک زیبایی البا در رشت با ارائه خدمات تخصصی مانند لیزر موهای زائد، بوتاکس، فیلر لب، مزوتراپی و پاکسازی پوست، زیبایی و جوانی را به شما هدیه می‌دهد. تجربه‌ای متفاوت از مراقبت پوستی در محیطی حرفه‌ای و آرامش‌بخش.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const raw = await fs.readFile(path.join(process.cwd(), 'data', 'content.json'), 'utf8');
    const { footer } = JSON.parse(raw);
  
  return (
    <>
      <div className="w-full h-full text-gray-900 container mx-auto">
        <Navbar />
        {children}
      </div>
      <Footer footerData={footer} />
      </>
  );
}