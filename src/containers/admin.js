import React, {Component} from 'react';
import { Route } from "react-router-dom";
import { Grid } from 'semantic-ui-react';
import AdminMenu from '../components/menus/Admin';
import AdminIndex from '../components/admin';
import Messages from '../components/admin/messages';
import Sponsors from '../components/admin/sponsors'

class Admin extends Component {
  render() {
    return (
      <Grid>
        <AdminMenu/>
        <Grid.Row>
          <Grid.Column>
            <Route path="/admin" exact component={AdminIndex}/>
            <Route path="/admin/messages" exact component={Messages}/>
            <Route path="/admin/sponsors" exact component={Sponsors}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
};

export default Admin;
