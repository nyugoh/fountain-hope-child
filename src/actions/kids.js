import types from "../types";
import api from '../store/api';
import axios from 'axios';

const {
  KID_ADDED,
  START_FETCHING_KIDS,
  END_FETCHING_KIDS
} = types;

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
  kidsArray
});

export const fetchKids = () => (dispatch) => {
  let apiEnd = '/api/kids';
  dispatch(startFetchingKids());
  return axios.get(apiEnd).then( (res)=> {
    dispatch(endFetchingKids(res.data.kids))
  }).catch( err => {
    console.log(err);
  });
};