const dummyUser = {
  nickname: "haha",
  posts: [],
  followings: [],
  followers: []
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
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

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

    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: true,
        user: null
      };
    }

    default:
      return {
        ...state
      };
  }
};

export default reducer;
