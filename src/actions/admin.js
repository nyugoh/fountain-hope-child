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

export const fetchSponsors = () => dispatch =>{
  axios.get('/api/sponsors').then( response=>{
    dispatch({
      type: types.FETCHED_SPONSORS,
      sponsors: response.data.sponsors
    });
  }).catch( error =>{

  });
};