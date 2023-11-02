"use client"

import Image from 'next/image'
import React, {useState} from 'react'
import Button from './Button'
import Guide from './Guide';
import Camp from './Camp';
import Features from './Features';
import Timeline from './Timeline';




const Hero = () => {
  const [imageData, setImageData] = useState(null);
  const [videoData, setVideoData] = useState(null);


  const handleImageUpload = (image : any) => {
    setImageData(image);
  }
  const handleVideoUpload = (video : any) => {
    setVideoData(video);
  };
  return (
    <div className='padding-container2'>
      <section className='max-container flexOne gap-x-10 pt-10  md:gap-x-10 lg:pt-10  '>
      <Camp  onVideoUpload={handleVideoUpload} onImageUpload={handleImageUpload} />
      <div className='w-[530px] xxl:w-[630px] 2xl:w-[700px] dropShadow rounded-[8px] h-[571px] flex flex-col items-center justify-center '>
      {videoData ? (<Guide video={videoData} image={imageData}/>) : ( 
        <div className='w-[530px] xxl:w-[630px] 2xl:w-[700px] font-bold text-[43px] dropShadow rounded-[8px] h-[571px] flex flex-col items-center justify-center '>Output</div>
      )}
      </div>
      <Features />
    </section>
    <Timeline />
    </div>
  )
}

export default Hero