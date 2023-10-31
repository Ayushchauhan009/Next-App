"use client"

import React from 'react'
import Image from "next/image";
import { useState } from "react";


const Options = () => {
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event : any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    (selectedFile);
  };
  return (
    <form className=' bg-white w-[290px] h-[790px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col   lg:mt-0 lg:mb-[33px] '>
        <h4 className='px-5 pt-[15px] pb-[11px] text-[16px] font-bold'>Options</h4>
        <section className='bg-white w-[250px] h-[365px] border  mx-5 rounded-[10px] z-10 boxShadow  '>
    <div>
    <div className="px-[11px] pt-[5px]">
       <div className="mx-auto border  flex space-x-10 rounded-[8px] justify-center items-center   bg-white boxShadow">
         <p className='my-[8px] text-[12px] py-1 rounded-[6px] text-white px-3 bg-[#2B303A]'>Text</p>
         <p className='py-[8px] text-[12px] '>Image</p>
         <p className='text-[12px] py-[8px]'>Video</p>
       </div>
     </div>
     <div className="px-5 pt-[34px]">
       <input type='text' className="font-normal text-[14px] py-2 outline-none text-[#737477] mt-[10px] mb-[12px]" placeholder='Type your text..... '/>
       
     </div>
     
    </div>
    
     
   </section>
   <div className="px-5 pt-[45px]">
        <button type="button" className="buttonBg w-full h-[50px] rounded-[8px] text-[14px] text-white font-bold">Generate</button>
    </div></form>
  )
}

export default Options