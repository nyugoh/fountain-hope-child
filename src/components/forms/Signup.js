import React, {Component} from 'react';
import {Grid, Form, Button, Input, Message} from 'semantic-ui-react';
import validator from 'validator';
import InlineError from "../panels/InlineError";

class Signup extends Component {
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
      this.setState({loading: true});
      this.props.submit(this.state.data).catch( (error) => {
        this.setState({loading: false});
        this.setState({errors: error.response.data.errors})
      });
    }
  };

  comparePasswords = (e) => {

    if(this.state.data.password !== e.target.value) {
      this.setState({errors:{ ...this.state.errors, passwordagain: 'Passwords don\'t match'}})
    } else {
      this.setState({errors:{ }})
    }
  };

  validate = (data) => {
    const errors = [];
    if (!validator.isEmail(data.email)) errors.email= 'Invalid email';
    if (data.password === '') errors.password = 'Required';
    return errors;
  };


  render() {
    const {fullName, username, email, password, errors, loading} = this.state;
    return (
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column width={4} textAlign='center'/>
          <Grid.Column width={8} padded='true'>
            <h3>Sign-up Form</h3>
            <hr/>
            <Form onSubmit={this.submit} loading={loading}>
              {errors.global && <Message negative>
                <Message.Header>Sign-up failed</Message.Header>
                <p>{errors.global}</p>
              </Message>}
              <Form.Field error={!!errors.fullName}>
                <Input
                  type="text"
                  icon='user'
                  iconPosition='left'
                  name='fullName'
                  placeholder='Enter your full name here...'
                  value={fullName}
                  onChange={this.onChange}
                />
                <InlineError message={errors.fullName}/>
              </Form.Field>
              <Form.Field error={!!errors.username}>
                <Input
                  type="text"
                  icon='mail'
                  iconPosition='left'
                  name='userName'
                  placeholder='Username ...'
                  value={username}
                  onChange={this.onChange}
                />
                <InlineError message={errors.username}/>
              </Form.Field>
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
                  placeholder='Enter password...'
                  value={password}
                  onChange={this.onChange}
                />
                <InlineError message={errors.password}/>
              </Form.Field>
              <Form.Field error={!!errors.passwordagain}>
                <Input
                  type="password"
                  icon='lock'
                  iconPosition='left'
                  name='password-again'
                  placeholder='Repeat password...'
                  value={password}
                  onChange={this.comparePasswords}
                />
                <InlineError message={errors.passwordagain}/>
              </Form.Field>
              <Button positive fluid>Sign-up <i className='icon sign in' style={{'marginLeft': '10px'}}/></Button>
            </Form>
          </Grid.Column>
          <Grid.Column width={4} textAlign='center'/>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Signup;