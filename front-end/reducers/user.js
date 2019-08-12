const dummyUser = {
  nickname: "haha",
  posts: [],
  followings: [],
  followers: [],
  signUpData: {}
};
export const initialState = {
  isLoggedIn: false,
  // user: {
  //   nickname: "haha",
  //   posts: [{}, {}],
  //   followings: ["aa", "bb"],
  //   followers: ["cc", "dd"],
  //   isLoggedIn: false
  // }
  user: null
};

// action constatns
export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT = "LOG_OUT";

export const signupAction = data => {
  return {
    type: SIGN_UP,
    data: data
  };
};

export const loginAction = {
  type: LOG_IN,
  data: {
    nickname: "HELLO"
  }
};

export const logoutAction = {
  type: LOG_OUT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        // user: action.data
        user: dummyUser
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state
      };
    }

    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    case SIGN_UP:
      return {
        ...state,
        signUpData: action.data
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;
