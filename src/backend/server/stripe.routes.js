const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51PsUGMP8fB4oMg6zatZmGV8M3DaujIGCF1biEKT7lBKkdwe4obZMfuDKOOhVsqpTSR0OUdVm2CIFooQGwsdPQTNy00lDOyiniZ');




router.post('/', async (req, res) => {
    const { orderData } = req.body;
  
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: orderData.itemType,
              },
              unit_amount: orderData.price, // amount in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3002/checkout-success',
        cancel_url: 'http://localhost:3002/checkout-cancel',
      });
  
      res.json({ id: session.id });
    } catch (error) {
      console.error('Error creating Stripe session:', error);
      res.status(500).send({ error: error.message });
    }
  });

module.exports = router;