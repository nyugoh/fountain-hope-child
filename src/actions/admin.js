import types from '../types';
import axios from 'axios';
import {uploadFiles} from "./kids";

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

export const addSponsor = (sponsor, files) => dispatch =>{
  uploadFiles(files);
  axios.post('/api/sponsors', {sponsor}).then(response =>{
    dispatch({
      type: types.ADDED_SPONSOR,
      status: response.data.status
    });
  }).catch(error =>{

  });
};