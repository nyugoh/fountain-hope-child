import React from 'react';
import moment from 'moment';
import {Icon, Modal, Header, Button, Label } from 'semantic-ui-react';

class MessagesTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      message: props.message
    }
  };

  showMessage() {
    this.setState({isOpen: true});
  };

  closeModal() {
    this.setState({isOpen: false});
    this.props.markAsRead(this.state.message._id);
  };

  deleteMessage = () => {
    this.props.deleteMessage(this.state.message._id).then( ()=>{
      this.setState({ isOpen: false });
    });
  };

  render() {
    // TODO ADD subject for messages
    const { message } = this.props;
    return (
      <tr onClick={this.showMessage.bind(this)} className={message.isRead? '': 'active'}>
        <td style={{cursor:'pointer'}}>
          {message.isRead?  <Label as='span' color='grey' ribbon>
            Read
          </Label>:  <Label as='span' color='teal' ribbon>
            Unread
          </Label>}
          {message.toName.toUpperCase()}</td>
        <td>{message.fromEmail}</td>
        <td>{moment(message.createdAt).format('DD MMMM YYYY')}</td>
        <td>{message.body.length > 30 ? message.body.substring(0, 30) + ' ...' : message.body}</td>
        <td>
          <Button
            icon
            labelPosition={'right'}
            color={'teal'}
            onClick={this.deleteMessage.bind(this)}>
            Delete
            <Icon
              name='trash'
              color={'red'}/>
          </Button>
          <Button
            onClick={this.closeModal.bind(this)}
            positive={true}>Mark as Read</Button>
        </td>
        <Modal open={this.state.isOpen}>
          <Modal.Header>
            <span className={'ui text lead'}>
              From: {message.fromEmail}
            </span>
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p>
                <b>To:</b> {message.toName}
                &nbsp;&nbsp;&nbsp; <b>Date:</b> {moment(message.createdAt).format("DD MMMM YYYY H:m:s")}
              </p>
              <div className="ui divider"/>
              <Header as={'h4'}>Body</Header>
              <p>{message.body}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              icon
              labelPosition={'right'}
              color={'teal'}
              onClick={this.deleteMessage.bind(this)}>
              Delete
              <Icon
              name='trash'
              color={'red'}/>
            </Button>
            <Button
              onClick={this.closeModal.bind(this)}
              positive={true}>Close</Button>
          </Modal.Actions>
        </Modal>
      </tr>
    )
  }

}

export default MessagesTable;