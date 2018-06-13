import * as types from '../types';
import axios from 'axios';
import {uploadFiles} from "./kids";

export const fetchMessages = (search) => dispatch => axios.get(`/api/messages${search?search:''}`).then( response =>{
  dispatch({
    type: types.FETCHED_MESSAGE,
    payload: response.data
  });
}).catch(error =>{

});

export const fetchUpdates = (search) => dispatch => axios.get(`/api/updates${search?search:''}`).then( response =>{
  dispatch({
    type: types.FETCHED_UPDATES,
    payload: response.data
  });
}).catch(error =>{

});

export const fetchSponsors = (search) => dispatch => axios.get(`/api/sponsors${search?search:''}`).then( response=>{
  dispatch({
    type: types.FETCHED_SPONSORS,
    payload: response.data.sponsors
  });
}).catch( error =>{

});

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

export const deleteUpdate = (update) => (dispatch) => axios.delete(`/api/updates/${update}`).then(res=> {
  dispatch({
    type: types.UPDATE_DELETED,
    payload: update
  });
});

export const editUpdate = update => dispatch => axios.put(`/api/updates/${update._id}`, {update}).then( response=> {
  dispatch({
    type: types.UPDATE_EDITED,
    payload: response.data
  });
});