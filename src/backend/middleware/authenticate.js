const jwt = require('jsonwebtoken');

// const authenticate = (req, res, next) => {
//   const token = req.headers.authorization.split(' ')[1];
//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Failed to authenticate token' });
//     }

//     req.user = decoded; // Assuming the token contains user information
//     next();
//   });
// };


const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header is missing' });
    }
  
    const token = authHeader.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'Token is missing or improperly formatted' });
    }
  
    // Continue with token verification logic
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
  
  module.exports = authenticate;
    
