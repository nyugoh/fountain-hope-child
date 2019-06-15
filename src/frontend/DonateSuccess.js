import React, { Component } from "react";
import { Icon, Header, Button, Segment, Modal } from "semantic-ui-react";
import Message from "../components/forms/Contact-message";
import { sendMessage } from "../actions/kids";
import { connect } from "react-redux";

class DonateSuccess extends Component {
  sendMessage = message => this.props.sendMessage(message);

  render() {
    return (
      <div>
        <Segment raised textAlign={"center"}>
          <Icon name={"check circle outline"} color={"green"} size={"huge"} />
          <Header as={"h1"} style={{ fontSize: 50 }}>
            Thank you !
          </Header>
          <p>
            We have received your payment. We highly appreciate your
            contribution.
          </p>

          <Modal trigger={<Button color={"green"}>Leave a message</Button>}>
            <Modal.Content>
              <Modal.Description>
                <Message sendMessage={this.sendMessage} />
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Segment>
      </div>
    );
  }
}

export default connect(
  null,
  { sendMessage }
)(DonateSuccess);
