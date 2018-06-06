import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Icon, Modal, Button} from 'semantic-ui-react';
import {fetchKids} from "../../actions/kids";
import moment from "moment/moment";

class Kids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      isFetching: false,
      disabled: false
    }
  }

  loadMore = () => {
    this.setState({ isFetching: true});
    this.props.fetchKids(`?page=${this.props.page+1}`).then( ()=>{
      this.setState({ isFetching: false});
      this.setState({ disabled: this.props.isEnd});
    })
  };

  render() {
    const { kids } = this.props;
    return (
      <div>
        {kids.length === 0? <div className="ui info message">
          <div className="header">Ooopps... !!</div>
          <p>There are no kids yet.</p>
          <p>Use the add kids to add them.</p>
        </div>:<h4>List of kids</h4>
        }
        <table className='ui table celled stackable blue bordered centered'>
          <thead>
          <tr>
            <th className='ui sortable'>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Status</th>
            <th>Date of Birth</th>
            <th>Edit</th>
            <th>Hide/Show</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {kids.map((kid, index) =>{
            return (
              <tr id={index}>
                <td>{`${kid.firstName} ${kid.middleName} ${kid.sirName}`}</td>
                <td>{kid.email}</td>
                <td>{kid.story.length>50? kid.story.substring(0, 50)+' ...': kid.sotry}</td>
                <td><div class="ui ribbon label green">Showing</div></td>
                <td>{moment(kid.dob).format('DD/MMMM/YYYY')}</td>
                <td>
                  <Link to='/admin'><Icon name='large pencil blue'/></Link>
                </td>
                <td>
                  <Modal size='tiny' trigger={<Icon name='large lock green'/>}>
                    <Modal.Header>
                      Delete {`${kid.firstName} ${kid.middleName} ${kid.sirName}`}
                    </Modal.Header>
                    <Modal.Content>
                      <p>Are you sure you want to delete this kid ?</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button negative>
                        No
                      </Button>
                      <Button positive icon='checkmark' labelPosition='right' content='Yes' />
                    </Modal.Actions>
                  </Modal>
                </td>
                <td>
                  <Modal
                    trigger={<Icon name='large trash red'/>}
                    header={`Delete${kid.firstName} !`}
                    content='You will lose all the information about the kid.'
                    actions={[
                      { key: 'cancel', content: 'Cancel'},
                      { key: 'done', content: 'Delete', danger: true },
                    ]}
                  />
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
        <Button
          onClick={this.loadMore}
          loading={this.state.isFetching}
          disabled={this.state.disabled}
          positive>More ...</Button>
        <Button
          onClick={() => {this.props.history.push('/admin/kids/add')}}
          positive
          floated={'right'}
          icon
          labelPosition={'right'}>
          <Icon name={'plus'}/>
          ADD
        </Button>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  kids: state.kids.kids,
  page: state.kids.page,
  isEnd: state.kids.isEnd
});

export default connect(mapStateToProps, { fetchKids })(Kids);
