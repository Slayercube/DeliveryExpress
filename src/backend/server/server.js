const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PsUGMP8fB4oMg6zatZmGV8M3DaujIGCF1biEKT7lBKkdwe4obZMfuDKOOhVsqpTSR0OUdVm2CIFooQGwsdPQTNy00lDOyiniZ');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const MINIMUM_AMOUNT = 50; // Minimum amount in cents (e.g., $0.50 USD)

app.post('/create-payment-intent', async (req, res) => {
  const { price, itemType } = req.body;

  if (isNaN(price) || price < MINIMUM_AMOUNT / 100) {
    return res.status(400).send({ error: `Invalid price value. The minimum amount is ${MINIMUM_AMOUNT / 100} USD.` });
  }

  try {
    const amountInCents = Math.round(price * 100);
    if (amountInCents < MINIMUM_AMOUNT) {
      return res.status(400).send({ error: `The amount must be at least ${MINIMUM_AMOUNT / 100} USD.` });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: 'usd',
      metadata: { itemType },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error.stack);
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});