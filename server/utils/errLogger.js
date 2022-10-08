const fs = require('fs');

const errLogger = (err,req,res,next)=>{
    const {path,method} = req;
    const timestamp = new Date();

    console.log("errLogger",err);
    
    if(err.stack.includes("TokenExpiredError")){
        err.message = "Please login again to continue!!!"
    };

    const data = `${err.message} ${path} ${method} ${timestamp}\n`
    console.log("errorLogger",data);
    fs.appendFile('./errLogs.txt',data,(logerr)=>{
        if(logerr){
            // error while loggin err data to file
            console.log(logerr);
        }else{
            const {message="request Failed",status=500} = err;
            res.status(status);
            res.send({message,success:false});
        }
    })
};


module.exports = errLogger