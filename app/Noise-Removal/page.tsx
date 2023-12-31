"use client"

import NoiseAudio from '@/components/NoiseAudio'
import React, { useState } from 'react'
import VolEffects from '@/components/VolEffects'
import OutputNoise from '@/components/OutputNoise'

const page = () => {
  const [audioData, setAudioData] = useState(null);
  const [activeButton, setActiveButton] = useState('before');

  const handleButtonClick = (button : any) => {
    setActiveButton(button);

  
  }
  const handleAudioUpload = (audio : any) => {
    setAudioData(audio);
    
  }
  return (
    <div className='max-container flexOne padding-container2 gap-10 pt-10 pb-[33px] md:gap-4 lg:pt-10'>
        <NoiseAudio  onAudioUpload={handleAudioUpload}/>
        <div className='w-[530px] xxl:w-[630px] rounded-[8px]]'>
        <div className='flex space-x-5 border rounded-[8px] items-center justify-center bg-white py-2 -mt-3 mb-3 w-48 '>
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
        </div>
      <div className='bg-white'>
      {audioData ? (<OutputNoise audio={audioData}/>) : ( 
        <div className='w-[530px] xxl:w-[630px] font-bold text-[43px] text-center pt-[300px] boxBg dropShadow rounded-[8px] h-[735px]'>Output</div>
      )} 
      </div>
      </div>
        <VolEffects />
    </div>
  )
}

export default page;