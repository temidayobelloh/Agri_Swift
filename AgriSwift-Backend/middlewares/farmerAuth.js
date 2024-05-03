// farmerAuthMiddleware.js
const db = require('../models');

const farmerAuth = async (req, res, next) => {
  try {

    // Check if user is a farmer
    const user = await db.models.Users.findOne({ where: { role: 'farmer' } });

    console.log("user is ", user);
    if (!user) {
      return res.status(403).json({ success: false, message: 'Unauthorized access' });
    }

    // If user is authenticated and is a farmer, proceed to the next middleware or route handler
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = farmerAuth;
