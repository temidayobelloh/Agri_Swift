const jwt =require('jsonwebtoken');
const { errorHandler } =require('./error');

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler(401, 'Unauthorized'));

  try {
    
    const decoded= jwt.verify(token, process.env.JWT_Token)
      req.id = decoded.id;
      req.userRole = decoded.role;
      next();
  } catch (error) {
    // Handle token verification errors
    console.error('Error verifying token:', error.message);
    return next(errorHandler(401, 'Invalid token'));
  }
  
};

module.exports = verifyToken