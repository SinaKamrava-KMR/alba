import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "کلینیک زیبایی البا",
  description: "کلینیک زیبایی البا در رشت با ارائه خدمات تخصصی مانند لیزر موهای زائد، بوتاکس، فیلر لب، مزوتراپی و پاکسازی پوست، زیبایی و جوانی را به شما هدیه می‌دهد. تجربه‌ای متفاوت از مراقبت پوستی در محیطی حرفه‌ای و آرامش‌بخش.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="w-full h-full text-gray-900 mx-auto">
        {children}
      </body>
    </html>
  );
}
