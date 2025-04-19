'use client';

import React from 'react';

interface StatsProps {
  statsData?: {
    students: string;
    tutors: string;
    resources?: string;
  };
}

const Stats: React.FC<StatsProps> = ({ statsData }) => {
  const students = statsData?.students || '3Y';
  const tutors = statsData?.tutors || '3+';

  return (
    <div className="w-full mt-12 md:mt-16">
      <div className="flex flex-wrap justify-between items-center gap-6 md:gap-10">
        
        {/* Students */}
        <div className="stats-item text-center lg:text-left">
          <h4 className="stats-value text-2xl font-bold text-edu-text">{students}</h4>
          <p className="stats-label text-gray-500 text-sm"> سابقه‌ی فعالیت</p>
        </div>

        {/* Tutors */}
        <div className="stats-item text-center lg:text-left">
          <h4 className="stats-value text-2xl font-bold text-edu-text">{tutors}</h4>
          <p className="stats-label text-gray-500 text-sm">پزشک و تکنسین متخصص</p>
        </div>

        {/* Resources */}
        <div className="stats-item text-center lg:text-left">
          <svg
            width="48"
            height="24"
            viewBox="0 0 48 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto lg:mx-0"
          >
            <circle cx="12" cy="12" r="10" stroke="#333333" strokeWidth="2" fill="none" />
            <circle cx="24" cy="12" r="10" stroke="#333333" strokeWidth="2" fill="none" />
            <circle cx="36" cy="12" r="10" stroke="#333333" strokeWidth="2" fill="none" />
          </svg>
          <p className="stats-label text-gray-500 text-sm">سبد خدمات</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;
