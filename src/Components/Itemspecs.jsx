import React, { useState } from 'react';
import styles from './Itemspecs.module.css';

const Itemspecs = () => {
  const [itemType, setItemType] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [error, setError] = useState('');

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
  };

  return (
    <div className='card' id={styles.box}>
      <select value={itemType} onChange={(e) => setItemType(e.target.value)}>
        <option value="">Select item</option>
        <option value="Documents">Documents</option>
        <option value="Box">Box</option>
        <option value="Furniture">Furniture</option>
        <option value="Electronics">Electronics</option>
      </select>
      <input
        className={styles.box}
        type='number'
        placeholder='length'
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <input
        className={styles.box}
        type='number'
        placeholder='width'
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <input
        className={styles.box}
        type='number'
        placeholder='height'
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        className={styles.box}
        type='number'
        placeholder='weight'
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      {error && <p className={styles.error}>{error}</p>}
      <button onClick={handleBookClick}>Book</button>
    </div>
  );
};

export default Itemspecs;