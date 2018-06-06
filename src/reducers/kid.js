import * as types from "../types";

const initialState = {
  kids: [],
  isEnd: false
};

const Kids = (state=initialState, action={}) => {
    const { type, payload } = action;
    let isEnd = false, kids= [];
    switch (type) {
      case types.KIDS_FETCHED:
        if (payload.kids.length === 0)
          isEnd =  true;
        return {
          kids: [...state.kids, ...payload.kids],
          page: payload.page,
          isEnd: isEnd
        };
      case types.KID_ADDED:
          return {
            ...state,
            kids: [...state.kids, payload]
        };
      case types.KID_DELETED:
        kids = state.kids.filter( kid => kid._id !== payload);
        return {
          ...state,
          kids: [...kids]
        };
      case types.KID_ARCHIVED:
        kids = state.kids.map( kid => {
          if (kid._id === payload._id)
            return payload;
          else
            return kid;
        });
        return {
          ...state,
          kids: [...kids]
        };
      case types.KID_UPDATED:
        return {
          kid: action.payload
        };
      case types.ADDED_UPDATE:
        return {
          status: action.response
        };
      default:
        return state;
    }
};

export default Kids;