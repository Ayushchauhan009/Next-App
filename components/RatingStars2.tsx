"use client"

import React, { useState } from 'react';

const RatingStars2 = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (clickedStarIndex : any) => {
    setRating(clickedStarIndex + 1);
  };

  return (
    <div className='flex space-x-1'>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          filled={index < rating}
          onClick={() => handleRating(index)}
        />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }: any) => (
    <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill={filled ? '#F4CE14' : '#B6BBC4'}
    stroke={filled ? '#F4CE14' : '#B6BBC4'}
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    {/* Star with sharp edges SVG path */}
    <polygon points="12 2 14.4 8.1 21.5 9.3 16.2 13.9 17.4 21 12 16.4 6.6 21 7.8 13.9 2.5 9.3 9.6 8.1" />
  </svg>
);

export default RatingStars2;
