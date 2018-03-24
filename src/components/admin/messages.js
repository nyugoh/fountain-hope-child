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
    this.props.fetchMessages(this.props.history.location.search);
  }

  getPages = (total) =>{
    var pages;
    var perPage = 2;
    pages = total/perPage;
    total%perPage > 0 ? pages++: '';
    var url = [];
    for(let i=1;i<=pages;i++)
      url[i-1] = `/admin/messages?page=${i}`;
    return url;
  };

  render() {
    const {messages, total} = this.props;
    if (messages){
      let pages = this.getPages(total);
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
                {pages.map((url, index)=>{
                  return (<a className="item" href={url}>{index+1}</a>)
                })}
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
  return {
    messages: state.admin.messages.body,
    total: state.admin.messages.total
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: (search) => dispatch(fetchMessages(search))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
