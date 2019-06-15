import React, {Component} from 'react';
import {Grid, Icon, Statistic} from 'semantic-ui-react';
import { connect } from 'react-redux';

class AdminIndex extends Component {
  handleClick = () => {
    console.log("Clicked")
  };

  render() {
    let { kids, admin, loaded } = this.props;
    let totalKids = kids.kids.length;
    let messageTotal = Object.keys(admin.messages).length;
    let updatesTotal = Object.keys(admin.updates).length;
    let sponsorsTotal = Object.keys(admin.sponsors).length;
    
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
              <Grid.Column style={{ cursor: 'pointer'}} onclick={this.handleClick}>
                <Statistic >
                  <Statistic.Value><Icon name='huge child blue'/></Statistic.Value>
                  <Statistic.Value style={{marginTop:20}}>{totalKids}</Statistic.Value>
                  <h2 style={{textAlign: 'center'}}>Kids</h2>
                </Statistic>
              </Grid.Column>
              <Grid.Column style={{ cursor: 'pointer'}} onclick={this.handleClick}>
                <Statistic >
                  <Statistic.Value><Icon name='huge hospital teal'/></Statistic.Value>
                  <Statistic.Value style={{marginTop:20}}>{sponsorsTotal}</Statistic.Value>
                  <h2 style={{textAlign: 'center'}}>Sponsors</h2>
                </Statistic>
              </Grid.Column>
              <Grid.Column style={{ cursor: 'pointer'}} onclick={this.handleClick}>
                <Statistic >
                  <Statistic.Value><Icon name='huge chat green'/></Statistic.Value>
                  <Statistic.Value style={{marginTop:20}}>{messageTotal}</Statistic.Value>
                  <h2 style={{textAlign: 'center'}}>Messages</h2>
                </Statistic>
              </Grid.Column>
              <Grid.Column style={{ cursor: 'pointer'}} onclick={this.handleClick}>
                <Statistic >
                  <Statistic.Value><Icon name='huge handicap orange'/></Statistic.Value>
                  <Statistic.Value style={{marginTop:20}}>{updatesTotal}</Statistic.Value>
                  <h2 style={{textAlign: 'center'}}>Updates</h2>
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
