import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, TextArea, Checkbox, Button} from 'semantic-ui-react';
import {addKid, fetchKids} from "../../actions/kids";
import MessageDialog from "../panels/Message";
import moment from 'moment';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

class AddKid extends Component {
  state = {
    data: {},
    files: {},
    loading: false,
    errors: []
  };

  isAccepted = false;

  handleChange = (e) => {
    this.setState({data: {...this.state.data, [e.target.name]:e.target.value} });
  };

  handleSelectChange = (e, data) => {
    this.setState({data: {...this.state.data, gender:data.value} });
  };

  upload = (e) =>{
    const files = e.target.files;
    let imageNames = [];
    let images = [];
    for(let f in files) if (files[f].size > 0) {images.push(files[f]);imageNames.push(files[f].name);};
    this.setState({data:{...this.state.data, profileImages:imageNames}});
    this.setState({files:images});
  };

  checkValidity = (e, data) =>{
    this.isAccepted = data.checked;
  };

  setDOB = (e) =>{
    let dob = moment(e.target.value).toISOString();
    this.setState({data: {...this.state.data, dob:dob} });
  };

  submit = () =>{
    if (this.isAccepted) {
      let kid = this.state.data;
      kid.fullName = `${kid.sirName} ${kid.firstName} ${kid.middleName}`;
      this.props.addKid(kid, this.state.files).then( () => {
        this.props.fetchKids().then( ()=>{
          this.props.history.push('/kids')
        })
      });
    } else {
      this.setState({ errors: { confirmationError: 'You need to confirm the validity of this information.'}})
    }
  };

  render() {
    const {errors} = this.state;
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
            <Form.Select fluid required label='Gender' name='gender' options={options} placeholder='Gender' onChange={this.handleSelectChange} />
          </Form.Group>
          <Form.Group widths='2'>
            <Form.Input fluid required type='date' label='Date of Birth' name='dob' placeholder='DoB' onChange={this.setDOB} />
            <Form.Input fluid required label='Place of Birth' name='pob' placeholder='Place of Birth' onChange={this.handleChange} />
            <Form.Input fluid required label='Religion' name='religion' placeholder='Religion' onChange={this.handleChange} />
          </Form.Group>
          <Form.Group widths='2'>
            <Form.Input fluid required label='Phone' name='phoneNumber' placeholder='Phone #' onChange={this.handleChange} />
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
            <input type="file" multiple='false' name='documents' onChange={this.upload} placeholder='Child documents ...'/>
          </Form.Field>
          <hr/>
          <br/>
          <Checkbox  name='accept' label='The information I have provided here is correct and verifiable.' onChange={this.checkValidity} />
          <Button className='ui right floated' positive size='large'>ADD</Button><br/><br/>
          {!!errors.confirmationError && <MessageDialog message={errors.confirmationError}/>}
        </Form>
      </div>
    );
  }
}

export default connect(null, {addKid, fetchKids})(AddKid);
