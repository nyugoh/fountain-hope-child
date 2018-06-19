import React from 'react';
import { Item, Icon } from 'semantic-ui-react'

function SponsorMessage({ sponsors }) {
  return (
    <Item.Group>
      {sponsors && sponsors.map((sponsor, index) => {
        if (sponsor.isShowing)
          return (<div key={index}>
            <Item>
              <Item.Image size='tiny' src={`/api/v1/images/${sponsor.profileImages[0]}`} />
              <Item.Content>
                <Item.Header>{sponsor.fullName}</Item.Header>
                <Item.Meta>
                  <span className='price'>$1200</span>
                  <span className='stay'>1 Month</span>
                </Item.Meta>
                <Item.Description>{sponsor.message}</Item.Description>
              </Item.Content>
            </Item>
            <div className="ui horizontal divider"> <Icon name={'thumbs up outline'} circular color={'green'}/> </div>
          </div>);
      })}
    </Item.Group>
  );
}


export default SponsorMessage;
