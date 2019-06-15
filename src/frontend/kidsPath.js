import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import ListKids from "./KidsList";
import Profile from "../components/kids/profile";

class kids extends Component {
  render() {
    return (
      <div>
        <Grid columns="1">
          <Grid.Row>
            <Grid.Column>
              <Route path="/kids" exact component={ListKids} />
              <Route path="/kids/profile/:kidId" exact component={Profile} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default kids;
