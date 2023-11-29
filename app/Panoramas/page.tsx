"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import RatingStars from '@/components/RatingStars';



const imagePaths = [
  '/model1.svg',
  '/model2.svg',
  '/model3.svg',
  '/model1.svg',
];





const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('My Creation');
  const [clickedPage, setClickedPage] = useState(1);
  const totalPages = 10;

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
  const [openPopup, setOpenPopup] = useState(false);

  const handlePersonClick = (index:any) => {
    setActivePerson(index);
    setOpenPopup(true);
  };

  const closePopup = () => {
    setOpenPopup(false);
    setActivePerson(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (openPopup && !event.target.closest(".popup-content")) {
        closePopup();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [openPopup]);

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
             <div
               key={index}
               className={`relative w-[180px] xxl:w-[198px] h-[265px]  dropShadow rounded-[12px] bg-[#338CDD] ${
                 activePerson === index ? 'bg-gradient-to-l from-[#4CA9F0] to-[#70F2A4]' : ''
               }`}
               
             >
               <div className="w-[180px] xxl:w-[198px] h-[219px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex">
                 <div className="flex justify-between space-x-[140px] mt-2 ">
                   <Image src="/more.svg" alt="more" width={14} height={20} className="mb-2 cursor-pointer" />
                   <div className="relative">
                     <Image src="/3Dots.svg" alt="dots" width={8} height={8} className="mb-2 mr-0 cursor-pointer z-20" />
                   </div>
                 </div>
                 
                 {index < 4 && (
                   <img
                     src={imagePaths[index]}
                     alt='models'
                     className='model-Image w-[170px] h-auto -mt-4 cursor-pointer'
                   />
                 )}
                 <div className='mb-2'>
                   <RatingStars />
                 </div>
               </div>
               
               <p
               key={index}
                 className={`font-semibold flex justify-center  items-center w-full pt-2.5 rounded-b-[12px] text-white cursor-pointer `}
                 onClick={() => {handlePersonClick(index)}}
               >
                 Person Name
               </p>
               {openPopup && activePerson === index && (
                <div className='w-full flex justify-center items-center z-50 h-full fixed inset-0 bg-black bg-opacity-50 '>
                   <section className="bg-white popup-content w-[283px] h-[224px] border mx-5  z-50 boxShadow">
       <div>
         <div className="px-[11px] pt-[5px]">
           <div className="mx-auto border flex space-x-6 rounded-[8px] justify-center items-center bg-white boxShadow">
           <p
               className={`text-[12px] my-[8px] cursor-pointer rounded-[6px] px-2 bg-[#2B303A] text-white py-1`}
             >
               Panorama
             </p>
           </div>
         </div>
         
       </div>
     </section>
           </div>
         )}
         </div>
           ))}
         </div>
        )}
        {activeTab === 'My Saved' && (
          <div className="grid grid-cols-6 gap-x-[25px] 3xl:gap-x-[50px] gap-y-[50px] mt-5">
          {[...Array(36)].map((_, index) => (
            <div
              key={index}
              className={`relative w-[180px] xxl:w-[198px] h-[265px]  dropShadow rounded-[12px] bg-[#338CDD] ${
                activePerson === index ? 'bg-gradient-to-l from-[#4CA9F0] to-[#70F2A4]' : ''
              }`}
              onClick={() => handlePersonClick(index)}
            >
              <div className="w-[180px] xxl:w-[198px] h-[219px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex">
                <div className="flex justify-between space-x-[140px] mt-2 ">
                  <Image src="/more.svg" alt="more" width={14} height={20} className="mb-2 cursor-pointer" />
                  <div className="relative">
                    <Image src="/3Dots.svg" alt="dots" width={8} height={8} className="mb-2 mr-0 cursor-pointer z-20" />
                  </div>
                </div>
                
                {index < 4 && (
                  <img
                    src={imagePaths[index]}
                    alt='models'
                    className='model-Image w-[170px] h-auto -mt-4 cursor-pointer'
                  />
                )}
                <div className='mb-2'>
                  <RatingStars />
                </div>
              </div>
              
              <p
                className={`font-semibold flex justify-center  items-center w-full pt-2.5 rounded-b-[12px] text-white cursor-pointer `}
                onClick={() => {handlePersonClick(index)}}
              >
                Person Name
              </p>
              {openPopup && activePerson === index && (
               <div className='w-full flex justify-center items-center z-50 h-full fixed inset-0 bg-black bg-opacity-50 '>
                  <section className="bg-white popup-content w-[283px] h-[224px] border mx-5  z-50 boxShadow">
      <div>
        <div className="px-[11px] pt-[5px]">
          <div className="mx-auto border flex space-x-6 rounded-[8px] justify-center items-center bg-white boxShadow">
          <p
              className={`text-[12px] my-[8px] cursor-pointer rounded-[6px] px-2 bg-[#2B303A] text-white py-1`}
            >
              Panorama
            </p>
          </div>
        </div>
        
      </div>
    </section>
          </div>
        )}
        </div>
          ))}
        </div>
        )}
        {activeTab === 'Public' && (
          <div className="grid grid-cols-6 gap-x-[25px] 3xl:gap-x-[50px] gap-y-[50px] mt-5">
          {[...Array(36)].map((_, index) => (
            <div
              key={index}
              className={`relative w-[180px] xxl:w-[198px] h-[265px] dropShadow rounded-[12px] bg-[#338CDD] ${
                activePerson === index ? 'bg-gradient-to-l from-[#4CA9F0] to-[#70F2A4]' : ''
              }`}
              onClick={() => handlePersonClick(index)}
            >
              <div className="w-[180px] xxl:w-[198px] h-[219px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex">
                <div className="flex justify-between space-x-[140px] mt-2 ">
                  <Image src="/more.svg" alt="more" width={14} height={20} className="mb-2 cursor-pointer" />
                  <div className="relative">
                    <Image src="/3Dots.svg" alt="dots" width={8} height={8} className="mb-2 mr-0 cursor-pointer z-20" />
                  </div>
                </div>
                
                {index < 4 && (
                  <img
                    src={imagePaths[index]}
                    alt='models'
                    className='model-Image w-[170px] h-auto -mt-4 cursor-pointer'
                  />
                )}
                <div className='mb-2'>
                  <RatingStars />
                </div>
              </div>
              
              <p
                className={`font-semibold flex justify-center  items-center w-full pt-2.5 rounded-b-[12px] text-white cursor-pointer `}
                onClick={() => {handlePersonClick(index)}}
              >
                Person Name
              </p>
              {openPopup && activePerson === index && (
               <div className='w-full flex justify-center items-center z-50 h-full fixed inset-0 bg-black bg-opacity-50 '>
                  <section className="bg-white popup-content w-[283px] h-[224px] border mx-5  z-50 boxShadow">
      <div>
        <div className="px-[11px] pt-[5px]">
          <div className="mx-auto border flex space-x-6 rounded-[8px] justify-center items-center bg-white boxShadow">
          <p
              className={`text-[12px] my-[8px] cursor-pointer rounded-[6px] px-2 bg-[#2B303A] text-white py-1`}
            >
              Panorama
            </p>
          </div>
        </div>
        
      </div>
    </section>
          </div>
        )}
        </div>
          ))}
        </div>
        )}
        <div className="pagination flex justify-center space-x-[55px] mt-10">
          <button className="pagination-button" onClick={handleLeftArrowClick}>
            <Image src="/leftArrow.svg" alt="left" width={12} height={20} />
          </button>
          {startPage > 1 && (
            <>
              <button
                className={`pagination-button ${startPage === 1 ? 'active buttonBg  text-white' : ''}`}
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
                className={`pagination-button ${page === clickedPage ? 'active buttonBg text-white' : ''}`}
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
                className={`pagination-button ${endPage === totalPages ? 'active paginationBG  text-white' : ''}`}
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
