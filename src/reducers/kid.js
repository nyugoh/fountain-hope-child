import types from "../types";

const {
  KID_ADDED,
  START_FETCHING_KIDS,
  END_FETCHING_KIDS,
  END_FETCHING_KID,
  KID_UPDATED,
  ADDED_UPDATE,
  MESSAGE_SENT
} = types;

const initialState = {
  isFetching: true,
  kids: []
};

const kids = (state=initialState, action) => {
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
    case ADDED_UPDATE:
      return {
        status: action.response
      };
    case MESSAGE_SENT:
      return {
        status: action.payload
      };
    default:
      return state;
  }
};

export default kids;