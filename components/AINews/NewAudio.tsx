"use client"

import Image from "next/image";
import AudioPopup from "./AudioPopup";
import { useState, useEffect } from "react";

const NewAudio = ({ onVideoUpload, onImageUpload, onAudioUpload }: any) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showVideoUpload, setShowVideoUpload] = useState(true);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [showAudioPopup, setShowAudioPopup] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [isPopupOpen2, setPopupOpen2] = useState(false);
  const [batch, setBatch] = useState(0);
  const [expression, setExpression] = useState(0);
  

  const handleEpochChange = (e: any) => {
    const value = e.target.value;
    const mappedValue = parseInt(value, 10);
    const clampedValue = Math.min(1000, Math.max(0, mappedValue));
    setEpoch(clampedValue);
    updateCurrentEpochText(clampedValue);
  };
  const handleBatchChange = (e: any) => {
    const value = e.target.value;
    const mappedValue = parseInt(value, 10);
    const clampedValue = Math.min(40, Math.max(0, mappedValue));
    setBatch(clampedValue);
    updateCurrentBatchText(clampedValue);
  };

  const calculateBackground = (value: any) => {
    const percentage = (value / 1000) * 100;
    const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${percentage}%, #fff ${percentage}%)`;
    return background;
  };

  const calculateBackground2 = (value: any) => {
    const percentage = value * 100; // Map the value from 0 to 1 to 0% to 100%
    const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${percentage}%, #fff ${percentage}%)`;
    return background;
  };
  const calculateBackground3 = (value: any) => {
    const percentage = (value/40) * 100; // Map the value from 0 to 1 to 0% to 100%
    const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${percentage}%, #fff ${percentage}%)`;
    return background;
  };

  const decreaseEpoch = () => {
    setEpoch((prevEpoch) => Math.max(0, prevEpoch - 1));
  };

  const increaseEpoch = () => {
    setEpoch((prevEpoch) => Math.min(1000, prevEpoch + 1));
  };


  const updateCurrentEpochText = (newEpoch: any) => {
    const currentEpochElement = document.querySelector('.current-Epoch');
    if (currentEpochElement) {
        currentEpochElement.textContent = newEpoch;
    }
  };

  const decreaseBatch = () => {
    setBatch((prevBatch) => Math.max(0, prevBatch - 1));
  };

  const increaseBatch = () => {
    setBatch((prevBatch) => Math.min(40, prevBatch + 1));
  };

  const updateCurrentBatchText = (newBatch: any) => {
    const currentBatchElement = document.querySelector('.current-batch');
    if (currentBatchElement) {
        currentBatchElement.textContent = newBatch;
    }
  };






  const decreaseExpression = () => {
    if (expression > 0) {
      setExpression(expression - 0.01);
    }
  };

  const increaseExpression = () => {
    if (expression < 1) {
      setExpression(expression + 0.01);
      
    }
  };

  const handleExpressionChange = (e : any) => {
    const value = e.target.value;
    const mappedValue = parseFloat(value);
    setExpression(mappedValue);
    updateCurrentExpressionText(expression);
  }

  const updateCurrentExpressionText = (newExpression: any) => {
    const currentExpressionElement = document.querySelector('.current-expression');
    if (currentExpressionElement) {
      currentExpressionElement.textContent = newExpression;
    }
  };

  const openPopup = () => {
    setShowAudioPopup(true);
  };

  const closePopup = () => {
    setShowAudioPopup(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (showAudioPopup && !event.target.closest(".popup-content")) {
        closePopup();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showAudioPopup]);


  


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
    setUploadedFile(image);
  };
 

 
    const handlePopupClick = (event:any) => {
      event.stopPropagation();
    };



    const openPopup2 = () => {
      setPopupOpen2(true);
    };
  
    const [answer, setAnswer] = useState(null);

  const handleRadioChange = (event : any) => {
    setAnswer(event.target.value);
  };
    const [answer2, setAnswer2] = useState(null);

  const handleRadioChange2 = (event : any) => {
    setAnswer2(event.target.value);
  };
    const closePopup2 = () => {
      setPopupOpen2(false);
    };
  
    useEffect(() => {
      const handleOutsideClick = (event:any) => {
        if (isPopupOpen2 && !event.target.closest(".popup-content2")) {
          closePopup2();
        }
      };
  
      document.addEventListener("click", handleOutsideClick);
  
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, [isPopupOpen2]);

  return (
    <section className="bg-white w-[290px] h-[790px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col lg:mt-0 lg:mb-[15px]">
      <form>
        <div className="px-5">
          <h4 className="py-5 font-semibold">Upload your Photo</h4>
        </div>
          <div className="px-5">
          {uploadedFile ? (
              <div>
                
                <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded Image" className="mx-auto rounded-[8px] h-[149px] w-[250px] object-cover" />
              </div>
            ) : (
              <div className="mx-auto border flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px] boxBg boxShadow">
                <input type="file" accept="image/*" id="file-input2" onChange={handleImageUpload} />
                <label htmlFor="file-input2" className="cursor-pointer">
                  <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
                  <p className="text-[#737477] text-[14px] pt-[5px]">Upload Photo</p>
                </label>
              </div>
            )}
          </div>

        <div className="px-5 pt-[45px]">
            <h2 className="py-5 font-semibold">Upload your Audio</h2>
          <div className="mx-auto border flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px] boxBg boxShadow">
            
            <div  className="cursor-pointer"  onClick={openPopup}>
              <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
              <p className="text-[#737477] text-[14px] pt-[5px]">Upload Audio</p>
            </div>
            
          </div>
        </div>

        <div className="px-5 pt-[45px]">
          <button type="button"  onClick={openPopup2} className="buttonBg w-full py-5 rounded-[8px] text-[14px] text-white font-bold">
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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white w-[569px] pt-2 h-[356px] rounded-[10px] popup-content">
          <div className="p-5 space-y-6">
            <div className="flex">
            <label htmlFor="uploadFile">Upload a Wav file or a zip of wav files:</label>
            <input type="file" id="uploadFile" accept=".wav, .zip" className="w-full mb-3 border p-2 rounded-[5px]" />
            </div>
    
            <div>
              <h4 className="mb-5">Two Settings For Training Which are :</h4>
              <div className="flex space-x-20">
              <div className="range-container2">
      <label htmlFor="tint" className='font-[600] text-[12px] mt-3 mb-2'>Total Epoch</label>
      <div className='flex items-center space-x-3'>
        <button onClick={decreaseEpoch} className='font-bold flex flex-col items-center text-[20px]'>
        <span className='text-[10px]'>0</span>
          <span className='-mt-3'>-</span>
        </button>
    
        <div className='w-full relative'>
          <input
            type="range"
            id='epoch'
            min="0"
            max="1000"
            value={epoch}
            className="w-full"
            onChange={handleEpochChange}
          //   onInput={updateImageStyles}
            style={{ background: calculateBackground(epoch) }}
          />
          <span className="current-epoch absolute text-[10px] font-[600] top-[-10px]" style={{ left: `calc(${(epoch + 10) /11}% - 1px )` }}>
            {epoch}
          </span>
    
    
        </div>
        <button onClick={increaseEpoch} className='font-bold text-[20px] flex flex-col items-center'><span className='text-[10px]'>1000</span>
          <span className='-mt-3'>+</span></button>
      </div>
              </div>
              <div className="range-container2">
      <label htmlFor="tint" className='font-[600] text-[12px] mt-3 mb-2'>Batch Size</label>
      <div className='flex items-center space-x-3'>
        <button onClick={decreaseBatch} className='font-bold flex flex-col items-center text-[20px]'>
        <span className='text-[10px]'>0</span>
          <span className='-mt-3'>-</span>
        </button>
    
        <div className='w-full relative'>
          <input
            type="range"
            id='batch'
            min="0"
            max="40"
            value={batch}
            onChange={handleBatchChange}
            style={{ background: calculateBackground3(batch) }}
            className="w-full"
          />
          <span className="current-batch absolute text-[10px] font-[600] top-[-10px]" style={{ left: `calc(${(batch * 2.45) }% - 0px )` }}>
            {batch}
          </span>
    
    
        </div>
        <button onClick={increaseBatch} className='font-bold text-[20px] flex flex-col items-center'><span className='text-[10px]'>40</span>
          <span className='-mt-3'>+</span></button>
      </div>
              </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="buttonBg w-[93%] mt-5 h-[50px] mx-[19px] rounded-[8px] text-[14px] text-white font-bold"
            onClick={closePopup}
          >
            Submit
          </button>
        </div>
      </div>
      )}
      {isPopupOpen2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white w-[569px] h-[443px] rounded-[10px] popup-content2">
          <div className="p-5 space-y-6">
          <div className="flex space-x-3">
                <label htmlFor="voiceName" className="whitespace-nowrap">Render Name:</label>
              <input type="text" id="voiceName" className="w-full mb-3 outline-none px-2 border rounded-[5px]" />
          </div>
          <div className="flex items-center mb-3">
                <label htmlFor="customCheckboxPopup" className="cursor-pointer">Public Figure:</label>
                <input
                  type="checkbox"
                  id="customCheckboxPopup"
                  // checked={isChecked}
                  // onChange={() => setIsChecked(!isChecked)
                  // }
                  className="appearance-none border rounded w-8 h-6 ml-2 cursor-pointer"
                />
                
          </div>
          <div className="mb-3">
                <label htmlFor="customCheckboxPopup" className=" pb-3">An introductory message</label>
                <textarea name="" id="" className="w-full mb-3 max-h-20 resize-none p-2 text-[14px] outline-none px-2 border rounded-[5px]"></textarea>
                
              </div>
           
           <div>
              <h4>Reading settings:</h4>
              <div className="flex items-center space-x-10">
              <div className='range-container2'>
            <p className='font-semibold text-[12px] my-2'>Expressions:</p>
            <div className='flex items-center space-x-3'>
            <button
                className='decrease-volume font-bold flex flex-col items-center  text-[20px]'
                onClick={decreaseExpression}
              >
                <span className='text-[10px]'>0</span>
            <span className='-mt-3'>-</span>
              </button>
              <div className='relative w-full'>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='0.1'
                  value={expression}
                  onChange={handleExpressionChange}
                  // onInput={applyDistortionEffect}
                  className='w-full '
                  style={{ background: calculateBackground2(expression) }}
                />
                <span className='absolute current-delay text-[10px] font-[600] top-[-14px] my-2'  style={{ left: `calc(${(expression * 100)}% - 5px )` }}>
                  {expression.toFixed(1)}
                </span>
              </div>
              <button
                className='decrease-volume font-bold flex flex-col items-center  text-[20px]'
                onClick={increaseExpression}
              >
                <span className='text-[10px]'>1</span>
            <span className='-mt-3'>+</span>
              </button>
            </div>
          </div>
          <div>
      <h2 className="text-[12px] font-[600]">Still:</h2>
      <div className="mt-2 text-[14px] space-x-5">
      <label >
        <input
          type="radio"
          value="Yes"
          checked={answer === 'Yes'}
          onChange={handleRadioChange}
          className="mr-1"
        />
        Yes
      </label>

      <label className=''>
        <input
          type="radio"
          value="No"
          checked={answer === 'No'}
          onChange={handleRadioChange}
          className="mr-1"
        />
        No
      </label>
      </div>

      
    </div>
          <div>
      <h2 className="text-[12px] font-[600]">Enhance:</h2>
      <div className="mt-2 text-[14px] space-x-5">
      <label >
        <input
          type="radio"
          value="Yes"
          checked={answer2 === 'Yes'}
          onChange={handleRadioChange2}
          className="mr-1"
        />
        Yes
      </label>

      <label className=''>
        <input
          type="radio"
          value="No"
          checked={answer2 === 'No'}
          onChange={handleRadioChange2}
          className="mr-1"
        />
        No
      </label>
      </div>

      
    </div>
              </div>
            </div>
           
           </div>
          
          {/* <div className="flex p-5 items-center space-x-3 ">
            <label htmlFor="uploadFile" className="whitespace-nowrap">Upload Image:</label>
            <input type="file" id="uploadFile" accept="image/*" className="w-full mb-3 border p-2 rounded-[5px]" />
            </div> */}
          <button
            type="submit"
            className="buttonBg w-[93%] h-[50px] mx-[19px] rounded-[8px] text-[14px] text-white font-bold"
            onClick={closePopup}
          >
            Submit
          </button>
        </div>
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
        
      `}</style>
    </section>
  );
};

export default NewAudio;
