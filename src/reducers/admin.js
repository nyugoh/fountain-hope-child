import types from '../types';

const initialState = {
  message: "No messages",
  data: []
};

const admin = (state=initialState, action) =>{
  console.log(state);
  console.log(action);
  switch (action.type){
    case types.FETCHED_MESSAGE:
      return {
        messages: action.messages
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