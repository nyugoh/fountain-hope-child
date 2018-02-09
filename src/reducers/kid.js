import {KID_ADDED} from "../types";

export const kid = (state={}, action) => {
  switch (action.type) {
    case KID_ADDED:
      return action.payload;
    default:
      return state;
  }
};