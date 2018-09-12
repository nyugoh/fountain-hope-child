import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Icon, Item, Label, Divider, Button} from 'semantic-ui-react';
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
        </div>:<h2>List of kids</h2>
        }
        <Divider/>
          {kids.map((kid, index) =>{
            let totalUpdate = this.props.updates.filter(update => update.kidId === kid._id);
            return (
              <Item.Group divided key={index}>
                <Item>
                  <Item.Image size='small' style={{width:'150px !important', height:'150px !important'}} src={`/api/v1/images/${kid.profileImages[0]}`}/>
                  <Item.Content>
                    <Item.Header as='span' style={{cursor: 'pointer'}} onClick={() => { this.props.history.push(`/admin/kids/${kid._id}/updates`)}}>
                      <h3><span style={{marginRight:20}}>{`${kid.firstName} ${kid.middleName} ${kid.sirName}`}</span>
                        {kid.isShowing? <Label as='a' color='green' tag>
                          Showing
                        </Label> : <Label as='span' color='teal' tag>
                          Not-showing
                        </Label>}
                      </h3>
                    </Item.Header>
                    <Item.Meta>
                      <span>Updated on <i><b>{moment(kid.updatedAt).format('DD MMMM YYYY')}</b></i></span>
                      <br/><span><i><b>{totalUpdate.length}</b></i> updates</span>
                    </Item.Meta>
                    <Item.Description style={{marginTop: 20, marginBottom: 20}}>{kid.story}</Item.Description>
                    <Item.Extra>
                      <DeleteModal
                        kid={kid}
                        deleteKid={this.deleteKid.bind(this)}/>
                      <ArchiveModal
                        kid={kid}
                        archiveKid={this.archiveKid.bind(this)}/>
                      <Link to={`/admin/kids/${kid._id}/edit`}>
                        <Button
                          color={'green'}
                          floated='right'
                          icon
                          labelPosition={'right'}>
                          Edit
                          <Icon name='pencil' />
                        </Button>
                      </Link>
                    </Item.Extra>
                  </Item.Content>
                </Item>
                <Divider/>
              </Item.Group>
            );
          })}
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
  isDelete: state.admin.isDelete,
  updates: state.admin.updates
});

export default connect(mapStateToProps, { fetchKids, deleteKid, archiveKid })(Kids);
