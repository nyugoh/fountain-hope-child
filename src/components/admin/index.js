import React, {Component} from 'react';
import {Grid, Icon, Statistic} from 'semantic-ui-react';

class AdminIndex extends Component {
  render() {
    return (
      <div>
        <h2>Hello admin</h2>
        <div className='ui divider'/>
        <Grid>
          <Grid.Row columns={4}>
            <Grid.Column>
              <Statistic >
                <Statistic.Value><Icon name='huge child blue'/></Statistic.Value>
                <Statistic.Value>55</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic >
                <Statistic.Value><Icon name='huge hospital teal'/></Statistic.Value>
                <Statistic.Value>5</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic >
                <Statistic.Value><Icon name='huge chat green'/></Statistic.Value>
                <Statistic.Value>55</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic >
                <Statistic.Value><Icon name='huge handicap orange'/></Statistic.Value>
                <Statistic.Value>2</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="ui divider"/>

      </div>
    );
  }
};

export default AdminIndex;
