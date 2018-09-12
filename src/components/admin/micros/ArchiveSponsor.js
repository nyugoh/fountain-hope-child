import React, {Component} from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

class ArchiveSponsor extends Component {
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

  archiveSponsor() {
    this.props.archiveSponsor(this.props.sponsor._id).then(()=>{
      this.setState({ isOpen: false });
    }).catch(error =>{
      alert("Not, archived.."+ error.message)
    });
  };

  render() {
    const { sponsor } = this.props;
    return (
      <Modal size='tiny' trigger={
        <Button
          color={'blue'}
          floated='right'
          icon
          onClick={this.openModal.bind(this)}
          labelPosition={'right'}>
          {sponsor.isShowing? 'Archive': 'Display' }
          <Icon name='lock' />
        </Button>
      } open={this.state.isOpen}>
        <Modal.Header>
          Archive {sponsor.fullName}
        </Modal.Header>
        <Modal.Content>
          {sponsor.isShowing? <p>Remove sponsor from frontend diplay ?</p>:
            <p>Add sponsor to the frontend diplay ?</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.cancelModal.bind(this)}
            negative>No</Button>
          <Button
            onClick={this.archiveSponsor.bind(this)}
            positive
            icon='checkmark'
            labelPosition='right'
            content='Yes' />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ArchiveSponsor;
