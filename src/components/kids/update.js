import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Form, Grid, TextArea, Button} from 'semantic-ui-react';
import {addUpdate, getKid} from '../../actions/kids';
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
  componentWillMount() {
    this.props.getKid(this.props.match.params.kidId);
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
    this.props.addUpdate(this.state.data, this.state.files).then( () => {
      this.props.history.push('/kids/profile/'+this.props.match.params.kidId);
    });
  };

  render() {
    let isFetching = this.props.isFetching;
    let kid = this.props.kid;
    let errors = this.state;
    if (isFetching) {
      return (
        <div className='text centered'>
          <h2>Loading ...</h2>
          <img src="/assets/images/loading.gif" alt="Loading content"/>
        </div>
      )
    } else if (!isFetching) {
      let updateDiff = moment(kid.updatedAt).diff(moment(kid.createdAt), 'days');
      return (
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <img src={kid.profileImages && "/api/v1/images/"+kid.profileImages[0]} alt='kid.fullName'/>
            </Grid.Column>
            <Grid.Column>
              <div>
                <h2>{kid.firstName}'s Story</h2>
                <p>The story goes here</p>
                <h5>Last Update: <small>{updateDiff===0?'Never':updateDiff+' days'}</small></h5>
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
    } else {
      return (
        <div>Error</div>
      )
    }
  }
};

function mapStateToProps(state) {
  return {
    kid: state.kid.kids,
    isFetching: state.kid.isFetching
  }
};

export default connect(mapStateToProps, {addUpdate, getKid})(KidUpdate);
