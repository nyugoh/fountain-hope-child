import * as types from '../types';
import messages from "../components/admin/messages";

const initialState = {
  messages:[],
  updates: []
};

const admin = (state=initialState, action) =>{
  const { type, payload } = action;
  switch (type){
    case types.FETCHED_MESSAGE:
      return {
        ...state,
        messages: [...payload.body],
        messagesTotal: payload.total
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
    case types.UPDATE_DELETED:
      let updates = state.updates.filter( update => update._id !== payload);
      return {
        ...state,
        updates: [...updates]
      };
    case types.UPDATE_EDITED:
      updates = state.updates.map( update =>{
       if (update._id === payload.update._id)
         return payload.update;
        else
          return update;
      });
      return {
        ...state,
        updates: [...updates]
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
    case types.MESSAGE_READ:
      let messages = state.messages.map( message => {
        if (message._id === payload._id)
          return payload;
        else
          return message;
      });
      return {
        ...state,
        messages: [...messages]
      };
    case types.MESSAGE_DELETED:
      messages = state.messages.filter( message => message._id !== payload);
      return {
        ...state,
        messages: [...messages]
      };
    default:
      return state;
  }
};

export default admin;