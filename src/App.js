import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Mainmenu from './components/menus/Main';
import HomePage from './containers/index';
import Admin from './containers/admin';
import Kids from './containers/kids';
import Footer from './components/menus/footer';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="ui container app-container">
        <Mainmenu/>
        <Route path='/' exact component={HomePage}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/kids' component={Kids}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
