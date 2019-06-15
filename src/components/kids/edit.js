import React, { Component } from "react";
import { connect } from "react-redux";
import { updateKid, uploadFiles } from "../../actions/kids";
import EditProfile from "../forms/Edit-profile";
class EditKid extends Component {
  state = {
    data: {},
    errors: []
  };

  submit = data => {
    let kid = data;
    kid.fullName = `${kid.sirName} ${kid.firstName} ${kid.middleName}`;
    this.props
      .updateKid(kid)
      .then(() => {
        this.props.history.push("/admin/kids");
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
        this.setState({ errors: error.message });
      });
  };

  render() {
    let { kids } = this.props;
    let id = this.props.match.params.kidId;
    let child = kids.filter(kid => kid._id === id);
    let kid = {};
    if (child.length > 0) kid = child[0];
    return (
      <EditProfile
        kid={kid}
        submit={this.submit}
        uploadFiles={this.props.uploadFiles}
      />
    );
  }
}

export default connect(
  state => ({ kids: state.kids.kids }),
  { updateKid, uploadFiles }
)(EditKid);
