import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import Message from '../forms/message';
import Story from '../panels/story';
import SponsorMessage from '../panels/sponsors';

class ListKids extends Component {
  render() {
    return (
      <Grid columns='1'>
        <Grid.Row columns='2'>
          <Grid.Column width='10'>
            <h3>Kids Stories at FHCK</h3>
            <Story/>
          </Grid.Column>
          <Grid.Column width='6'>
            <Message/>
            <br/><br/>
            <hr/>
            <SponsorMessage/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
};

export default ListKids;
