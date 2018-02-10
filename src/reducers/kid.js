import types from "../types";

const {
  KID_ADDED,
  START_FETCHING_KIDS,
  END_FETCHING_KIDS
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
        kids: action.kidsArray
      };
    default:
      return state;
  }
};