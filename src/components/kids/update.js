import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Grid, TextArea, Button} from 'semantic-ui-react';
import {addUpdate} from '../../actions/kids';
import MessageDialog from '../panels/Message';

class KidUpdate extends Component {
  constructor(props) {
    super();
    this.state = {
      data: {
        to: props.match.params.kidId
      },
      loading: false,
      errors: []
    };
  }


  handleChange = (e) => {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value}});
  };

  submit = () => {
    this.props.addUpdate(this.state.data).then( () => {
      this.props.history.push('/kids/profile/'+this.props.match.params.kidId);
    });
  };

  render() {
    let errors = this.state;
    return (
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <img src="/assets/images/logo.png" alt='kid.fullName'/>
          </Grid.Column>
          <Grid.Column>
            <div>
              <h2>Jane Does's Story</h2>
              <p>The story goes here</p>
              <h5>Last Update: <small>Never</small></h5>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Form onSubmit={this.submit}>
              <h3>Add an update</h3>
              <Form.Field>
                <Form.Field control={TextArea} required label='Update' className='kidUpdateStory' name='body' onChange={this.handleChange} placeholder='Describe the incidents/events that have happened to the child...' />
              </Form.Field>
              <hr/>
              <h3>Documents/Images <small>(You can upload more than one)</small></h3>
              <Form.Field>
                <input type="file" multiple='true' name='documents' placeholder='Child documents ...'/>
              </Form.Field>
              <hr/>
              <br/>
              <Button className='ui right floated' positive size='large'>ADD</Button><br/><br/>
              {!!errors.confirmationError && <MessageDialog message={errors.confirmationError}/>}
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
};

export default connect(null, {addUpdate})(KidUpdate);
