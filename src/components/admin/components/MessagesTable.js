import React from 'react';
import moment from 'moment';
import {Icon } from 'semantic-ui-react';

function MessagesTable(props) {//TODO:: Show message in a modal
  return (
    <tbody>
      {props.messages.map((message, index)=>{
        return(

          <tr id={index} onClick={() => showMessage(message)}>
            <td>
              {message.isRead?
                <div class="ui ribbon label">Read</div>:
                <div class="ui ribbon label blue">Unread</div>
              }
            </td>
            <td>{message.to}</td>
            <td>{message.fromEmail}</td>
            <td>{moment(message.createdAt).format('DD/MMMM/YYYY')}</td>
            <td>{message.body.length >30?message.body.substring(0, 30)+ ' ...': message.body}</td>
            <td>
              {/* TODO:: Show warning message*/}
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

function showMessage(message) {
  {/*<div class="ui standard demo button">Standard Modal</div>*/}
  {/*$('.standard.demo.modal')*/}
    {/*.modal('attach events', '.standard.demo.button')*/}
}
export default MessagesTable;
