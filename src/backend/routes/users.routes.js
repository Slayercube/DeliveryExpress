const express = require('express')
const bcrypt = require('bcryptjs')
// const db = require('../db/db');
const jwt = require('jsonwebtoken')
const { Routes } = require('react-router-dom')
// const { User } = require('../models/user');
const pool = require('../db/pool')
require('dotenv').config()

const router = express.Router()

const generateToken = (user) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined')
  }
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
}

router.post('/register', async (req, res) => {
  try {
    const { username, email, password, firstname, lastname, phone } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const query =
      'INSERT INTO customers (username, email, password, firstname, lastname, phone) VALUES (?, ?, ?, ?, ?, ?)'
    pool.query(
      query,
      [username, email, hashedPassword, firstname, lastname, phone],
      (err, result) => {
        if (err) {
          console.error('Error inserting data:', err)
          return res.status(500).send('Error inserting data')
        }
        res.status(201).send('User created')
      },
    )
  } catch (error) {
    console.error('Error during registration:', error)
    res.status(500).send('Internal server error')
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const query = 'SELECT * FROM customers WHERE email = ?'
    pool.query(query, [email], async (err, result) => {
      if (err) {
        console.error('Error fetching data:', err)
        return res.status(500).send('Error fetching data')
      }
      if (result.length > 0) {
        const user = result[0]
        console.log('Fetched user:', user) // Log the fetched user
        console.log('Password from request:', password) // Log the password from the request
        console.log('Password from database:', user.password) // Log the password from the database

        // Convert Buffer to string
        const hashedPassword = user.password.toString('utf-8')
        console.log('Converted hashed password:', hashedPassword) // Log the converted password

        const isPasswordValid = await bcrypt.compare(password, hashedPassword)
        if (isPasswordValid) {
          const token = generateToken(user)
          return res.status(200).json({
            message: 'Login successful',
            token,
            user: {
              id: user.id,
              username: user.username,
              email: user.email,
              firstname: user.firstname,
              lastname: user.lastname,
              phone: user.phone,
            },
          })
        } else {
          res.status(401).send('Invalid credentials')
        }
      } else {
        res.status(404).send('User not found')
      }
    })
  } catch (error) {
    console.error('Error during login:', error)
    res.status(500).send('Internal server error')
  }
})

router.get('/profile', (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).send('Unauthorized')
      return
    }
    const query = 'SELECT * FROM customers WHERE id = ?'
    pool.query(query, [decoded.id], (err, result) => {
      if (err) {
        console.error('Error fetching data:', err)
        res.status(500).send('Error fetching data')
        return
      }
      if (result.length > 0) {
        const user = result[0]
        res.status(200).json({
          id: user.id,
          userName: user.userName,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        })
      } else {
        res.status(404).send('User not found')
      }
    })
  })
})

module.exports = router
