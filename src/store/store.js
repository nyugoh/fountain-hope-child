import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {login} from "../actions/auth";
import {fetchKids} from "../actions/kids";
import {fetchMessages, fetchSponsors} from "../actions/admin";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if(localStorage.jwtToken) {
  store.dispatch(login({token: localStorage.jwtToken}));
}

store.dispatch(fetchKids());
store.dispatch(fetchMessages());
store.dispatch(fetchSponsors);
export default store;