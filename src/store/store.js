import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {userLoggedIn} from "../actions/auth";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if(localStorage.jwtToken) {
  store.dispatch(userLoggedIn({token: localStorage.jwtToken}));
}

export default store;