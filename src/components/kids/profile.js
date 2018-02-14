import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Icon, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {getKid} from '../../actions/kids';
import ErrorMessage from '../panels/Errors';
import Message from '../forms/message';
import SponsorMessage from '../panels/sponsors';
import KidUpdates from "../panels/KidUpdates";

class Profile extends Component {
  componentWillMount() {
    this.props.getKid(this.props.match.params.kidId);
  };

  render() {
    let isFetching = this.props.state.kid.isFetching;
    let kid = this.props.state.kid.kids;
    let error = this.props.state.rootReducer;
    let err = { ...error.errors};
    let response = { ...err.response };
    let resData = {...response.data};
    let errors = {...resData.errors};
    let hasErrors = this.props.state.rootReducer.failed;
    if (isFetching && !hasErrors) {
      return (
        <div className='text centered'>
          <h2>Loading ...</h2>
          <img src="/assets/images/loading.gif" alt="Loading content"/>
        </div>
      )
    } else if (!!kid) {
      return (
        <Grid columns='1'>
          <Grid.Row columns='2'>
            <Grid.Column width='10'>
              <div>
                <div className="updateAction">
                  <Button positive>
                    <Link to={'/kids/'+kid._id+'/edit'}>Edit {kid.firstName}'s profile <Icon name='compose right'/></Link>
                  </Button>
                  <Button positive>
                    <Link to={'/kids/'+kid._id+'/update'}>Add update <Icon name='road right'/></Link>
                  </Button>
                </div>
                <div className='storyHeader'>
                  <img src="/assets/images/logo.png" alt={kid.fullName}/>
                </div>
                <div>
                  <h2>{kid.fullName}'s Story</h2>
                  <p>{kid.story}</p>
                </div>
                <hr/>
                <div>
                  <h2>Latest updates for {kid.fullName}</h2>
                  <KidUpdates updates={kid.updates}/>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width='6'>
              <Message name={kid.firstName}/>
              <br/><br/>
              <hr/>
              <SponsorMessage/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    } else if (hasErrors && errors) {
      return (
        <ErrorMessage message={errors.global}/>
      )
    } else {
      return (
        <div>
          Profile page {this.props.match.params.kidId}
        </div>
      );
    }
  }
}

export default connect(state => ({state}), { getKid })(Profile);
