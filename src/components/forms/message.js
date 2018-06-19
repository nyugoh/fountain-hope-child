import React, {Component} from 'react';
import {Form, TextArea, Button} from 'semantic-ui-react';
import Notification from "../panels/Notifcation";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        to: props.kidId
      },
      errors: "",
      loading: false,
      sent: false
    };
  };

  handleChange = (e) =>{
    this.setState({data:{...this.state.data, to: this.props.kidId, [e.target.name]: e.target.value}});
  };

  submit = () =>{
    this.setState({ loading: true });
    this.props.sendMessage(this.state.data).then( () => {
      this.setState({loading: false});
      this.setState({ sent: true });
      this.setState({ data: { fromName: ""} });
      this.setState({ data: { fromEmail: ""} });
      this.setState({ data: { body: ""} });
    }).catch(error =>{
      this.setState({loading: false});
      this.setState({ errors: error.message });
    })
  };

  render() {
    const { errors, sent, loading, data } = this.state;
    return (
      <div>
        <hr/>
        <h3>Leave a message for {this.props.name}</h3>
        <Form size='large' onSubmit={this.submit} loading={loading}>
          <Form.Group>
            <Form.Input placeholder='Name' width={8} required name='fromName' value={data.fromName}  onChange={this.handleChange} />
            <Form.Input placeholder='email' width={8} required name='fromEmail' value={data.fromEmail}  onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Field width={16} control={TextArea} name='body' value={data.body}  onChange={this.handleChange} placeholder='Enter your well wishes message here...' />
          </Form.Group>
          <br/>
          <Button positive fluid success>SEND  <i style={{'marginLeft':'8px'}} className='icon send'/></Button>
          {errors !=="" && <Notification color={"red"} message={errors}/>}
          {sent === true && <Notification color={'teal'} message={'Message sent successfully...'}/>}
        </Form>
      </div>
    );
  }
};

export default Message;
