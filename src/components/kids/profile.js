import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
// import PropTypes from 'prop-types';
import Message from '../forms/message';
import SponsorMessage from '../panels/sponsors';
import KidUpdates from "../panels/KidUpdates";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kid: {}
    };
  };

  sendMessage = (message) => {
    this.props.sendMessage(message).then( () =>{
      this.props.getKid(this.props.match.params.kidId);
    });
  };

  render() {
    let { kids } = this.props;
    let id = this.props.match.params.kidId;
    let child = kids.filter( kid => kid._id===id);
    let kid = {};
    if (child.length >0)
      kid = child[0];
      return (
        <Grid columns='1'>
          <Grid.Row columns='2'>
            <Grid.Column width='10'>
              <div>
                <div className='storyHeader'>
                  <img style={{width:200}} src={kid.profileImages && "/api/v1/images/"+kid.profileImages[0]} alt={kid.fullName}/>
                </div>
                <div>
                  <h2>{kid.firstName} {kid.middleName}'s Story</h2>
                  <p>{kid.story}</p>
                </div>
                <hr/>
                <div>
                  <h2>Latest updates for {kid.firstName} {kid.middleName}</h2>
                  {(kid.updates) ? <KidUpdates updates={kid.updates}/>:
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

/*Profile.PropTypes = {

};*/

const mapStateToProps = state => ({
  kids: state.kids.kids
});

export default connect(mapStateToProps)(Profile);
