"use client"

import Image from "next/image";
import { useState } from "react";

const Camp = ({ onVideoUpload, onImageUpload, onAudioUpload }: any) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showVideoUpload, setShowVideoUpload] = useState(true);
  const [showImageUpload, setShowImageUpload] = useState(false);

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
  const handleAudUpload = (event: any) => {
    const audio = event.target.files[0];
    onAudioUpload(audio);
  };

  return (
    <section className="bg-white w-[290px] h-[669px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col lg:mt-0 lg:mb-[15px]">
      <form>
        <div className="px-5 pt-[15px]">
          <div className="flex font-semibold pb-[10px] text-[#15181C] items-center space-x-4">
          Generate a video from Text
          </div>
          <div className="">
          <div className="mx-auto border  rounded-[8px] px-5 py-5 h-[149px] w-[250px] boxBg boxShadow">
            <input type="text" placeholder="Type your text..." className="outline-none boxBg"/>
            
          </div>
          <div>
            <p className="text-center w-full mt-[18px] mb-[8px] font-semibold"> Or</p>
          </div>
        </div>
          <p className=" font-semibold mb-[10px]">Upload a Video</p>
            <div className="mx-auto border flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px] boxBg boxShadow">
              <input type="file" accept="video/*" id="file-input" onChange={handleVideoUpload} />
              <label htmlFor="file-input" className="cursor-pointer">
                <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
                <p className="text-[#737477] text-[14px] pt-[5px]">Upload Video</p>
              </label>
            </div>
          
        </div>

        

        

        <div className="px-5 pt-[45px]">
          <button type="button" className="buttonBg w-full py-5 rounded-[8px] text-[14px] text-white font-bold">
            Generate
          </button>
        </div>
      </form>

      <style jsx>{`
        .active {
          color: white;
          font-weight: bold;
          font-size: 12px;
          padding: 5px 10px;
          border-radius: 4px;
          background-color: rgba(30, 30, 30, 1);
        }
      `}</style>
    </section>
  );
};

export default Camp;
