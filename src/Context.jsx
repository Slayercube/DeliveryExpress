import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const myContext = React.createContext()

function ContextProvider({ children }) {
  const [pickLocation, setPickLocation] = useState(null)
  const [deliverLocation, setDeliverLocation] = useState(null)
  const [isBooked, setIsBooked] = useState(false)
  const [vehicle, setVehicle] = useState('')
  const [distance, setDistance] = useState('')
  const [pickAddress, setPickAddress] = useState('')
  const [deliverAddress, setDeliverAddress] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [pickupTime, setPickupTime] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const [deliveryTime, setDeliveryTime] = useState('')
  const [showMap, setShowMap] = useState(false)
  const [showDrone, setShowDrone] = useState(false)
  const [dpmCheckerLink, setDpmCheckerLink] = useState("");
  


  // backend
  const [user, setUser] = useState(null)
  //used in register form
  const [values, setValues] = useState({
    username: '',
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
  })
  //used in profile.jsx to update user info
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
  })
  const [isEditing, setIsEditing] = useState(false)

// used to fill the order table in the database
  const userId = user && user.id
  const [orderData, setOrderData] = useState({
    toCustomer: userId,
    pickupLocation: '',
    dropLocation: '',
    itemType: '',
    weight: '',
    width: '',
    length: '',
    height: '',
    vehicleType: '',
    pickupTime: '',
    deliveryTime: '',
    price:'',
  })
  

  //this use used for current location
  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
      )
      return response.data.display_name
    } catch (error) {
      console.error('Error reverse geocoding:', error)
      setErrorMessage('Failed to fetch address. Please try again.')
      return null
    }
  }

  // this is used to set up the current pick up location
  const handleSetPickupLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        setPickLocation({ lat, lng })

        const address = await reverseGeocode(lat, lng)
        if (address) {
          setPickAddress(address)
          setShowMap(true)
        }
      })
    } else {
      alert(
        'Current location is not supported by your device, buy a new device.',
      )
    }
  }

  //this is used to set up current delovery location
  const handleSetDeliveryocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        setDeliverLocation({ lat, lng })

        const address = await reverseGeocode(lat, lng)
        if (address) {
          setDeliverAddress(address)
          setShowMap(true)
        }
      })
    } else {
      alert(
        'Current location is not supported by your device, buy a new device.',
      )
    }
  }

  // this is used to calculate the estimated price

  const calculateEstimatedPrice = (distance, vehicle) => {
    if (!distance || !vehicle) return null

    let pricePerKm
    switch (vehicle) {
      case 'van':
        pricePerKm = 2.0
        break
      case 'car':
        pricePerKm = 1.5
        break
      case 'bike':
        pricePerKm = 1.0
        break
      case 'truck':
        pricePerKm = 2.5
        break
      default:
        pricePerKm = 1.0
    }

    return distance * pricePerKm
  }

  const estimatedPrice = calculateEstimatedPrice(distance, vehicle)

  useEffect(() => {
    setOrderData((prevOrderData) => ({
      ...prevOrderData,
      price: estimatedPrice,
    }));
  }, [estimatedPrice]);
 



  // this is used to set the date and time for pick up and delivery
  // const handlePickupDateChange = (e) => {
  //   const pickupDate = e.target.value;
  //   const pickupDateTime = `${pickupDate} ${orderData.pickupTime || '00:00:00'}`;
  //   setOrderData({ ...orderData, pickupDate, pickupDateTime });
  // };

  // const handlePickupTimeChange = (e) => {
  //   const pickupTime = e.target.value;
  //   const pickupDateTime = `${orderData.pickupDate || today} ${pickupTime}`;
  //   setOrderData({ ...orderData, pickupTime, pickupDateTime });
  // };

  // const handleDeliveryDateChange = (e) => {
  //   const deliveryDate = e.target.value;
  //   const deliveryDateTime = `${deliveryDate} ${orderData.deliveryTime || '00:00:00'}`;
  //   setOrderData({ ...orderData, deliveryDate, deliveryDateTime });
  // };

  // const handleDeliveryTimeChange = (e) => {
  //   const deliveryTime = e.target.value;
  //   const deliveryDateTime = `${orderData.deliveryDate || today} ${deliveryTime}`;
  //   setOrderData({ ...orderData, deliveryTime, deliveryDateTime });
  // };

  //get user info so that he can stay logged in
  const getUserInfoFromToken = async (token) => {
    try {
      const response = await axios.get('http://localhost:3002/users/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      return response.data
    } catch (error) {
      console.error('Error fetching user info:', error)
      return null
    }
  }

  // used to delete customer account
  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.delete(
        `http://localhost:3002/user/delete/${user.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      console.log('User deleted successfully:', response.data)
    } catch (error) {
      console.error('Error deleting account:', error)
    }
  }

  // update customer account information
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      if (!token) throw new Error('No token found')

      const response = await axios.put(
        `http://localhost:3002/update/update/${user.id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      setUser(response.data)
      setIsEditing(false)
      console.log('User updated successfully:', response.data)
      window.location.reload()
    } catch (error) {
      console.error('Error updating account:', error)
    }
  }

  //filling the order table

  
  


  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setOrderData({ ...orderData, [name]: value })
  // }
//   const handleChange = (e) => {
//     if (!e || !e.target) {
//         console.error("Event or event target is undefined");
//         return;
//     }
//     const { name, value } = e.target;
//     setOrderData((prevOrderData) => ({ ...prevOrderData, [name]: value }));
// }

  // const handleSubmitOrder = async (e) => {
  //   e.preventDefault()
  //   try {
  //     await axios.post('http://localhost:3002/items', orderData)
  //     // alert('Item data submitted successfully!')
  //   } catch (error) {
  //     console.error('Error submitting item data:', error)
  //     // alert('Failed to submit item data.')
  //   }
  // }

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
    setIsEditing,
    // handleChange,
    // handleSubmitOrder,
    orderData,
    setOrderData,
    // handlePickupDateChange,
    // handlePickupTimeChange,
    // handleDeliveryDateChange,
    // handleDeliveryTimeChange,
    // pickupDateTime,
    // deliveryDateTime,
    dpmCheckerLink,
    setDpmCheckerLink,
   


  }

  return <myContext.Provider value={context}>
  {children}
  </myContext.Provider>

}

const AuthContext = createContext();

 const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 const navigate = useNavigate();


  
 useEffect(() => {
  const checkAuthStatus = async () => {
    const token = localStorage.getItem('authToken');
    console.log('Token from localStorage:', token); // Debugging statement
    if (token) {
      try {
        // Replace with your backend API endpoint
        const response = await axios.get('/auth/verify', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Response from /verify:', response); // Debugging statement
        if (response.status === 200) {
          setIsLoggedIn(true);
          console.log('User is logged in'); // Debugging statement
        } else {
          setIsLoggedIn(false);
          console.log('User is not logged in'); // Debugging statement
        }
      } catch (error) {
        console.error('Token verification failed:', error);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
      console.log('No token found'); // Debugging statement
    }
  };

  checkAuthStatus();
}, []);

  const handleLogin = async (email,username, password) => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token);
        console.log('Token set in localStorage:', response.data.token); // Debugging statement
        setIsLoggedIn(true);
        navigate('/'); // Navigate to the app page after successful login
      } else {
        console.error('Login failed with status:', response.status);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleCLickPage = () => {
    if (isLoggedIn) {
      navigate('/app');
    } else {
      navigate('/login');
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn ,handleCLickPage , handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};




export { myContext, ContextProvider , AuthContext, AuthProvider}  
