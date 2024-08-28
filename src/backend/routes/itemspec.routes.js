const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

// Route to handle item details submission
router.post('/items', async (req, res) => {
  const { length, width, height, weight, typeofItem, id } = req.body;

  if (!length || !width || !height || !weight || !typeofItem || !id) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const connection = await pool.getConnection();

    // Check if the customer exists
    const [customerRows] = await connection.query('SELECT * FROM customers WHERE id = ?', [id]);
    if (customerRows.length === 0) {
      connection.release();
      return res.status(404).json({ error: 'Customer not found' });
    }

    // Insert the new product
    const [result] = await connection.query(
      'INSERT INTO product (length, width, height, weight, typeofItem, id) VALUES (?, ?, ?, ?, ?, ?)',
      [length, width, height, weight, typeofItem, id]
    );

    connection.release();

    res.status(201).json({ message: 'Product details saved successfully', productId: result.insertId });
  } catch (err) {
    console.error('Error saving product details:', err);
    res.status(500).json({ error: 'Failed to save product details' });
  }
});

module.exports = router;