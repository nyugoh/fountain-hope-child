import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Icon, Modal, Button} from 'semantic-ui-react';
import {fetchKids, deleteKid, archiveKid } from "../../actions/kids";
import moment from "moment/moment";
import DeleteModal from "../kids/delete";
import ArchiveModal from "../kids/archive";

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

  deleteKid = kid => this.props.deleteKid(kid);

  archiveKid = kid => this.props.archiveKid(kid);

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
            <th>Story</th>
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
              <tr key={index}>
                <td
                  style={{cursor: 'pointer'}}
                  onClick={() => { this.props.history.push(`/admin/kids/${kid._id}/updates`)}}
                >{`${kid.firstName} ${kid.middleName} ${kid.sirName}`}</td>
                <td>{kid.email}</td>
                <td>{kid.story.length>50? kid.story.substring(0, 50)+' ...': kid.story}</td>
                <td>{kid.isShowing?<div className="ui ribbon label green">Showing</div>:
                  <div className="ui ribbon label teal">Archive</div>
              }</td>
                <td>{moment(kid.dob).format('DD/MMMM/YYYY')}</td>
                <td>
                  <Link to={`/admin/kids/${kid._id}/edit`}><Icon name='large pencil blue'/></Link>
                </td>
                <td>
                  <ArchiveModal
                    kid={kid}
                    archiveKid={this.archiveKid.bind(this)}/>
                </td>
                <td>
                  <DeleteModal
                    kid={kid}
                    deleteKid={this.deleteKid.bind(this)}/>
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
  isEnd: state.kids.isEnd,
  isDelete: state.admin.isDelete
});

export default connect(mapStateToProps, { fetchKids, deleteKid, archiveKid })(Kids);
