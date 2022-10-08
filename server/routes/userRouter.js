const express = require("express");
const UserModel = require("../models/userModel");
const router = express.Router();

// signup and login

router.post('/signup',UserModel.signup);
router.post('/login',UserModel.login);
router.get('/login',UserModel.loginWithToken);
router.post('/addFriend',UserModel.authMiddleware,UserModel.addFriend);
router.post('/removeFriend',UserModel.authMiddleware,UserModel.removeFriend);


module.exports = router;