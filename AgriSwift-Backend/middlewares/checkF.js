const db = require('../models');
const errorHandler = require('../middlewares/error');


const checkFarmer = async (req, res, next) => {
  try {
    const { userId } = req.users; // Assuming user ID is included in the request object
    const user = await db.models.Users.findByPk(userId);
    if (!user || user.role !== 'farmer') {
      return next(errorHandler(403, 'Unauthorized: Only farmers can perform this action'));
    }
    next(); // User is a farmer, proceed to the next middleware/controller
  } catch (error) {
    next(error);
  }
};

module.exports = checkFarmer