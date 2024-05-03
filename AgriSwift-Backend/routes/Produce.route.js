const express = require('express');
const { listProduce, createProduce, updateProduce, deleteProduce, getByIdProduce,  } = require('../controllers/Produce.controller.js');
const farmerAuth = require('../middlewares/farmerAuth.js');
const verifyToken = require('../middlewares/verifyToken.js');

const routerManager = express.Router();

routerManager.get("/listAll", verifyToken, listProduce)
routerManager.post("/add", verifyToken, farmerAuth, createProduce)
routerManager.post("/getOne/:id",  verifyToken, farmerAuth,getByIdProduce)
routerManager.patch("/update/:id", verifyToken, farmerAuth,updateProduce)
routerManager.post("/delete/:id", verifyToken, farmerAuth, deleteProduce)



module.exports = routerManager