import React, { Component } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  cancelModal() {
    this.setState({ isOpen: false });
  }

  deleteKid() {
    this.props
      .deleteKid(this.props.kid._id)
      .then(() => {
        this.setState({ isOpen: false });
      })
      .catch(error => {
        alert("Not, deleted.." + error.message);
      });
  }

  render() {
    const { kid } = this.props;
    return (
      <Modal
        size="tiny"
        trigger={
          <Button
            color={"red"}
            floated="right"
            icon
            onClick={this.openModal.bind(this)}
            labelPosition={"right"}
          >
            Delete
            <Icon name="trash" />
          </Button>
        }
        open={this.state.isOpen}
      >
        <Modal.Header>
          Delete {`${kid.firstName} ${kid.middleName} ${kid.sirName}`}
        </Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this kid ?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.cancelModal.bind(this)} negative>
            No
          </Button>
          <Button
            onClick={this.deleteKid.bind(this)}
            positive
            icon="checkmark"
            labelPosition="right"
            content="Yes"
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default DeleteModal;
