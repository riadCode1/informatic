// components/RatingStars.tsx
import React from "react";

interface RatingStarsProps {
  ratings: number; // e.g., 4.5
  totalStars?: number; // default 5
}

const RatingStars: React.FC<RatingStarsProps> = ({ ratings, totalStars =2  }) => {
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= Math.floor(ratings)) {
      // full star
      stars.push(
        <span key={i} className="  text-yellow-400">&#9733;</span>
      );
    } else if (i === Math.ceil(ratings) && ratings % 1 !== 0) {
      // half star
      stars.push(
        <span key={i} className="text-yellow-400 relative">
          <span className="absolute overflow-hidden" style={{ width: "50%" }}>&#9733;</span>
          <span className="text-gray-300">&#9733;</span>
        </span>
      );
    } else {
      // empty star
      stars.push(
        <span key={i} className="text-gray-300">&#9733;</span>
      );
    }
  }

  return <div className="flex space-x-1">{stars}</div>;
};

export default RatingStars;
