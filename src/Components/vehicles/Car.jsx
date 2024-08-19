import React from 'react';
import './Car.css';

const Car = () => {
  return (
    <div className="drone-container">
      <div className="drone translate-y-[10px]">

    
        <div className="drone-body">
          <div className="billboard">
            <img src="your-image.jpg" alt="Display" />
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Link</a>
          </div>
          <div className="arm arm-top-left"></div>
          <div className="arm arm-top-right"></div>
          <div className="arm arm-bottom-left"></div>
          <div className="arm arm-bottom-right"></div>
          <div className="propeller propeller-top-left"></div>
          <div className="propeller propeller-top-right"></div>
          <div className="propeller propeller-bottom-left"></div>
          <div className="propeller propeller-bottom-right"></div>
          <div className="light light-top-left"></div>
          <div className="light light-top-right"></div>
          <div className="light light-bottom-left"></div>
          <div className="light light-bottom-right"></div>

          <div className="camera">
  <div className="camera-light"></div>
</div>
          
          <div className="landing-gear landing-gear-left"></div>
          <div className="landing-gear landing-gear-right"></div>
          <div className="antenna antenna-left"></div>
          <div className="antenna antenna-right"></div>
          <div className="sensor sensor-front"></div>
          <div className="sensor sensor-back"></div>
        </div>


      </div>
    </div>
  );
};

export default Car;