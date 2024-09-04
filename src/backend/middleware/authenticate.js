const jwt = require('jsonwebtoken');
const { verifyToken } = require('../middleware/jwtUtils'); 

const authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (token) {
    const decoded = verifyToken(token);
    if (decoded) {
      req.user = decoded;
      next();
    } else {
      res.status(401).json({ message: 'Invalid token' });
    }
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
};

module.exports = authenticate;