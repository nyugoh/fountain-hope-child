import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Form, Grid, TextArea, Button} from 'semantic-ui-react';
import { addUpdate, uploadFiles } from '../../actions/kids';
import MessageDialog from '../panels/Message';

class KidUpdate extends Component {
  constructor(props) {
    super();
    this.state = {
      data: {
        kidId: props.match.params.kidId
      },
      files: {},
      loading: false,
      errors: []
    };
  };

  handleChange = (e) => {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value}});
  };

  upload = (e) =>{
    const files = e.target.files;
    let imageNames = [];
    let images = [];
    for(let f in files) if (files[f].size > 0) {images.push(files[f]);imageNames.push(files[f].name);};
    this.setState({data:{...this.state.data, files:imageNames}});
    this.setState({files:images});
  };

  submit = () => {
    let form = new FormData();
    let files = this.state.files;
    for(let i in files) form.append(files[i].name, files[i]);
    this.props.addUpdate(this.state.data).then( () => {
      this.props.uploadFiles(form).then( ()=> {

      });
    });
  };

  render() {
    let { kids } = this.props;
    const { errors } = this.state;
    let id = this.props.match.params.kidId;
    let child = kids.filter( kid => kid._id===id);
    let kid = {}, updateDiff;
    if (child.length >0){
      kid = child[0];
      updateDiff = moment(kid.updatedAt).diff(moment(kid.createdAt), 'days');
    }
    return (
      <Grid divided='vertically'>
        <Grid.Row columns={1}>
          <Grid.Column>
            <div>
              <h2>{kid.firstName} {kid.middleName}'s Updates</h2>
              <h5>Last Update: <small>{updateDiff===0?'Never':updateDiff+' days ago'}</small></h5>
            </div>
            <Form onSubmit={this.submit}>
              <h3>Add an update</h3>
              <Form.Field>
                <Form.Field control={TextArea} required label='Update' className='kidUpdateStory' name='body' onChange={this.handleChange} placeholder='Describe the incidents/events that have happened to the child...' />
              </Form.Field>
              <hr/>
              <h3>Documents/Images <small>(You can upload more than one)</small></h3>
              <Form.Field>
                <input type="file" multiple='true' name='documents' onChange={this.upload} placeholder='Child documents ...'/>
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
}

const mapStateToProps = state => ({
  kids: state.kids.kids
});

export default connect(mapStateToProps, { addUpdate, uploadFiles })(KidUpdate);
