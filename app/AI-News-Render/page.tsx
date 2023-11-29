"use client"

import AiNewsReader from '@/components/AINews/AiNewsReader'

import NewAudio from '@/components/AINews/NewAudio'
import OutputAI from '@/components/AINews/OutputAI'
import React, {useState} from 'react'

const page = () => {

  const [imageData, setImageData] = useState<File | undefined>(undefined);

  const handleImageUpload = (image: File) => {
    setImageData(image);
    
  };
  return (
    <div className='max-container flexCenter padding-container3 space-x-5 pt-5 gap-x-10  pb-[33px] md:gap-x-5 '>
      <NewAudio onImageUpload={handleImageUpload}/>
      <div className='w-[570px] xxl:w-[660px] 2xl:w-[820px] -mt-3 dropShadow rounded-[8px] h-[790px]   '>
        <OutputAI image={imageData}/>
        </div>
     
      <div className='mt-5'>
      <AiNewsReader />
      </div>
    </div>
  )
}

export default page