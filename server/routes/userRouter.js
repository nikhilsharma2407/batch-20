const express = require("express");
const UserModel = require("../models/userModel");
const router = express.Router();

const userModel = require("../models/userModel");

// signup and login

router.post('/signup',UserModel.signup);
router.post('/login',UserModel.login);
router.get('/login',UserModel.loginWithToken);


module.exports = router;