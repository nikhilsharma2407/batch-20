const initialState = {
  count: 0
};

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
}

// Action Creator a fn which return an Action or obj

export const incrementActionCreator = (payload) => {
  return { type: ACTIONS.INCREMENT, payload }
};


// returning a function 
export const incrementActionAsync = (payload) => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(incrementActionCreator(payload))
    }, 1000);
  }
};

export const decrementActionCreator = (payload) => {
  return { type: ACTIONS.DECREMENT, payload }
}




export const countReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + payload };

    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - payload };
    default:
      return state
  }
}
