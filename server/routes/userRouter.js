const express = require("express");
const UserModel = require("../models/userModel");
const router = express.Router();

// signup and login

router.post('/signup',UserModel.signup);
router.post('/login',UserModel.login);
router.get('/login',UserModel.loginWithToken);
router.patch('/addFriend',UserModel.authMiddleware,UserModel.addFriend);
router.patch('/removeFriend',UserModel.authMiddleware,UserModel.removeFriend);
router.patch('/generateOTP',UserModel.generateOTP);
router.patch('/resetPassword',UserModel.resetPassword);


module.exports = router;