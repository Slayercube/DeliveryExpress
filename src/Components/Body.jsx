import React, { useState, useRef, useEffect, useContext } from 'react';
import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder';
import Itemspecs from './Itemspecs';
import { myContext } from '../Context';
import Map from './Map';
import styles from './Body.module.css'

const Body = () => {
  const { setPickLocation, setDeliverLocation, isBooked , setIsBooked } = useContext(myContext);
  const [pickAddress, setPickAddress] = useState('');
  const [deliverAddress, setDeliverAddress] = useState('');
  const [pickResults, setPickResults] = useState([]);
  const [deliverResults, setDeliverResults] = useState([]);
  const [showItemspecs, setShowItemspecs] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const pickGeocoderRef = useRef(null);
  const deliverGeocoderRef = useRef(null);

  useEffect(() => {
    pickGeocoderRef.current = L.Control.Geocoder.nominatim();
    deliverGeocoderRef.current = L.Control.Geocoder.nominatim();
  }, []);

  const handlePickAddressChange = (e) => {
    setPickAddress(e.target.value);
    if (pickGeocoderRef.current) {
      pickGeocoderRef.current.geocode(e.target.value, (results) => {
        setPickResults(results);
      });
    }
  };

  const handleDeliverAddressChange = (e) => {
    setDeliverAddress(e.target.value);
    if (deliverGeocoderRef.current) {
      deliverGeocoderRef.current.geocode(e.target.value, (results) => {
        setDeliverResults(results);
      });
    }
  };

  const handlePickResultClick = (result) => {
    setPickAddress(result.name);
    setPickLocation(result.center);
    setPickResults([]);
  };

  const handleDeliverResultClick = (result) => {
    setDeliverAddress(result.name);
    setDeliverLocation(result.center);
    setDeliverResults([]);
  };
  const handleBookClick = () => {
    if (!pickAddress || !deliverAddress ) {
      setErrorMessage('Please fill the both pickup and delivery locations.')
      return;
    }
    setShowItemspecs(true);
    setIsBooked(true);
    setErrorMessage('')
 
  };

  return (
    <div>
      <div>
      <h3>Pickup Location</h3>
        <input
          type="text"
          placeholder="Pick-up Address"
          value={pickAddress}
          onChange={handlePickAddressChange}
        />
        <ul>
          {pickResults.map((result, index) => (
            <li key={index} onClick={() => handlePickResultClick(result)}>
              {result.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Delivery Location</h3>
        <input
          type="text"
          placeholder="Delivery Address"
          value={deliverAddress}
          onChange={handleDeliverAddressChange}
        />
        <ul>
          {deliverResults.map((result, index) => (
            <li key={index} onClick={() => handleDeliverResultClick(result)}>
              {result.name}
            </li>
          ))}
        </ul>
      </div>
    

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {!isBooked && (
        <button onClick={handleBookClick}>fill Details</button>
        
      )}
      {showItemspecs && <Itemspecs />}
      <br /> 
      <Map />
    </div>
  );
};

export default Body;