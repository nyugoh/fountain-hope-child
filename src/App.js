import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import Mainmenu from './components/menus/Main';
import LoginPage from './components/forms/Login';
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
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/kids' component={Kids}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

// export default connect(mapStateToProps)(App);
export default App;
