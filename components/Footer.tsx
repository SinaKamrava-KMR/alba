'use client';

import { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';

interface FooterData {
  logo: string;
  social: { facebook: string; instagram: string; whatsapp: string };
  contact: { title: string; email: string; address: string; phone: string };
  newsletter: { title: string; description: string; buttonLabel: string };
  copyright: string;
}

export default function Footer({ footerData }: { footerData: FooterData }) {
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'خطا');
      }

      setPhone('');
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  // پیام موفقیت را بعد از ۳ ثانیه مخفی کن
  useEffect(() => {
    if (success) {
      const t = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(t);
    }
  }, [success]);

  /* آیکون‌های کوچک */
  const SocialIcon = ({ d }: { d: string }) => (
    <svg width="16" height="16" fill="currentColor"><path d={d} /></svg>
  );
  const InstaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
    <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="#fff"/>
    <circle cx="16.5" cy="7.5" r="1.5" fill="#fff"/>
    <circle cx="12" cy="12" r="3.5" stroke="#fff"/>
    </svg>
  );
  const WhatsappIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 192 192" fill="none"><path className='fill-gray-300' fillRule="evenodd" d="M96 16c-44.183 0-80 35.817-80 80 0 13.12 3.163 25.517 8.771 36.455l-8.608 36.155a6.002 6.002 0 0 0 7.227 7.227l36.155-8.608C70.483 172.837 82.88 176 96 176c44.183 0 80-35.817 80-80s-35.817-80-80-80ZM28 96c0-37.555 30.445-68 68-68s68 30.445 68 68-30.445 68-68 68c-11.884 0-23.04-3.043-32.747-8.389a6.003 6.003 0 0 0-4.284-.581l-28.874 6.875 6.875-28.874a6.001 6.001 0 0 0-.581-4.284C31.043 119.039 28 107.884 28 96Zm46.023 21.977c11.975 11.974 27.942 20.007 45.753 21.919 11.776 1.263 20.224-8.439 20.224-18.517v-6.996a18.956 18.956 0 0 0-13.509-18.157l-.557-.167-.57-.112-8.022-1.58a18.958 18.958 0 0 0-15.25 2.568 42.144 42.144 0 0 1-7.027-7.027 18.958 18.958 0 0 0 2.569-15.252l-1.582-8.021-.112-.57-.167-.557A18.955 18.955 0 0 0 77.618 52H70.62c-10.077 0-19.78 8.446-18.517 20.223 1.912 17.81 9.944 33.779 21.92 45.754Zm33.652-10.179a6.955 6.955 0 0 1 6.916-1.743l8.453 1.665a6.957 6.957 0 0 1 4.956 6.663v6.996c0 3.841-3.124 6.995-6.943 6.585a63.903 63.903 0 0 1-26.887-9.232 64.594 64.594 0 0 1-11.661-9.241 64.592 64.592 0 0 1-9.241-11.661 63.917 63.917 0 0 1-9.232-26.888C63.626 67.123 66.78 64 70.62 64h6.997a6.955 6.955 0 0 1 6.66 4.957l1.667 8.451a6.956 6.956 0 0 1-1.743 6.917l-1.12 1.12a5.935 5.935 0 0 0-1.545 2.669c-.372 1.403-.204 2.921.603 4.223a54.119 54.119 0 0 0 7.745 9.777 54.102 54.102 0 0 0 9.778 7.746c1.302.806 2.819.975 4.223.603a5.94 5.94 0 0 0 2.669-1.545l1.12-1.12Z" clipRule="evenodd"/></svg>
  );

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="edu-container">

        {/* سه ستون */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* لوگو و شبکه‌ها */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <svg width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="M2 12 12 17l10-5" /><path d="M2 17 12 22l10-5" />
              </svg>
              {footerData.logo}
            </Link>

            <div className="flex gap-4">
              <Link href={footerData.social.instagram} target="_blank" aria-label="instagram"
                className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center">
                <InstaIcon />
              </Link>
              <Link href={footerData.social.whatsapp} target="_blank" aria-label="twitter"
                className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center">
                <WhatsappIcon/>
              </Link>
            </div>
          </div>

          {/* اطلاعات تماس */}
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <h3 className="font-semibold text-white mb-2">{footerData.contact.title}</h3>
            <p>{footerData.contact.email}</p>
            <p>{footerData.contact.address}</p>
            <p>{footerData.contact.phone}</p>
          </div>

          {/* فرم خبرنامه با شماره موبایل */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white mb-2">{footerData.newsletter.title}</h3>
            <p className="text-sm text-gray-300">{footerData.newsletter.description}</p>

            <form onSubmit={submitHandler} className="flex gap-1">
            <button type="submit"
                className="bg-gray-700 hover:cursor-pointer hover:bg-gray-600 px-4 rounded-r-md">
           <svg  fill="#fff" height="16px" width="16px" version="1.1" id="Capa_1" viewBox="0 0 495.003 495.003" >
<g id="XMLID_51_">
	<path id="XMLID_53_" d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616   l-67.6-32.22V456.687z"/>
	<path id="XMLID_52_" d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422   c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414   l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956   L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"/>
</g>
</svg>
              </button>
              <input
                type="number"
                required
                pattern="\\d{10,13}"
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-l-md focus:outline-none"
              />

            </form>

            {success && (
              <span className="text-green-400 text-sm">شما عضو خبرنامه شدید!</span>
            )}
            {error && (
              <span className="text-red-400 text-sm">{error}</span>
            )}
          </div>
        </div>

        <hr className="my-8 border-gray-700" />
        <p className="text-center text-sm text-gray-400">{footerData.copyright}</p>
      </div>
    </footer>
  );
}
