// routes.js or user.routes.js
import express from 'express'
import { updateUser } from '../controllers/user.controller'
import authenticateToken from '../../backend/middleware/authenticateate

router.put('/update/:id', authenticateToken, updateUser)

const updateUser = async (req, res) => {
  const { id } = req.params
  const { userName, email } = req.body
  // Update user in the database
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { userName, email },
      { new: true },
    )
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' })
  }
}
