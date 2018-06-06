import React, {Component} from 'react';
import {Form, TextArea, Checkbox, Button} from 'semantic-ui-react';
import moment from 'moment';

const options = [
  { key: 'm', text: 'Male', value: 'male'},
  { key: 'f', text: 'Female', value: 'female' },
];

class Editprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { ...props.kid },
      files: {},
      loading: false,
      errors: []
    };
  }

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

  setDOB = (e) =>{
    let dob = moment(e.target.value).toISOString();
    this.setState({data: {...this.state.data, dob:dob} });
  };

  submit = () =>{
    this.setState({ loading: true });
    this.props.submit(this.state.data, this.state.files);
  };

  render() {
    let { data } = this.state;
    let kid = data;
    return (
      <div>
        <h2>Editing {kid.fullName}</h2>
        <Form size='large' onSubmit={this.submit}>
          <hr/>
          <h3>Personal Details</h3>
          <Form.Group widths='2'>
            <Form.Input fluid required label='Sir name' name='sirName' value={kid.sirName} placeholder='Sir name' onChange={this.handleChange} />
            <Form.Input fluid required label='First name' name='firstName' value={kid.firstName} placeholder='First name' onChange={this.handleChange} />
            <Form.Input fluid required label='Middle name' name='middleName' value={kid.middleName} placeholder='Middle name' onChange={this.handleChange} />
            <Form.Select fluid required label='Gender' name='gender' value={kid.gender} options={options} placeholder='Gender' onChange={this.handleSelectChange} />
          </Form.Group>
          <Form.Group widths='2'>
            <Form.Input fluid required type='date' label='Date of Birth' value={moment(kid.dob).format('YYYY-MM-DD')}  name='dob' placeholder='DoB' onChange={this.setDOB} />
            <Form.Input fluid required label='Place of Birth' name='pob'  value={kid.pob} placeholder='Place of Birth' onChange={this.handleChange} />
            <Form.Input fluid required label='Religion' name='religion' value={kid.religion} placeholder='Religion' onChange={this.handleChange} />
          </Form.Group>
          <Form.Group widths='2'>
            <Form.Input fluid required label='Phone' name='phoneNumber' value={kid.phoneNumber} placeholder='Phone #' onChange={this.handleChange} />
            <Form.Input fluid required label='Address' name='address' value={kid.address} placeholder='Address' onChange={this.handleChange} />
            <Form.Input fluid required label='Email' name='email' value={kid.email} placeholder='Email' onChange={this.handleChange} />
          </Form.Group>

          <hr/>
          <h3>Child Story</h3>
          <Form.Field>
            <Form.Field control={TextArea} required label='Story' value={kid.story} name='story' onChange={this.handleChange} placeholder='Describe the incidents/events that have happened to the child...' />
          </Form.Field>
          <hr/>
          <h3>Documents</h3>
          <Form.Field>
            <input type="file" multiple='true' name='documents' onChange={this.upload} placeholder='Child documents ...'/>
          </Form.Field>
          <hr/>
          <br/>
          <Checkbox  name='accept' label='The information I have provided here is correct and verifiable.' onChange={this.checkValidity} />
          <Button className='ui right floated' positive size='large'>UPDATE</Button><br/><br/>
        </Form>
      </div>
    );
  }
}

export default Editprofile;
