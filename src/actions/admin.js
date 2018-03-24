import types from '../types';
import axios from 'axios';

export const fetchMessages = () => dispatch =>{
  axios.get('/api/messages').then( response =>{
    dispatch({
      type: types.FETCHED_MESSAGE,
      messages: response.data.messages
    });
  }).catch(error =>{

  });
};