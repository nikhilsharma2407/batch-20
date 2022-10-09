import axios from  "axios"
const BASE_URL = "http://localhost:5000"

const url = {
    LOGIN : "/user/login",
    SIGNUP : "/user/signup",
    ADD_FRIEND : "/user/addFriend",
    REMOVE_FRIEND : "/user/removeFriend",    
}

export const signupUtil = (payload)=>{
    const URL = BASE_URL+url.SIGNUP;
    return axios.post(URL,payload);
}

export const loginUtil = (payload)=>{
    const URL = BASE_URL+url.LOGIN;
    return axios.post(URL,payload);
}