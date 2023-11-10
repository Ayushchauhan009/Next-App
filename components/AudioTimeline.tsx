"use client"


// components/AudioTimeline.tsx
import React, { useRef, useEffect } from 'react';
import WaveSurfer from 'react-wavesurfer';
import 'wavesurfer.js/dist/wavesurfer.css';

interface AudioTimelineProps {
  audioUrl: string;
}

const AudioTimeline: React.FC<AudioTimelineProps> = ({ audioUrl }) => {
  const wavesurferRef = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (wavesurferRef.current) {
      wavesurferRef.current.load(audioUrl);
    }
  }, [audioUrl]);

  return (
    <div>
      <WaveSurfer
        ref={wavesurferRef}
        options={{
          waveColor: '#555',
          progressColor: 'purple',
          cursorWidth: 1,
          barWidth: 2,
          barRadius: 3,
          responsive: true,
          height: 50,
        }}
      />
    </div>
  );
};

export default AudioTimeline;
