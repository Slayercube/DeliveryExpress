const express = require('express');
const stripe = require('stripe')('sk_test_51PsUGMP8fB4oMg6zatZmGV8M3DaujIGCF1biEKT7lBKkdwe4obZMfuDKOOhVsqpTSR0OUdVm2CIFooQGwsdPQTNy00lDOyiniZ');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.post('/checkout', async (req, res) => {
    const { price, itemType } = req.body;
  
    try {
      const amountInCents = Math.round(price * 100); // Convert price to cents and round to nearest integer
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: itemType,
              },
              unit_amount: amountInCents, // Use the amount in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3003/success',
        cancel_url: 'http://localhost:3003/cancel',
      });
  
      res.json({ id: session.id });
    } catch (error) {
      console.error('Error creating Stripe session:', error.stack);
      res.status(500).send({ error: error.message });
    }
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});