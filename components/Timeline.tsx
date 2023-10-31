"use client"



// import React, { useState } from 'react';
// import ReactPlayer from 'react-player';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';
// import 'videojs-record/dist/css/videojs.record.css';

// const VideoTimeline = () => {
//   const [player, setPlayer] = useState<ReactPlayer | null>(null);

//   const handlePlay = () => {
//     if (player) {
//       player.getInternalPlayer().play();
//     }
//   };

//   const handleStop = () => {
//     if (player) {
//       player.getInternalPlayer().pause();
//     }
//   };

//   // Implement more advanced functionality like Split, Trim, etc. using the libraries

//   return (
//     <div className="timeline-container">
//       <div className="timeline-bar">
//         {/* Video player */}
//         <div className="timeline-part">
//           <ReactPlayer
//             ref={(player) => setPlayer(player)}
//             url="your-video-url.mp4"
//             playing={false}
//           />
//         </div>

//         {/* Previous, Play, Next buttons */}
//         <div className="timeline-part">
//           <div className="timeline-buttons">
//             <button onClick={handlePlay}>Play</button>
//             <button onClick={handleStop}>Stop</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoTimeline;






import React from 'react'

const Timeline = () => {
  return (
    <div>Timeline</div>
  )
}

export default Timeline