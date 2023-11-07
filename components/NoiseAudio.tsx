"use client"

import Image from "next/image";
import { useState } from "react";

const NoiseAudio = ({ onVideoUpload, onImageUpload }: any) => {
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

  return (
    <section className="bg-white w-[290px] h-[790px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col lg:mt-0 lg:mb-[15px]">
      <form>
        

        <div className="px-5 ">
            <h2 className="font-semibold pt-[10px] pb-[12px]">Audio</h2>
          <div className="mx-auto border flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px] boxBg boxShadow">
            <input type="file" accept="audio/*" id="file-input" onChange={handleFileChange} />
            <label htmlFor="file-input3" className="cursor-pointer">
              <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
              <p className="text-[#737477] text-[14px] pt-[5px]">Upload Audio</p>
            </label>
          </div>
        </div>

        <div className="px-5 pt-[45px]">
            <div className="font-semibold pt-[10px] pb-[12px] flex justify-between"><h2 className="">Options</h2>
            <p className="cursor-pointer">(?)</p></div>
        
        <div className="mx-auto border flex space-y-3 flex-col rounded-[8px] px-3 justify-center items-center h-[259px] w-[250px] boxBg boxShadow">
          <button type="button" className="bg-[#2B303A] w-full mx-3 py-2 rounded-[8px] text-[14px] text-white font-bold">
            Background Noise Removal
          </button>
          <button type="button" className="bg-[#2B303A] w-full mx-3 py-2 rounded-[8px] text-[14px] text-white font-bold">
          Reverb Noise Removal
          </button>
          <button type="button" className="bg-[#2B303A] w-full mx-3 py-2 rounded-[8px] text-[14px] text-white font-bold">
          Echno Removal
          </button>
          <button type="button" className="bg-[#2B303A] w-full mx-3 py-2 rounded-[8px] text-[14px] text-white font-bold">
          Get Instrument Voice
          </button>
          <button type="button" className="bg-[#2B303A] w-full mx-3 py-2 rounded-[8px] text-[14px] text-white font-bold">
          Get Vocal Voice
          </button>
          </div>
          <div className="pt-[45px]">
          <button type="button" className="buttonBg w-full  py-5 rounded-[8px] text-[14px] text-white font-bold">
            Generate
          </button>
          </div>
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

export default NoiseAudio;
