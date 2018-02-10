import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/forms/Login';
import {login} from '../actions/auth';

class Login extends Component {
  submit = (data) => this.props.login(data).then(() => this.props.history.push('/kids'));

  render() {
    return (
      <div>
        <LoginForm submit={this.submit}/>
      </div>
    );
  }
}


export default connect(null, { login })(Login);
