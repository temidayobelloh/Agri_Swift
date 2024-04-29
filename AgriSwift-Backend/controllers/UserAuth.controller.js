const db = require("../models")
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const crypto = require("crypto");
const { forgotPasswordMail, sendConfirmationEmail} = require("../utils/mail.utils")
const errorHandler = require("../middlewares/error")

// Register function
const register = async (req, res , next) => {
 
  try {
    const { fullname, email, password, role,phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)

    // Generate a unique confirmation token for the user
    const confirmationToken = crypto.randomBytes(20).toString("hex");

    // Set the expiry time for the confirmation token (e.g., 24 hours from now)
    const confirmationTokenExpire = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

     // Create a new user with hashed password
     const newUser = await db.models.Users.create({
      fullname: fullname,
      email: email,
      password: hashedPassword,
      role: role,
      phoneNumber: phoneNumber,
      token: confirmationToken,
      tokenExpire: confirmationTokenExpire
    });
   

  // Send confirmation email with token
  await sendConfirmationEmail(email, req.headers.host,confirmationToken);  
    
  res.status(200).json({ success: true, message: "User registered successfully" });
    
  } catch (error) {
    // console.error('Error occurred:', error);
    // res.status(500).json({ error: 'Internal server error' });
    next(error); //middleware from index.js
  }
  
}

// login function
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userQuery = await db.models.Users.findOne({
      where: { email: email},
    });

    if (!userQuery) {
      return next(errorHandler(401, "User not found"));
      //return res.json({ error: "User does not exist" });
    }

    // Compare the password from user input and password in the table
    bcrypt.compare(password, userQuery.password).then((isMatch) => {
      if (!isMatch) {
        return next(errorHandler(401, "Wrong email and password"))
        //return res.json({ error: "Wrong email and password" });
      }

      // generate web token for user after successful login

      const accessToken = sign(
        { id: userQuery.userId},
        process.env.JWT_TOKEN
      ); //using the id of the user to generate web token

      const { password: pass, ...restInfo } = userQuery._previousDataValues;

      // Save the token(accessToken) as a cookie
      res.cookie("access_token", accessToken, {
        httpOnly: true, // Cookie cannot be accessed via client-side scripts
        maxAge: 24 * 60 * 60 * 1000, // Cookie expires in 24 hours 
      })
      .status(200).json(restInfo) //send response without password
      // Send the response with user information
      //res.status(200).json(accessToken);
    });
  } catch (error) {
    console.error("Error logging in:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


//log out
const logout = async (req, res, next) => {
  try {
    const { userId }= req.body
    const user = await db.models.Users.findOne({
      where: { userId: userId }
    });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found ser' });
    }
    // Clear the access token cookie
    res.clearCookie('access_token');
    res.status(200).json({ success: true, message: 'Logout successful' });
  } catch (error) {
    // Handle errors
    console.error('Error logging out:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Forgot Password function
const forgotPassword = async (req, res, next) => {

  try {
    const { email } = req.body;

    const userQuery = await db.models.Users.findOne({
      where: { email: email }
    })

    if (!userQuery) {
      return next(errorHandler(404, "User not found"));
    }

    // Generate unique token for password reset using crypto
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Set the expiry time for the reset token (e.g., 1 hour from now)
    const resetPasswordExpire = new Date(Date.now() + 3600000); // 1 hour

    // Save the reset token and its expiry time in the database
    await db.models.Users.update({
      token : resetToken,
      tokenExpire: resetPasswordExpire
   },
   {
       where: {
          id: userQuery.userId,
       }
   });
   
   // Send password reset email with token
   await forgotPasswordMail(email, req.headers.host, resetToken);

   
   res.status(200).json({
    success: true,
    message: "Password reset email sent successfully",
  });
  
  } catch (error) {
    console.error("Error in forgotPassword:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { login, register , logout, forgotPassword};
