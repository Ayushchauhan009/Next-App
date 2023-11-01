// components/AdjustmentControls.js

"use client";

import React, { useState, useEffect } from 'react';




const AdjustmentControls = () => {
  const [brightness, setBrightness] = useState(0);
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

  const [sliderValue, setSliderValue] = useState(0);
  const [sliderValue2, setSliderValue2] = useState(0);
  const [sliderValue3, setSliderValue3] = useState(0);
  const [sliderValue4, setSliderValue4] = useState(0);
  const [sliderValue5, setSliderValue5] = useState(0);
  const [sliderValue6, setSliderValue6] = useState(0);

  const handleBrightnessChange = (e : any) => {
    const value = e.target.value;
    setBrightness(value);
    setSliderValue(value);
    updateImageStyles();
  };

  const handleExposureChange = (e : any) => {
    const value = e.target.value;
    setExposure(value);
    setSliderValue2(value);
    updateImageStyles();
  };

  const handleContrastChange = (e : any) => {
    const value = e.target.value;
    setContrast(value);
    setSliderValue3(value);
    updateImageStyles();
  };

  const handleHighlightsChange = (e : any) => {
    const value = e.target.value;
    setHighlights(value);
    setSliderValue4(value);
    updateImageStyles();
  };

  const handleSaturationChange = (e : any) => {
    const value = e.target.value;
    setSaturation(value);
    setSliderValue5(value);
    updateImageStyles();
  };

  const handleTintChange = (e : any) => {
    const value = e.target.value;
    setTint(value);
    setSliderValue6(value);
    updateImageStyles();
  };

  const handleSliderChange = (e : any) => {
    const value = e.target.value;
    setSliderValue(value);
    updateImageStyles();
  };

  const thumbStyle = {
    background: `linear-gradient(to right, #73F89D, #48A0F9 ${sliderValue - 50}%, #fff ${sliderValue - 100}%)`,
  };
  const thumbStyle2 = {
    background: `linear-gradient(to right, #73F89D, #48A0F9 ${sliderValue2 - 50}%, #fff ${sliderValue2 - 100}%)`,
  };
  const thumbStyle3 = {
    background: `linear-gradient(to right, #73F89D, #48A0F9 ${sliderValue3 - 50}%, #fff ${sliderValue3 - 100}%)`,
  };
  const thumbStyle4= {
    background: `linear-gradient(to right, #73F89D, #48A0F9 ${sliderValue4 - 50}%, #fff ${sliderValue4 - 100}%)`,
  };
  const thumbStyle5 = {
    background: `linear-gradient(to right, #73F89D, #48A0F9 ${sliderValue5 - 50}%, #fff ${sliderValue5 - 100}%)`,
  };
  const thumbStyle6 = {
    background: `linear-gradient(to right, #73F89D, #48A0F9 ${sliderValue6 - 50}%, #fff ${sliderValue6 - 100}%)`,
  };

  return (
    <div className="bg-white w-[290px] h-[569px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col p-5 space-y-8  lg:mt-0 lg:mb-[33px]">
      <div className="range-container">
        <label htmlFor="brightness" className='font-[500] text-[12px] mb-6'>Brightness</label>
        <input
          type="range"
          min="0"
          max="200"
          value={brightness}
          onChange={handleBrightnessChange}
          onInput={updateImageStyles}
          style={thumbStyle}
        />
      </div>

      <div className="range-container">
        <label htmlFor="exposure" className='font-[500] text-[12px] mb-6'>Exposure</label>
        <input
          type="range"
          id='exposure'
          min="0"
          max="200"
          value={exposure}
          onChange={handleExposureChange}
          onInput={updateImageStyles}
          style={thumbStyle2}
        />
      </div>

      <div className="range-container">
        <label htmlFor="contrast" className='font-[500] text-[12px] mb-6'>Contrast</label>
        <input
          type="range"
          id='contrast'
          min="0"
          max="200"
          value={contrast}
          onChange={handleContrastChange}
          onInput={updateImageStyles}
          style={thumbStyle3}
        />
      </div>

      <div className="range-container">
        <label htmlFor="highlights" className='font-[500] text-[12px] mb-6'>Highlights</label>
        <input
          type="range"
          id='highlights'
          min="0"
          max="200"
          value={highlights}
          onChange={handleHighlightsChange}
          onInput={updateImageStyles}
          style={thumbStyle4}
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
          onChange={(e : any) => setShadows(parseInt(e.target.value, 10))}
          onInput={updateImageStyles}
        />
      </div> */}

      <div className="range-container">
        <label htmlFor="saturation" className='font-[500] text-[12px] mb-6'>Saturation</label>
        <input
          type="range"
          id='saturation'
          min="0"
          max="200"
          value={saturation}
          onChange={handleSaturationChange}
          onInput={updateImageStyles}
          style={thumbStyle5}
        />
      </div>

      <div className="range-container">
        <label htmlFor="tint" className='font-[500] text-[12px] mb-6'>Tint</label>
        <input
          type="range"
          id='tint'
          min="-180"
          max="180"
          value={tint}
          onChange={handleTintChange}
          onInput={updateImageStyles}
          style={thumbStyle6}
        />
      </div>
    </div>
  );
};

export default AdjustmentControls;
