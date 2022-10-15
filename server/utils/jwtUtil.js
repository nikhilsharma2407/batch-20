const {sign,verify} = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;


const generateToken = (data,options = {expiresIn:"1h"})=>{
    const token = sign(data,SECRET_KEY,options);
    console.log(token);
    return token
}

const verifyToken = (token)=>{
    return verify(token,SECRET_KEY)
}

const data = {
    "username": "nikhil_sharma",
    "name": "Nikhil"
};

// generateToken(data,{expiresIn:"5s"});
// const validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pa2hpbF9zaGFybWEiLCJuYW1lIjoiTmlraGlsIiwiaWF0IjoxNjY0NzI4MjQ3fQ.SCuhGrLEO-NUaBpJ600Hx9LnWIDN9iHAcjQ8nw2ZJVc";
// const expiredToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pa2hpbF9zaGFybWEiLCJuYW1lIjoiTmlraGlsIiwiaWF0IjoxNjY0NzI4MjUwLCJleHAiOjE2NjQ3MjgyNTV9.OQryuUBejk0TzF14H2nxEedwW6xscuwQ5N56w6CPcec";
// console.log(verifyToken(expiredToken));

module.exports = {generateToken,verifyToken};