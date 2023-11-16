"use client"

import Timeline from '@/components/Timeline'
import Filters from '@/components/Video/Filters'
import GenerateAud from '@/components/Video/GenerateAud'
import OutputVideo from '@/components/Video/OutputVideo'
import React, {useState} from 'react'

const page = () => {
  const [videoData, setVideoData] = useState<File | undefined>(undefined);
  const handleVideoUpload = (video: File) => {
    setVideoData(video);
  };
  return (
    <div className='max-container flexOne flex-col padding-container2 gap-x-10 pt-10 pb-[10px] md:gap-x-10 lg:pt-10'>
      <div className='flex space-x-5'>
      <GenerateAud onVideoUpload={handleVideoUpload}/>
      <div className='w-[445px] lg:w-[570px] xxl:w-[660px] -mt-0 2xl:w-[820px] flex justify-center items-center dropShadow rounded-[8px] h-[669px] my-auto  text-center font-bold text-[43px]'>
      <OutputVideo video={videoData}/>
      </div>
      <Filters />
      </div>
      <Timeline />
    </div>
  )
}

export default page