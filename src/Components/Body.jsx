import React, { useState, useRef } from 'react'

import { Autocomplete } from '@react-google-maps/api'
import Itemspecs from './Itemspecs'

const Body = () => {
  const [pickLocation, setPickLocation] = useState(null)
  const [deliverLocation, setDeliverLocation] = useState(null)
  const [pickAddress, setPickAddress] = useState('')
  const [deliverAddress, setDeliverAddress] = useState('')
  const [showItemspecs, setShowItemspecs] = useState(false); 

  const pickAutocompleteRef = useRef(null)
  const deliverAutocompleteRef = useRef(null)

  const handlePickLocation = (location) => {
    setPickLocation(location)
  }
  
  const handleDeliverLocation = (location) => {
    setDeliverLocation(location)
  }
  
  const handlePickPlaceChanged = () => {
    const place = pickAutocompleteRef.current.getPlace()
    const location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    }
    setPickLocation(location)
    setPickAddress(place.formatted_address)
    handlePickLocation(location)
  }
  
  const handleDeliverPlaceChanged = () => {
    const place = deliverAutocompleteRef.current.getPlace()
    const location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    }
    setDeliverLocation(location)
    setDeliverAddress(place.formatted_address)
    handleDeliverLocation(location)
  }
  const handleBookClick = () => {
    setShowItemspecs(true);
  };
  
  return (
    <div className="main_body">
      <h1>Pick and Deliver Locations</h1>
      <div>
        <h2>Pick Location</h2>
        <Autocomplete
          onLoad={(autocomplete) => (pickAutocompleteRef.current = autocomplete)}
          onPlaceChanged={handlePickPlaceChanged}
        >
          <input
            type="text"
            placeholder="Enter pick-up address"
            value={pickAddress}
            onChange={(e) => setPickAddress(e.target.value)}
          />
        </Autocomplete>
        <div>
          <strong>Selected Pick-up Address:</strong> {pickAddress}
        </div>
      </div>
      <div>
        <h2>Deliver Location</h2>
        <Autocomplete
          onLoad={(autocomplete) => (deliverAutocompleteRef.current = autocomplete)}
          onPlaceChanged={handleDeliverPlaceChanged}
        >
          <input
            type="text"
            placeholder="Enter delivery address"
            value={deliverAddress}
            onChange={(e) => setDeliverAddress(e.target.value)}
          />
        </Autocomplete>
        <div>
          <strong>Selected Delivery Address:</strong> {deliverAddress}
        </div>
        <button onClick={handleBookClick}>book</button>
      </div>
      {showItemspecs && <Itemspecs />}
    </div>
  )
}

export default Body