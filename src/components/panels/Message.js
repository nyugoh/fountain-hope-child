import React from "react";
import { Message } from "semantic-ui-react";

class MessageDialog extends React.Component {
  state = { visible: true };

  handleDismiss = () => {
    this.setState({ visible: false });

    setTimeout(() => {
      this.setState({ visible: true });
    }, 2000);
  };

  render() {
    if (this.state.visible)
      return (
        <Message
          info
          onDismiss={this.handleDismiss}
          header={this.props.message}
          content={this.props.body}
        />
      );
  }
}

export default MessageDialog;
