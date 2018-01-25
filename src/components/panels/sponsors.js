import React from 'react';
import { Item } from 'semantic-ui-react'

const paragraph = 'Chris is excited to join CURE for the same reason most of us are part of it: Seeing the Kingdom of God at work in kids lives. "Kids right now who can\'t walk, they\'re being carried, who can\'t go outside because their faces look different… they get to be kids again. Because of CURE… because of you and me and everyone else involved, kids will be kids again, and be able to walk and run.';

function SponsorMessage() {
  return (
    <Item.Group>
      <Item>
        <Item.Image size='tiny' src='/assets/images/logo.png' />

        <Item.Content>
          <Item.Header>Why I support FHCK</Item.Header>
          <Item.Meta>
            <span className='price'>$1200</span>
            <span className='stay'>1 Month</span>
          </Item.Meta>
          <Item.Description>{paragraph}</Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}


export default SponsorMessage;
