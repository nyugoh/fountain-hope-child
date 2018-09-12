import React from 'react';
import moment from 'moment';
import {Icon, Modal, Header, Button } from 'semantic-ui-react';

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
        <td>{message.toName.toUpperCase()}</td>
        <td>{message.fromEmail}</td>
        <td>{moment(message.createdAt).format('DD MMMM YYYY')}</td>
        <td>{message.body.length > 30 ? message.body.substring(0, 30) + ' ...' : message.body}</td>
        <Modal open={this.state.isOpen}>
          <Modal.Header>
            <span className={'ui text lead'}>
              <Icon name={'user'} circular={true}/>
              {message.fromEmail}
            </span>
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header color={'grey'} as={'h4'}>Subject</Header>
              <p>To:: {message.toName.toUpperCase()}</p>
              <p>{moment(message.createdAt).format("DD MMMM YYYY H:m:s")}</p>
              <div className="ui divider"/>
              <Header color={'grey'} as={'h4'}>Body</Header>
              <div className="ui divider"/>
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