'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection({
  faqData,
}: {
  faqData: { title: string; items: FaqItem[],subtitle:string };
}) {
  const { title, items } = faqData;
  const [open, setOpen] = useState(0); 


  const Icon = ({ open }: { open: boolean }) =>
    open ? (
      <svg width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M4 9h10" />
      </svg>
    ) : (
      <svg width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M4 9h10M9 4v10" />
      </svg>
    );

  return (
    <section className="py-24 ">
      <div className="edu-container">

        
        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row gap-12 relative">

        
          <span className="absolute -left-20 top-24 w-40 h-40 bg-[#E4DEFF] rounded-full opacity-60 -z-10" />
          <span className="absolute -right-20 top-20 w-40 h-40 bg-[#f4c8f8] rounded-full opacity-60 -z-10" />

        
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
              {title.split(' ').map((w, i) => (
                <span key={i} className="block">
                  {w}
                </span>
              ))}
            </h2>
            <p className="mt-4 text-gray-600">{faqData.subtitle}</p>
          </div>

       
          <div className="md:w-2/3 space-y-2">
            {items.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center px-4 py-4 text-left"
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-gray-800">{item.question}</span>
                    <Icon open={isOpen} />
                  </button>

                  {isOpen && (
                    <div className="px-4 pt-2 pb-4 text-gray-600 leading-relaxed border-t border-gray-100">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
