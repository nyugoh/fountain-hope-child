import * as types from "../types";
import axios from "axios";

const apiErrorOccured = errors => ({
  type: types.API_ERROR,
  payload: errors
});

export const addKid = kid => dispatch =>
  axios.post("/api/kids", { kid }).then(res => {
    dispatch({
      type: types.KID_ADDED,
      payload: res.data.data.kid
    });
  });

export const deleteKid = kid => dispatch =>
  axios.delete(`/api/kids/${kid}`).then(res => {
    dispatch({
      type: types.KID_DELETED,
      payload: kid
    });
  });

export const archiveKid = kid => dispatch =>
  axios.post(`/api/kids/${kid}/archive`).then(res => {
    dispatch({
      type: types.KID_ARCHIVED,
      payload: res.data.kid
    });
  });

export const endFetchingKid = kid => ({
  type: types.KIDS_FETCHED,
  payload: kid
});

export const fetchKids = search => dispatch =>
  axios.get(`/api/kids${search ? search : "?page=1"}`).then(res => {
    dispatch({
      type: types.KIDS_FETCHED,
      payload: res.data
    });
  });

export const getKid = id => dispatch => {
  return axios
    .get("/api/kid/" + id)
    .then(res => {
      dispatch(endFetchingKid(res.data.kid));
    })
    .catch(err => {
      dispatch(apiErrorOccured(err));
    });
};

export const updateKid = kid => dispatch =>
  axios
    .put(`/api/kid/${kid._id}`, { kid })
    .then(res => {
      dispatch({
        type: types.KID_UPDATED,
        payload: res.data.kid
      });
    })
    .catch(err => {
      dispatch(apiErrorOccured(err));
    });

export const addUpdate = update => dispatch =>
  axios.post("/api/updates", { update }).then(response => {
    dispatch({
      type: types.ADDED_UPDATE,
      payload: response.data.update
    });
  });

export const sendMessage = message => dispatch =>
  axios.post("/api/messages", { message }).then(response => {
    dispatch({
      type: types.MESSAGE_SENT,
      payload: response.data
    });
  });

export const uploadFiles = form => dispatch =>
  axios.post("/api/v1/images/upload", form).then(response => {
    dispatch({
      type: types.FILES_UPLOADED,
      payload: response.data
    });
  });

export const donate = donation => dispatch =>
  axios.post("/api/donate", { donation }).then(response => {
    dispatch({
      type: types.DONATED
    });
  });
