const express = require('express');
const router = express.Router();
// const { Customer, Product } = require('./itemspecs'); // Assuming you have Customer and Product models

// Route to handle item details submission
router.post('/items', async (req, res) => {
  const { length, width, height, weight, typeofitem, customerId } = req.body;

  if (!length || !width || !height || !weight || !typeofitem || !customerId) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create a new product
    const newProduct = await Product.create({
      length,
      width,
      height,
      weight,
      typeofitem,
      customerId,
    });

    res.status(201).json({ message: 'Product details saved successfully', product: newProduct });
  } catch (err) {
    console.error('Error saving product details:', err);
    res.status(500).json({ error: 'Failed to save product details' });
  }
});

module.exports = router;