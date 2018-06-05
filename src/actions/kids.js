import * as types from "../types";
import api from '../store/api';
import axios from 'axios';

const apiErrorOccured = (errors) => ({
  type: types.API_ERROR,
  payload: errors
});

const kidAdded = (kid) => ({
  type: types.KID_ADDED,
  payload: kid
});

export const addKid = (kid, files) => (dispatch) =>
  api.kids.add(kid).then( (kid) => {
    (kid === undefined) ? kid={}: '';
    uploadFiles(files);
    dispatch(kidAdded(kid));
  });

export const endFetchingKid = (kid) => ({
  type: types.KIDS_FETCHED,
  payload: kid
});

export const fetchKids = (search) => (dispatch) => axios.get(`/api/kids${search?search:"?page=1"}`).then( (res)=> {
    dispatch({
        type: types.KIDS_FETCHED,
        payload: res.data
    })
  });

export const getKid = (id) => (dispatch) => {
  return axios.get('/api/kid/'+id).then( res => {
    dispatch(endFetchingKid(res.data.kid));
  }).catch( err => {
    dispatch(apiErrorOccured(err));
  });
};

export const updateKid = (kid, id, files) => (dispatch) => {
  return axios.put('/api/kid/'+id, {kid}).then( res => {
    dispatch(endFetchingKid(res.data.kid));
    uploadFiles(files);
  }).catch( err => {
    dispatch(apiErrorOccured(err));
  });
};

export const addUpdate = (update, files) => (dispatch) => {
  uploadFiles(files);
  return axios.post('/api/updates', {update}).then( response => {
    dispatch({
      type: types.ADDED_UPDATE,
      response
    })
  })
};

export const sendMessage = (message) => (dispatch) => axios.post('/api/messages', {message}).then( (response) =>{
  dispatch({
    type: types.MESSAGE_SENT,
    payload: response
  })
});

export const uploadFiles = (files) =>{
  if(!files) return;
  let form = new FormData();
  for(let i in files) form.append(files[i].name, files[i]);
  return axios.post('/api/v1/images/upload', form).then((response) => {
    // console.log(response);
  }).catch((error) => {
    console.log(error.message);
  });
};