import React, {Component} from 'react';
import {Form, TextArea, Button} from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

class AddKid extends Component {
  // state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    // const { value } = this.state;

    return (
      <div>
        <h2>Add a child</h2>
        <Form size='large'>
          <hr/>
          <h3>Personal Details</h3>
          <Form.Group widths='2'>
            <Form.Input fluid label='Sir name' placeholder='Sir name' />
            <Form.Input fluid label='First name' placeholder='First name' />
            <Form.Input fluid label='Middle name' placeholder='Middle name' />
            <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
          </Form.Group>
          <Form.Group widths='2'>
            <Form.Input fluid label='Date of Birth' placeholder='DoB' />
            <Form.Input fluid label='Place of Birth' placeholder='Place of Birth' />
            <Form.Input fluid label='Religion' placeholder='Religion' />
          </Form.Group>
          <Form.Group widths='2'>
            <Form.Input fluid label='Phone' placeholder='Phone #' />
            <Form.Input fluid label='Address' placeholder='Address' />
            <Form.Input fluid label='Email' placeholder='Email' />
          </Form.Group>

          <hr/>
          <h3>Child Story</h3>
          <Form.Field>
            <Form.Field control={TextArea} label='Story' placeholder='Describe the incidents/events that have happened to the child...' />
          </Form.Field>
          <hr/>
          <h3>Documents</h3>
          <Form.Field>
            <input type="file" multiple='true' name='documents' placeholder='Child documents ...'/>
          </Form.Field>
          <hr/>
          <br/>
          <Form.Checkbox label='The information I have provided here is correct and verifiable.' />
          <Button className='ui right floated' positive size='large'>ADD</Button>
        </Form>
      </div>
    );
  }
}

export default AddKid;
