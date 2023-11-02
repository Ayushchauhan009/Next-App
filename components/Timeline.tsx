"use client"



import Image from 'next/image'

import React, { useState} from 'react'
import TimelineBar from './TimelineBar'


const Timeline = ({videoDuration} : any) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);

  const handleMouseDown = (e : any) => {
    if (isDoubleClicked && e.button === 0) {
      setIsDragging(true);
      setOffset({
        x: e.clientX - e.target.getBoundingClientRect().left,
        y: e.clientY,
      });
      e.target.style.cursor = 'grabbing';
    }
  };

  const handleMouseUp = (e : any) => {
    if (isDragging) {
      setIsDragging(false);
      e.target.style.cursor = 'grab';
    }
  };

  const handleMouseDoubleClick = () => {
    setIsDoubleClicked(true);
  };

  const handleMouseClick = () => {
    if (!isDragging && isDoubleClicked) {
      setIsDoubleClicked(false);
    }
  };

  const handleMouseMove = (e : any) => {
    if (isDragging) {
      const parentRect = e.target.parentElement.getBoundingClientRect();
      const timelineRect = e.target.getBoundingClientRect();
  
      const parentWidth = parentRect.width;
      const timelineWidth = timelineRect.width;
  
      // Calculate the new x position within the parent's bounds
      let x = e.clientX - parentRect.left - offset.x;
  
      // Ensure x stays within the parent's bounds
      x = Math.min(Math.max(x, 0), parentWidth - timelineWidth);
  
      const percentage = (x / (parentWidth - timelineWidth)) * 100;
      const timePosition = (percentage / 100) * videoDuration;
  
      e.target.style.left = `${x}px`;
  
      // timePosition to update the video playback, if needed.
    }
  };
  

  const generateTimeIntervals = (duration : any) => {
    const intervalInSeconds = 20;
    const intervals = [];
    for (let i = 0; i <= duration; i += intervalInSeconds) {
      const hours = Math.floor(i / 3600);
      const minutes = Math.floor((i % 3600) / 60);
      const seconds = i % 60;
      intervals.push(
        `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
      );
    }
    return intervals;
  };

  const staticTimeIntervals = [
    '00:00:00:00',
    '00:00:20:00',
    '00:00:40:00',
    '00:01:00:00',
    '00:01:20:00',
    '00:01:40:00',
  ];

  const dynamicTimeIntervals = generateTimeIntervals(videoDuration);
  const timeIntervals = staticTimeIntervals.concat(dynamicTimeIntervals);




  return (
    <div className='bg-white max-container w-full h-[263px]  rounded-[10px] dropShadow mb-[33px]'>
      <div className='h-[65px] flex'>
          <div className='flex padding-container3 items-start py-5 space-x-[27.5px]'>
          <div>
            <Image src="/undo.svg" alt='undo' width={18} height={18}/>
          </div>
          <div>
            <Image src="/redo.svg" alt='undo' width={18} height={18}/>
          </div>
          <div className='flex flex-col items-center'>
            <Image src="/split.svg" alt='undo' width={26} height={18}/>
            <p className=' text-[12px] mt-2'>Split</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image src="/trim.svg" alt='undo' width={26} height={18}/>
            <p className=' text-[12px] mt-2'>Trim</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image src="/Speed.svg" alt='undo' width={23} height={18}/>
            <p className=' text-[12px] mt-1'>Speed</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image src="/effects.svg" alt='undo' width={21} height={18}/>
            <p className=' text-[12px] mt-1'>Effect</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image src="/crop.svg" alt='undo' width={19} height={18}/>
            <p className=' text-[12px] mt-2'>Crop</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image src="/transform.svg" alt='undo' width={18} height={18}/>
            <p className=' text-[12px] mt-2'>Transform</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image src="/rotate.svg" alt='undo' width={20} height={18}/>
            <p className=' text-[12px] mt-2'>Rotate</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image src="/flip.svg" alt='undo' width={28} height={28}/>
            <p className=' text-[12px] mt-2'>Flip</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image src="/Duplicate.svg" alt='undo' width={19} height={18}/>
            <p className=' text-[12px] mt-2'>Duplicate</p>
          </div>
          
          </div>
          <div className='flex py-5 space-x-10 items-center'>
        <div className='flex  space-x-4'>
        <Image src="/previous.svg" alt='undo' width={20} height={18}/>
        <Image src="/playButton.svg" alt='undo' width={20} height={18}/>
        <Image src="/next.svg" alt='undo' width={20} height={18}/>
        </div>
        <div className='mt-3'>
        <Image src="/line.svg" alt='undo' width={141} height={10}/>
        <div className='flex justify-between'>
          <p className='text-[10px]'>00:30</p>
          <p className='text-[10px]'>02:00</p>
          
        </div>
        </div>
      </div>
      </div>
      <hr />
      <div className='h-[44px] flex items-end'>
        <div className='flex space-x-3 padding-container3 h-full pb-2 items-end'>
        <Image src="/addNew.svg" alt='undo' width={20} height={10}/>
        <Image src="/delete.svg" alt='undo' width={20} height={10}/>
        <Image src="/volume.svg" alt='undo' width={20} height={10}/>
        </div>
        <div className={`relative ${isDoubleClicked ? 'draggable-active' : ''}`}
        onDoubleClick={handleMouseDoubleClick}
        onClick={handleMouseClick}>
        <Image src="/timeLine.svg" alt='undo' width={13} height={1} 
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        
        className={`absolute top-[-15px] left-[-10px] draggable ${isDoubleClicked ? 'draggable' : ''}`}
         
        />
          <div className='flex text-[11px] pr-2 space-x-32'>
          {timeIntervals.map((interval, index) => (
            <p key={index}>{interval}</p>
          ))}
        </div>
        <TimelineBar numberOfLines={98}/>
        </div>
      </div>
      <hr />
      <div className='h-[75px] flex space-x-3 padding-container3  pb-2 my-auto'>
      <Image src="/music.svg" alt='undo' width={25} height={10}/>
        <Image src="/lock.svg" alt='undo' width={12} height={10}/>
        <Image src="/eye.svg" alt='undo' width={20} height={10}/>
      </div>
      <hr />
      <div className='flex space-x-3 padding-container3  pb-2 my-auto h-[80px]'>
      <Image src="/audio.svg" alt='undo' width={20} height={10}/>
        <Image src="/lock.svg" alt='undo' width={12} height={10}/>
        <Image src="/eye.svg" alt='undo' width={20} height={10}/>
      </div>
    </div>
  )
}

export default Timeline