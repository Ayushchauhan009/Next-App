// components/AdjustmentControls.js

"use client";

import React, { useState } from 'react';




const AdjustmentControls = () => {
  const [brightness, setBrightness] = useState(100);
  const [exposure, setExposure] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [highlights, setHighlights] = useState(100);
  const [shadows, setShadows] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [tint, setTint] = useState(0);

  const updateImageStyles = () => {
    const filterStyle = `brightness(${brightness}%) brightness(${exposure}%)  contrast(${contrast}%) contrast(${highlights}%)  saturate(${saturation}%) hue-rotate(${tint}deg) `;
     
    const image = document.getElementById("imageID");
    
    if(image){
      image.style.filter = filterStyle;
    }
       
  };

  return (
    <div className="bg-white w-[290px] h-[569px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col p-5 space-y-8  lg:mt-0 lg:mb-[33px]">
      <div className="range-container">
        <label htmlFor="brightness" className='font-[500] text-[12px] mb-6'>Brightness</label>
        <input
          type="range"
          id="brightness"
          min="0"
          max="200"
          value={brightness}
          onChange={(e) => setBrightness(parseInt(e.target.value, 10))}
          onInput={updateImageStyles}
        />
      </div>

      <div className="range-container">
        <label htmlFor="exposure" className='font-[500] text-[12px] mb-6'>Exposure</label>
        <input
          type="range"
          id="exposure"
          min="0"
          max="200"
          value={exposure}
          onChange={(e) => setExposure(parseInt(e.target.value, 10))}
          onInput={updateImageStyles}
        />
      </div>

      <div className="range-container">
        <label htmlFor="contrast" className='font-[500] text-[12px] mb-6'>Contrast</label>
        <input
          type="range"
          id="contrast"
          min="0"
          max="200"
          value={contrast}
          onChange={(e) => setContrast(parseInt(e.target.value, 10))}
          onInput={updateImageStyles}
        />
      </div>

      <div className="range-container">
        <label htmlFor="highlights" className='font-[500] text-[12px] mb-6'>Highlights</label>
        <input
          type="range"
          id="highlights"
          min="0"
          max="200"
          value={highlights}
          onChange={(e) => setHighlights(parseInt(e.target.value, 10))}
          onInput={updateImageStyles}
        />
      </div>

      {/* <div className="range-container ">
        <label htmlFor="shadows" className='font-[500] text-[12px] mb-6'>Shadow</label>
        <input
          type="range"
          id="shadows"
          min="0"
          max="100"
          value={shadows}
          onChange={(e) => setShadows(parseInt(e.target.value, 10))}
          onInput={updateImageStyles}
        />
      </div> */}

      <div className="range-container">
        <label htmlFor="saturation" className='font-[500] text-[12px] mb-6'>Saturation</label>
        <input
          type="range"
          id="saturation"
          min="0"
          max="200"
          value={saturation}
          onChange={(e) => setSaturation(parseInt(e.target.value, 10))}
          onInput={updateImageStyles}
        />
      </div>

      <div className="range-container">
        <label htmlFor="tint" className='font-[500] text-[12px] mb-6'>Tint</label>
        <input
          type="range"
          id="tint"
          min="-180"
          max="180"
          value={tint}
          onChange={(e) => setTint(parseInt(e.target.value, 10))}
          onInput={updateImageStyles}
        />
      </div>
    </div>
  );
};

export default AdjustmentControls;
