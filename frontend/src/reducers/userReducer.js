import { loginUtil, loginWithTokenUtil } from "../apiUtil";

// user
const initialState = {
    username: "",
    name: "",
    isLoggedIn: false,
    friendList: [],
    message: "",
    error: "",
    loading:false
};


const ACTIONS = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    ERROR: "ERROR",
    ADD_FRIEND: "ADD_FRIEND",
    REMOVE_FRIEND: "REMOVE_FRIEND",
    RESET_MSG:"RESET_MSG",
    LOADING:"LOADING"
};

export const loadingAction = payload=>({type:ACTIONS.LOADING,payload})
export const errorAction = payload=>({type:ACTIONS.ERROR,payload});
export const resetMsgAction = ()=>({type:ACTIONS.RESET_MSG});

const asyncAction = (api,action,apiPayload,setToken = false)=>{
    return async(dispatch)=>{
        try {
            dispatch(loadingAction(true));
            dispatch(resetMsgAction());

            const data = (await api(apiPayload)).data;
            if(data.success){
                dispatch({...action,payload:data})
                if(setToken){
                    localStorage.setItem('token',data.data.token);
                }
            }
        } catch (error) {
            dispatch(errorAction(error));
        }
        finally{
            dispatch(loadingAction(false));
        }
    }
}

export const loginAction = (apiPayload) => {
    const action =  { type: ACTIONS.LOGIN };
    return asyncAction(loginUtil,action,apiPayload,true);
    
};
export const loginWithTokenAction =()=> {
    const action =  { type: ACTIONS.LOGIN }
    return asyncAction(loginWithTokenUtil,action)
    
};

export const logoutAction = () => {
    return { type: ACTIONS.LOGOUT }
}

export const addFriendAction = (payload) => {
    return { type: ACTIONS.ADD_FRIEND, payload }
}

export const removeFriendAction = (payload) => {
    return { type: ACTIONS.REMOVE_FRIEND, payload }
}


export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.LOGIN:
            var { message, data: { username, name, friendList } } = payload;
            return { ...state, username, name, friendList, isLoggedIn: true, message };
        case ACTIONS.LOGOUT:
            localStorage.removeItem('token');
            return initialState;

        case ACTIONS.ADD_FRIEND:
            var {id,message} = payload;
            return { ...state, friendList: [...state.friendList, id],message }

        case ACTIONS.REMOVE_FRIEND:
            var {id,message} = payload;
            return { ...state, friendList: state.friendList.filter(elem=> elem !== id),message }
        case ACTIONS.ERROR:
            const {message:error} = payload.response?.data;
            return {...state,error,message:''};
        case ACTIONS.RESET_MSG:
            return {...state, message:'',error:''};
        case ACTIONS.LOADING:
            return {...state,loading:payload}
        default:
            return state
    }
}
