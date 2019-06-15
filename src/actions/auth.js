import * as types from "../types";
import api from "../store/api";

export const userLoggedIn = user => ({
  type: types.USER_LOGGED_IN,
  payload: user
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.jwtToken = user.token;
    dispatch(userLoggedIn(user));
  });

export const signup = credentials => dispatch =>
  api.user.register(credentials).then(user => {
    localStorage.jwtToken = user.token;
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  dispatch({
    type: types.USER_LOGGED_OUT
  });
};
