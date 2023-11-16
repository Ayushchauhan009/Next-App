"use client"

import React, { useState, useEffect } from "react";

const AudioPopup = ({ onClose, onSubmit }: any) => {
  const [totalEpoch, setTotalEpoch] = useState(0);
  const [batchSize, setBatchSize] = useState(500);
  const [epoch, setEpoch] = useState(0);
  const [batch, setBatch] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(false);

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
    const percentage = (value / 40) * 100;
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

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (isPopupOpen && !event.target.closest(".popup-content")) {
        closePopup();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isPopupOpen]);


  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div className="bg-white w-[569px] py-20 h-[574px] rounded-[10px] popup-content">
      <div className="p-5 space-y-6">
        <div className="flex">
        <label htmlFor="uploadFile">Upload a Wav file or a zip of wav files:</label>
        <input type="file" id="uploadFile" accept=".wav, .zip" className="w-full mb-3 border p-2 rounded-[5px]" />
        </div>

        <div>
          <h4>Two Settings For Training Which are :</h4>
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
        style={{ background: calculateBackground2(batch) }}
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
      <div className="flex p-5 items-center space-x-3 ">
        <label htmlFor="uploadFile" className="whitespace-nowrap">Upload Image:</label>
        <input type="file" id="uploadFile" accept="image/*" className="w-full mb-3 border p-2 rounded-[5px]" />
        </div>
      <button
        type="submit"
        className="buttonBg w-[93%] h-[50px] mx-[19px] rounded-[8px] text-[14px] text-white font-bold"
        onClick={closePopup}
      >
        Submit
      </button>
    </div>
  </div>
  );
};

export default AudioPopup;
