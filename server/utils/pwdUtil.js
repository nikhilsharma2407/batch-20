const bcrypt = require("bcrypt");

const {hash,compare, genSalt} = bcrypt;


const generatePasswordHash = async(password)=>{
    const salt = await genSalt();
    console.log({salt});
    const hashedPwd = await hash(password,salt);
    console.log(hashedPwd);
    return hashedPwd;
};


const verifyPassword = async(password,pwdHash)=>{
    const data = await compare(password,pwdHash);
    console.log(data);
    return data
}

module.exports = {generatePasswordHash,verifyPassword};