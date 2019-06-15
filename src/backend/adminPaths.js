import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import AdminMenu from "../components/menus/Admin";
import AdminIndex from "../components/admin/index";
import Messages from "../components/admin/messages";
import Sponsors from "../components/admin/sponsors";
import AdminKids from "../components/admin/kids";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Profile from "../components/kids/profile";
import Edit from "../components/kids/edit";
import AddKid from "../components/kids/add";
import KidUpdate from "../components/kids/update";
import store from "../store/store";
import { fetchMessages, fetchUpdates, fetchSponsors } from "../actions/admin";

store.dispatch(fetchUpdates());
store.dispatch(fetchMessages());
store.dispatch(fetchSponsors());

class Admin extends Component {
  render() {
    return (
      <Grid>
        <AdminMenu />
        <Grid.Row>
          <Grid.Column>
            <div className={"ui container"}>
              <Route path="/admin" exact component={AdminIndex} />
              <Route path="/admin/kids" exact component={AdminKids} />
              <Route path="/admin/messages" exact component={Messages} />
              <Route path="/admin/sponsors" exact component={Sponsors} />
              <Route path="/admin/login" exact component={Login} />
              <Route path="/admin/signup" exact component={Signup} />
              <Route path="/admin/kids/add" exact component={AddKid} />
              <Route
                path="/admin/kids/profile/:kidId"
                exact
                component={Profile}
              />
              <Route path="/admin/kids/:kidId/edit" exact component={Edit} />
              <Route
                path="/admin/kids/:kidId/updates"
                exact
                component={KidUpdate}
              />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Admin;
