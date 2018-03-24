import types from '../types';
import axios from 'axios';
import {uploadFiles} from "./kids";

export const fetchMessages = (search) => dispatch =>{
  console.log(search);
  axios.get(`/api/messages${search?search:''}`).then( response =>{
    dispatch({
      type: types.FETCHED_MESSAGE,
      messages: response.data
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