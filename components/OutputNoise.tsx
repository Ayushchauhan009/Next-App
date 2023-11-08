"use client"


import React, {useState} from 'react';
import Image from 'next/image';

const OutputNoise = ({ audio = null }: any) => {
   
  
  return (
    <div className='w-[530px] xxl:w-[630px] 2xl:w-[790px] dropShadow rounded-[8px] h-[735px] flex justify-center items-center text-center font-bold text-[43px]'>
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
          <div>
            
              <audio controls id='audioInput'>
                <source src={URL.createObjectURL(audio)} type="audio/mp3" />
              </audio>
            
          </div>
        ) :  (
          <div className='w-[530px] xxl:w-[630px] 2xl:w-[790px] dropShadow rounded-[8px] h-[571px] text-center font-bold text-[43px]'>
            <h1>Output</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputNoise;
