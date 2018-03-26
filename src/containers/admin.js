import React, {Component} from 'react';
import { Route } from "react-router-dom";
import { Grid } from 'semantic-ui-react';
import AdminMenu from '../components/menus/Admin';
import AdminIndex from '../components/admin';
import Messages from '../components/admin/messages';
import Sponsors from '../components/admin/sponsors'
import AdminKids from '../components/admin/kids'
import Login from '../containers/Login'
import Signup from '../containers/Signup'

class Admin extends Component {
  render() {
    return (
      <Grid>
        <AdminMenu/>
        <Grid.Row>
          <Grid.Column>
            <Route path="/admin" exact component={AdminIndex}/>
            <Route path="/admin/kids" exact component={AdminKids}/>
            <Route path="/admin/messages" exact component={Messages}/>
            <Route path="/admin/sponsors" exact component={Sponsors}/>
            <Route path="/admin/login" exact component={Login}/>
            <Route path="/admin/signup" exact component={Signup}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
};

export default Admin;
