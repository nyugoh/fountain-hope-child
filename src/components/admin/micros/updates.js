import React from 'react'
import moment from 'moment'
import { Item } from 'semantic-ui-react'

const Update = (props) => {
  const { update } = props;
  return (
    <Item>
      <Item.Image size='small' style={{width:'150px !important', height:'150px !important'}} src={`/api/v1/images/${update.files[0]}`}/>
      <Item.Content>
        <Item.Header as='a'>{moment(update.updatedAt).format("DD MMMM YYYY")}</Item.Header>
        <Item.Description>{update.body.length > 100 ? update.body.substr(0, 100)+ ' ...': update.body}</Item.Description>
      </Item.Content>
    </Item>
  )
};

export default Update