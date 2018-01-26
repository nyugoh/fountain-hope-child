import React, {Component} from 'react';
import {Grid, Form, Button, Input} from 'semantic-ui-react';
import validator from 'validator';
import InlineError from "../panels/InlineError";

class Login extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    errors: [],
    loading: false
  };

  onChange = (e) => {
    this.setState({ data: {...this.state.data, [e.target.name]:e.target.value} });
  };

  submit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  validate = (data) => {
    const errors = [];
    if (!validator.isEmail(data.email)) errors.email= 'Invalid email';
    if (data.password === '') errors.password = 'Required';
    return errors;
  };


  render() {
    const {email, password, errors} = this.state;
    return (
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column width={4} textAlign='center'/>
          <Grid.Column width={8} padded='true'>
            <h3>Login Form</h3>
            <hr/>
            <Form onSubmit={this.submit}>
              <Form.Field error={!!errors.email}>
                <Input
                  type="text"
                  icon='mail'
                  iconPosition='left'
                  name='email'
                  placeholder='Enter your email here...'
                  value={email}
                  onChange={this.onChange}
                />
                <InlineError message={errors.email}/>
              </Form.Field>

              <Form.Field error={!!errors.password}>
                <Input
                  type="password"
                  icon='lock'
                  iconPosition='left'
                  name='password'
                  placeholder='Make it secure...'
                  value={password}
                  onChange={this.onChange}
                />
                <InlineError message={errors.password}/>
              </Form.Field>
              <Button positive fluid>Login <i className='icon sign in' style={{'marginLeft': '10px'}}/></Button>
            </Form>
          </Grid.Column>
          <Grid.Column width={4} textAlign='center'/>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Login;
