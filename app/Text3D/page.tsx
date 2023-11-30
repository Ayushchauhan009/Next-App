"use client"

import Options from '@/components/Options'
import RatingStars from '@/components/RatingStars';
import ThreeScene from '@/components/ThreeScene';
import ThreeScene2 from '@/components/ThreeScene2';
import Image from 'next/image'
import React, { useState, useEffect} from 'react'




const PopupComponent = ({ isOpen, index, handleClose, handleOptionClick, selectedOption} : any) => {
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (isOpen) {
        const popupContainer = document.querySelector(`.popup-${index}`);
        const sceneContainer = document.querySelector('.three-scene-container');
    
        if (
          !popupContainer  &&
          sceneContainer &&
          !sceneContainer.contains(event.target)
        ) {
          handleClose();
        }
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, handleClose, index]);


  const renderInputBasedOnOption:any = () => {
    switch (selectedOption) {
      case 'text':
        return <div>
          <ThreeScene2 width={255} height={170} />
          </div>; 
      case 'image':
        return <div className="three-scene-container">Render your image content here</div>; 
      case 'video':
        return <div className='three-scene-container'>Render your video content here</div>; 
      default:
        return null;
    }
  };
  return (
    isOpen && (
      <div className="z-50 fixed w-[100%] flex items-center justify-center h-[100%] PopupBg inset-0">
        <div className="">
        <section className="bg-white popup w-[283px] h-[240px] border mx-5 rounded-[10px] z-50 boxShadow">
      <div>
        <div className="px-[11px] pt-[5px]">
          <div className="mx-auto border flex space-x-6 rounded-[8px] justify-center items-center bg-white boxShadow">
            <p
              className={`my-[8px] text-[12px] py-1 cursor-pointer rounded-[6px] px-3 ${
                selectedOption === 'text' ? 'bg-[#2B303A] text-white' : 'text-black'
              }`}
              onClick={() => handleOptionClick('text')}
            >
              3D
            </p>
            <p
              className={`my-[8px] text-[12px] cursor-pointer rounded-[6px] px-2 py-1 ${
                selectedOption === 'image' ? 'bg-[#2B303A] text-white' : 'text-black'
              }`}
              onClick={() => handleOptionClick('image')}
            >
              Video
            </p>
            <p
              className={`text-[12px] my-[8px] cursor-pointer rounded-[6px] px-2 py-1 ${
                selectedOption === 'video' ? 'bg-[#2B303A] text-white' : ''
              }`}
              onClick={() => handleOptionClick('video')}
            >
              Panorama
            </p>
          </div>
        </div>
        <div className="px-5 pt-[34px]">{renderInputBasedOnOption()}</div>
      </div>
    </section>
        </div>
      </div>
    )
  );
};




