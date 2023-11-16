"use client"

import Image from "next/image";
import AudioPopup from "./AudioPopup";
import { useState } from "react";

const NewAudio = ({ onVideoUpload, onImageUpload, onAudioUpload }: any) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showVideoUpload, setShowVideoUpload] = useState(true);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [showAudioPopup, setShowAudioPopup] = useState(false);


  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleVideoUpload = (event: any) => {
    const video = event.target.files[0];
    onVideoUpload(video);
  };

  const handleImageUpload = (event: any) => {
    const image = event.target.files[0];
    onImageUpload(image);
  };
  const handleAudUpload = () => {
    setShowAudioPopup(true);
  };

  // const handleAudioPopupClose = () => {
  //   setShowAudioPopup(false);
  // };

  // const handleAudioPopupSubmit = (audioSettings: any) => {
  //   onAudioUpload(audioSettings);
  //   setShowAudioPopup(false);
  // };

  return (
    <section className="bg-white w-[290px] h-[790px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col lg:mt-0 lg:mb-[15px]">
      <form>
        <div className="px-5">
          <h4 className="py-5 font-semibold">Upload your Photo</h4>
        </div>
          <div className="px-5">
            <div className="mx-auto border flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px] boxBg boxShadow">
              <input type="file" accept="image/*" id="file-input2" onChange={handleImageUpload} />
              <label htmlFor="file-input2" className="cursor-pointer">
                <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
                <p className="text-[#737477] text-[14px] pt-[5px]">Upload Photo</p>
              </label>
            </div>
          </div>

        <div className="px-5 pt-[45px]">
            <h2 className="py-5 font-semibold">Upload your Audio</h2>
          <div className="mx-auto border flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px] boxBg boxShadow">
            
            <div  className="cursor-pointer"  onClick={handleAudUpload}>
              <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
              <p className="text-[#737477] text-[14px] pt-[5px]">Upload Audio</p>
            </div>
            
          </div>
        </div>

        <div className="px-5 pt-[45px]">
          <button type="button" className="buttonBg w-full py-5 rounded-[8px] text-[14px] text-white font-bold">
            Generate
          </button>
        </div>
        <div className="px-5 pt-[45px]">
          <button type="button" className="buttonBg  w-[250px]  py-5 rounded-[8px] text-[12px] text-white font-bold">
          Select a Reader from Marketplace
          </button>
        </div>
      </form>
      {showAudioPopup && (
        <div className="overlay">
          <AudioPopup  />
        </div>
      )}
      <style jsx>{`
        .active {
          color: white;
          font-weight: bold;
          font-size: 12px;
          padding: 5px 10px;
          border-radius: 4px;
          background-color: rgba(30, 30, 30, 1);
        }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
      `}</style>
    </section>
  );
};

export default NewAudio;
