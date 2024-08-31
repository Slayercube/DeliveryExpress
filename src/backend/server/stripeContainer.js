import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import PaymentForm from './../../Components/Payment';
import { Elements } from '@stripe/react-stripe-js';




  const PUBLIC_KEY = "pk_test_51PsUGMP8fB4oMg6zjVQKcDcmGbl5hsb3NSk2mDpgtmSh4bZ9Ch8cyb0G0VQ9WctUeoMLUg3R6Y2HutlRUYlsTiPP004TtwYcct"

  const stripeTestPromise = loadStripe(PUBLIC_KEY);

const stripeContainer = () => {


  
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>

 
  )
}

export default stripeContainer