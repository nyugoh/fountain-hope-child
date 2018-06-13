import * as types from '../types';

const initialState = {
  messages:{},
  updates: []
};

const admin = (state=initialState, action) =>{
  const { type, payload } = action;
  switch (type){
    case types.FETCHED_MESSAGE:
      return {
        ...state,
        messages: [...payload.body],
        total: payload.total
      };
    case types.MESSAGE_SENT:
      return {
        ...state,
        messages: [
          ...state.messages,
        payload.message
        ]
      };
    case types.FILES_UPLOADED:
      return {
        ...state,
        fileUpload: payload.status
      };
    case types.FETCHED_UPDATES:
      return {
        ...state,
        updates: [...payload.updates]
      };
    case types.ADDED_UPDATE:
      return {
        ...state,
        updates: [...state.updates, payload]
      };
    case types.FETCHED_SPONSORS:
      return {
        ...state,
        sponsors: [...payload]
      };
    case types.ADDED_SPONSOR:
      return {
        status: action.status
      };
    default:
      return state;
  }
};

export default admin;