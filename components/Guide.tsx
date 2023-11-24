import React from 'react';
import CustomAudio from './CustomAudio';

interface GuideProps {
  video?: File | undefined;
  image?: File | undefined;
  audio?: File | undefined;
}

const Guide: React.FC<GuideProps> = ({ video, image, audio }) => {
  const audioSrc = '/Audio.mp4';
  return (
    <div className='bg-white'>
      <div className='bg-white  h-full'>
        {video && (
          <div className='pt-10 h-[571px] rounded-[8px] bg-white'>
            <video controls width="1000" height="" id='videoID' className='aspect-video   oveflow-hidden object-contain'>
              <source src={URL.createObjectURL(video)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {audio && ( 
              <div className='bg-white'>
                <audio controls hidden>
                <source src={URL.createObjectURL(audio)} type="audio/mp3" />
                Your browser does not support the audio tag.
                </audio>
                <img src="Audiowave.png" alt="AudioWave" className='mt-4 w-full h-[100px]' />
              </div>
            )}
          </div>
        )}

        {!video && image && (
          <div className='relative pt-0 h-[571px] rounded-[8px] bg-white lg:pt-5'>
            <img src={URL.createObjectURL(image)} id='imageID' alt="Uploaded Image" width={700} height="" className="overflow-hidden aspect-video mb-3 object-contain" />
            {audio && ( 
              <div>
                <audio controls hidden>
          <source src={URL.createObjectURL(audio)} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
        <img src="Audiowave.png" alt="AudioWave" className='mt-4 w-full h-[100px]' />
              </div>
            )}
          </div>
        )}

        {!video && !image && audio && (
          // <CustomAudio src={URL.createObjectURL(audio)} style={{ width: '100%', paddingTop: "300px"}} />
         <div className='flex items-center h-[571px] rounded-[8px] bg-white justify-center '>
           <audio controls hidden>
          <source src={URL.createObjectURL(audio)} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
        <img src="Audiowave.svg" alt="AudioWave" className='w-[1000px] h-full mt-[80px] xxl:mt-[40px]' />
         </div>
        )}

        {!video && !image && !audio && (
          <div className='w-[530px] xxl:w-[630px] 2xl:w-[700px] dropShadow rounded-[8px] boxBg h-[571px] text-center flex items-center justify-center font-bold text-[43px]'>
            <h1>Output</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guide;
