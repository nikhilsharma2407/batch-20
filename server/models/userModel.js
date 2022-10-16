const mongoose = require('mongoose');
const { generateToken, verifyToken } = require('../utils/jwtUtil');
const { generatePasswordHash, verifyPassword } = require('../utils/pwdUtil');
const { ResponseCreator, ErrorCreator } = require('../utils/responseHandler');
const { Schema } = mongoose;

const verifyTokenFromHeader = (req)=>{
    const authHeader = req.headers?.authorization
    if(!authHeader) {
        const err = new Error("Missing token");
        err.status = 403;
        throw err
    }
    [,token] = authHeader.split(' ');
    console.log("token from header",token);
    return verifyToken(token);
}

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is mandatory!!!"]
    },
    username: {
        type: String,
        unique:true,
        required: [true, "username is mandatory!!!"]
    },
    password: {
        type: String,
        validate:{
            validator: (value)=>value.length>=8,
            message: props => `Password should be atleast 8 characters long`
        },
        required: [true, "password is mandatory!!!"]
    },
    friendList:{
        type: [String]
    },
    otp:{
        type:Number
    },
    timestamp:{
        type:Number
    }
});

userSchema.statics.signup = async (req, res, next) => {
    const user = req.body;
    try {
        user.password = await generatePasswordHash(user.password);
        console.log("user data from request body with updated password",user);
        const data = await UserModel.create(user);
        if (data) {
            console.log(data);
            res.status(201);
            res.send(`User ${data.username} created successfully!!!`);
        }
    } catch (error) {
        next(error);
        // console.log(error);
        // res.status(500);
        // res.send(error.message);
    }
};

userSchema.statics.login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const data = await UserModel.findOne({ username },{_id:0,__v:0});
        console.log(data);
        if (data) {
            // user exists
            // data.password is hashedPassword
            const passwordVerified = await verifyPassword(password,data.password);
            if (passwordVerified) {
                // user is authenticated successfully!!!
                const token = generateToken({username:data.username,name:data.name});
                res.send({ success: true, data:{username:data.username,name:data.name,token,friendList:data.friendList}, message: `${username} logged in successfully!!` });
            } else {
                const err = new Error("Incorrect Password!!!");
                err.status = 403;
                throw(err);
                // incorrect password
                // res.status(403);
                // res.send({ success: false, data: null, message: "Incorrect Password!!!" });
            }
        } else {
            const err = new Error("user does not exist!!!");
            err.status = 404;
            throw(err);
            // res.status(404);
            // res.send({ success: false, data: null, message: "user does not exist!!!" });
        }
    } catch (error) {
        next(error);
        // res.send({success:false,data:null,message:error.message});
    }
    
}

userSchema.statics.authMiddleware  = async (req,res,next)=>{
    try {
        const userData = verifyTokenFromHeader(req);
        
        const { username } = userData;
        const data = await UserModel.findOne({ username },{_id:0,__v:0});
        console.log(data);
        if (data) {
            req.user = data
            next();
        } else {
            const err = new Error("user does not exist!!!");
            err.status = 404;
            throw(err);
        }
    } catch (error) {
        next(error);
    }
}

userSchema.statics.loginWithToken = async(req, res, next) => {
    try {
        const userData = verifyTokenFromHeader(req);
        const { username } = userData;
        const data = await UserModel.findOne({ username },{_id:0,__v:0});
        console.log(data);
        if (data) {
            // user exists
            res.send({ success: true, data:{username:data.username,name:data.name,friendList:data.friendList}, message: `${username} logged in successfully with token!!` });

        } else {
            const err = new Error("user does not exist!!!");
            err.status = 404;
            throw(err);
            // res.status(404);
            // res.send({ success: false, data: null, message: "user does not exist!!!" });
        }
    } catch (error) {
        next(error);
        // res.send({success:false,data:null,message:error.message});
    }
    
};

userSchema.statics.addFriend = async(req,res,next)=>{
    try {
        const {id,name} = req.body;
        const {username} = req.user
        const data = await UserModel.updateOne({username},{$addToSet:{friendList:id}});
        console.log(data);
        if(data.modifiedCount){
            res.send({success:true,message:`You're now friends with ${name}`});
        }
        else{
            ErrorCreator('Something went wrong');
        }
    } catch (error) {
        next(error)
    }
}

userSchema.statics.removeFriend = async(req,res,next)=>{
    try {
        const {id,name} = req.body;
        const {username} = req.user
        const data = await UserModel.updateOne({username},{$pull:{friendList:id}});
        console.log(data);
        if(data.modifiedCount){
            res.send(new ResponseCreator(true,`You're no longer friends with ${name}`));
        }else{
            ErrorCreator('Something went wrong');
        }
    } catch (error) {
        next(error)
    }
};

userSchema.statics.generateOTP = async (req,res,next)=>{
    // if random is <.2 then we would get 5 digit number
    const otp = Math.floor(100000+Math.random()*9_00_000);
    const timestamp = Date.now();
    try {
        const {username} = req.body;

        const data = await UserModel.updateOne({username},{$set:{otp,timestamp}});
        if (data.modifiedCount){
            res.send(new ResponseCreator(true,`Your OTP for resetting password is ${otp}`));
        }else{
            ErrorCreator('Something went wrong while generating OTP');
        }    
    } catch (error) {
        next(error);
    }
    // save it into DB along with the timestamp;

};

userSchema.statics.resetPassword = async (req,res,next)=>{
    /**
     *  1. validation of OTP -
     *      1.1 check if otp is correct and within the timeframe.
     *      1.2 invalidate the existing otp post verification - 
     *          set the otp to null and timestamp to 0
        2. if valid:
            allow user to set new password
            save the new password in db
     */
    // username
    try {
        const {username,otp,password} = req.body;
        const currentTime = Date.now();
        const data = await UserModel.findOne({username,otp},{timestamp:1});
        if(data){
            console.log(data);
            // milliseconds
            const timeDifference = (currentTime - data.timestamp)/1000
            if (timeDifference<=180 ){
                const passwordHash = await generatePasswordHash(password);
                // search query, update
                const updateData = await UserModel.updateOne({username},{$set:{
                    password:passwordHash,
                    otp:null,
                    timestamp:0
                }});
                console.log({updateData});
                if (updateData.modifiedCount){
                    res.status(204);
                    res.send(new ResponseCreator(true,`password updated successfully for ${username}`))
                }else{
                    ErrorCreator('Something went wrong while updating password!!!',500);
                }
            }else{
                ErrorCreator('OTP Expired!!!, please try again',403)
            }
        }else{
            ErrorCreator('Invalid OTP',403);
        }

    } catch (error) {
        next(error)
    }
};


// UserModel we're going to use for interacting with db
const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;