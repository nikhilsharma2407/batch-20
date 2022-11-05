import axios from  "axios"
const BASE_URL = "https://gfg-app.onrender.com/";

const url = {
    LOGIN : "/user/login",
    SIGNUP : "/user/signup",
    ADD_FRIEND : "/user/addFriend",
    REMOVE_FRIEND : "/user/removeFriend",    
}

const getAuthHeader = ()=>{
    const token = localStorage.getItem('token');
    return token ? {headers:{"Authorization":`Bearer ${token}`}}:{}
}

export const signupUtil = (payload)=>{
    const URL = BASE_URL+url.SIGNUP;
    return axios.post(URL,payload);
}

export const loginUtil = (payload)=>{
    const URL = BASE_URL+url.LOGIN;
    return axios.post(URL,payload);
}

export const loginWithTokenUtil = ()=>{
    const URL = BASE_URL+url.LOGIN;
    const token = localStorage.getItem('token');
    if(token) 
        return axios.get(URL,getAuthHeader());
}

export const addFriendUtil = (payload)=>{
    const URL = BASE_URL+url.ADD_FRIEND;
    return axios.patch(URL,payload,getAuthHeader());
}

export const removeFriendUtil = (payload)=>{
    const URL = BASE_URL+url.REMOVE_FRIEND;
    return axios.patch(URL,payload,getAuthHeader());
}
