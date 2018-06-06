import React, {Component} from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

class ArchiveModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  };

  openModal() {
    this.setState({ isOpen: true });
  };

  cancelModal() {
    this.setState({ isOpen: false });
  };

  archiveKid() {
    this.props.archiveKid(this.props.kid._id).then(()=>{
      this.setState({ isOpen: false });
    }).catch(error =>{
      alert("Not, archived.."+ error.message)
    });
  };

  render() {
    const { kid } = this.props;
    return (
      <Modal size='tiny' trigger={<Icon name='lock' color={'green'} size={'large'} onClick={this.openModal.bind(this)}/>} open={this.state.isOpen}>
        <Modal.Header>
          Delete {`${kid.firstName} ${kid.middleName} ${kid.sirName}`}
        </Modal.Header>
        <Modal.Content>
          <p>Remove kid from frontend diplay ?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
          onClick={this.cancelModal.bind(this)}
            negative>No</Button>
          <Button
            onClick={this.archiveKid.bind(this)}
            positive
            icon='checkmark'
            labelPosition='right'
            content='Yes' />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ArchiveModal;
