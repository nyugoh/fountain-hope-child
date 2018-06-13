import React, {Component} from 'react';
import {Button, Modal, Icon, TextArea, Form} from 'semantic-ui-react';

class EditUpdate extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      update: this.props.update
    }
  };

  openModal() {
    this.setState({ isOpen: true });
  };

  cancelModal() {
    this.setState({ isOpen: false });
  };

  editUpdate = () => {
    this.props.editUpdate(this.state.update).then(()=>{
      this.setState({ isOpen: false });
    }).catch(error =>{
      alert("Not, edited.."+ error.message)
    });
  };

  handleChange = (e) => {
    this.setState({ update: { ...this.state.update, [e.target.name]: e.target.value}});
  };

  render() {
    let { update } = this.state;
    if (update === undefined) {
      update = {}
    }
    return (
      <Modal
        size='tiny'
        trigger={
          <Button
            color={'blue'}
            floated='right'
            icon
            onClick={this.openModal.bind(this)}
            labelPosition={'right'}>
            Edit
            <Icon name='pencil' />
          </Button>}
        open={this.state.isOpen}>
        <Modal.Header>
          Edit update
        </Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.editUpdate}>
            <Form.Field>
              <Form.Field
                control={TextArea}
                required
                label='Update'
                className='kidUpdateStory'
                name='body'
                value={update.body}
                onChange={this.handleChange}
                placeholder='Describe the incidents/events that have happened to the child...' />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.cancelModal.bind(this)}
            negative>Cancel</Button>
          <Button
            onClick={this.editUpdate.bind(this)}
            positive
            icon='checkmark'
            labelPosition='right'
            content='Edit' />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default EditUpdate;
