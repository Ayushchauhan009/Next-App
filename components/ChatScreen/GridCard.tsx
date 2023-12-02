"use client"
import React from 'react';
import Image from 'next/image';
import RatingStars from '../RatingStars';
import RatingStars2 from '../RatingStars2';

const GridCard = ({card}:any) => (
  <div className={`w-[118px] h-[156.01px] bg-blue-400 rounded-[10px]  flex-col justify-center items-end`}>
    <div className={`w-[118px] h-[156.01px] bg-blue-400 rounded-[10px]  flex-col justify-center items-end`}>
      <div className="w-[118px] h-[129px] bg-[#f0f0f0] rounded-[10px] flex-col py-1 justify-between  relative">
        <div className="flex justify-between px-1">
          <Image src="/more.svg" alt="Image" width={10} height={10} className="cursor-pointer" />
          <Image src="/3Dots.svg" alt="Three Dots" width={6} height={6} className="cursor-pointer" />
        </div>
        <div className='flex h-[80%] items-end px-4 justify-center'>
        <RatingStars2 />
        </div>
      </div>
      <p className="text-white text-center mt-1 text-[10px] font-semibold font-['Inter']">Person Name</p>
    </div>
    
  </div>
);

export default GridCard;