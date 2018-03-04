import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getKid, updateKid, fetchKids} from '../../actions/kids';
import ErrorMessage from '../panels/Errors';
import EditProfile from '../forms/Edit-profile';
class EditKid extends Component {
  state = {
    data: {},
    errors: []
  };
  componentWillMount() {
    this.props.getKid(this.props.match.params.kidId);
  };

  submit = (data, files) =>{
    this.props.updateKid(data, this.props.match.params.kidId, files).then( () => {
      this.props.fetchKids().then( ()=>{
        let url = '/kids/profile/'+this.props.match.params.kidId;
        this.props.history.push(url)
      })
    });
  };

  render() {
    const {errors} = this.state.errors;
    let isFetching = this.props.state.kid.isFetching;
    let kid = this.props.state.kid.kids;
    if (isFetching) {
      return (
        <div className='text centered'>
          <h2>Loading ...</h2>
          <img src="/assets/images/loading.gif" alt="Loading content"/>
        </div>
      )
    } else if (!isFetching) {
      return (<EditProfile kid ={kid} submit={this.submit}/>);
    } else {
      return (
        <ErrorMessage message={errors.global}/>
      )
    }
  }
}

export default connect( (state) => ({state}), {getKid, updateKid, fetchKids})(EditKid);
