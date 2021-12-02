import * as t from "../constants/types";

const initialState = {
  userInfo: {
    user: "guest",
  },
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case t.LOGIN:
      return {
        ...state,
        userInfo: {
          user: action.payLoad,
        },
      };
    default:
      return state;
  }
};

export default auth;
