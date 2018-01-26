import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/forms/Login';

class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return
};

export default connect(null, mapDispatchToProps)(Login);
