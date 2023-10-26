import React from 'react'
import Timeline from './Timeline'
import Image from 'next/image'

interface videoProps {
  selectedVideo: File | null
}


const Guide = ({selectedVideo}: videoProps) => {
  return (
   <div className=''>
     
     <div className='w-[530px] xxl:w-[630px] 2xl:w-[700px] dropShadow rounded-[8px] h-[591px] flex flex-col items-center justify-center text-center font-bold text-[43px]'>
      <h1>Output</h1> 
      <div id='image-container'>
      <Image src="/img-1.png" alt='person1' width={300} height={300} id='imageID'/> 
      </div>
      </div>
      <div className='pt-[22px]'>
        <h2 className='font-[500] text-[12px] pb-2'>Video</h2>
      <Timeline uploadedVideo={selectedVideo} />
      <h2 className='pt-7 font-[500] text-[12px] pb-2'>Audio</h2>
      <Timeline uploadedVideo={selectedVideo} />
      </div>
     </div>
  )
}

export default Guide