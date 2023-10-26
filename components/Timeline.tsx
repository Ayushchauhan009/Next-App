"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';


// interface uploadedProps {
//     uploadedVideo: File | null
// }

const Timeline = () => {
    const [videoDuration, setVideoDuration] = useState(0);
  
    // useEffect(() => {
    //   if (uploadedVideo) {
    //   //   const videoElement = document.createElement('video');
    //   //   // Ensure the argument passed to createObjectURL is a Blob or File
    //   //   const videoBlob = new Blob([uploadedVideo]);
    //   //   videoElement.src = URL.createObjectURL(videoBlob);
    //   //   videoElement.addEventListener('loadedmetadata', () => {
    //   //     setVideoDuration(videoElement.duration);
    //   //   });
    //   }//
    // }, [uploadedVideo]);

  return (
    <div className=' relative'>
      
      <div className="flex timelineShadow justify-between rounded-[8px] border border-black">
        <button className="bg-black w-[60px] rounded-[5px]  flex items-center justify-center"><Image src="/play2.svg" alt='playButton' width={30} height={30}  className='p-[5px]'/></button>
        <div className="timeline-bar">
          {/* Display your timeline here */}
        </div>
        <button className="bg-black rounded-[5px]"><Image src="/rightArrow.svg" alt='playButton' width={30} height={30}  className='p-[6px]'/>
        <span></span></button>
       

      </div>
      <p className='absolute left-14 mt-1 font-[500] text-[12px]'>{formatTime(videoDuration)}</p>
        <p className='absolute right-8 mt-1 font-[500] text-[12px]'>{formatTime(videoDuration)}</p>
    </div>
  );
};



// Helper function to format time in HH:MM:SS format
const formatTime = (seconds : number) => {
  const minutes = Math.floor(seconds  / 60);
  const remainingSeconds = Math.floor(seconds % 60);
//   const hours = Math.floor(minutes / 60);
  const remainingMinutes = Math.floor(minutes % 60);

//   const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(remainingMinutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
};

export default Timeline;
