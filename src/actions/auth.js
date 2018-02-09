import { USER_LOGGED_IN } from '../types';
import api from '../store/api';

const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  payload: user
});

export const login = (credentials) => (dispatch) =>
  api.user.login(credentials).then( (user) => {
    localStorage.jwtToken = user.token;
    dispatch(userLoggedIn(user))
  });