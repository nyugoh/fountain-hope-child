import React, {Component} from 'react';
import { Icon, Header, Button, Segment, Modal } from 'semantic-ui-react';
import Message from "../components/forms/Contact-message";
import {sendMessage} from "../actions/kids";
import {connect} from "react-redux";

class DonateError extends Component {
  render() {
    return (
      <div>
        <Segment raised textAlign={'center'}>
          <Icon name={'warning sign'} color={'red'} size={'huge'}/>
          <Header as={'h1'} style={{fontSize: 50}}>Fatal error occured !</Header>
          <p>We are experiencing a templorally down-time, we will be back shortly. We highly appreciate your contribution.</p>

          <Modal trigger={<Button color={'green'}>Leave a message</Button>}>
            <Modal.Content>
              <Modal.Description>
                <Message sendMessage={this.sendMessage}/>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Segment>
      </div>
    );
  }
}

export default connect(null, { sendMessage })(DonateError);
