import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Icon, Modal, Button} from 'semantic-ui-react';
import {fetchKids} from "../../actions/kids";
import Loading from '../../components/panels/Loading';
import moment from "moment/moment";
import {getPages} from "../../global/Pagination";

class Kids extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchKids(this.props.history.location.search);
  }

  render() {
    const {kids} = this.props.kids;
    if (kids === undefined) {
      return ( <Loading/>)
    } else {
      const total = kids.total;
      const none = total === 0;
      let pages = getPages(total, '/admin/kids');
      return (
        <div>
          {none? <div className="ui info message">
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
            {kids.kids.map((kid, index) =>{
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
            <tfoot>
            <tr><th colspan="9">
              <div className="ui right floated pagination menu tiny">
                <a className="icon item">
                  <i className="left chevron icon"></i>
                </a>
                {pages.map((url, index)=>{
                  return (<a className="item" href={url}>{index+1}</a>)
                })}
                <a className="icon item">
                  <i className="right chevron icon"></i>
                </a>
              </div>
            </th>
            </tr></tfoot>
          </table>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  kids: state.kids
});

const mapDispatchToProps = (dispatch) => ({
  fetchKids: (search) => dispatch(fetchKids(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(Kids);
