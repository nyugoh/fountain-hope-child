import React from "react";
import { Message } from "semantic-ui-react";

const Notification = ({ color, message }) => {
  return (
    <Message color={color}>
      <p>{message}</p>
    </Message>
  );
};

export default Notification;
