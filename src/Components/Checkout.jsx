import React, { useContext, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { myContext } from '../Context';
import { useNavigate } from 'react-router-dom';


// const stripePromise = loadStripe('pk_test_51PsUGMP8fB4oMg6zjVQKcDcmGbl5hsb3NSk2mDpgtmSh4bZ9Ch8cyb0G0VQ9WctUeoMLUg3R6Y2HutlRUYlsTiPP004TtwYcct');

const Checkout = () => {
  const navigate = useNavigate();
 
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { orderData, price } = useContext(myContext);
  
  const handlePayment = async (event) => {
    event.preventDefault();
    navigate('/payment-form');

  
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3003/create-payment-intent', {
        price: parseFloat(orderData.price), // Ensure price is a valid number
        itemType: orderData.itemType // Replace with actual item type
      });
  
      const { clientSecret } = response.data;
  
      const cardElement = elements.getElement(CardElement);
  
      if (!cardElement) {
        setError('Card element not found');
        return;
      }
  
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });
  
      if (error) {
        console.error('Payment error:', error.message);
        setError(error.message);
      } else if (paymentIntent.status === 'succeeded') {
        console.log('Payment successful!');
        setSuccess(true);
      }
    } catch (error) {
      console.error('Failed to create checkout session:', error);
      setError('Failed to create checkout session');
    }
  };

  if (!stripe) {
    return <div>Loading...</div>;
  }

  const Price = orderData.price ? orderData.price.toFixed(2) : '0.00';


  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">Checkout</h2>
      <div className="space-y-4">
        <p className="text-gray-300"><strong>Pickup Location:</strong> {orderData.pickupLocation}</p>
        <p className="text-gray-300"><strong>Delivery Location:</strong> {orderData.dropLocation}</p>
        <p className="text-gray-300"><strong>Item Type:</strong> {orderData.itemType}</p>
        <p className="text-gray-300"><strong>Length:</strong> {orderData.length}</p>
        <p className="text-gray-300"><strong>Width:</strong> {orderData.width}</p>
        <p className="text-gray-300"><strong>Height:</strong> {orderData.height}</p>
        <p className="text-gray-300"><strong>Weight:</strong> {orderData.weight}</p>
        <p className="text-gray-300"><strong>Vehicle Type:</strong> {orderData.vehicleType}</p>
        <p className="text-gray-300"><strong>Pickup Time:</strong> {orderData.pickupDateTime}</p>
        <p className="text-gray-300"><strong>Delivery Time:</strong> {orderData.deliveryDateTime}</p>
        <p className="text-xl font-semibold text-white"><strong>SubTotal:</strong> ${Price}</p>
      </div>
      <div className="text-center mt-6">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handlePayment}
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;