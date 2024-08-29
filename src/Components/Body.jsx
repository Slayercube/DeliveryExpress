import React, { useState, useRef, useEffect, useContext } from 'react'
import L from 'leaflet'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'
import 'leaflet-control-geocoder'
import Itemspecs from './Itemspecs'
import { myContext } from '../Context'
import Map from './Map'
import styles from './Body.module.css'

import Bus from './vehicles/Bus'

import Car from './vehicles/Car'
import InfoForm from './Infoform'

const Body = () => {
  const {
    setPickLocation,
    setDeliverLocation,
    isBooked,
    setIsBooked,
    deliverAddress,
    setDeliverAddress,
    pickAddress,
    setPickAddress,
    handleSetPickupLocation,
    handleSetDeliveryocation,
    errorMessage,
    setErrorMessage,
    showMap,
    setShowMap,
    showDrone,
    orderData,  
    setOrderData,
   
  } = useContext(myContext)

  const [pickResults, setPickResults] = useState([])
  const [deliverResults, setDeliverResults] = useState([])
  const [showItemspecs, setShowItemspecs] = useState(false)

  const pickGeocoderRef = useRef(null)
  const deliverGeocoderRef = useRef(null)

  useEffect(() => {
    pickGeocoderRef.current = L.Control.Geocoder.nominatim()
    deliverGeocoderRef.current = L.Control.Geocoder.nominatim()
  }, [])

  const handlePickAddressChange = (e) => {
    setPickAddress(e.target.value)
    if (pickGeocoderRef.current) {
      pickGeocoderRef.current.geocode(e.target.value, (results) => {
        setPickResults(results)
        setShowMap(true)
      })
    }
  }

  const handleDeliverAddressChange = (e) => {
    setDeliverAddress(e.target.value)
    if (deliverGeocoderRef.current) {
      deliverGeocoderRef.current.geocode(e.target.value, (results) => {
        setDeliverResults(results)
        setShowMap(true)
      })
    }
  }

  const handlePickResultClick = (result) => {
    setPickAddress(result.name)
    setPickLocation(result.center)
    setOrderData({ ...orderData, pickupLocation: result.name });
    setPickResults([])
  }

  const handleDeliverResultClick = (result) => {
    setDeliverAddress(result.name)
    setDeliverLocation(result.center)
    setOrderData({ ...orderData, dropLocation: result.name });
    setDeliverResults([])
  }

  const handleBookClick = () => {
    if (!pickAddress || !deliverAddress) {
      setErrorMessage('Please fill the both pickup and delivery locations.')
      return
    }
    setShowItemspecs(true)
    setOrderData({ ...orderData, pickupLocation: pickAddress, dropLocation: deliverAddress });
    setIsBooked(true)
    setErrorMessage('')
  }
  
  return (
    <div className="container">
    
      <div
        className={`${styles.container} ${showItemspecs ? styles.containerShifted : ''}`}
      >
        <div
          className={`${styles.section} ${showItemspecs ? styles.sectionShifted : ''}`}
        >
          <h3 className={styles.heading}>Pickup Location</h3>
          <input
            className={styles.input}
            type="text"
            name='pickupLocation'
            placeholder="Pick-up Address"
            value={pickAddress}
            onChange={handlePickAddressChange}
          />
          <button className={styles.icon} onClick={handleSetPickupLocation}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={styles.iconSvg}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
          </button>
          <ul className={styles.list}>
            {pickResults.map((result, index) => (
              <li
                key={index}
                className={styles.listItem}
                onClick={() => handlePickResultClick(result)}
              >
                {result.name}
              </li>
            ))}
          </ul>

          <h3 className={styles.heading}>Delivery Location</h3>
          <input
            className={styles.input}
            type="text"
            name='dropLocation'
            placeholder="Delivery Address"
            value={deliverAddress}
            onChange={handleDeliverAddressChange}
          />
          <button className={styles.icon} onClick={handleSetDeliveryocation}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={styles.iconSvg}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
          </button>
          <ul className={styles.list}>
            {deliverResults.map((result, index) => (
              <li
                key={index}
                className={styles.listItem}
                onClick={() => handleDeliverResultClick(result)}
              >
                {result.name}
              </li>
            ))}
          </ul>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {!isBooked && (
            <button className="btn btn-primary" onClick={handleBookClick}>
              fill Details
            </button>
          )}
        </div>

        <div className={styles.specs}> {showItemspecs && <Itemspecs />} </div>
      </div>

      

      <div className={styles.map}>{showMap && <Map />}</div>
      <br />

      <dir> {showDrone && <Car />} </dir>
      {/* <Car /> */}
        <InfoForm />
      <Bus />
    </div>
  )
}

export default Body
