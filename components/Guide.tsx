import React from 'react';
import CustomAudio from './CustomAudio';

interface GuideProps {
  video?: File | undefined;
  image?: File | undefined;
  audio?: File | undefined;
}

const Guide: React.FC<GuideProps> = ({ video, image, audio }) => {
  return (
    <div>
      <div>
        {video && (
          <div className='pt-20'>
            <video controls width="1000" height="" id='videoID' className='aspect-video  oveflow-hidden mb-3 object-contain'>
              <source src={URL.createObjectURL(video)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {audio && <CustomAudio src={URL.createObjectURL(audio)} style={{ width: '200%', display:"flex" }} />}
          </div>
        )}

        {!video && image && (
          <div className='relative'>
            <img src={URL.createObjectURL(image)} id='imageID' alt="Uploaded Image" width={800} height="" className="overflow-hidden mb-3 object-contain" />
            {audio && <CustomAudio src={URL.createObjectURL(audio)} style={{ width: '200%', display: "flex" }} />}
          </div>
        )}

        {!video && !image && audio && (
          <CustomAudio src={URL.createObjectURL(audio)} style={{ width: '100%', paddingTop: "300px"}} />
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
