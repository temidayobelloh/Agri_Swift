const express = require("express");
//const path = require("path"); // Import 'path' module
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

app.use(express.json()); // allows you write json objects to body
app.use(cookieParser()); // allows you access cookies and its contents
app.use(cors())
dotenv.config();

const db = require("./models");

//routers
const authRouter = require("./routes/UserAuth.route")
const userRouter = require("./routes/User.route")
const produceRouter = require("./routes/Produce.route")



//endpoint routes
app.use("/auth", authRouter)
app.use("/users", userRouter)
app.use("/produce", produceRouter)


//middleware to handle errors
app.use((err,req, res, next) => {
  const statusCode = err.statusCode || 500  
  const message = err.message || 'Internal Server Error'
  return res.status(statusCode).json({
    success: false,
    statusCode,   //after es6 if the variable and key has same name, then no need to write it as-- statusCode: statusCode
    message,
  }) 

})

// // Serve static files (React frontend build)
// app.use(express.static(path.join(__dirname, 'Client/build')));

// // Route all requests to index.html for client-side routing
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'Client/build', 'index.html'));
// });


db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully.");

    // Sync database and start server
    return db.sequelize.sync();
  })
  .then(() => {
    const port = 4005;
    app.listen(port, () => {
      console.log("Server listening on " + port);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
  
