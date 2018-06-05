import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Grid} from 'semantic-ui-react';
import ListKids from './KidsList';

class kids extends Component {
  render() {
    return (
      <div>
        <Grid columns='1'>
          <Grid.Row>
            <Grid.Column>
              <Route path='/kids' exact component={ListKids} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
};

export default kids;
