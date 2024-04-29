const express = require("express");
const { login, register, forgotPassword, logout } = require("../controllers/UserAuth.controller");
const routerManager = express.Router();

routerManager.post('/login',  login)
routerManager.post('/register', register)
routerManager.post('/logout', logout)
routerManager.post('/forgot-password', forgotPassword)

module.exports = routerManager