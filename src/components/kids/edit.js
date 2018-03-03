import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, TextArea, Checkbox, Button} from 'semantic-ui-react';
import MessageDialog from "../panels/Message";
import moment from 'moment';
import {getKid, updateKid, fetchKids} from '../../actions/kids';
import ErrorMessage from '../panels/Errors';

const options = [
  { key: 'm', text: 'Male', value: 'male'},
  { key: 'f', text: 'Female', value: 'female' },
];

class AddKid extends Component {
  state = {
    data: {},
    loading: false,
    errors: []
  };

  isAccepted = false;

  componentWillMount() {
    this.props.getKid(this.props.match.params.kidId);
  };

  handleChange = (e) => {
    this.setState({data: {...this.state.data, [e.target.name]:e.target.value} });
  };

  handleSelectChange = (e, data) => {
    this.setState({data: {...this.state.data, gender:data.value} });
  };

  checkValidity = (e, data) =>{
    this.isAccepted = data.checked;
  };

  setDOB = (e) =>{
    let dob = moment(e.target.value).toISOString();
    this.setState({data: {...this.state.data, dob:dob} });
  };

  submit = () =>{
    if (this.isAccepted) {
      let kid = this.props.state.kid.kids;
      kid.fullName = `${kid.sirName} ${kid.firstName} ${kid.middleName}`;
      this.props.updateKid(this.state.data, kid._id).then( () => {
        this.props.fetchKids().then( ()=>{
          let url = '/kids/'+kid._id;
          this.props.history.push(url)
        })
      });
    } else {
      this.setState({ errors: { confirmationError: 'You need to confirm the validity of this information.'}})
    }
  };

  render() {
    const {errors} = this.state;
    let isFetching = this.props.state.kid.isFetching;
    this.state.data = this.props.state.kid.kids;
    let kid = this.state.data;
    if (isFetching) {
      return (
        <div className='text centered'>
          <h2>Loading ...</h2>
          <img src="/assets/images/loading.gif" alt="Loading content"/>
        </div>
      )
    } else if (!isFetching) {
      return (
        <div>
          <h2>Editing {kid.fullName}</h2>
          <Form size='large' onSubmit={this.submit}>
            <hr/>
            <h3>Personal Details</h3>
            <Form.Group widths='2'>
              <Form.Input fluid required label='Full name' ref='fullName' defaultValue={kid.fullName} placeholder='Full name' onChange={this.handleChange} />
              <Form.Select fluid required label='Gender' name='gender' value={kid.gender} options={options} placeholder='Gender' onChange={this.handleSelectChange} />
            </Form.Group>
            <Form.Group widths='2'>
              <Form.Input fluid required type='date' label='Date of Birth' value={moment(kid.dob).format('YYYY-MM-DD')}  name='dob' placeholder='DoB' onChange={this.setDOB} />
              <Form.Input fluid required label='Place of Birth' name='pob'  value={kid.pob} placeholder='Place of Birth' onChange={this.handleChange} />
              <Form.Input fluid required label='Religion' name='religion' value={kid.religion} placeholder='Religion' onChange={this.handleChange} />
            </Form.Group>
            <Form.Group widths='2'>
              <Form.Input fluid required label='Phone' name='phoneNumber' value={kid.phoneNumber} placeholder='Phone #' onChange={this.handleChange} />
              <Form.Input fluid required label='Address' name='address' value={kid.address} placeholder='Address' onChange={this.handleChange} />
              <Form.Input fluid required label='Email' name='email' value={kid.email} placeholder='Email' onChange={this.handleChange} />
            </Form.Group>

            <hr/>
            <h3>Child Story</h3>
            <Form.Field>
              <Form.Field control={TextArea} required label='Story' value={kid.story} name='story' onChange={this.handleChange} placeholder='Describe the incidents/events that have happened to the child...' />
            </Form.Field>
            <hr/>
            <h3>Documents</h3>
            <Form.Field>
              <input type="file" multiple='true' name='documents' placeholder='Child documents ...'/>
            </Form.Field>
            <hr/>
            <br/>
            <Checkbox  name='accept' label='The information I have provided here is correct and verifiable.' onChange={this.checkValidity} />
            <Button className='ui right floated' positive size='large'>ADD</Button><br/><br/>
            {!!errors.confirmationError && <MessageDialog message={errors.confirmationError}/>}
          </Form>
        </div>
      );
    } else {
      return (
        <ErrorMessage message={errors.global}/>
      )
    }
  }
}

export default connect( (state) => ({state}), {getKid, updateKid, fetchKids})(AddKid);
