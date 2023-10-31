"use client"



import Image from 'next/image'
// import React, { useState } from 'react';
// import ReactPlayer from 'react-player';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';
// import 'videojs-record/dist/css/videojs.record.css';

// const VideoTimeline = () => {
//   const [player, setPlayer] = useState<ReactPlayer | null>(null);

//   const handlePlay = () => {
//     if (player) {
//       player.getInternalPlayer().play();
//     }
//   };

//   const handleStop = () => {
//     if (player) {
//       player.getInternalPlayer().pause();
//     }
//   };

//   // Implement more advanced functionality like Split, Trim, etc. using the libraries

//   return (
//     <div className="timeline-container">
//       <div className="timeline-bar">
//         {/* Video player */}
//         <div className="timeline-part">
//           <ReactPlayer
//             ref={(player) => setPlayer(player)}
//             url="your-video-url.mp4"
//             playing={false}
//           />
//         </div>

//         {/* Previous, Play, Next buttons */}
//         <div className="timeline-part">
//           <div className="timeline-buttons">
//             <button onClick={handlePlay}>Play</button>
//             <button onClick={handleStop}>Stop</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoTimeline;






import React from 'react'
import TimelineBar from './TimelineBar'


const Timeline = () => {
  return (
    <div className='bg-white max-container w-full h-[263px]  rounded-[10px] dropShadow mb-[33px]'>
      <div className='h-[65px] flex'>
          <div className='flex padding-container3 items-start py-5 space-x-[17.5px]'>
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
        <div className='relative'>
          <div className='flex text-[11px] pr-2 space-x-32'>
            <p>00:00:00:00</p>
            <p>00:00:20:00</p>
            <p>00:00:40:00</p>
            <p>00:01:00:00</p>
            <p>00:01:20:00</p>
            <p>00:01:40:00</p>
            
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