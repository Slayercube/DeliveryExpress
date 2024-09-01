import React, { useContext, useEffect, useState } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { myContext } from '../../Context.jsx';
import './PaymentForm.css'; 

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { orderData } = useContext(myContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  useEffect(() => {
    fetch('http://localhost:3003/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price: orderData.price, itemType: orderData.itemType }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Received clientSecret:', data.clientSecret); // Debug log
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        console.error('Error fetching clientSecret:', error);
      });
  }, [orderData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('ClientSecret before payment:', clientSecret); // Debug log

    if (!clientSecret) {
      setError('Missing client secret.');
      return;
    }

    let paymentResult;
    if (paymentMethod === 'card') {
      paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name,
            email,
          },
        },
      });
    } else if (paymentMethod === 'google_pay') {
      // Handle Google Pay payment method
    } else if (paymentMethod === 'apple_pay') {
      // Handle Apple Pay payment method
    }

    const { error, paymentIntent } = paymentResult;

    if (error) {
      setError(error.message);
    } else {
      if (paymentIntent.status === 'succeeded') {
        setSuccess(true);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Complete Your Payment</h2>
      <div className="payment-methods">
        <button
          type="button"
          onClick={() => setPaymentMethod('card')}
          className={`payment-method ${paymentMethod === 'card' ? 'selected' : ''}`}
        >
          Credit/Debit Card
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod('google_pay')}
          className={`payment-method ${paymentMethod === 'google_pay' ? 'selected' : ''}`}
        >
          Google Pay
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod('apple_pay')}
          className={`payment-method ${paymentMethod === 'apple_pay' ? 'selected' : ''}`}
        >
          Apple Pay
        </button>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {paymentMethod === 'card' && (
        <>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <CardNumberElement id="card-number" className="card-element" />
          </div>
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="card-expiry">Expiry Date</label>
              <CardExpiryElement id="card-expiry" className="card-element" />
            </div>
            <div className="form-group">
              <label htmlFor="card-cvc">CVC</label>
              <CardCvcElement id="card-cvc" className="card-element" />
            </div>
          </div>
        </>
      )}
      {error && <div className="message-error">{error}</div>}
      {success && <div className="message-success">Payment successful!</div>}
      <button type="submit" disabled={!stripe || !elements || success} className="submit-button">
        Pay ${orderData.price}
      </button>
    </form>
  );
};

export default PaymentForm;