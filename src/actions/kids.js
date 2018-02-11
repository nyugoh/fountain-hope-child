import types from "../types";
import api from '../store/api';
import axios from 'axios';

const {
  KID_ADDED,
  START_FETCHING_KIDS,
  END_FETCHING_KIDS,
  API_ERROR
} = types;

const apiErrorOccured = (errors) => ({
  type: API_ERROR,
  payload: errors
});

const kidAdded = (kid) => ({
  type: KID_ADDED,
  payload: kid
});

export const addKid = (kid) => (dispatch) =>
  api.kids.add(kid).then( (kid) => {
    (kid === undefined) ? kid={}: '';
    dispatch(kidAdded(kid))
  });

export const startFetchingKids = () => ({
  type: START_FETCHING_KIDS
});

export const endFetchingKids = (kidsArray) => ({
  type: END_FETCHING_KIDS,
  payload: kidsArray
});

export const endFetchingKid = (kid) => ({
  type: END_FETCHING_KIDS,
  payload: kid
});

export const fetchKids = () => (dispatch) => {
  let apiEnd = '/api/kids';
  dispatch(startFetchingKids());
  return axios.get(apiEnd).then( (res)=> {
    dispatch(endFetchingKids(res.data.kids))
  }).catch( err => {
    dispatch(apiErrorOccured(err));
  });
};

export const getKid = (id) => (dispatch) => {
  dispatch(startFetchingKids());
  return axios.get('/api/kid/'+id).then( res => {
    dispatch(endFetchingKid(res.data.kid));
  }).catch( err => {
    dispatch(apiErrorOccured(err));
  });
};

export const updateKid = (kid, id) => (dispatch) => {
  dispatch(startFetchingKids());
  return axios.put('/api/kid/'+id, {kid}).then( res => {
    dispatch(endFetchingKid(res.data.kid));
  }).catch( err => {
    dispatch(apiErrorOccured(err));
  });
};