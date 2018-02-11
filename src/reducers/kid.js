import types from "../types";

const {
  KID_ADDED,
  START_FETCHING_KIDS,
  END_FETCHING_KIDS,
  END_FETCHING_KID,
  KID_UPDATED
} = types;

const initialState = {
  isFetching: true
};

export const kid = (state=initialState, action) => {
  switch (action.type) {
    case KID_ADDED:
      return action.payload;
    case START_FETCHING_KIDS:
      return {
        isFetching: true
      };
    case END_FETCHING_KIDS:
      return {
        isFetching: false,
        kids: action.payload
      };
    case END_FETCHING_KID:
      return {
        isFetching: false,
        kid: action.payload
      };
    case KID_UPDATED:
    return {
      isFetching: false,
      kid: action.payload
    };
    default:
      return state;
  }
};