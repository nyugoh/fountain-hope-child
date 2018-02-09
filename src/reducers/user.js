import {USER_LOGGED_IN} from "../types";

const user = (state={}, action) =>{
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    default: return state;
  }
};

export default user;