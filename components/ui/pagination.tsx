import Link from 'next/link';
import React from 'react';

interface PaginationProps {
  totalPages: number;
  current: number;
  hrefBuilder: (page: number) => string;
}

export default function Pagination({
  totalPages,
  current,
  hrefBuilder,
}: PaginationProps) {
  // Build sequence: first page, ellipsis, neighbor pages, last page
  const pages: (number | 'start-ellipsis' | 'end-ellipsis')[] = [];
  if (totalPages > 0) pages.push(1);
  if (current > 3) pages.push('start-ellipsis');
  if (current > 2) pages.push(current - 1);
  if (current !== 1 && current !== totalPages) pages.push(current);
  if (current < totalPages - 1) pages.push(current + 1);
  if (current < totalPages - 2) pages.push('end-ellipsis');
  if (totalPages > 1) pages.push(totalPages);

  return (
    <nav aria-label="Pagination" className="flex justify-center items-center text-sm gap-1">
      {/* Previous Button */}
      {current > 1 ? (
        <Link
          href={hrefBuilder(current - 1)}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          قبلی
        </Link>
      ) : (
        <span className="px-3 py-1 border rounded opacity-40 cursor-default">
          قبلی
        </span>
      )}

      {/* Page Number Buttons */}
      {pages.map((p, idx) => {
        if (p === 'start-ellipsis' || p === 'end-ellipsis') {
          return (
            <span key={idx} className="px-2 py-1">
              …
            </span>
          );
        }
        return (
          <Link
            key={p}
            href={hrefBuilder(p as number)}
            className={
              `px-3 py-1 border rounded transition-colors focus:outline-none ` +
              (p === current
                ? 'bg-gray-900 text-white'
                : 'hover:bg-gray-100 text-gray-700')
            }
            aria-current={p === current ? 'page' : undefined}
          >
            {p}
          </Link>
        );
      })}

      {/* Next Button */}
      {current < totalPages ? (
        <Link
          href={hrefBuilder(current + 1)}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          بعدی
        </Link>
      ) : (
        <span className="px-3 py-1 border rounded opacity-40 cursor-default">
          بعدی
        </span>
      )}
    </nav>
  );
}