const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('My Creation');
  const [clickedPage, setClickedPage] = useState(1);
  const totalPages = 20;

  const handlePageChange = (page: any) => {
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

  const handleTabClick = (tab : any) => {
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

  const [isPopupOpen, setPopupOpen] = useState(Array(10).fill(false));
  const [selectedOption, setSelectedOption] = useState('text'); // Assuming you have this state
  // Add other necessary states and functions

  const handleViewClick = (index:any) => {
    const newPopupState = [...isPopupOpen];
    newPopupState[index] = true;
    setPopupOpen(newPopupState);
  };

  const handlePopupClose = (index:any) => {
    const newPopupState = [...isPopupOpen];
    newPopupState[index] = false;
    setPopupOpen(newPopupState);
  };


  return (
    <div className='max-container flexTwo padding-container3 gap-10 pt-10 pb-[33px] md:gap-10 lg:pt-10'>
      <div>
        <Options />
      </div>
      <div>
        <div className='flex mt-10 space-x-[11px] tabs'>
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
          <div className='grid grid-cols-5 gap-x-[25px] gap-y-[50px] mt-5'>
           {[...Array(10)].map((_, index) => (
        <div key={index} className="w-[180px] xxl:w-[198px] h-[280px] dropShadow rounded-[12px] bg-[#338CDD]">
          <div className='w-[180px] xxl:w-[198px] h-[240px] items-center flex-col justify-between rounded-[12px] bg-teal-400 flex'>
                 <div className="w-[180px] xxl:w-[198px] h-[200px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex ">
                   <div className='flex justify-between space-x-[140px] mt-2 '>
                     <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2 cursor-pointer' />
                     <div className="relative">
                       <Image src="/3Dots.svg" alt='dots' width={8} height={8} className='mb-2 mr-0 cursor-pointer z-20' />
                     </div>
                   </div>
                   <div className='mb-2'>
                  <RatingStars />
                </div>

                 </div>
                 <p className='font-semibold flex justify-center items-center mb-2 text-white'>Person Name</p>
               </div>
          <p
            className="font-semibold flex justify-center items-center cursor-pointer mt-2 text-white"
            onClick={() => handleViewClick(index)}
          >
            View
          </p>
          <PopupComponent
            index={index}
            isOpen={isPopupOpen[index]}
            handleClose={() => handlePopupClose(index)}
            handleOptionClick={(option:any) => {
              setSelectedOption(option);
            }}
            selectedOption={selectedOption}
            renderInputBasedOnOption={() => {
              return <div></div>;
            }}
          />
        </div>
      ))}
          
          
            

          
         
         
        </div>
        )}
        {activeTab === 'My Saved' && (
         <div className='grid grid-cols-5 gap-x-[25px] gap-y-[50px] mt-5'>
         {[...Array(10)].map((_, index) => (
      <div key={index} className="w-[180px] xxl:w-[198px] h-[280px] dropShadow rounded-[12px] bg-[#338CDD]">
        <div className='w-[180px] xxl:w-[198px] h-[240px] items-center flex-col justify-between rounded-[12px] bg-teal-400 flex'>
               <div className="w-[180px] xxl:w-[198px] h-[200px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex ">
                 <div className='flex justify-between space-x-[140px] mt-2 '>
                   <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2 cursor-pointer' />
                   <div className="relative">
                     <Image src="/3Dots.svg" alt='dots' width={8} height={8} className='mb-2 mr-0 cursor-pointer z-20' />
                   </div>
                 </div>
                 <div className='mb-2'>
                  <RatingStars />
                </div>

               </div>
               <p className='font-semibold flex justify-center items-center mb-2 text-white'>Person Name</p>
             </div>
        <p
          className="font-semibold flex justify-center items-center cursor-pointer mt-2 text-white"
          onClick={() => handleViewClick(index)}
        >
          View
        </p>
        <PopupComponent
          index={index}
          isOpen={isPopupOpen[index]}
          handleClose={() => handlePopupClose(index)}
          handleOptionClick={(option:any) => {
            setSelectedOption(option);
          }}
          selectedOption={selectedOption}
          renderInputBasedOnOption={() => {
            return <div></div>;
          }}
        />
      </div>
    ))}
        
        
          

        
       
       
      </div>
        )}
        {activeTab === 'Public' && (
        <div className='grid grid-cols-5 gap-x-[25px] gap-y-[50px] mt-5'>
        {[...Array(10)].map((_, index) => (
     <div key={index} className="w-[180px] xxl:w-[198px] h-[280px] dropShadow rounded-[12px] bg-[#338CDD]">
       <div className='w-[180px] xxl:w-[198px] h-[240px] items-center flex-col justify-between rounded-[12px] bg-teal-400 flex'>
              <div className="w-[180px] xxl:w-[198px] h-[200px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex ">
                <div className='flex justify-between space-x-[140px] mt-2 '>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2 cursor-pointer' />
                  <div className="relative">
                    <Image src="/3Dots.svg" alt='dots' width={8} height={8} className='mb-2 mr-0 cursor-pointer z-20' />
                  </div>
                </div>
                <div className='mb-2'>
                  <RatingStars />
                </div>

              </div>
              <p className='font-semibold flex justify-center items-center mb-2 text-white'>Person Name</p>
            </div>
       <p
         className="font-semibold flex justify-center items-center cursor-pointer mt-2 text-white"
         onClick={() => handleViewClick(index)}
       >
         View
       </p>
       <PopupComponent
         index={index}
         isOpen={isPopupOpen[index]}
         handleClose={() => handlePopupClose(index)}
         handleOptionClick={(option:any) => {
           setSelectedOption(option);
         }}
         selectedOption={selectedOption}
         renderInputBasedOnOption={() => {
           return <div>Hi there</div>;
         }}
       />
     </div>
   ))}
       
       
         

       
      
      
     </div>
        )}
        <div className='pagination flex justify-center space-x-[55px] mt-10'>
          <button className='pagination-button' onClick={handleLeftArrowClick}>
            <Image src="/leftArrow.svg" alt='left' width={12} height={20} />
          </button>
          {startPage > 1 && (
            <>
              <button
                className={`pagination-button ${
                  startPage === 1 ? 'active buttonBg text-white' : ''
                }`}
                onClick={() => handlePageChange(1)}
              >
                1
              </button>
              {startPage > 2 && (
                <span className="pagination-ellipsis my-auto">...</span>
              )}
            </>
          )}
          {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
            const page = startPage + index;
            return page > 0 && page <= totalPages ? (
              <button
                key={page}
                className={`pagination-button ${
                  page === clickedPage ? 'active text-white buttonBg' : ''
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ) : null;
          })}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <span className="pagination-ellipsis my-auto">...</span>
              )}
              <button
                className={`pagination-button ${
                  endPage === totalPages ? 'active text-white paginationBG' : ''
                }`}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}
          <button className='pagination-button' onClick={handleRightArrowClick}>
            <Image src="/rightSideArrow.svg" alt='right' width={12} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;







