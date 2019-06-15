import React, { Component } from "react";
import { connect } from "react-redux";
import Signup from "../components/forms/Signup";
import { signup } from "../actions/auth";

class Login extends Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/admin"));

  render() {
    return (
      <div>
        <Signup submit={this.submit} />
      </div>
    );
  }
}

export default connect(
  null,
  { signup }
)(Login);
