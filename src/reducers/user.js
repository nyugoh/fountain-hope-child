import * as types from "../types";

const user = (state={}, action) =>{
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return action.payload;
    default: return state;
  }
};

export default user;