// Hero.tsx
"use client"

import React, { useState } from 'react';
import Camp from './Camp';
import Guide from './Guide';
import Features from './Features';
import Timeline from './Timeline';

const Hero = () => {
  const [imageData, setImageData] = useState<File | undefined>(undefined);
  const [videoData, setVideoData] = useState<File | undefined>(undefined);
  const [audioData, setAudioData] = useState<File | undefined>(undefined);
  

  const handleImageUpload = (image: File) => {
    setImageData(image);
    setVideoData(undefined);
    setAudioData(undefined);
  };

  const handleVideoUpload = (video: File) => {
    setVideoData(video);
    setAudioData(undefined);
  };

  const handleAudioUpload = (audio: File) => {
    setAudioData(audio);
  };

  return (
    <div className='padding-container2'>
      <section className='max-container flexOne gap-x-10 pt-10 md:gap-x-10 lg:pt-10'>
        <Camp
          onVideoUpload={handleVideoUpload}
          onImageUpload={handleImageUpload}
          onAudioUpload={handleAudioUpload}
        />
        <div className='w-[530px] xxl:w-[630px] 2xl:w-[700px] dropShadow rounded-[8px] h-[571px] flex flex-col items-center justify-center '>
          <Guide video={videoData} image={imageData} audio={audioData} />
        </div>
        <Features />
      </section>
      <Timeline audio={audioData}/>
    </div>
  );
};

export default Hero;
