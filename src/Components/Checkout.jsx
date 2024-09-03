import React, { useContext, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { myContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import styles from './Checkout.module.css'


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
    <div className={`max-w-3xl my-40 mx-auto p-6  ${styles.payment1}`}>
      <div className='flex justify-center'>
        <img src="https://images.cooltext.com/5707015.png" alt="CheckOut" className='mt-4 mb-5  flex' />
        <i className="fa-solid fa-cart-shopping mt-5 ms-4 text-light fa-2xl"></i>
      </div>

      <div className="space-y-5">

        <p className=" text-gray-300"><strong className={` mb-2 me-4   ${styles.pickup}`}>Pickup Location:</strong> {orderData.pickupLocation}</p>
        <hr className='mx-20' />

        <div><p className="text-light"><strong className={`me-4 mb-2 justify-center ${styles.delivery2}`}>Delivery Location:</strong> {orderData.dropLocation}</p></div>

        <hr className='mx-20' />

        <p className=" text-gray-300"><strong className={`me-5 ${styles.item}`}>Item Type:</strong> {orderData.itemType}</p>

        <hr className='mx-20' />

        <p className="text-gray-300"><strong className={`me-20 ${styles.length}`}>Length:</strong> {orderData.length}</p>

        <hr className='mx-20' />

        <p className="text-gray-300"><strong className={`me-20 ${styles.width}`}>Width:</strong> {orderData.width}</p>

        <hr className='mx-20' />

        <p className="text-gray-300"><strong className={`me-20 ${styles.height}`}>Height:</strong> {orderData.height}</p>

        <hr className='mx-20' />

        <p className="text-gray-300"><strong className={`me-20 ${styles.weight}`}>Weight:</strong> {orderData.weight}</p>

        <hr className='mx-20' />

        <p className="text-gray-300"><strong className={`me-7 ${styles.vehicleType}`}>Vehicle Type:</strong> {orderData.vehicleType}</p>

        <hr className='mx-20' />

        <p className="text-gray-300"><strong className={`me-7 ${styles.pickUpTime}`}>Pickup Time:</strong> {orderData.pickupDateTime}</p>

        <hr className='mx-20' />

        <p className="text-gray-300"><strong className={`me-7 ${styles.deliveryTime}`}>Delivery Time:</strong> {orderData.deliveryDateTime}</p>

        <hr className='mx-20' />

      </div>

      <div className={`mt-6 ${styles.twoForOne}`}>
        <div className={`total ${styles.total}`}>
          <p className="text-xl font-semibold text-white"><strong className='text-danger me-2'>Sub-Total:</strong> <span className={`${styles.dollarSign}`}>$ </span>{Price}</p>
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