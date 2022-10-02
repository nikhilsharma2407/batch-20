const express = require("express");
const UserModel = require("../models/userModel");
const router = express.Router();



router.post('/',UserModel.authMiddleware,(req,res,next)=>{
    console.log("admin route",req.user);
    res.send("admin authenticated successfully!!!");
});


module.exports = router;