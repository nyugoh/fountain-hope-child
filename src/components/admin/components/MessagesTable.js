import React from 'react';
import {Icon } from 'semantic-ui-react';

function MessagesTable(props) {
  return (
    <tbody>
      {props.messages.map((message, index)=>{
        return(
          <tr id={index}>
            <td>
              {message.isRead?
                <div class="ui ribbon label">Read</div>:
                <div class="ui ribbon label blue">Unread</div>
              }
            </td>
            <td>{message.to}</td>
            <td>{message.fromName}</td>
            <td>{message.body}</td>
            <td>
              <Icon name='star green'/>
              <Icon name='archive blue'/>
              <Icon name='trash red'/>
            </td>
          </tr>
        )
      })}
    </tbody>
  );
}

export default MessagesTable;
