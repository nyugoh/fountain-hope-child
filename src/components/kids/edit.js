import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateKid, uploadFiles } from '../../actions/kids';
import ErrorMessage from '../panels/Errors';
import EditProfile from '../forms/Edit-profile';
class EditKid extends Component {
  state = {
    data: {},
    errors: []
  };

  submit = (data, files) =>{
    let form = new FormData();
    for(let i in files) form.append(files[i].name, files[i]);
    let kid = data;
    kid.fullName = `${kid.sirName} ${kid.firstName} ${kid.middleName}`;
    this.props.updateKid(kid).then( () => {
      if (Object.keys(form).length > 0)
        this.props.uploadFiles(form).then( ()=> {
          this.props.history.push('/admin/kids')
        });
      else
        this.props.history.push('/admin/kids')

    }).catch(error => {
      console.log(error);
      this.setState({ loading: false });
      this.setState({ errors: error.message });
    });
  };

  render() {
    let { kids } = this.props;
    let id = this.props.match.params.kidId;
    let child = kids.filter( kid => kid._id===id);
    let kid = {};
    if (child.length >0)
      kid = child[0];
    return (<EditProfile kid ={kid} submit={this.submit}/>);
  }
}

export default connect( (state) => ({ kids: state.kids.kids }), { updateKid, uploadFiles })(EditKid);
