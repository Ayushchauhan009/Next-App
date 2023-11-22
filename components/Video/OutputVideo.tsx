import React from 'react';
import CustomAudio from '../CustomAudio';
// import CustomAudio from './CustomAudio';

interface GuideProps {
  video?: File | undefined;
  image?: File | undefined;
  audio?: File | undefined;
}

const OutputVideo: React.FC<GuideProps> = ({ video, image, audio }) => {
  return (
    <div>
      <div>
        {video && !image && (
          <div>
            <video controls width="1000" height="" id='videoID' className='aspect-video oveflow-hidden object-contain'>
              <source src={URL.createObjectURL(video)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {audio && <CustomAudio src={URL.createObjectURL(audio)} style={{ width: '100%' }} />}
          </div>
        )}

        {image && !video && (
          <div className='relative'>
            <img src={URL.createObjectURL(image)} id='imageID' alt="Uploaded Image" width={800} height={200} className="overflow-hidden aspect-square object-contain" />
            {audio && <CustomAudio src={URL.createObjectURL(audio)} style={{ width: '100%' }} />}
          </div>
        )}

        {/* {video && image && (
          <div>
             Decide how you want to handle the case when both video and image are present 
            <p>Both video and image are present. Choose one to display.</p>
          </div>
        )} */}

        {!video && !image && audio && (
         
         <img src="waveAudio.png" alt="AudioWave" className='w-[300px] h-[60px] mt-2' />
         
        )}

        {!video && !image && !audio && (
          <div className=''>
            <h1>Output</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputVideo;
