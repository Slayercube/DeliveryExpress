// jwtUtils.js
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const secret = process.env.JWT_SECRET || crypto.randomBytes(64).toString('hex');

const generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
};

module.exports = { generateToken, verifyToken, secret };