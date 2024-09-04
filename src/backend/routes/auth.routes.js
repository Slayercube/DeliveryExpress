// routes/auth.routes.js
const express = require('express');
const { generateToken, verifyToken } = require('../middleware/jwtUtils');
const router = express.Router();

// Mock user data
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = generateToken({ id: user.id, username: user.username });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Token verification route
router.get('/verify', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (token) {
    const decoded = verifyToken(token);
    if (decoded) {
      res.json({ message: 'Token is valid', user: decoded });
    } else {
      res.status(401).json({ message: 'Invalid token' });
    }
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
});

module.exports = router;