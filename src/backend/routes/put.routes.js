const pool = require('../db/pool');
const express = require('express');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.put('/update/:id', authenticate, (req, res) => {
  try {
    const { id } = req.params;
    const { userName, firstName, lastName, email, phone } = req.body;

    pool.query(
      'UPDATE customers SET userName = ?, firstName = ?, lastName = ?, email = ?, phone = ? WHERE id = ?',
      [userName, firstName, lastName, email, phone, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`User modified with ID: ${id}`);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;