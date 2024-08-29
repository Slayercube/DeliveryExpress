import React, { useContext } from 'react'
import { myContext } from '../Context'
import axios from 'axios'

const InfoForm = () => {
  const { orderData ,user } = useContext(myContext)
  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...orderData,
        toCustomer: user.id, 
      };
      await axios.post('http://localhost:3002/items', dataToSend);
      // alert('Item data submitted successfully!');
    } catch (error) {
      console.error('Error submitting item data:', error);
      // alert('Failed to submit item data.');
    }
  };
  if (!user || !user.id) {
    console.error('User ID is missing');
    return;
  }

  
  return (
    <div>
      <h2>Order Information</h2>
      <p>Pickup Location: {orderData.pickupLocation}</p>
      <p>Delivery Location: {orderData.dropLocation}</p>
      <p>Item Type: {orderData.itemType}</p>
      <p>Length: {orderData.length}</p>
      <p>Width: {orderData.width}</p>
      <p>Height: {orderData.height}</p>
      <p>Weight: {orderData.weight}</p>
      <p>Vehicle Type: {orderData.vehicleType}</p>
      <p>Pickup Time: {orderData.pickupDateTime}</p>
      <p>Delivery Time: {orderData.deliveryDateTime}</p>
      <button className="btn btn-danger" onClick={handleSubmitOrder}>payment</button>
    </div>
  )
}

export default InfoForm
