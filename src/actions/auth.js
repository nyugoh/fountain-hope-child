import types from '../types';
import api from '../store/api';


const { USER_LOGGED_IN } = types;

const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  payload: user
});

export const login = (credentials) => (dispatch) =>
  api.user.login(credentials).then( (user) => {
    localStorage.jwtToken = user.token;
    dispatch(userLoggedIn(user))
  });

export const signup = (credentials) => (dispatch) =>
  api.user.login(credentials).then( (user) => {
    localStorage.jwtToken = user.token;
    dispatch(userLoggedIn(user))
  });