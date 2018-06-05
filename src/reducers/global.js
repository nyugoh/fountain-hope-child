import * as types from '../types';

const {
  API_ERROR
} = types;


const rootReducer = (state={}, action) =>{
  switch (action.type) {
    case API_ERROR:
      return {
        failed: true,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;