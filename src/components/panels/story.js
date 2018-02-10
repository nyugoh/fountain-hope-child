import React from 'react';
import { Button, Icon, Item, Label } from 'semantic-ui-react'


const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aperiam architecto aspernatur assumenda esse est ipsum itaque iure laboriosam magnam modi natus, necessitatibus numquam ratione reprehenderit sint suscipit. Ex!';

function Story({kids}) {
  return (
    <Item.Group divided>
      {kids.map( (kid, index) => {
        return <Item>
          <Item.Image src='/assets/images/logo.png' alt={index} />
          <Item.Content>
            <Item.Header as='a'>{kid.fullName}</Item.Header>
            <Item.Meta>
              <span className='cinema'>Union Square 14</span>
            </Item.Meta>
            <Item.Description>{kid.story}</Item.Description>
            <Item.Extra>
              <Button  size='tiny' color='green'>
                Send message
                <Icon name='right comment outline'/>
              </Button>
              <Button primary size='tiny' floated='right'>
               Sponsor
               <Icon name='right payment' />
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
