import * as types from '../types';

const initialState = {
  message: "No messages",
  messages:{}
};

const admin = (state=initialState, action) =>{
  const { type, payload } = action;
  switch (type){
    case types.FETCHED_MESSAGE:
      return {
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
      console.log(payload);
      return {
        ...state,
        fileUpload: payload.status
      };
    case types.FETCHED_SPONSORS:
      return {
        sponsors: action.sponsors
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