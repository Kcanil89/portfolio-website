import React from 'react';
import './Preloader.css';
import { ReactComponent as Loafy } from '../assets/Loafy.svg';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="baking-animation">
        <Loafy />
        <p>Baking something fresh...</p>
      </div>
    </div>
  );
};

export default Preloader;