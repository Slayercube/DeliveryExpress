import {
  useStripe,
  Elements,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js'
import React, { useState } from 'react'

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': { color: '#fce883' },
        '::placeholder': { color: '#87bbfd' },
        },
        invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee',
        },
    },
    }

const Paymentform = () => {
  const [success, setSuccess, orderData] = useState(false)
  const stripe = useStripe()
  const Elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: Elements.getElement(CardElement),
    })

    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await fetch('http://localhost:3002/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id, amount: orderData.price }),
        })

        if (response.ok) {
          console.log('Successful payment')
          setSuccess(true)
        }
      } catch (error) {
        console.log('Error', error)
      }
    }
  }
  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className='FormGroup'>
            <div className='FormRow'>
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button type='submit'>Pay</button>
        </form>
      ) : (
        <div>
          <h2>Thank you for your purchase</h2>
        </div>
      )}
    </>
  )

}

export default Paymentform
