"use client"


import Image from 'next/image'
import React, {useState} from 'react'

const Filters = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber:any) => {
    setActiveButton(buttonNumber);
  };
  const [brightness, setBrightness] = useState(0);
  const [exposure, setExposure] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [highlights, setHighlights] = useState(0);

  const [saturation, setSaturation] = useState(0);
  const [tint, setTint] = useState(0);

  



  const updateImageStyles = () => {
    const filterStyle = `brightness(${brightness + 100}%) brightness(${exposure + 100}%)  contrast(${contrast + 100}%) contrast(${highlights + 80}%)  saturate(${saturation + 100}%) hue-rotate(${tint}deg) `;
    const image = document.getElementById("imageID");
    const video = document.getElementById("videoID");
  
    if (image) {
      image.style.filter = filterStyle;
    }
    if (video) {
      video.style.filter = filterStyle;
    }
  };


  const handleBrightnessChange = (e: any) => {
    const value = e.target.value;
    const mappedValue = parseInt(value, 10); 
    if (mappedValue >= -100 && mappedValue <= 100) {
      setBrightness(mappedValue);
      updateCurrentBrightnessText(mappedValue);
      updateImageStyles();
    } else if (mappedValue < -100) {
      setBrightness(-100);
      updateCurrentBrightnessText(-100);
      updateImageStyles();
    } else {
      setBrightness(100);
      updateCurrentBrightnessText(100);
      updateImageStyles();
    }
  };


  const handleExposureChange = (e: any) => {
    const value = e.target.value;
    const mappedValue = parseInt(value, 10);
    const clampedValue = Math.min(100, Math.max(-100, mappedValue));

    setExposure(clampedValue);
    updateCurrentExposureText(clampedValue);
    updateImageStyles();
  };

  const handleContrastChange = (e: any) => {
    const value = e.target.value;
    const mappedValue = parseInt(value, 10);

    // Ensure that the value remains within the valid range
    const clampedValue = Math.min(100, Math.max(-100, mappedValue));

    setContrast(clampedValue);
    updateCurrentContrastText(clampedValue);
    updateImageStyles();
  };


  const handleHighlightsChange = (e: any) => {
    const value = e.target.value;
    const mappedValue = parseInt(value, 10);

    // Ensure that the value is within the valid range of -100 to 100
    const clampedValue = Math.min(100, Math.max(-100, mappedValue));

    setHighlights(clampedValue);
    updateCurrentHighlightsText(clampedValue);
    updateImageStyles();
  };

  const handleSaturationChange = (e: any) => {
    const value = e.target.value;
    const mappedValue = parseInt(value, 10);

    // Ensure that the value is within the valid range of -100 to 100
    const clampedValue = Math.min(100, Math.max(-100, mappedValue));

    setSaturation(clampedValue);
    updateCurrentSaturationText(clampedValue);
    updateImageStyles();
  };


  const handleTintChange = (e: any) => {
    const value = e.target.value;
    const mappedValue = parseInt(value, 10);

    // Ensure that the value is within the valid range of -100 to 100
    const clampedValue = Math.min(100, Math.max(-100, mappedValue));

    setTint(clampedValue);
    updateCurrentTintText(clampedValue);
    updateImageStyles();
  };



  const calculateBackground = (value: any) => {
    const percentage = ((value + 100) / 200) * 100;
    const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${percentage}%, #fff ${percentage}%)`;
    return background;
  }



  // --------------------------Brightness---------------------------


  const decreaseBrightness = () => {
    setBrightness((prevBrightness) => Math.max(-100, prevBrightness - 1));
  };

  const increaseBrightness = () => {
    setBrightness((prevBrightness) => Math.min(100, prevBrightness + 1));
  };


  const updateCurrentBrightnessText = (newBrightness: any) => {
    const currentBrightnessElement = document.querySelector('.current-brightness');
    if (currentBrightnessElement) {
      currentBrightnessElement.textContent = newBrightness;
    }
  };



  // -------------------------------------Exposure-----------------------------------



  const decreaseExposure = () => {
    setExposure((prevExposure) => Math.max(-100, prevExposure - 1));
  };

  const increaseExposure = () => {
    setExposure((prevExposure) => Math.min(100, prevExposure + 1));
  };


  const updateCurrentExposureText = (newExposure: any) => {
    const currentExposureElement = document.querySelector('.current-exposure');
    if (currentExposureElement) {
      currentExposureElement.textContent = newExposure;
    }
  };


  //  ---------------------------------Contrast-----------------------------------

  const decreaseContrast = () => {
    setContrast((prevContrast) => Math.max(-100, prevContrast - 1));
  };

  const increaseContrast = () => {
    setContrast((prevContrast) => Math.min(100, prevContrast + 1));
  };


  const updateCurrentContrastText = (newContrast: any) => {
    const currentContrastElement = document.querySelector('.current-contrast');
    if (currentContrastElement) {
      currentContrastElement.textContent = newContrast;
    }
  };
  //  ---------------------------------Highlights-----------------------------------

  const decreaseHighlights = () => {
    setHighlights((prevHighlights) => Math.max(-100, prevHighlights - 1));
  };

  const increaseHighlights = () => {
    setHighlights((prevHighlights) => Math.min(100, prevHighlights + 1));
  };


  const updateCurrentHighlightsText = (newHighlights: any) => {
    const currentHighlightsElement = document.querySelector('.current-highlights');
    if (currentHighlightsElement) {
      currentHighlightsElement.textContent = newHighlights;
    }
  };
  //  ---------------------------------Saturation-----------------------------------

  const decreaseSaturation = () => {
    setSaturation((prevSaturation) => Math.max(-100, prevSaturation - 1));
  };

  const increaseSaturation = () => {
    setSaturation((prevSaturation) => Math.min(100, prevSaturation + 1));
  };


  const updateCurrentSaturationText = (newSaturation: any) => {
    const currentSaturationElement = document.querySelector('.current-saturation');
    if (currentSaturationElement) {
      currentSaturationElement.textContent = newSaturation;
    }
  };
  //  ---------------------------------Tint-----------------------------------

  const decreaseTint = () => {
    setTint((prevTint) => Math.max(-100, prevTint - 1));
  };

  const increaseTint = () => {
    setTint((prevTint) => Math.min(100, prevTint + 1));
  };


  const updateCurrentTintText = (newTint: any) => {
    const currentTintElement = document.querySelector('.current-tint');
    if (currentTintElement) {
      currentTintElement.textContent = newTint;
    }
  };

  return (
    <div className="bg-white w-[290px] flex h-[669px]  boxShadow 2xl:max-container relative space-x-[18px] rounded-[10px] lg:mt-0 p-5    lg:mb-[33px]">
      <div className=''>
        <div className='flex justify-between mb-2 items-center'>
          <h3 className='font-semibold'>Options</h3>
          <p className='font-semibold text-[10px] cursor-pointer'>(?)</p>
        </div>
        <div className={`1Div w-[254px] h-[86px] border rounded-[8px] boxBg boxShadow ${activeButton === 1 ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
          {/* ... your content for 1Div */}
          <div className='flex items-center space-x-10 my-2 ml-2'>
            <Image src="/ArrowAngled.svg" alt='arrow' width={36} height={16} className='border rounded-[5px] bg-[#15181C] px-2 py-1'/>
            <p>X</p>
            <p>Y</p>
          </div>
          <div className='flex items-center space-x-3 my-3 ml-2'>
            <div className='bg-[#ECEDED] border boxShadow w-[32px] h-[25px] rounded-[5px]'></div>
            <p className='text-[14px]'>Remove</p>
            <div className='bg-[#ECEDED] border boxShadow w-[32px] h-[25px] rounded-[5px]'></div>
            <p className='text-[14px]'>Track</p>
          </div>
        </div>
        <div className={`2Div w-[254px] h-[86px] my-[15px] py-2 px-2 border rounded-[8px] boxBg boxShadow ${activeButton === 2 ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
          <p className="font-medium ">Edit Text</p>
          <input type="text" placeholder='Type your text...' className='boxBg outline-none text-[12px] my-2' />
        </div>
        <div className={`3Div w-[254px] h-[350px] my-[15px] py-2 px-2 border rounded-[8px] boxBg boxShadow ${activeButton === 3 ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
        <h3 className="font-medium">Effect Options</h3>
          <div className="range-container2">
        <label htmlFor="brightness" className='font-[500] text-[12px] mb-0'>Brightness</label>
        <div className='flex items-center space-x-3'>
        <button onClick={decreaseBrightness} className='font-bold flex flex-col items-center  text-[20px]'>
            <span className='text-[10px]'>-100</span>
            <span className='-mt-3'>-</span>
          </button>

          <div className='relative w-full'>
            <input
              type="range"
              min="-100"
              max="100"
              step="1"
              value={brightness}
              onChange={handleBrightnessChange}
              onInput={updateImageStyles}
              className='w-full'
              style={{ background: calculateBackground(brightness) }}
            />
            <span className="current-brightness absolute text-[12px] font-[600] top-[-10px]" style={{ left: `calc(${(brightness + 100) / 2}% - 10px )` }}>
              {brightness}
            </span>


          </div>
          <button onClick={increaseBrightness} className='font-bold flex flex-col items-center  text-[20px]'>
            <span className='text-[10px]'>100</span>
            <span className='-mt-3'>+</span>
          </button>
        </div>
      </div>
      <div className="range-container2">
        <label htmlFor="exposure" className='font-[500] text-[12px] mb-0'>Exposure</label>
        <div className='flex items-center space-x-3'>
        <button onClick={increaseExposure} className='font-bold flex flex-col items-center  text-[20px]'>
            <span className='text-[10px]'>-100</span>
            <span className='-mt-3'>-</span>
          </button>

          <div className='w-full relative'>
            <input
              type="range"
              id='exposure'
              min="-100"
              max="100"
              step="1"
              value={exposure}
              onChange={handleExposureChange}
              onInput={updateImageStyles}
              style={{ background: calculateBackground(exposure) }}
            />
            <span className="absolute text-[12px] font-[600] top-[-10px]" style={{ left: `calc(${(exposure + 100) / 2}% - 10px )` }}>
              {exposure}
            </span>
          </div>

          <button onClick={increaseExposure} className='font-bold flex flex-col items-center  text-[20px]'>
            <span className='text-[10px]'>100</span>
            <span className='-mt-3'>+</span>
          </button>
        </div>
      </div>
      <div className="range-container2">
        <label htmlFor="contrast" className='font-[500] text-[12px] mb-0'>Contrast</label>
        <div className='flex items-center space-x-3'>
        <button onClick={decreaseContrast} className='font-bold flex flex-col items-center  text-[20px]'>
            <span className='text-[10px]'>-100</span>
            <span className='-mt-3'>-</span>
          </button>

          <div className='w-full relative'>
            <input
              type="range"
              id='contrast'
              min="-100"
              max="100"
              step="1"
              value={contrast}
              onChange={handleContrastChange}
              onInput={updateImageStyles}
              style={{ background: calculateBackground(contrast) }}
            />
            <span className="absolute text-[12px] font-[600] top-[-10px]" style={{ left: `calc(${(contrast + 100) / 2}% - 10px )` }}>
              {contrast >= 0 ? `${contrast}` : contrast}
            </span>


          </div>

          <button onClick={increaseContrast} className='font-bold flex flex-col items-center  text-[20px]'>
            <span className='text-[10px]'>100</span>
            <span className='-mt-3'>+</span>
          </button>
        </div>
      </div>
      <div className="range-container2">
        <label htmlFor="highlights" className='font-[500] text-[12px] mb-0'>Highlights</label>
        <div className='flex items-center space-x-3'>
        <button onClick={decreaseHighlights} className='font-bold flex flex-col items-center  text-[20px]'>
            <span className='text-[10px]'>-100</span>
            <span className='-mt-3'>-</span>
          </button>

          <div className='w-full relative'>
            <input
              type="range"
              id='highlights'
              min="-100"
              max="100"
              value={highlights}
              onChange={handleHighlightsChange}
              onInput={updateImageStyles}
              style={{ background: calculateBackground(highlights) }}
            />
            <span className="current-highlights absolute text-[12px] font-[600] top-[-10px]" style={{ left: `calc(${(highlights + 100) / 2}% - 10px )` }}>
              {highlights}
            </span>

          </div>
          <button onClick={increaseHighlights} className='font-bold flex flex-col items-center  text-[20px]'>
            <span className='text-[10px]'>100</span>
            <span className='-mt-3'>+</span>
          </button>
        </div>
      </div>
      <div className="range-container2">
        <label htmlFor="saturation" className='font-[500] text-[12px] mb-0'>Saturation</label>
        <div className='flex items-center space-x-3'>
          <button onClick={decreaseSaturation} className='font-bold flex flex-col items-center text-[20px]'> <span className='text-[10px]'>-100</span>
            <span className='-mt-3'>-</span></button>

          <div className='w-full relative'>
            <input
              type="range"
              id='saturation'
              min="-100"
              max="100"
              value={saturation}
              onChange={handleSaturationChange}
              onInput={updateImageStyles}
              style={{ background: calculateBackground(saturation) }}
            />
            <span className="current-highlights absolute text-[12px] font-[600] top-[-10px]" style={{ left: `calc(${(saturation + 100) / 2}% - 10px )` }}>
              {saturation}
            </span>

          </div>
          <button onClick={increaseSaturation} className='font-bold flex flex-col items-center  text-[20px]'>
            <span className='text-[10px]'>100</span>
            <span className='-mt-3'>+</span>
          </button>
        </div>
      </div>
      <div className="range-container2">
        <label htmlFor="tint" className='font-[500] text-[12px] mb-0'>Tint</label>
        <div className='flex items-center space-x-3'>
          <button onClick={decreaseTint} className='font-bold flex flex-col items-center text-[20px]'>
          <span className='text-[10px]'>-100</span>
            <span className='-mt-3'>-</span>
          </button>

          <div className='w-full relative'>
            <input
              type="range"
              id='tint'
              min="-100"
              max="100"
              value={tint}
              onChange={handleTintChange}
              onInput={updateImageStyles}
              style={{ background: calculateBackground(tint) }}
            />
            <span className="current-highlights absolute text-[12px] font-[600] top-[-10px]" style={{ left: `calc(${(tint + 100) / 2}% - 10px )` }}>
              {tint}
            </span>


          </div>
          <button onClick={increaseTint} className='font-bold text-[20px] flex flex-col items-center'><span className='text-[10px]'>100</span>
            <span className='-mt-3'>+</span></button>
        </div>
      </div>
        </div>
        <button type="button" className="buttonBg w-full py-5 rounded-[8px] text-[14px] text-white font-bold">
            Edit
          </button>
      </div>
      <div className='flex items-start flex-col space-y-3'>
    <button type="button" className={` flex flex-col px-3 py-2 rounded-r-[8px] rounded-l-[0px] text-[14px] boxShadow  ${activeButton === 1 ? 'buttonBg2 text-white' : 'bg-white border  text-black'} `} onClick={() => handleButtonClick(1)}>
            <span>T</span>
            <span>R</span>
            <span>A</span>
            <span>C</span>
            <span>K</span>
          </button>
          <button type="button" className={` flex flex-col px-3 py-2 rounded-r-[8px] rounded-l-[0px] text-[14px] boxShadow ${activeButton === 2 ? 'buttonBg2 text-white' : 'bg-white border text-black'} `} onClick={() => handleButtonClick(2)}>
            <span>T</span>
            <span>E</span>
            <span>X</span>
            <span>T</span>
            
          </button>
          <button type="button" className={` flex flex-col px-3 py-2 rounded-r-[8px] rounded-l-[0px] text-[14px] boxShadow ${activeButton === 3 ? 'buttonBg2 text-white' : 'bg-white border text-black'} `} onClick={() => handleButtonClick(3)}>
            <span>E</span>
            <span>F</span>
            <span>F</span>
            <span>E</span>
            <span>C</span>
          <span>T</span>
          <span>S</span>

          </button>
      </div>
    </div>
  )
}

export default Filters