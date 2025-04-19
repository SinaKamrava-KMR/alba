
import Image from 'next/image';
import Link from 'next/link';

interface BadgeItem { label: string; icon: 'star' | 'heart'; }
interface PromoData {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  badges: BadgeItem[];
  treatmentsStat: { count: string; label: string };
  miniOffer: { title: string; text: string };

}
export default function PromoSection({ promoData }: { promoData: PromoData }) {
  const { title, description, buttonText, image, badges ,miniOffer} = promoData;
  const Icon = ({ name }: { name: 'star' | 'heart' }) =>
    name === 'star' ? (
      <svg width="16" height="16" stroke="#00BCD4" strokeWidth="2" fill="none">
        <path d="M12 2 15.1 8.3 22 9.3l-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2Z" />
      </svg>
    ) : (
      <svg width="16" height="16" stroke="#00BCD4" strokeWidth="2" fill="none">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z" />
      </svg>
    );

  return (
    <section
      className="py-16 bg-[#e7fdf2] mt-16"
      aria-labelledby="promo-heading"
    >
      <div className="edu-container">
        <article
          className="relative bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row"
          itemScope
          itemType="https://schema.org/Offer"
        >
         
          <div className="flex-1 p-8 lg:p-10">

           
            <ul className="flex gap-2 absolute top-4 right-4 lg:left-4">
              {badges.map(b => (
                <li key={b.label} className="flex items-center bg-[#E5F4F9] text-[#00BCD4] px-2 py-1 rounded-full text-xs font-medium">
                  <Icon name={b.icon} />
                  <span className="mx-1">{b.label}</span>
                </li>
              ))}
            </ul>

            
            <header className="mt-12 mb-8 max-w-md">
              <h2 id="promo-heading" className="text-3xl lg:text-4xl font-bold leading-snug" itemProp="name">
                {title}
              </h2>
              <p className="text-gray-700 mt-4 leading-relaxed" itemProp="description">
                {description}
              </p>
            </header>

          
            <Link
              href="/contact"
              className="inline-block bg-[#7AE582] hover:bg-[#68D36F] text-black font-medium px-8 py-3 rounded-full transition-colors"
              itemProp="url"
            >
              {buttonText}
            </Link>

           

<div className="flex items-center mt-8 text-[#00BCD4]" itemProp="achievement">
  {/* آیکون تیک داخل دایره */}
  <span className="w-8 h-8 rounded-full bg-[#E5F4F9] flex items-center justify-center mr-2">
    <svg width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M9 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />
      <path d="m6.5 9 1.8 1.8L12.5 6" />
    </svg>
  </span>

  {/* عدد و توضیح */}
  <div className="flex flex-col">
    <strong className="text-lg leading-none" itemProp="numberOfItems">
      {promoData.treatmentsStat.count}
    </strong>
    <span className="text-sm text-gray-600">
      {promoData.treatmentsStat.label}
    </span>
  </div>
</div>
</div>
     
          <figure className="relative h-64 lg:h-auto lg:w-1/2" itemProp="image">
            <Image
              src={image}
              alt="نمونه نتیجهٔ جوان‌سازی پوست در کلینیک البا"
              fill
              className="object-cover"
            />
          
            <figcaption className="absolute bottom-4 right-4 bg-[#7AE582]/90 text-black p-3 rounded-xl max-w-xs">
              <strong className="flex items-center mb-1">
                <svg width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" className="mr-2">
                  <circle cx="12" cy="12" r="10" /><path d="M8 15s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01" strokeWidth="3"/>
                </svg>
                {miniOffer.title}
              </strong>
              <span className="text-xs leading-relaxed">{miniOffer.text}</span>
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}
