import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'  


const containerStyle = {
    width: '80%',
    height: '400px'
  }
  
  const center = {
    lat: 38.722,
    lng: -9.123
  }
  
  const Map = ({ onPickLocation, onDeliverLocation, pickLocation, deliverLocation }) => {
    const handleMapClick = (event) => {
      const location = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
  
      if (!pickLocation) {
        onPickLocation(location)
      } else if (!deliverLocation) {
        onDeliverLocation(location)
      }
    }
  
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={handleMapClick}
      >
        {pickLocation && <Marker position={pickLocation} />}
        {deliverLocation && <Marker position={deliverLocation} />}
      </GoogleMap>
    )
  }
  
  export default Map