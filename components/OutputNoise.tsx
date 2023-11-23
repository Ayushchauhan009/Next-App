"use client"


import React, {useState} from 'react';
import Image from 'next/image';
import CustomAudio from './CustomAudio';

const OutputNoise = ({ audio = null }: any) => {
   
  
  return (
    <div className='w-[530px] xxl:w-[630px]  dropShadow rounded-[8px] h-[735px]  text-center font-bold text-[43px]'>
        {/* <div className='flex space-x-5 border rounded-[8px] items-center justify-center bg-white py-2 -mt-3 mb-3 w-48 '>
        <button
        className={`p-2 rounded-[6px] min-w-[71px] ${activeButton === 'before' ? 'active volButton text-white' : ''}`}
        onClick={() => handleButtonClick('before')}
      >
        Before
      </button>
      <button
        className={`p-2 rounded-[6px] min-w-[71px] ${activeButton === 'after' ? 'volButton   active text-white' : ''}`}
        onClick={() => handleButtonClick('after')}
      >
        After
      </button>
        </div> */}
      <div>
        {audio ? (
          <div className="flex items-center justify-center">
            
            <img src="Audiowave.svg" alt="AudioWave" className='w-[1000px] h-full mt-[80px] xxl:mt-[40px]' />
          </div>
        ) :  (
          <div className='w-[530px] xxl:w-[630px]  dropShadow rounded-[8px] h-[571px] pt-32 flex items-center justify-center text-center font-bold text-[43px]'>
            <h1>Output</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputNoise;
