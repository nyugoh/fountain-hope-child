import React, {Component} from 'react';
import {Form, TextArea, Button} from 'semantic-ui-react';

class Message extends Component {
  constructor(props) {
    super();
    this.state = {
      data: {
        to: props.kidId
      },
      errors: []
    };
  };

  handleChange = (e) =>{
    this.setState({data:{...this.state.data, [e.target.name]: e.target.value}});
  };

  submit = () =>{
    this.props.sendMessage(this.state.data);
  };

  render() {
    return (
      <div>
        <hr/>
        <h3>Leave a message for {this.props.name}</h3>
        <Form size='large' onSubmit={this.submit}>
          <Form.Group>
            <Form.Input placeholder='Name' width={8} required name='fromName' onChange={this.handleChange} />
            <Form.Input placeholder='email' width={8} required name='fromEmail' onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Field width={16} control={TextArea} name='body' onChange={this.handleChange} placeholder='Enter your well wishes message here...' />
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
