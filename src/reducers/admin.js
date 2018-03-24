import types from '../types';

const initialState = {
  message: "No messages",
  data: []
};

const admin = (state=initialState, action) =>{
  switch (action.type){
    case types.FETCHED_MESSAGE:
      return {
        messages: action.messages
      };
    case types.FETCHED_SPONSORS:
      return {
        sponsors: action.sponsors
      };
    default:
      return state;
  }
};

export default admin;