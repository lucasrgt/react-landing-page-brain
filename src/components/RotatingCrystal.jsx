import React from 'react';

const RotatingCrystal = ({ color = 'gray' }) => {
  return (
    <img
      id="rotating-crystal"
      src={`src/assets/img/gif/rotating-crystal-${color}.gif`}
    ></img>
  );
};

export default RotatingCrystal;
