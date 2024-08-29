const express = require('express')
const router = express.Router()
const pool = require('../db/pool')
const authenticateToken = require('../../backend/middleware/authenticate')

router.delete('/delete/:id', authenticateToken, async (req, res) => {
  let client
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).send({ message: 'User ID is required' })
    }

    client = await pool.promise().getConnection()

    if (!client) {
      return res
        .status(500)
        .send({ message: 'Failed to get database connection' })
    }

    const [result] = await client.query('DELETE FROM customers WHERE id = ?', [
      id,
    ])

    if (result.affectedRows === 0) {
      return res.status(404).send({ message: 'User not found' })
    }

    res.status(200).send({ message: 'User deleted successfully' })
  } catch (err) {
    console.error('Error deleting user:', err)
    res.status(500).send({ message: 'Server error' })
  } finally {
    if (client) {
      client.release()
    }
  }
})

module.exports = router
