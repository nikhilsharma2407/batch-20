class ResponseCreator{
    constructor(success,message,data){
        this.success = success;
        this.message = message;
        if(data){
            this.data = data
        }
    }
};


const ErrorCreator = (message,status)=>{
        const err = new Error(message);
        err.status = status;
        throw err;
}

module.exports = {ResponseCreator,ErrorCreator};
