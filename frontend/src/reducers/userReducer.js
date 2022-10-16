// user
const initialState = {
    username: "",
    name: "",
    isLoggedIn: false,
    friendList: [],
    message: "",
    error: "",
};


const ACTIONS = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    ADD_FRIEND: "ADD_FRIEND",
    REMOVE_FRIEND: "REMOVE_FRIEND"
};

export const loginAction = (payload) => {
    return { type: ACTIONS.LOGIN, payload };
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
            const { message, data: { username, name, friendList } } = payload;
            return { ...state, username, name, friendList, isLoggedIn: true, message };
        case ACTIONS.LOGOUT:
            localStorage.removeItem('token');
            return initialState;

        case ACTIONS.ADD_FRIEND:
            var {id} = payload;
            return { ...state, friendList: [...state.friendList, id] }

        case ACTIONS.REMOVE_FRIEND:
            var {id} = payload;
            return { ...state, friendList: state.friendList.filter(elem=> elem !== id) }
        default:
            return state
    }
}
