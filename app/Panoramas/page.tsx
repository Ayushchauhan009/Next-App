"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('My Creation');
  const [clickedPage, setClickedPage] = useState(1);
  const totalPages = 20;

  const handlePageChange = (page:any) => {
    if (page >= 1 && page <= totalPages) {
      setClickedPage(page);
    }
  };

  const handleLeftArrowClick = () => {
    if (currentPage > 1) {
      setClickedPage(currentPage - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentPage < totalPages) {
      setClickedPage(currentPage + 1);
    }
  };

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(clickedPage);
  }, [clickedPage]);

  const maxVisiblePages = 4;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  if (endPage === totalPages) {
    startPage = Math.max(1, totalPages - maxVisiblePages + 1);
  }

  const [activePerson, setActivePerson] = useState(null);

  const handlePersonClick = (index:any) => {
    setActivePerson(index);
  };

  return (
    <div className="max-container flexTwo padding-container2 pb-[33px]">
      <div>
        <div className="flex mt-10 space-x-[46px] tabs">
          <p
            className={`cursor-pointer flex justify-center items-center ${
              activeTab === 'My Creation'
                ? 'bg-[#2B303A] font-medium rounded-[7px] text-white px-2 '
                : 'bg-[#fff] rounded-[7px] border px-2 '
            }`}
            onClick={() => handleTabClick('My Creation')}
          >
            My Creation
          </p>
          <p
            className={`cursor-pointer flex justify-center items-center ${
              activeTab === 'My Saved'
                ? 'bg-[#2B303A] font-medium rounded-[7px] text-white px-2 '
                : 'bg-[#fff] rounded-[7px] border px-2 py-1'
            }`}
            onClick={() => handleTabClick('My Saved')}
          >
            My Saved
          </p>
          <p
            className={`cursor-pointer flex justify-center items-center ${
              activeTab === 'Public'
                ? 'bg-[#2B303A] font-medium rounded-[7px] text-white px-2 '
                : 'bg-[#fff] rounded-[7px] border px-2 py-1'
            }`}
            onClick={() => handleTabClick('Public')}
          >
            Public
          </p>
        </div>
        {/* Content for each tab based on currentPage */}
        {activeTab === 'My Creation' && (
          <div className="grid grid-cols-6 gap-x-[25px] 3xl:gap-x-[50px] gap-y-[50px] mt-5">
            {[...Array(36)].map((_, index) => (
              <div key={index} className= {`relative w-[180px] xxl:w-[198px] h-[265px] cursor-pointer dropShadow rounded-[12px] bg-[#338CDD] ${
                activePerson === index ? 'bg-gradient-to-l  from-[#4CA9F0] to-[#70F2A4]' : ''
              }`}
              onClick={() => handlePersonClick(index)}>
                {/* <div className="w-[180px] xxl:w-[198px] h-[265px] items-center flex-col justify-between rounded-[12px] bg-[#338CDD] flex"> */}
                  <div className="w-[180px] xxl:w-[198px] h-[219px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex ">
                    <div className="flex justify-between space-x-[140px] mt-2 ">
                      <Image src="/more.svg" alt="more" width={14} height={20} className="mb-2 cursor-pointer" />
                      <div className="relative">
                        <Image src="/3Dots.svg" alt="dots" width={8} height={8} className="mb-2 mr-0 cursor-pointer z-20" />
                      </div>
                    </div>
                    <Image src="/stars.svg" alt="stars" width={100} height={20} className="mb-2" />
                  </div>
                 
                
                <p
                    className={`font-semibold flex justify-center  items-center w-full pt-2.5 rounded-b-[12px] text-white cursor-pointer `}
                    
                  >
                    Person Name
                  </p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'My Saved' && (
          <div className="grid grid-cols-6 gap-x-[25px] 3xl:gap-x-[50px] gap-y-[50px] mt-5">
          {[...Array(36)].map((_, index) => (
            <div key={index} className= {`relative w-[180px] xxl:w-[198px] h-[265px] cursor-pointer dropShadow rounded-[12px] bg-[#338CDD] ${
              activePerson === index ? 'bg-gradient-to-l  from-[#4CA9F0] to-[#70F2A4]' : ''
            }`}
            onClick={() => handlePersonClick(index)}>
              {/* <div className="w-[180px] xxl:w-[198px] h-[265px] items-center flex-col justify-between rounded-[12px] bg-[#338CDD] flex"> */}
                <div className="w-[180px] xxl:w-[198px] h-[219px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex ">
                  <div className="flex justify-between space-x-[140px] mt-2 ">
                    <Image src="/more.svg" alt="more" width={14} height={20} className="mb-2 cursor-pointer" />
                    <div className="relative">
                      <Image src="/3Dots.svg" alt="dots" width={8} height={8} className="mb-2 mr-0 cursor-pointer z-20" />
                    </div>
                  </div>
                  <Image src="/stars.svg" alt="stars" width={100} height={20} className="mb-2" />
                </div>
               
              
              <p
                  className={`font-semibold flex justify-center  items-center w-full pt-2.5 rounded-b-[12px] text-white cursor-pointer `}
                  
                >
                  Person Name
                </p>
            </div>
          ))}
        </div>
        )}
        {activeTab === 'Public' && (
          <div className="grid grid-cols-6 gap-x-[25px] 3xl:gap-x-[50px] gap-y-[50px] mt-5">
          {[...Array(36)].map((_, index) => (
            <div key={index} className= {`relative w-[180px] xxl:w-[198px] h-[265px] cursor-pointer dropShadow rounded-[12px] bg-[#338CDD] ${
              activePerson === index ? 'bg-gradient-to-l  from-[#4CA9F0] to-[#70F2A4]' : ''
            }`}
            onClick={() => handlePersonClick(index)}>
              {/* <div className="w-[180px] xxl:w-[198px] h-[265px] items-center flex-col justify-between rounded-[12px] bg-[#338CDD] flex"> */}
                <div className="w-[180px] xxl:w-[198px] h-[219px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex ">
                  <div className="flex justify-between space-x-[140px] mt-2 ">
                    <Image src="/more.svg" alt="more" width={14} height={20} className="mb-2 cursor-pointer" />
                    <div className="relative">
                      <Image src="/3Dots.svg" alt="dots" width={8} height={8} className="mb-2 mr-0 cursor-pointer z-20" />
                    </div>
                  </div>
                  <Image src="/stars.svg" alt="stars" width={100} height={20} className="mb-2" />
                </div>
               
              
              <p
                  className={`font-semibold flex justify-center  items-center w-full pt-2.5 rounded-b-[12px] text-white cursor-pointer `}
                  
                >
                  Person Name
                </p>
            </div>
          ))}
        </div>
        )}
        <div className="pagination flex justify-around mt-10">
          <button className="pagination-button" onClick={handleLeftArrowClick}>
            <Image src="/leftArrow.svg" alt="left" width={12} height={20} />
          </button>
          {startPage > 1 && (
            <>
              <button
                className={`pagination-button ${startPage === 1 ? 'active buttonBg' : ''}`}
                onClick={() => handlePageChange(1)}
              >
                1
              </button>
              {startPage > 2 && <span className="pagination-ellipsis my-auto">...</span>}
            </>
          )}
          {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
            const page = startPage + index;
            return page > 0 && page <= totalPages ? (
              <button
                key={page}
                className={`pagination-button ${page === clickedPage ? 'active buttonBg' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ) : null;
          })}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <span className="pagination-ellipsis my-auto">...</span>}
              <button
                className={`pagination-button ${endPage === totalPages ? 'active paginationBG' : ''}`}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}
          <button className="pagination-button" onClick={handleRightArrowClick}>
            <Image src="/rightSideArrow.svg" alt="right" width={12} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
