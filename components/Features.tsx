"use client"


import Image from 'next/image'
import React from 'react'


import { useState } from "react";
const Features = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event : any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    (selectedFile);
  };
  return (
    <section className=' bg-white w-[290px] h-[790px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col   lg:mt-0 lg:mb-[33px] '>
     <form>
     <div className="px-5">
        <h2 className="font-bold mt-[10px] mb-[12px]">Video</h2>
        <div className="mx-auto border  flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px]  bg-white boxShadow" onClick={handleUpload}>
          <input type="file" accept="video/*" id="file-input"  />
          <label htmlFor="file-input" className="cursor-pointer" onChange={handleFileChange} >
            <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto"/>
            <p className="text-[#737477] text-[14px] pt-[5px]">Upload Video</p>
          </label>
        </div>
      </div>
      <div className="px-5 pt-[45px]">
        <h2 className="font-bold mt-[10px] mb-[12px]">Audio</h2>
        <div className="mx-auto border  flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px]  bg-white boxShadow" onClick={handleUpload}>
          <input type="file" accept="audio/*" id="file-input2"  />
          <label htmlFor="file-input" className="cursor-pointer" onChange={handleFileChange} >
            <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto"/>
            <p className="text-[#737477] text-[14px] pt-[5px]">Upload Audio</p>
          </label>
        </div>
      </div>
      <div className="px-5 pt-[45px]">
        <button type="button" className="buttonBg w-full py-5 rounded-[8px] text-[14px] text-white font-bold">Generate</button>
      </div>
     </form>
      
    </section>
  )
}

export default Features