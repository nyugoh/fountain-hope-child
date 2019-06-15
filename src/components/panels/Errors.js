import React from "react";
import { Message } from "semantic-ui-react";

function ErrorMessage(props) {
  return (
    <Message warning>
      <Message.Header>{props.message}</Message.Header>
    </Message>
  );
}

export default ErrorMessage;
