import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Icon, Item } from 'semantic-ui-react'
import moment from 'moment';

function Story({kids}) {
  return (
    <Item.Group divided>
      {kids.map( (kid, index) => {
        return <Item key={index}>
          <Item.Image src='/assets/images/logo.png' alt={index} />
          <Item.Content>
            <Item.Header as='a'><Link to={'/kids/'+kid._id}>{kid.fullName}</Link></Item.Header>
            <Item.Meta>
              <span className='cinema'>Age:{moment().diff(moment(kid.dob), 'years')}yrs Gender:{kid.gender}</span>
            </Item.Meta>
            <Item.Description>{kid.story}</Item.Description>
            <Item.Extra>
              <Button  size='tiny' color='green'>
                Send message
                <Icon name='comment outline right'/>
              </Button>
              <Button primary size='tiny' floated='right'>
               Sponsor
               <Icon name='payment right' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      })}
    </Item.Group>
  );
}

Story.propTypes = {};
Story.defaultProps = {};

export default Story;
