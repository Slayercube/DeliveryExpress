import React, { useContext, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
<<<<<<< HEAD
import styles from './Checkout.module.css'
=======
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { myContext } from '../Context';
import { useNavigate } from 'react-router-dom';
>>>>>>> fab4b6c6ac29333ddb631a22c8ffb22013998c85


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

<<<<<<< HEAD
  const price = orderData.price ? orderData.price.toFixed(2) : '0.00';

  const handlePayment = async () => {
    const stripe = await stripePromise;

    const response = await fetch('http://localhost:3003/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price: parseFloat(orderData.price), itemType: orderData.itemType }), // Ensure price is a float
    });

    if (!response.ok) {
      console.error('Failed to create checkout session');
      return;
    } Pwrap

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  return (
    <div className={`max-w-3xl my-40 mx-auto p-6  ${styles.payment1}`}>
      <div className='flex justify-center'>
        <img src="https://images.cooltext.com/5707015.png" width="387" height="74" alt="CheckOut" className='mt-4 mb-5  flex' />
=======
  
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
>>>>>>> fab4b6c6ac29333ddb631a22c8ffb22013998c85
      </div>

      <div className="space-y-5">

        <p className=" text-gray-300"><strong className={` mb-2 me-4   ${styles.pickup}`}>Pickup Location:</strong> {orderData.pickupLocation}</p>
        <hr className='mx-20' />

        <div><p className="text-light"><strong className={`me-4 mb-2 justify-center ${styles.delivery2}`}>Delivery Location:</strong> {orderData.dropLocation}</p></div>

        <hr className='mx-20' />

        <p className=" text-gray-300"><strong className='me-5 '>Item Type:</strong> {orderData.itemType}</p>

        <hr className='mx-20' />

        <p className="text-gray-300"><strong className=' me-20'>Length:</strong> {orderData.length}</p>

        <hr className='mx-20' />

        <p className="text-gray-300"><strong className=' me-20'>Width:</strong> {orderData.width}</p>

        <hr className='mx-20' />

        <p className="text-gray-300"><strong className=' me-20'>Height:</strong> {orderData.height}</p>

        <hr className='mx-20' />

        <p className="text-gray-300"><strong className=' me-20'>Weight:</strong> {orderData.weight}</p>

        <hr className='mx-20' />

        <p className="text-gray-300"><strong className=' me-10'>Vehicle Type:</strong> {orderData.vehicleType}</p>

        <hr className='mx-20' />

        <p className="text-gray-300"><strong className=' me-10'>Pickup Time:</strong> {orderData.pickupDateTime}</p>

        <hr className='mx-20' />

        <p className="text-gray-300"><strong className=' me-7'>Delivery Time:</strong> {orderData.deliveryDateTime}</p>

        <hr className='mx-20' />

      </div>

      <div className={`mt-6 ${styles.twoForOne}`}>
        <div className={`total ${styles.total}`}>
          <p className="text-xl font-semibold text-white"><strong className='text-danger me-2'>Sub-Total:</strong> <span className={`${styles.dollarSign}`}>$</span>{price}</p>
        </div>

        <div className={`button ${styles.button}`}>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handlePayment}>
            Payment
          </button>
        </div>

      </div>
    </div>
  );
};

export default Checkout;