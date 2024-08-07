import React, { useState } from 'react';
import Itemspecs from './Itemspecs'; // Assuming you have an Itemspecs component

const Body = () => {
  const [showItemspecs, setShowItemspecs] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [vehicle, setVehicle] = useState('');

  const handleBookClick = () => {
    setShowItemspecs(true);
    setIsBooked(true);
  };

  const handleSubmitClick = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const wt = parseFloat(weight);

    if (l <= 1 && w <= 1 && h <= 1 && wt <= 10) {
      setVehicle('Bike');
    } else if (l <= 2 && w <= 2 && h <= 2 && wt <= 50) {
      setVehicle('Car');
    } else if (l <= 3 && w <= 3 && h <= 3 && wt <= 200) {
      setVehicle('Van');
    } else {
      setVehicle('Truck');
    }
  };

  return (
    <div>
      {!isBooked && (
        <button onClick={handleBookClick}>Book</button>
      )}
      {showItemspecs && (
        <div>
          <div>
            <label>Length: </label>
            <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
          </div>
          <div>
            <label>Width: </label>
            <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
          </div>
          <div>
            <label>Height: </label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <label>Weight: </label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <button onClick={handleSubmitClick}>Submit</button>
          {vehicle && <div>Vehicle: {vehicle}</div>}
        </div>
      )}
    </div>
  );
};

export default Body;