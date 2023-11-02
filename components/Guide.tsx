"use client"

import React from 'react';
import Timeline from './Timeline';
import Image from 'next/image';

const Guide = ({ video = null}: any) => {
  return (
    <div>
      <div>
        {video ? (
          <div>
            {video.type.startsWith('image/') ? (
              <Image id='imageID' src={URL.createObjectURL(video)} alt="Uploaded Image" width={1000} height={200} />
            ) : (
              <video controls id='videoID' width="1000" height="1000">
                <source  src={URL.createObjectURL(video)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ) : (
          <div className='w-[530px] xxl:w-[630px] 2xl:w-[700px] dropShadow rounded-[8px] h-[571px] text-center font-bold text-[43px]'>
            <h1>Output</h1>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Guide;
