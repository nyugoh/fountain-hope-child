import React from 'react'
import moment from 'moment'
import { Item, Icon, Button } from 'semantic-ui-react'
import DeleteUpdate from "../../forms/DeleteUpdate";
import EditUpdate from "../../forms/EditUpdate";

class Update extends React.Component {

  // deleteUpdate = id => this.props.deleteUpdate(id)

  render() {
    const { update } = this.props;
    return (
      <Item>
        <Item.Image size='small' style={{width:'150px !important', height:'150px !important'}} src={`/api/v1/images/${update.files[0]}`}/>
        <Item.Content>
          <Item.Header as='a'>{moment(update.updatedAt).format("DD MMMM YYYY")}</Item.Header>
          <Item.Description>{update.body.length > 100 ? update.body.substr(0, 100)+ ' ...': update.body}</Item.Description>
          <Item.Extra>
            <DeleteUpdate
              update={update}
              deleteUpdate={this.props.deleteUpdate.bind(this)}/>
            <EditUpdate
              update={update}
              editUpdate={this.props.editUpdate.bind(this)}
              uploadFiles={this.props.uploadFiles.bind(this)}/>
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

export default Update