import * as types from "../types";

const initialState = {
    kids: []
};

const Kids = (state=initialState, action={}) => {
    const { type, payload } = action;
    switch (type) {
        case types.KIDS_FETCHED:
            return {
                kids: [...state.kids, ...payload.kids],
                page: payload.page
            };
        case types.KID_ADDED:
          return [...state, payload];
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