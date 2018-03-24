import React, {Component} from 'react';

class AdminIndex extends Component {
  render() {
    return (
      <div>
        <h2>Hello admin</h2><br/><br/>
        <h3>To-do list</h3>
        <ul>
          <li>Show number of kids</li>
          <li>Show unread messages</li>
          <li>Show links to other admin pages</li>
        </ul>
      </div>
    );
  }
};

export default AdminIndex;
