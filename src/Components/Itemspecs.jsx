import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../Context'
import styles from './Itemspecs.module.css'
import axios from 'axios'

const Itemspecs = () => {
  const { setVehicle , setShowDrone } = useContext(myContext)
  const [itemType, setItemType] = useState('')
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [error, setError] = useState(null)
  const { user } = useContext(myContext)

  const handleBookClick = async () => { // Make the function async
    if (!itemType) {
      setError('Please select an item type.');
      return;
    }
    if (!length || !width || !height || !weight) {
      setError('Please fill in all dimensions and weight.');
      return;
    }
    const itemData = {
      itemType,
      length,
      width,
      height,
      weight,
      userId: user.id, // Assuming user object has an id property
    };
    // Call the API to save the item details
    try {
      console.log('Sending item data to API:', itemData);
      const response = await axios.post('http://localhost:3002/items/items', itemData); // Corrected URL
      console.log('API response:', response.data);
      alert('Item details saved successfully');
    } catch (err) {
      console.error('Error saving item details:', err.response ? err.response.data : err.message);
      setError('Failed to save item details');
    }
 

    setError('');
    console.log('Booking details:', { itemType, length, width, height, weight });
    if (!error) {
      handleSubmitClick();
      setError(null);
      setShowDrone(true);
    }
  };
  
  const handleSubmitClick = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const wt = parseFloat(weight);
  
    if (l <= 1 && w <= 1 && h <= 1 && wt <= 10) {
      setVehicle('bike');
    } else if (l <= 2 && w <= 2 && h <= 2 && wt <= 50) {
      setVehicle('car');
    } else if (l <= 3 && w <= 3 && h <= 3 && wt <= 200) {
      setVehicle('van');
    } else {
      setVehicle('truck');
    }
  };
 


  return (
    <div className="w-full max-w-md rounded-lg p-8 shadow-lg">
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <select
        className="mb-4 w-full rounded bg-gray-700 p-2 text-white"
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
            className="w-full rounded bg-gray-700 p-2 text-white"
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-white">Width:</label>
          <input
            className="w-full rounded bg-gray-700 p-2 text-white"
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-white">Height:</label>
          <input
            className="w-full rounded bg-gray-700 p-2 text-white"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-white">Weight:</label>
          <input
            className="w-full rounded bg-gray-700 p-2 text-white"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </div>

      <button
        className="mt-4 w-24 rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
        onClick={handleBookClick}
      >
        Submit
      </button>
    </div>
  )
}

export default Itemspecs
