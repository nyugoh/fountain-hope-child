import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainMenu from './components/menus/Main';
import HomePage from './frontend/Home';
import Admin from './backend/adminPaths';
import Kids from './frontend/kidsPath';
import Footer from './components/menus/footer';
import './styles/app.css';
import {fetchKids} from "./actions/kids";
import {fetchSponsors} from "./actions/admin";
import store from "./store/store";

store.dispatch(fetchKids());
store.dispatch(fetchSponsors());

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/admin' component={Admin}/>
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}

const Home = () => {
  return <div>
    <MainMenu/>
    <div className="ui container app-container">
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/kids' component={Kids}/>
        <Route path='/donate' component={Kids}/>
      </Switch>
    </div>
    <Footer/>
  </div>
};

export default App;