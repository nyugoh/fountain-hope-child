import * as types from "../types";
import axios from "axios";

export const fetchMessages = search => dispatch =>
  axios
    .get(`/api/messages${search ? search : ""}`)
    .then(response => {
      dispatch({
        type: types.FETCHED_MESSAGE,
        payload: response.data
      });
    })
    .catch(error => {});

export const fetchUpdates = search => dispatch =>
  axios
    .get(`/api/updates${search ? search : ""}`)
    .then(response => {
      dispatch({
        type: types.FETCHED_UPDATES,
        payload: response.data
      });
    })
    .catch(error => {});

export const fetchSponsors = search => dispatch =>
  axios
    .get(`/api/sponsors${search ? search : ""}`)
    .then(response => {
      dispatch({
        type: types.FETCHED_SPONSORS,
        payload: response.data
      });
    })
    .catch(error => {});

export const addSponsor = sponsor => dispatch =>
  axios.post("/api/sponsors", { sponsor }).then(response => {
    dispatch({
      type: types.ADDED_SPONSOR,
      payload: response.data
    });
  });

export const archiveSponsor = sponsor => dispatch =>
  axios.post(`/api/sponsors/${sponsor}/archive`).then(res => {
    dispatch({
      type: types.SPONSOR_ARCHIVED,
      payload: res.data.sponsor
    });
  });

export const deleteSponsor = sponsor => dispatch =>
  axios.delete(`/api/sponsors/${sponsor}`).then(res => {
    dispatch({
      type: types.SPONSOR_DELETED,
      payload: sponsor
    });
  });

export const editSponsor = sponsor => dispatch =>
  axios.put(`/api/sponsors/${sponsor._id}`, { sponsor }).then(response => {
    dispatch({
      type: types.SPONSOR_EDITED,
      payload: response.data
    });
  });

export const deleteUpdate = update => dispatch =>
  axios.delete(`/api/updates/${update}`).then(res => {
    dispatch({
      type: types.UPDATE_DELETED,
      payload: update
    });
  });

export const editUpdate = update => dispatch =>
  axios.put(`/api/updates/${update._id}`, { update }).then(response => {
    dispatch({
      type: types.UPDATE_EDITED,
      payload: response.data
    });
  });

export const markAsRead = message => dispatch =>
  axios.post(`/api/messages/${message}/read`).then(res => {
    dispatch({
      type: types.MESSAGE_READ,
      payload: res.data.message
    });
  });

export const deleteMessage = message => dispatch =>
  axios.delete(`/api/messages/${message}`).then(res => {
    dispatch({
      type: types.MESSAGE_DELETED,
      payload: message
    });
  });
