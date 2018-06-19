import React, {Component} from 'react';
import {Form, Button, TextArea, Message, Icon, Modal } from 'semantic-ui-react';

class EditSponsor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sponsor: this.props.sponsor,
      files: {},
      isOpen: false,
      errors: []
    }
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  handleChange = (e) =>{
    this.setState({sponsor: { ...this.state.sponsor, [e.target.name]:e.target.value }});
  };


  upload = (e) =>{
    const files = e.target.files;
    let imageNames = [];
    let images = [];
    for(let f in files) if (files[f].size > 0) {images.push(files[f]);imageNames.push(files[f].name);};
    this.setState({sponsor:{...this.state.data, profileImages:imageNames}});
    this.setState({files:images});
  };

  submit = () =>{
    this.props.submit(this.state.sponsor, this.state.files);
  };

  componentWillReceiveProps() {
    if (this.props.isDone)
      this.setState({ isOpen: false });
  };


  render() {
    let { sponsor } = this.state;
    const { isLoading, error } = this.props;
    if (sponsor === undefined)
      sponsor = {};
    return (
      <Modal size='tiny' trigger={<Icon color={'blue'} size={'large'} name={'pencil'} onClick={this.openModal.bind(this)}/>} open={this.state.isOpen}>
        <Modal.Header>
          Edit sponsor
          <Icon name={'window close outline'} size={'small'} style={{position: 'relative', left: '300px'}} onClick={()=> { this.setState({isOpen:false})}}/>
        </Modal.Header>
        <Modal.Content>
          <Form size='large' onSubmit={this.submit} loading={ isLoading }>
            <label>Full name</label>
            <Form.Group>
              <Form.Input
                placeholder='Full Name ...'
                width={16}
                required
                name='fullName'
                value={sponsor.fullName}
                onChange={this.handleChange} />
            </Form.Group>
            <label>Email</label>
            <Form.Group>
              <Form.Input
                placeholder='Email ...'
                width={16}
                name='email'
                value={sponsor.email}
                onChange={this.handleChange} />
            </Form.Group>
            <label>Phone #</label>
            <Form.Group>
              <Form.Input
                placeholder='Phone # ...'
                width={16}
                name='phone'
                value={sponsor.phone}
                onChange={this.handleChange} />
            </Form.Group>
            <label>Message</label>
            <Form.Group>
              <Form.Field
                width={16}
                control={TextArea}
                name='message'
                value={sponsor.message}
                onChange={this.handleChange}
                placeholder='Enter a message to be displayed along with their profile...' />
            </Form.Group>
            <label>Profile Image</label>
            <Form.Field>
              <input type="file"
                     name='profile'
                     onChange={this.upload}
                     placeholder='Profile image ...'/>
            </Form.Field>
            <Button positive fluid className='ui right floated' success>Edit  <i style={{'marginLeft':'8px'}} className='icon add'/></Button>
            {error && <Message warning>
              <Message.Content>{error}</Message.Content>
            </Message> }
          </Form>
          <div className="ui hidden divider"/>
          <br/><br/>
        </Modal.Content>
      </Modal>
    );
  }
}


export default EditSponsor;
