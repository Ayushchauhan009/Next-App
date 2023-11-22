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
    <div>
      <div>
        {video && (
          <div className='pt-20'>
            <video controls width="1000" height="" id='videoID' className='aspect-video  oveflow-hidden mb-3 object-contain'>
              <source src={URL.createObjectURL(video)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {audio && ( 
              <div>
                <audio controls hidden>
                <source src={URL.createObjectURL(audio)} type="audio/mp3" />
                Your browser does not support the audio tag.
                </audio>
                <img src="waveAudio.png" alt="AudioWave" className='w-[300px] h-[60px] mt-2' />
              </div>
            )}
          </div>
        )}

        {!video && image && (
          <div className='relative pt-0 lg:pt-5'>
            <img src={URL.createObjectURL(image)} id='imageID' alt="Uploaded Image" width={700} height="" className="overflow-hidden aspect-video mb-3 object-contain" />
            {audio && ( 
              <div>
                <audio controls hidden>
          <source src={URL.createObjectURL(audio)} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
        <img src="waveAudio.png" alt="AudioWave" className='w-[300px] h-[60px] mt-2' />
              </div>
            )}
          </div>
        )}

        {!video && !image && audio && (
          // <CustomAudio src={URL.createObjectURL(audio)} style={{ width: '100%', paddingTop: "300px"}} />
         <div className='flex items-center justify-center '>
           <audio controls hidden>
          <source src={URL.createObjectURL(audio)} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
        <img src="waveAudio.png" alt="AudioWave" className='w-[300px] h-[60px] mt-[250px]' />
         </div>
        )}

        {!video && !image && !audio && (
          <div className='w-[530px] xxl:w-[630px] 2xl:w-[700px] dropShadow rounded-[8px] h-[571px] text-center flex items-center justify-center font-bold text-[43px]'>
            <h1>Output</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guide;
