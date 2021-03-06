import * as types from "../types";

const user = (state = { user: { token: "" } }, action) => {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return {
        ...state,
        user: action.payload
      };
    case types.USER_LOGGED_OUT:
      return {
        ...state,
        user: { token: "" }
      };
    default:
      return state;
  }
};

export default user;
