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
    <div className='max-container flexCenter padding-container space-x-5 gap-10 pt-10 pb-[33px] md:gap-5 lg:pt-10'>
      <NewAudio onImageUpload={handleImageUpload}/>
      <div className='w-[570px] xxl:w-[660px] 2xl:w-[820px] dropShadow rounded-[8px] h-[790px]   '>
      <OutputAI image={imageData}/>
        </div>
     
      <AiNewsReader />
    </div>
  )
}

export default page