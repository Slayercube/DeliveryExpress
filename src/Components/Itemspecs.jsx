import React, { useContext, useState } from 'react';
import styles from './Itemspecs.module.css';
import { myContext } from '../Context';

const Itemspecs = () => {
  const { setVehicle} = useContext(myContext)
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
      handleSubmitClick()
      setError(null)

     

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
    <div className='card' id={styles.box}>
          {error && <div style={{ color: 'red' }}>{error}</div>}
      <select className={styles.select} value={itemType} onChange={(e) => setItemType(e.target.value)}>
        <option value="">Select item</option>
        <option value="Documents">Documents</option>
        <option value="Box">Box</option>
        <option value="Furniture">Furniture</option>
        <option value="Electronics">Electronics</option>
      </select>
      <div className={styles.container}>
          <div >
            <label>Length: </label>
            <input className={styles.input} type="number" value={length} onChange={(e) => setLength(e.target.value)} />
          </div>
          <div>
            <label>Width: </label>
            <input className={styles.input} type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
          </div>
          <div>
            <label>Height: </label>
            <input className={styles.input} type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <label>Weight: </label>
            <input className={styles.input} type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <p>if you are not sure about the details you can contact us 
          <button className='btn btn-dark'>i need help</button>
          </p>
          <button className='btn btn-primary' onClick={handleBookClick}>Submit</button>
        
          {/* {vehicle && <div>Vehicle: {vehicle}</div>} */}




        </div>
    </div>
  );
};

export default Itemspecs;