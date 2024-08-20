import React, { useContext, useState } from 'react';
import { myContext } from '../Context';
import styles from './Itemspecs.module.css';

const Itemspecs = () => {
  const { setVehicle } = useContext(myContext);
  const [itemType, setItemType] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [error, setError] = useState(null);

  const handleBookClick = () => {
    if (!itemType) {
      setError('Please select an item type.');
      return;
    }
    if (!length || !width || !height || !weight) {
      setError('Please fill in all dimensions and weight.');
      return;
    }
    setError('');
    console.log('Booking details:', { itemType, length, width, height, weight });
    if (!error) {
      handleSubmitClick();
      setError(null);
    }
  };

  const handleSubmitClick = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const wt = parseFloat(weight);

    if (l <= 1 && w <= 1 && h <= 1 && wt <= 10) {
      setVehicle("bike");
    } else if (l <= 2 && w <= 2 && h <= 2 && wt <= 50) {
      setVehicle("car");
    } else if (l <= 3 && w <= 3 && h <= 3 && wt <= 200) {
      setVehicle("van");
    } else {
      setVehicle("truck");
    }
  };

  return (
   
      <div className=" p-8 rounded-lg shadow-lg w-full max-w-md">
      {error && <div className="text-red-500 mb-4">{error}</div>}
        <select
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
          value={itemType}
          onChange={(e) => setItemType(e.target.value)}
        >
          <option value="">Select item</option>
          <option value="Documents">Documents</option>
          <option value="Box">Box</option>
          <option value="Furniture">Furniture</option>
          <option value="Electronics">Electronics</option>
        </select>
        <div className="space-y-4">
          <div>
            <label className="block text-white">Length:</label>
            <input
              className="w-full p-2 bg-gray-700 text-white rounded"
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-white">Width:</label>
            <input
              className="w-full p-2 bg-gray-700 text-white rounded"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-white">Height:</label>
            <input
              className="w-full p-2 bg-gray-700 text-white rounded"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-white">Weight:</label>
            <input
              className="w-full p-2 bg-gray-700 text-white rounded"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

          </div>
        
        </div>
    
        <button
          className="w-24 mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 "
          onClick={handleBookClick}
        >
          Submit
        </button>
      </div>
    
  );
};

export default Itemspecs;