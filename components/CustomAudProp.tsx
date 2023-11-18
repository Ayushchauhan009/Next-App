"use client"

import React, { useEffect, useRef, useState } from 'react';
// import './CustomAudio.css'; // Import your CSS file for styling

interface AudioProps {
  src: string;
  style?: React.CSSProperties;
}

const CustomAudProp: React.FC<AudioProps> = ({ src, style }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const barsRef = useRef<HTMLDivElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;
    const barsElement = barsRef.current;

    if (!audioElement || !barsElement) return;

    const numberOfBars = 35; // Adjust the number of bars as needed

    for (let i = 0; i < numberOfBars; i++) {
      const audioBar = document.createElement('div');
      audioBar.className = 'audio-bar';
      audioBar.style.height = i % 2 === 0 ? '80%' : '60%';
      audioBar.style.marginBottom = i % 2 === 0 ? '0px' : '5px';
      barsElement.appendChild(audioBar);
    }

    const updateAudioBars = () => {
      if (audioElement.duration) {
        const percentage = (audioElement.currentTime / audioElement.duration) * 100;
        setCurrentTime(audioElement.currentTime);
        barsElement.style.width = percentage + '%';
      }
    };

    audioElement.addEventListener('timeupdate', updateAudioBars);

    return () => {
      audioElement.removeEventListener('timeupdate', updateAudioBars);
    };
  }, []);

  return (
    <div className="custom-audio-player -ml-3" style={style}>
      <audio ref={audioRef} controls>
        <source src={src} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <div ref={barsRef} className="audio-bars"></div>
    </div>
  );
};

export default CustomAudProp;

