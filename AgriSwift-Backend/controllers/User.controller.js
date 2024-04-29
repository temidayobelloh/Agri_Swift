const {errorHandler} = require("../middlewares/error")

const db = require('../models')

const getUser = async (req, res, next) => {

  //res.send("welcome to user routes");
  try {
    const user = await db.models.Users.findOne({ where: { userId: req.params.id } });
  
    if (!user) return next(errorHandler(404, 'User not found!'));
  
    const { password: pass, ...rest } = user._previousDataValues;
  
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};


const  updateUser = async (req, res, next) => {

  try {
    const {username, phoneNumber} =  req.body

    const user = await db.models.Users.findOne({ where: { userId: req.params.id } });

    if (!user) {
      return next(errorHandler(401, 'You can only update your own account!'));
    } else {

      const updateField = await db.models.Users.update({
        username: username ? username : user.username,
        phoneNumber: phoneNumber ? phoneNumber : user.phoneNumber
      },
      {
        where: {
          userId : user.userId
        }})
        res.status(201).json({
          success: true,
          data: updateField
      });
    }

  } catch (error) {
    next(error);
  }

}

const deleteUser = async (req, res, next) => {
  try {
    // Find the user by ID
    const user = await db.models.Users.findOne({ where: { userId: req.params.id } });

    // If user not found, return 404 error
    if (!user) {
      return next(errorHandler(404, 'User not found!'));
    }

    // Delete the user
    await user.destroy();

    // Respond with success message
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    // Handle any errors
    next(error);
  }
};


module.exports = {getUser, updateUser, deleteUser}