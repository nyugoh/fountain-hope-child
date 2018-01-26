import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainMenu from './components/menus/Main';
import HomePage from './containers/index';
import Login from './containers/Login';
import Admin from './containers/admin';
import Kids from './containers/kids';
import Footer from './components/menus/footer';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="ui container app-container">
        <MainMenu/>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/login' component={Login}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/kids' component={Kids}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;