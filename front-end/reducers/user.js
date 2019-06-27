const initialState = {
  isLoggedIn: false,
  user: {}
};

// action constatns
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

const loginAction = {
  type: LOG_IN,
  data: {
    nickname: "HELLO"
  }
};

const logoutAction = {
  type: LOG_OUT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.data
      };
    }

    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: true,
        user: {}
      };
    }

    default:
      return state;
  }
};

export default reducer;
