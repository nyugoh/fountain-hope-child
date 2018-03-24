import React, {Component} from 'react';
import {Form, Button, TextArea, Label} from 'semantic-ui-react';

class AddSponsor extends Component {
  constructor(props) {
    super(props);
    // this.submit = props.submit;
    this.state = {
      data: {},
      files: {},
      errors: [],
      isLoading: false
    }
  }

  submit = () =>{
    this.setState({isLoading: true});
   this.props.submit(this.state.data, this.state.files);
  };

  handleChange = (e) =>{
    this.setState({data: { ...this.state.data, [e.target.name]:e.target.value }});
  };

  upload = (e) =>{
    const files = e.target.files;
    let imageNames = [];
    let images = [];
    for(let f in files) if (files[f].size > 0) {images.push(files[f]);imageNames.push(files[f].name);};
    this.setState({data:{...this.state.data, profileImages:imageNames}});
    this.setState({files:images});
  };


  render() {
    return (
      <div>
        <h4>Add a sponsor/Donor</h4>
        <hr/>
        <Form size='large' onSubmit={this.submit} loading={this.state.isLoading}>
          <label>Full name</label>
          <Form.Group>
            <Form.Input placeholder='Full Name ...' width={16} required name='fullName' onChange={this.handleChange} />
          </Form.Group>
          <label>Email</label>
          <Form.Group>
            <Form.Input placeholder='Email ...' width={16} name='email' onChange={this.handleChange} />
          </Form.Group>
          <label>Phone #</label>
          <Form.Group>
            <Form.Input placeholder='Phone # ...' width={16} name='phone' onChange={this.handleChange} />
          </Form.Group>
          <label>Message</label>
          <Form.Group>
            <Form.Field width={16} control={TextArea} name='message' onChange={this.handleChange} placeholder='Enter a message to be displayed along with their profile...' />
          </Form.Group>
          <label>Documents</label>
          <Form.Field>
            <input type="file" name='profile' onChange={this.upload} placeholder='Profile image ...'/>
          </Form.Field>
          <Button positive fluid className='ui right floated' success>ADD  <i style={{'marginLeft':'8px'}} className='icon add'/></Button>
        </Form>
      </div>
    );
  }
}


export default AddSponsor;
