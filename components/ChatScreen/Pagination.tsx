"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, handlePageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    const visiblePages = 4; // Display 3 pages at most

    let startPage = currentPage - Math.floor(visiblePages / 2);
    let endPage = currentPage + Math.floor(visiblePages / 2);

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(visiblePages, totalPages);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - visiblePages + 1);
    }

    return (
      <div className="flex items-center mt-4 justify-center font-satoshi min-w-[100%] ">
        <span
          className={`cursor-pointer mx-2 ${currentPage === 1 ? 'text-gray-300' : 'text-blue-400'}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {/* Left Arrow Icon */}
          <Image
            src="/leftArrow.svg"
            alt="left"
            width={6}
            height={6} 
          />
        </span>

        {pageNumbers.map((page) => {
          if (page >= startPage && page <= endPage) {
            const isCurrentPage = currentPage === page;

            return (
              <span
                key={page}
                className={`cursor-pointer px-3 rounded-md text-[14px] mx-0.5  ${isCurrentPage ? 'activeBg p-2 text-white' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </span>
            );
          } else if (page === startPage - 1 || page === endPage + 1) {
            // Display ellipsis before and after visible pages
            // return <span key={page} className="mx-1">...</span>;
          }
          return null;
        })}

        <span
          className={`cursor-pointer p-0 -ml-2 ${currentPage === totalPages ? '' : 'cursor-pointer'}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          {/* Right Arrow Icon */}
          <Image src="/rightSideArrow.svg" alt="Right" width={6} height={6} className='ml-2 '/>
        </span>
      </div>
    );
  };

  return <div>{renderPageNumbers()}</div>;
};

export default Pagination;