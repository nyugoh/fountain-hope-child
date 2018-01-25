import React from 'react';
import { Button, Icon, Item, Label } from 'semantic-ui-react'


const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aperiam architecto aspernatur assumenda esse est ipsum itaque iure laboriosam magnam modi natus, necessitatibus numquam ratione reprehenderit sint suscipit. Ex!';

function Story(props) {
  return (
    <Item.Group divided>
      <Item>
        <Item.Image src='/assets/images/logo.png' />

        <Item.Content>
          <Item.Header as='a'>12 Years a Slave</Item.Header>
          <Item.Meta>
            <span className='cinema'>Union Square 14</span>
          </Item.Meta>
          <Item.Description>{paragraph}</Item.Description>
          <Item.Extra>
            <Label>IMAX</Label>
            <Label icon='globe' content='Additional Languages' />
          </Item.Extra>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image src='/assets/images/logo.png' />

        <Item.Content>
          <Item.Header as='a'>My Neighbor Totoro</Item.Header>
          <Item.Meta>
            <span className='cinema'>IFC Cinema</span>
          </Item.Meta>
          <Item.Description>{paragraph}</Item.Description>
          <Item.Extra>
            <Button primary floated='right'>
              Buy tickets
              <Icon name='right chevron' />
            </Button>
            <Label>Limited</Label>
          </Item.Extra>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image src='/assets/images/logo.png' />

        <Item.Content>
          <Item.Header as='a'>Watchmen</Item.Header>
          <Item.Meta>
            <span className='cinema'>IFC</span>
          </Item.Meta>
          <Item.Description>{paragraph}</Item.Description>
          <Item.Extra>
            <Button primary floated='right'>
              Buy tickets
              <Icon name='right chevron' />
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

Story.propTypes = {};
Story.defaultProps = {};

export default Story;
