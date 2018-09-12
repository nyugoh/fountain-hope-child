import React, {Component} from 'react';
import { connect } from 'react-redux';
import MessagesTable from './components/MessagesTable';
import { Header, Menu, Label, Icon, Grid } from 'semantic-ui-react'
import { markAsRead, deleteMessage } from "../../actions/admin";

class Messages extends Component {
  constructor(props) {
    super(props);
  }

  markAsRead = message =>{
    this.props.markAsRead(message)
  };

  deleteMessage = message => this.props.deleteMessage(message);

  render() {
    let { messages, kids } = this.props;
      let unread = messages.filter(message=> !message.isRead);
      return (
        <div>
          {messages.length === 0? <div className="ui info message">
            <div className="header">Ooopps... !!</div>
            <p>There are no messages yet.</p>
          </div>:<Header color={'grey'} as={'h3'}>Messages</Header>
          }
          <Grid className="ui right aligned">
            <Grid.Column width={4}>
              <Menu size={'tiny'} compact>
                <Menu.Item as='a'>
                  <Icon name='mail' /> Inbox
                  <Label color='red' floating>{unread.length}</Label>
                </Menu.Item>
                <Menu.Item as='a'>
                  <Icon name='users' /> Total
                  <Label color='teal' floating>{messages.length}</Label>
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid>
          <table className="ui table bordered celled stackable blue selectable">
            <thead>
            <tr>
              <th className="ui sortable">To</th>
              <th className="ui sortable">From</th>
              <th className="ui sortable">Date</th>
              <th>Message</th>
            </tr>
            </thead>
            {messages.map( (message, index) => {
              if(message.to !== 'admin'){
                let kid = kids.filter( kid => kid._id === message.to)
                console.log(kids)
                console.log(kid)
                message.toName = kid[0]['fullName'];
              } else {
                message.toName = 'admin';
              }
              return <MessagesTable
                markAsRead={this.markAsRead.bind(this)}
                deleteMessage={this.deleteMessage.bind(this)}
                message={message}
                key={index}/>
            })}
          </table>
        </div>
      );
  }
}

const mapStateToProps = state =>({
  messages: state.admin.messages,
  kids: state.kids.kids
});

export default connect(mapStateToProps, { markAsRead, deleteMessage })(Messages);
