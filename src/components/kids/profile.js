import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Image } from 'semantic-ui-react';
// import PropTypes from 'prop-types';
import Message from '../forms/message';
import SponsorMessage from '../panels/sponsors';
import KidUpdates from "../panels/KidUpdates";
import { sendMessage } from "../../actions/kids";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kid: {}
    };
  };

  sendMessage = (message) => (this.props.sendMessage(message));

  render() {
    let { kids } = this.props;
    let id = this.props.match.params.kidId;
    let child = kids.filter( kid => kid._id===id);
    let kid = {};
    if (child.length >0)
      kid = child[0];
    const { updates } = this.props;
    let update;
    if (updates.length > 0)
      update = updates.filter( update => (update.kidId === id ? update: '' ));
      return (
        <Grid columns='1'>
          <Grid.Row columns='2'>
            <Grid.Column width='10'>
              <div>
                <div className='storyHeader'>
                  <Image size={'medium'} style={{width:200}} src={kid.profileImages && "/api/v1/images/"+kid.profileImages[0]} alt={kid.fullName}/>
                </div>
                <div>
                  <h2>{kid.firstName}'s Story</h2>
                  <p><b>Home: </b>{kid.pob} <b>Gender: </b>{kid.gender}</p>
                  <p className={'description'}>{kid.story}</p>
                  <div className="ui divider"/>
                </div>
                <div>
                  <h2>Latest updates</h2>
                  {(kid.updates) ? <KidUpdates updates={update}/>:
                  <p>{kid.firstName} has no updates.</p>}
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width='6'>
              <Message name={kid.firstName}  kidId={kid._id} sendMessage={this.sendMessage}/>
              <br/><br/>
              <hr/>
              <SponsorMessage/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
  }
}

const mapStateToProps = state => ({
  kids: state.kids.kids,
  updates: state.admin.updates
});

export default connect(mapStateToProps, { sendMessage })(Profile);
