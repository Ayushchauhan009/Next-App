"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const VolEffects = () => {
  const [openDiv, setOpenDiv] = useState(null);
  const [volume, setVolume] = useState(1);
  const [distortion, setDistortion] = useState(0);
  const [delay, setDelay] = useState(0);
  const [flanger, setFlanger] = useState(0);
  const [reverb, setReverb] = useState(0);
  const [tremolo, setTremolo] = useState(0);
  // const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  // useEffect(() => {
  //   // Check if AudioContext is available in the browser
  //   if (window.AudioContext) {
  //     const context = new AudioContext();
  //     setAudioContext(context);
  //   }
  // }, []);

  // if (!audioContext) {
  //   return <div>Your browser does not support the AudioContext API.</div>;
  // }


//   useEffect(() => {
//     const audioInputElement = document.getElementById('audioInput');
//    // Initialize audio context and connect to the destination
//    const masterGain = audioContext.createGain();
//    masterGain.connect(audioContext.destination);

//    // Set the master gain level to control overall volume
//    masterGain.gain.value = volume;
//  }, [volume]);

//  // Function to create and connect an effect node to the master gain
//  const applyEffect = (effect: AudioNode, setter: (value: number) => void, value: number) => {
//    const effectGain = audioContext.createGain();
//    effectGain.gain.value = value;

//    effect.connect(effectGain);
//    effectGain.connect(audioContext.destination);

//    setter(value);
//  };

//  // Function to create and connect a distortion effect
//  const applyDistortionEffect = () => {
//    const distortionNode = audioContext.createWaveShaper();
//    const amount = distortion * 50; // Adjust the multiplier as needed
//    const curve = new Float32Array(audioContext.sampleRate);

//    for (let i = 0; i < audioContext.sampleRate; i++) {
//      const x = (i / audioContext.sampleRate) * 2 - 1;
//      curve[i] = Math.tanh(x * amount);
//    }

//    distortionNode.curve = curve;
//    applyEffect(distortionNode, setDistortion, distortion);
//  };

//  // Function to create and connect a flanger effect
//  const applyFlangerEffect = () => {
//    const flangerNode = audioContext.createDelay();
//    flangerNode.delayTime.value = flanger * 0.01; // Adjust the multiplier as needed
//    applyEffect(flangerNode, setFlanger, flanger);
//  };

//  // Function to create and connect a reverb effect
//  const applyReverbEffect = () => {
//    const reverbNode = audioContext.createConvolver();
//    // Set the impulse response buffer for reverb (you need to load a valid impulse response buffer)
//    // reverbNode.buffer = yourImpulseResponseBuffer;
//    applyEffect(reverbNode, setReverb, reverb);
//  };

//  // Function to create and connect a tremolo effect
//  const applyTremoloEffect = () => {
//    const tremoloNode = audioContext.createGain();
//    const frequency = tremolo * 10; // Adjust the multiplier as needed
//    const oscillator = audioContext.createOscillator();

//    oscillator.type = 'sine';
//    oscillator.frequency.value = frequency;
//    oscillator.connect(tremoloNode.gain);
//    oscillator.start();

