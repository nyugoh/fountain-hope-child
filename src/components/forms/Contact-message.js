import React, { Component } from "react";
import { Form, TextArea, Button, Divider } from "semantic-ui-react";
import Notification from "../panels/Notifcation";

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: "",
      loading: props.loading,
      sent: false
    };
  }

  handleChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  submit = () => {
    this.setState({ loading: true });
    this.props
      .sendMessage(this.state.data)
      .then(() => {
        this.setState({ loading: false });
        this.setState({ sent: true });
        this.setState({ data: { fromName: "" } });
        this.setState({ data: { fromEmail: "" } });
        this.setState({ data: { body: "" } });
      })
      .catch(error => {
        this.setState({ loading: false });
        this.setState({ errors: error.message });
      });
  };

  render() {
    const { loading, errors, sent, data } = this.state;
    return (
      <div>
        <h3>Leave us a message</h3>
        <Divider />
        <Form size="large" onSubmit={this.submit} loading={loading}>
          <Form.Group>
            <Form.Input
              placeholder="Name"
              width={8}
              required
              name="fromName"
              value={data.fromName}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="email"
              width={8}
              required
              name="fromEmail"
              value={data.fromEmail}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              width={16}
              control={TextArea}
              name="body"
              value={data.body}
              onChange={this.handleChange}
              placeholder="Enter your message here..."
            />
          </Form.Group>
          <br />
          <Button positive fluid success>
            SEND <i style={{ marginLeft: "8px" }} className="icon send" />
          </Button>
          {errors !== "" && <Notification color={"red"} message={errors} />}
          {sent === true && (
            <Notification
              color={"teal"}
              message={"Message sent successfully..."}
            />
          )}
        </Form>
      </div>
    );
  }
}

export default MessageBox;
