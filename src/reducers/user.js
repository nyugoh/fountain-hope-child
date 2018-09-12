import * as types from "../types";

const user = (state={}, action) =>{
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return {
        ...state,
        user: action.payload
      };
    case types.USER_LOGGED_OUT:
      return {
        ...state,
        user: {}
      };
    default: return state;
  }
};

export default user;