//    applyEffect(tremoloNode, setTremolo, tremolo);
//  };

  

  const toggleDiv = (index : any) => {
    if (index === openDiv) {
      // Clicking on an already open div should close it
     
    } else {
      // Clicking on a closed div should open it
      setOpenDiv(null);
      setOpenDiv(index);
    }
  };


  const calculateBackground = (value : number) => {
    const percentage = value * 100; // Map the value from 0 to 1 to 0% to 100%
    const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${percentage}%, #fff ${percentage}%)`;
    return background;
  };

  const decreaseVolume = () => {
    if (volume > 0) {
      setVolume(volume - 0.01);
    }
  };

  const increaseVolume = () => {
    if (volume < 1) {
      setVolume(volume + 0.01);
      
    }
  };

  const handleVolumeChange = (e : any) => {
    const value = e.target.value;
    const mappedValue = parseFloat(value);
    setVolume(mappedValue);
    updateCurrentVolumeText(volume);
  }

  const updateCurrentVolumeText = (newVolume: any) => {
    const currentVolumeElement = document.querySelector('.current-volume');
    if (currentVolumeElement) {
      currentVolumeElement.textContent = newVolume;
    }
  };


    // Distortion Effect

    const decreaseDistortion = () => {
      if (distortion > 0) {
        setDistortion(distortion - 0.01);
      }
    };
  
    const increaseDistortion = () => {
      if (distortion < 1) {
        setDistortion(distortion + 0.01);
        
      }
    };
  
    const handleDistortionChange = (e : any) => {
      const value = e.target.value;
      const mappedValue = parseFloat(value);
      setDistortion(mappedValue);
      updateCurrentDistortionText(distortion);
    }
  
    const updateCurrentDistortionText = (newDistortion: any) => {
      const currentDistortionElement = document.querySelector('.current-distortion');
      if (currentDistortionElement) {
        currentDistortionElement.textContent = newDistortion;
      }
    };
    // Distortion Effect

    const decreaseDelay = () => {
      if (delay > 0) {
        setDelay(delay - 0.01);
      }
    };
  
    const increaseDelay = () => {
      if (delay < 1) {
        setDelay(delay + 0.01);
        
      }
    };
  
    const handleDelayChange = (e : any) => {
      const value = e.target.value;
      const mappedValue = parseFloat(value);
      setDelay(mappedValue);
      updateCurrentDelayText(delay);
    }
  
    const updateCurrentDelayText = (newDelay: any) => {
      const currentDelayElement = document.querySelector('.current-delay');
      if (currentDelayElement) {
        currentDelayElement.textContent = newDelay;
      }
    };

    // Flanger Effect 

    const decreaseFlanger = () => {
      if (flanger > 0) {
        setFlanger(flanger - 0.01);
      }
    };
  
    const increaseFlanger = () => {
      if (flanger < 1) {
        setFlanger(flanger + 0.01);
        
      }
    };
  
    const handleFlangerChange = (e : any) => {
      const value = e.target.value;
      const mappedValue = parseFloat(value);
      setFlanger(mappedValue);
      updateCurrentFlangerText(flanger);
    }
  
    const updateCurrentFlangerText = (newFlanger: any) => {
      const currentFlangerElement = document.querySelector('.current-flanger');
      if (currentFlangerElement) {
        currentFlangerElement.textContent = newFlanger;
      }
    };


      // Reverb Effect 

    const decreaseReverb = () => {
      if (reverb > 0) {
        setReverb(reverb - 0.01);
      }
    };
  
    const increaseReverb = () => {
      if (reverb < 1) {
        setReverb(reverb + 0.01);
        
      }
    };
  
    const handleReverbChange = (e : any) => {
      const value = e.target.value;
      const mappedValue = parseFloat(value);
      setReverb(mappedValue);
      updateCurrentReverbText(reverb);
    }
  
    const updateCurrentReverbText = (newReverb: any) => {
      const currentReverbElement = document.querySelector('.current-Reverb');
      if (currentReverbElement) {
        currentReverbElement.textContent = newReverb;
      }
    };




    // Tremolo Effect
    
    const decreaseTremolo = () => {
      if (tremolo > 0) {
        setTremolo(tremolo - 0.01);
      }
    };
  
    const increaseTremolo = () => {
      if (tremolo < 1) {
        setTremolo(tremolo + 0.01);
        
      }
    };
  
    const handleTremoloChange = (e : any) => {
      const value = e.target.value;
      const mappedValue = parseFloat(value);
      setTremolo(mappedValue);
      updateCurrentTremoloText(tremolo);
    }
  
    const updateCurrentTremoloText = (newTremolo: any) => {
      const currentTremoloElement = document.querySelector('.current-Tremolo');
      if (currentTremoloElement) {
        currentTremoloElement.textContent = newTremolo;
      }
    };






  return (
    <div className="bg-white w-[290px] h-[789px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col   p-5  space-y-4 lg:mt-0 lg:mb-[33px]">
        <div className='flex justify-between items-center'>
            <h3 className='font-bold text-[22px]'>Options</h3>
            <p className='text-[10px] cursor-pointer font-semibold'>(?)</p>
        </div>
        <div
        onClick={() => toggleDiv(0)}
        className={`vol-effect text-[20px] font-semibold ${openDiv === 0 ? 'open' : ''}`}
      >
        <div className='flex justify-between items-center'>
          <h2>Volume</h2>
          <Image src="/downArrow.svg" alt='down' width={20} height={20} />
        </div>
        {openDiv === 0 && (
          <div className='input-container'>
            <p className='font-semibold text-[10px]'>Volume level:</p>
            <div className='flex items-center space-x-3'>
              <button
                className='decrease-volume font-bold flex flex-col items-center  text-[20px]'
                onClick={decreaseVolume}
              >
                <span className='text-[10px]'>0</span>
            <span className='-mt-3'>-</span>
              </button>
              <div className='relative w-full'>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='0.01'
                  value={volume}
                  onChange={handleVolumeChange}
                  // onInput={applyDistortionEffect}
                  className='w-full'
                  style={{ background: calculateBackground(volume) }}
                />
                <span className='absolute current-volume text-[10px] font-[600] top-[-10px] mt-2' style={{ left: `calc(${(volume * 100)}% - 10px )` }}>
                  {volume.toFixed(2)}
                </span>
              </div>
              <button
                className='increase-volume font-bold flex flex-col items-center  text-[20px]'
                onClick={increaseVolume}
              >
                <span className='text-[10px]'>1</span>
            <span className='-mt-3'>+</span>
              </button>
            </div>
            <button className='volButton w-full py-2 my-2 rounded-[8px] text-[10px] text-white'>
              Volume Mute
            </button>
          </div>
        )}
      </div>
        <div
        onClick={() => toggleDiv(1)}
        className={`vol-effect text-[20px] font-semibold ${openDiv === 1 ? 'open' : ''}`}
      >
        <div className='flex justify-between items-center'>
          <h2>Distortion</h2>
          <Image src="/downArrow.svg" alt='down' width={20} height={20} />
        </div>
        {openDiv === 1 && (
          <div className='input-container'>
            <p className='font-semibold text-[10px]'>Distortion level:</p>
            <div className='flex items-center space-x-3'>
            <button
                className='decrease-volume font-bold flex flex-col items-center  text-[20px]'
                onClick={decreaseDistortion}
              >
                <span className='text-[10px]'>0</span>
            <span className='-mt-3'>-</span>
              </button>
              <div className='relative w-full'>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='0.01'
                  value={distortion}
                  onChange={handleDistortionChange}
                  // onInput={applyDistortionEffect}
                  className='w-full'
                  style={{ background: calculateBackground(distortion) }}
                />
                <span className='absolute current-distortion text-[10px] font-[600] top-[-10px] mt-2'  style={{ left: `calc(${(distortion * 100)}% - 10px )` }}>
                  {distortion.toFixed(2)}
                </span>
              </div>
              <button
                className='decrease-volume font-bold flex flex-col items-center  text-[20px]'
                onClick={increaseDistortion}
              >
                <span className='text-[10px]'>1</span>
            <span className='-mt-3'>+</span>
              </button>
            </div>
            <button className='volButton w-full py-2 my-2 rounded-[8px] text-[10px] text-white'>
              Distortion Mute
            </button>
          </div>
        )}
      </div>
        <div
        onClick={() => toggleDiv(5)}
        className={`vol-effect text-[20px] font-semibold ${openDiv === 5 ? 'open' : ''}`}
      >
        <div className='flex justify-between items-center'>
          <h2>Delay</h2>
          <Image src="/downArrow.svg" alt='down' width={20} height={20} />
        </div>
        {openDiv === 5 && (
          <div className='input-container'>
            <p className='font-semibold text-[10px]'>Delay level:</p>
            <div className='flex items-center space-x-3'>
            <button
                className='decrease-volume font-bold flex flex-col items-center  text-[20px]'
                onClick={decreaseDelay}
              >
                <span className='text-[10px]'>0</span>
            <span className='-mt-3'>-</span>
              </button>
              <div className='relative w-full'>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='0.01'
                  value={delay}
                  onChange={handleDelayChange}
                  // onInput={applyDistortionEffect}
                  className='w-full'
                  style={{ background: calculateBackground(delay) }}
                />
                <span className='absolute current-delay text-[10px] font-[600] top-[-10px] mt-2'  style={{ left: `calc(${(delay * 100)}% - 10px )` }}>
                  {delay.toFixed(2)}
                </span>
              </div>
              <button
                className='decrease-volume font-bold flex flex-col items-center  text-[20px]'
                onClick={increaseDelay}
              >
                <span className='text-[10px]'>1</span>
            <span className='-mt-3'>+</span>
              </button>
            </div>
            <button className='volButton w-full py-2 my-2 rounded-[8px] text-[10px] text-white'>
              Delay Mute
            </button>
          </div>
        )}
      </div>
        <div
        onClick={() => toggleDiv(2)}
        className={`vol-effect text-[20px] font-semibold ${openDiv === 2 ? 'open' : ''}`}
      >
        <div className='flex justify-between items-center'>
          <h2>Flanger</h2>
          <Image src="/downArrow.svg" alt='down' width={20} height={20} />
        </div>
        {openDiv === 2 && (
          <div className='input-container'>
            <p className='font-semibold text-[10px]'>Flanger level:</p>
            <div className='flex items-center space-x-3'>
            <button
                className='decrease-volume font-bold flex flex-col items-center  text-[20px]'
                onClick={decreaseFlanger}
              >
                <span className='text-[10px]'>0</span>
            <span className='-mt-3'>-</span>
              </button>
              <div className='relative w-full'>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='0.01'
                  value={flanger}
                  onChange={handleFlangerChange}
                  // onInput={applyFlangerEffect}
                  className='w-full'
                  style={{ background: calculateBackground(flanger) }}
                />
                <span className='absolute current-volume text-[10px] font-[600] top-[-10px] mt-2' style={{ left: `calc(${(flanger * 100)}% - 10px )` }}>
                  {flanger.toFixed(2)}
                </span>
              </div>
              <button
                className='decrease-volume font-bold flex flex-col items-center  text-[20px]'
                onClick={increaseFlanger}
              >
                <span className='text-[10px]'>1</span>
            <span className='-mt-3'>+</span>
              </button>
            </div>
            <button className='volButton w-full py-2 my-2 rounded-[8px] text-[10px] text-white'>
              Flanger Mute
            </button>
          </div>
        )}
      </div>
        <div
        onClick={() => toggleDiv(3)}
        className={`vol-effect text-[20px] font-semibold ${openDiv === 3 ? 'open' : ''}`}
      >
        <div className='flex justify-between items-center'>
          <h2>Reverb</h2>
          <Image src="/downArrow.svg" alt='down' width={20} height={20} />
        </div>
        {openDiv === 3 && (
          <div className='input-container'>
            <p className='font-semibold text-[10px]'>Reverb level:</p>
            <div className='flex items-center space-x-3'>
            <button
                className='decrease-volume font-bold flex flex-col items-center  text-[20px]'
                onClick={decreaseReverb}
              >
                <span className='text-[10px]'>0</span>
            <span className='-mt-3'>-</span>
              </button>
              <div className='relative w-full'>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='0.01'
                  value={reverb}
                  onChange={handleReverbChange}
                  // onInput={applyReverbEffect}
                  className='w-full'
                  style={{ background: calculateBackground(reverb) }}
                />
                <span className='absolute current-volume text-[10px] font-[600] top-[-10px] mt-2' style={{ left: `calc(${(reverb * 100)}% - 10px )` }}>
                  {reverb.toFixed(2)}
                </span>
              </div>
              <button
                className='decrease-volume font-bold flex flex-col items-center  text-[20px]'
                onClick={increaseReverb}
              >
                <span className='text-[10px]'>1</span>
            <span className='-mt-3'>+</span>
              </button>
            </div>
            <button className='volButton w-full py-2 my-2 rounded-[8px] text-[10px] text-white'>
              Reverb Mute
            </button>
          </div>
        )}
      </div>
        <div
        onClick={() => toggleDiv(4)}
        className={`vol-effect text-[20px] font-semibold ${openDiv === 4 ? 'open' : ''}`}
      >
        <div className='flex justify-between items-center'>
          <h2>Tremolo</h2>
          <Image src="/downArrow.svg" alt='down' width={20} height={20} />
        </div>
        {openDiv === 4 && (
          <div className='input-container'>
            <p className='font-semibold text-[10px]'>Tremolo level:</p>
            <div className='flex items-center space-x-3'>
            <button
                className='decrease-volume font-bold flex flex-col items-center  text-[20px]'
                onClick={decreaseTremolo}
              >
                <span className='text-[10px]'>0</span>
            <span className='-mt-3'>-</span>
              </button>
              <div className='relative w-full'>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='0.01'
                  value={tremolo}
                  onChange={handleTremoloChange}
                  // onInput={applyTremoloEffect}
                  className='w-full'
                  style={{ background: calculateBackground(tremolo) }}
                />
                <span className='absolute current-volume text-[10px] font-[600] top-[-10px] mt-2' style={{ left: `calc(${(tremolo * 100)}% - 10px )` }}>
                  {tremolo.toFixed(2)}
                </span>
              </div>
              <button
                className='decrease-volume font-bold flex flex-col items-center  text-[20px]'
                onClick={increaseTremolo}
              >
                <span className='text-[10px]'>1</span>
            <span className='-mt-3'>+</span>
              </button>
            </div>
            <button className='volButton w-full py-2 my-2 rounded-[8px] text-[10px] text-white'>
              Tremolo Mute
            </button>
          </div>
        )}
      </div>
      {/* <div onClick={() => toggleDiv(1)} className={`vol-effect text-[20px] font-semibold ${openDiv === 1 ? 'open' : ''}`}>
        <div className='flex justify-between items-center'><h2>Distortion</h2>
        <Image src="/downArrow.svg" alt='down' width={20} height={20} />
        </div>
        {openDiv === 1 && (
          <div className="input-container">
            <p className='font-semibold text-[10px]'>Distortion level::</p>
            <input type="range" placeholder="Distortion Input" />
            <button className='volButton w-full py-2 my-2 rounded-[8px] text-[10px] text-white'>Distortion Mute</button>
          </div>
        )}
      </div>
      <div onClick={() => toggleDiv(2)} className={`vol-effect text-[20px] font-semibold ${openDiv === 2 ? 'open' : ''}`}>
        <div className='flex justify-between items-center'><h2>Flanger</h2>
        <Image src="/downArrow.svg" alt='down' width={20} height={20} />
        </div>
        {openDiv === 2 && (
          <div className="input-container">
            <p className='font-semibold text-[10px]'>Flanger level::</p>
            <input type="range" placeholder="Flanger Input" />
            <button className='volButton w-full py-2 my-2 rounded-[8px] text-[10px] text-white'>Flanger Mute</button>
          </div>
        )}
      </div>
      <div onClick={() => toggleDiv(3)} className={`vol-effect text-[20px] font-semibold ${openDiv === 3 ? 'open' : ''}`}>
        <div className='flex justify-between items-center'><h2>Reverb</h2>
        <Image src="/downArrow.svg" alt='down' width={20} height={20} />
        </div>
        {openDiv === 3 && (
          <div className="input-container">
            <p className='font-semibold text-[10px]'>Reverb level::</p>
            <input type="range" placeholder="Volume Input" />
            <button className='volButton w-full py-2 my-2 rounded-[8px] text-[10px] text-white'>Reverb Mute</button>
          </div>
        )}
      </div>
      <div onClick={() => toggleDiv(4)} className={`vol-effect text-[20px] font-semibold ${openDiv === 4 ? 'open' : ''}`}>
        <div className='flex justify-between items-center'><h2>Tremolo</h2>
        <Image src="/downArrow.svg" alt='down' width={20} height={20} />
        </div>
        {openDiv === 4 && (
          <div className="input-container">
            <p className='font-semibold text-[10px]'>Tremolo level::</p>
            <input type="range" placeholder="Volume Input" />
            <button className='volButton w-full py-2 my-2 rounded-[8px] text-[10px] text-white'>Tremolo Mute</button>
          </div>
        )}
      </div> */}
      
      {/* <div onClick={() => toggleDiv(1)} className={`vol-effect ${openDiv === 1 ? 'open' : ''}`}>
        Distortion
        {openDiv === 1 && (
          <div className="input-container">

            <input type="text" placeholder="Distortion Input" />
          </div>
        )}
      </div>
      <div onClick={() => toggleDiv(2)} className={`vol-effect ${openDiv === 2 ? 'open' : ''}`}>
        Delay
        {openDiv === 2 && (
          <div className="input-container">
            <input type="text" placeholder="Delay Input" />
          </div>
        )}
      </div>
      <div onClick={() => toggleDiv(3)} className={`vol-effect ${openDiv === 3 ? 'open' : ''}`}>
        Flanger
        {openDiv === 3 && (
          <div className="input-container">
            <input type="text" placeholder="Flanger Input" />
          </div>
        )}
      </div>
      <div onClick={() => toggleDiv(4)} className={`vol-effect ${openDiv === 4 ? 'open' : ''}`}>
        Reverb
        {openDiv === 4 && (
          <div className="input-container">
            <input type="text" placeholder="Reverb Input" />
          </div>
        )}
      </div>
      <div onClick={() => toggleDiv(5)} className={`vol-effect ${openDiv === 5 ? 'open' : ''}`}>
        Tremolo
        {openDiv === 5 && (
          <div className="input-container">
            <input type="text" placeholder="Tremolo Input" />
          </div>
        )}
      </div> */}
    </div>
    
  );
};

export default VolEffects;
