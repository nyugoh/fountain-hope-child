import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {login} from "../actions/auth";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if(localStorage.jwtToken) {
  store.dispatch(login({token: localStorage.jwtToken}));
}

export default store;