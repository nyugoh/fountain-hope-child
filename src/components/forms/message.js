import React, {Component} from 'react';
import {Form, TextArea, Button} from 'semantic-ui-react';

class Message extends Component {
  render() {
    return (
      <div>
        <hr/>
        <h3>Leave a message for {this.props.name}</h3>
        <Form size='large'>
          <Form.Group>
            <Form.Input placeholder='Name' width={8} />
            <Form.Input placeholder='email' width={8} />
          </Form.Group>
          <Form.Group>
            <Form.Field width={16} control={TextArea} placeholder='Enter your well wishes message here...' />
          </Form.Group>
          <br/>
          <Button positive fluid className='ui right floated' success>SEND  <i style={{'marginLeft':'8px'}} className='icon send'/></Button>
        </Form>
        <hr/>
      </div>
    );
  }
};

export default Message;
