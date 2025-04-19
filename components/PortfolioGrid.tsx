'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
interface Item {
  id: number;
  title: string;
  image: string;
  category: string;
}

export default function PortfolioGrid({ items }: { items: Item[] }) {
  /* فیلتر دسته‌بندی */
  const categories = useMemo(
    () => ['همه', ...Array.from(new Set(items.map((i) => i.category)))],
    [items]
  );
  const [activeCat, setActiveCat] = useState('همه');

  /* لایت‌باکس */
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered =
    activeCat === 'همه' ? items : items.filter((i) => i.category === activeCat);

  return (
    <div className="edu-container">
      {/* نوار فیلتر */}
      <ul className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => {
                setActiveCat(cat);
                setOpenIdx(null); // بستن لایت‌باکس هنگام تعویض تب
              }}
              className={`px-4 py-1 rounded-full text-sm border ${
                activeCat === cat
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

      {/* گرید مربعی */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {filtered.map((item, idx) => (
          <figure
            key={item.id}
            className="cursor-pointer"
            onClick={() => setOpenIdx(idx)}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className="object-cover aspect-square rounded-lg hover:scale-105 transition-transform"
            />
          </figure>
        ))}
      </div>

      {/* لایت‌باکس + Swiper */}
      {openIdx !== null && (
        <aside
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          role="dialog"
          aria-label="پیشنمایش تصویر"
          onClick={() => setOpenIdx(null)}
        >
          <Swiper
            className="max-w-[90vw] max-h-[85vh]  flex "
            modules={[Navigation, Keyboard]}
            navigation
            keyboard={{ enabled: true }}
            initialSlide={openIdx}
            onClick={(_, ev) => ev.stopPropagation()}
            spaceBetween={40}
          >
            {filtered.map((slide) => (
              <SwiperSlide key={slide.id} className="flex m-auto md:m-0 justify-center items-center w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1000}
                  height={1000}
                  className="object-contain rounded-lg m-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* دکمه بستن */}
          <button
            onClick={() => setOpenIdx(null)}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="بستن"
          >
            ×
          </button>
        </aside>
      )}
    </div>
  );
}


// 'use client';

// import { useState, useMemo } from 'react';
// import Image from 'next/image';

// interface Item {
//   id: number;
//   title: string;
//   image: string;
//   category: string;
// }

// export default function PortfolioGrid({ items }: { items: Item[] }) {
//   /* فیلتر دسته‌بندی */
//   const categories = useMemo(
//     () => ['همه', ...Array.from(new Set(items.map((i) => i.category)))],
//     [items]
//   );
//   const [activeCat, setActiveCat] = useState('همه');

//   /* لایت‌باکس */
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [current, setCurrent] = useState(0); // ایندکس در آرایهٔ filtered

//   const filtered = activeCat === 'همه' ? items : items.filter((i) => i.category === activeCat);

//   const openLightbox = (idx: number) => {
//     setCurrent(idx);
//     setLightboxOpen(true);
//   };
//   const next = () => setCurrent((c) => (c + 1) % filtered.length);
//   const prev = () => setCurrent((c) => (c - 1 + filtered.length) % filtered.length);

//   return (
//     <div className="edu-container">
//       {/* نوار فیلتر تب‌مانند */}
//       <ul className="flex flex-wrap gap-3 mb-10">
//         {categories.map((cat) => (
//           <li key={cat}>
//             <button
//               onClick={() => setActiveCat(cat)}
//               className={`px-4 py-1 rounded-full text-sm border ${
//                 activeCat === cat
//                   ? 'bg-gray-900 text-white'
//                   : 'bg-white text-gray-700 hover:bg-gray-100'
//               } transition-colors`}
//             >
//               {cat}
//             </button>
//           </li>
//         ))}
//       </ul>

//       {/* گرید مربعی ثابت شبیه طرح */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         {filtered.map((item, idx) => (
//           <figure
//             key={item.id}
//             className="cursor-pointer"
//             onClick={() => openLightbox(idx)}
//           >
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={400}
//               height={400}
//               className="object-cover aspect-square rounded-lg hover:scale-105 transition-transform"
//             />
//           </figure>
//         ))}
//       </div>

//       {/* لایت‌باکس/اسلایدشو ساده */}
//       {lightboxOpen && (
//         <aside
//           className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
//           onClick={() => setLightboxOpen(false)}
//           role="dialog"
//           aria-label="پیشنمایش تصویر"
//         >
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               prev();
//             }}
//             className="absolute left-4 md:left-12 text-white text-3xl select-none"
//             aria-label="قبلی"
//           >
//             ‹
//           </button>

//           <Image
//             src={filtered[current].image}
//             alt={filtered[current].title}
//             width={800}
//             height={800}
//             className="max-h-[80vh] object-contain rounded-lg"
//           />

//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               next();
//             }}
//             className="absolute right-4 md:right-12 text-white text-3xl select-none"
//             aria-label="بعدی"
//           >
//             ›
//           </button>
//         </aside>
//       )}
//     </div>
//   );
// }