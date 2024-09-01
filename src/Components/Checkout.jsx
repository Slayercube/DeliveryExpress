import React from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PsUGMP8fB4oMg6zjVQKcDcmGbl5hsb3NSk2mDpgtmSh4bZ9Ch8cyb0G0VQ9WctUeoMLUg3R6Y2HutlRUYlsTiPP004TtwYcct');

const Checkout = () => {
  const location = useLocation();
  const { orderData } = location.state;

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
    }
  
    const session = await response.json();
  
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
};

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
        <p className="text-xl font-semibold text-white"><strong>Price:</strong> ${price}</p>
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