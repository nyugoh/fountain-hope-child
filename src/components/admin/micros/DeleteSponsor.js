import React, {Component} from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

class DeleteSponsor extends Component {
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

  deleteSponsor() {
    this.props.deleteSponsor(this.props.sponsor._id).then(()=>{
      this.setState({ isOpen: false });
    }).catch(error =>{
      alert("Not, deleted.."+ error.message)
    });
  };

  render() {
    const { sponsor } = this.props;
    return (
      <Modal size='tiny' trigger={<Icon name='trash' color={'red'} size={'large'} onClick={this.openModal.bind(this)}/>} open={this.state.isOpen}>
        <Modal.Header>
          Delete {sponsor.fullName}
        </Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this sponsor ?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.cancelModal.bind(this)}
            negative>No</Button>
          <Button
            onClick={this.deleteSponsor.bind(this)}
            positive
            icon='checkmark'
            labelPosition='right'
            content='Yes' />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default DeleteSponsor;
