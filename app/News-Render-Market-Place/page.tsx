"use client"

import AddNew from '@/components/voice/AddNew';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

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

  // Calculate the range of visible pages
  const maxVisiblePages = 4;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  if (endPage === totalPages) {
    startPage = Math.max(1, totalPages - maxVisiblePages + 1);
  }

  return (
    <div className='max-container  padding-container2 gap-10 pt-10 pb-[33px] md:gap-10 lg:pt-10'>
      
      <div>
        <div className='flex  space-x-[11px] tabs'>
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
          <div className='grid grid-cols-6 gap-x-[17px] gap-y-[50px] mt-5'>
            <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                    <div className='flex justify-between space-x-40 mt-2'>
                    <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                    <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                    </div>
                    <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
                </div>
                <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
            </div>
            <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                    <div className='flex justify-between space-x-40 mt-2'>
                    <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                    <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                    </div>
                    <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
                </div>
                <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
            </div>
            <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                    <div className='flex justify-between space-x-40 mt-2'>
                    <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                    <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                    </div>
                    <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
                </div>
                <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
            </div>
            <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                    <div className='flex justify-between space-x-40 mt-2'>
                    <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                    <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                    </div>
                    <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
                </div>
                <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
            </div>
            <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                    <div className='flex justify-between space-x-40 mt-2'>
                    <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                    <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                    </div>
                    <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
                </div>
                <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
            </div>
            <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                    <div className='flex justify-between space-x-40 mt-2'>
                    <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                    <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                    </div>
                    <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
                </div>
                <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
            </div>
            <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                    <div className='flex justify-between space-x-40 mt-2'>
                    <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                    <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                    </div>
                    <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
                </div>
                <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
            </div>
            <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                    <div className='flex justify-between space-x-40 mt-2'>
                    <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                    <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                    </div>
                    <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
                </div>
                <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
            </div>
            <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                    <div className='flex justify-between space-x-40 mt-2'>
                    <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                    <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                    </div>
                    <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
                </div>
                <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
            </div>
            <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                    <div className='flex justify-between space-x-40 mt-2'>
                    <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                    <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                    </div>
                    <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
                </div>
                <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
            </div>
            <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                    <div className='flex justify-between space-x-40 mt-2'>
                    <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                    <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                    </div>
                    <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
                </div>
                <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
            </div>
            <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                    <div className='flex justify-between space-x-40 mt-2'>
                    <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                    <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                    </div>
                    <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
                </div>
                <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
            </div>
          
          </div>
        )}
        {activeTab === 'My Saved' && (
          <div className='grid grid-cols-6 gap-x-[17px] gap-y-[50px] mt-5'>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
        
        </div>
        )}
        {activeTab === 'Public' && (
          <div className='grid grid-cols-6 gap-x-[17px] gap-y-[50px] mt-5'>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
          <div className='w-[180px] xxl:w-[198px] h-[272px] dropShadow rounded-[12px] bg-[#338CDD]'>
              <div className='w-[180px] xxl:w-[198px] h-[224px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex'>
                  <div className='flex justify-between space-x-40 mt-2'>
                  <Image src="/more.svg" alt='more' width={14} height={20} className='mb-2'/>
                  <Image src="/3Dots.svg" alt='dots' width={10} height={14} className='mb-2'/>
                  </div>
                  <Image src="/stars.svg" alt='stars' width={100} height={20} className='mb-2'/>
              </div>
              <p className='font-semibold flex justify-center items-center mt-3 text-white'>Person Name</p>
          </div>
        
        </div>
        )}
        <div className='pagination flex justify-evenly px-20 mt-10'>
          <button className='pagination-button' onClick={handleLeftArrowClick}>
            <Image src="/leftArrow.svg" alt='left' width={12} height={20} />
          </button>
          {startPage > 1 && (
            <>
              <button
                className={`pagination-button ${
                  startPage === 1 ? 'active buttonBg' : ''
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
                  page === clickedPage ? 'active buttonBg' : ''
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
                  endPage === totalPages ? 'active paginationBG' : ''
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







