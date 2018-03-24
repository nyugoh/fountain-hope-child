import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchMessages} from "../../actions/admin";
import MessagesTable from './components/MessagesTable';
import Loading from '../../components/panels/Loading';

class Messages extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    const messages = this.props.messages;
    if (messages){
      // let unread; {messages.map(message=>{ !message.isRead? unread += 1:'';})}
      return (
        <div>
          {/*<span class="ui teal label">{unread}</span>*/}
          <h2>Messages </h2>
          <table className="ui table bordered celled stackable blue selectable">
            <thead>
            <tr>
              <th className="ui sortable">Status</th>
              <th className="ui sortable">To</th>
              <th className="ui sortable">From</th>
              <th className="ui sortable">Date</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
            </thead>
            <MessagesTable messages={messages}/>
            <tfoot>
            <tr><th colspan="6">
              <div className="ui right floated pagination menu tiny">
                <a className="icon item">
                  <i className="left chevron icon"></i>
                </a>
                <a className="item">1</a>
                <a className="item">2</a>
                <a className="item">3</a>
                <a className="item">4</a>
                <a className="icon item">
                  <i className="right chevron icon"></i>
                </a>
              </div>
            </th>
            </tr></tfoot>
          </table>
        </div>
      );
    } else{
      return (
        <Loading/>
      );
    }
  }
}

const mapStateToProps = (state) =>{
  console.log(state.admin.messages);
  return {
    messages: state.admin.messages
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: () => dispatch(fetchMessages())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
