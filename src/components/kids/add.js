import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, TextArea, Checkbox, Button} from 'semantic-ui-react';
import {addKid} from "../../actions/kids";

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

class AddKid extends Component {
  state = {
    data: {},
    loading: false,
    errors: []
  };
  handleChange = (e) => {
    this.setState({data: {...this.state.data, [e.target.name]:e.target.value} });
  };

  submit = () =>{
    this.props.addKid(this.state.data);
  };

  render() {
    return (
      <div>
        <h2>Add a child</h2>
        <Form size='large' onSubmit={this.submit}>
          <hr/>
          <h3>Personal Details</h3>
          <Form.Group widths='2'>
            <Form.Input fluid required label='Sir name' name='sirName' placeholder='Sir name' onChange={this.handleChange} />
            <Form.Input fluid required label='First name' name='firstName' placeholder='First name' onChange={this.handleChange} />
            <Form.Input fluid required label='Middle name' name='middleName' placeholder='Middle name' onChange={this.handleChange} />
            <Form.Select fluid required label='Gender' name='gender' options={options} placeholder='Gender' onChange={this.handleChange} />
          </Form.Group>
          <Form.Group widths='2'>
            <Form.Input fluid required label='Date of Birth' name='dob' placeholder='DoB' onChange={this.handleChange} />
            <Form.Input fluid required label='Place of Birth' name='pob' placeholder='Place of Birth' onChange={this.handleChange} />
            <Form.Input fluid required label='Religion' name='religion' placeholder='Religion' onChange={this.handleChange} />
          </Form.Group>
          <Form.Group widths='2'>
            <Form.Input fluid required label='Phone' name='phone' placeholder='Phone #' onChange={this.handleChange} />
            <Form.Input fluid required label='Address' name='address' placeholder='Address' onChange={this.handleChange} />
            <Form.Input fluid required label='Email' name='email' placeholder='Email' onChange={this.handleChange} />
          </Form.Group>

          <hr/>
          <h3>Child Story</h3>
          <Form.Field>
            <Form.Field control={TextArea} required label='Story' name='story' onChange={this.handleChange} placeholder='Describe the incidents/events that have happened to the child...' />
          </Form.Field>
          <hr/>
          <h3>Documents</h3>
          <Form.Field>
            <input type="file" multiple='true' name='documents' placeholder='Child documents ...'/>
          </Form.Field>
          <hr/>
          <br/>
          <Checkbox  name='accept' label='The information I have provided here is correct and verifiable.' />
          <Button className='ui right floated' positive size='large'>ADD</Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, {addKid})(AddKid);
