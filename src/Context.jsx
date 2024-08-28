import React, { useState } from 'react';
import axios from 'axios';


const myContext = React.createContext();

function ContextProvider({ children }) {
    const [pickLocation, setPickLocation] = useState(null);
    const [deliverLocation, setDeliverLocation] = useState(null);
    const [isBooked, setIsBooked] = useState(false);
    const [vehicle, setVehicle] = useState('');
    const [distance, setDistance] = useState('');
    const [pickAddress, setPickAddress] = useState('');
    const [deliverAddress, setDeliverAddress] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [showMap, setShowMap] = useState(false)
  const [showDrone, setShowDrone] = useState(false)


// backend
  const [user, setUser] = useState(null);
  //used in register form
  const [values, setValues] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: ''
  });
  //used in profile.jsx to update user info
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: ''
  });
  const [isEditing, setIsEditing] = useState(false);





    //this use used for current location
    const reverseGeocode = async (lat, lng) => {
        try {
          const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
          return response.data.display_name;
        } catch (error) {
          console.error("Error reverse geocoding:", error);
          setErrorMessage("Failed to fetch address. Please try again.");
          return null;
        }
      };     
    
      // this is used to set up the current pick up location
            const handleSetPickupLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setPickLocation({ lat, lng });
    
            const address = await reverseGeocode(lat, lng);
            if (address) {
              setPickAddress(address);
              setShowMap(true)
              
            }
          });
        } else {
          alert("Current location is not supported by your device, buy a new device.");
        }
      };
    
      //this is used to set up current delovery location
      const handleSetDeliveryocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setDeliverLocation({ lat, lng });
    
            const address = await reverseGeocode(lat, lng);
            if (address) {
              setDeliverAddress(address);
              setShowMap(true)
            }
          });
        } else {
          alert("Current location is not supported by your device, buy a new device.");
        }
      };
    

      // this is used to calculate the estimated price
      
  const calculateEstimatedPrice = (distance, vehicle) => {
    if (!distance || !vehicle) return null;

    let pricePerKm;
    switch (vehicle) {
      case 'van':
        pricePerKm = 2.0;
        break;
      case 'car':
        pricePerKm = 1.5;
        break;
      case 'bike':
        pricePerKm = 1.0;
        break;
      case 'truck':
        pricePerKm = 2.5;
        break;
      default:
        pricePerKm = 1.0;
    }

    return distance * pricePerKm;
  };
      
  
  const estimatedPrice = calculateEstimatedPrice(distance, vehicle);


  //get user info so that he can stay logged in
  const getUserInfoFromToken = async (token) => {
    try {
      const response = await axios.get('http://localhost:3002/users/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      return null;
    }
  };
   
  // used to delete customer account
  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`http://localhost:3002/user/delete/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('User deleted successfully:', response.data);
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

 // update customer account information
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');
      
      const response = await axios.put(`http://localhost:3002/update/update/${user.id}`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
      setIsEditing(false);
      console.log('User updated successfully:', response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error updating account:', error);
    }
  };
  
   
   
   
    const context = {
        pickLocation,
        setPickLocation,
        deliverLocation,
        setDeliverLocation,
        isBooked,
        setIsBooked,
        vehicle,
        setVehicle,
        distance,
        setDistance,
        pickAddress,
        setPickAddress,
        deliverAddress,
        setDeliverAddress,
        handleSetPickupLocation,
        handleSetDeliveryocation,
        errorMessage,
        setErrorMessage,
        pickupDate,
        setPickupDate,
        pickupTime,
        setPickupTime,
        deliveryDate,
        setDeliveryDate,
        deliveryTime,
        setDeliveryTime,
        showMap,
        setShowMap,
        estimatedPrice,
        showDrone,
        setShowDrone,
        user,
        setUser,
        values,
        setValues,
        getUserInfoFromToken,
        handleDeleteAccount,
        handleSubmit,
        formData,
        setFormData,
        isEditing,
        setIsEditing
    };

    return (
        <myContext.Provider value={context}>
            {children}
        </myContext.Provider>
    );
}

export { myContext, ContextProvider };