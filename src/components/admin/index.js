import React, {Component} from 'react';
import {Grid, Icon, Statistic} from 'semantic-ui-react';
import { connect } from 'react-redux';

class AdminIndex extends Component {
  render() {
    let { kids, admin, loaded } = this.props;
    let totalKids = kids.kids.length;
    let messageTotal = Object.keys(admin.messages).length;
    let sponsorsTotal = Object.keys(admin.updates).length;
    if (!loaded)
      return (
        <div>
          <h2>Admin Dashboard</h2>
          <div className='ui divider'/>
            Loading
          <div className="ui divider"/>

        </div>
      );
    else
      return (
        <div>
          <h2>Admin Dashboard</h2>
          <div className='ui divider'/>
          <Grid>
            <Grid.Row columns={4}>
              <Grid.Column>
                <Statistic >
                  <Statistic.Value><Icon name='huge child blue'/></Statistic.Value>
                  <Statistic.Value>{totalKids}</Statistic.Value>
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
                  <Statistic.Value>{messageTotal}</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic >
                  <Statistic.Value><Icon name='huge handicap orange'/></Statistic.Value>
                  <Statistic.Value>{sponsorsTotal}</Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )
  }
};

const mapStateToProps = state => ({
  admin: state.admin,
  kids: state.kids,
  loaded: true
});

export default connect(mapStateToProps)(AdminIndex);
