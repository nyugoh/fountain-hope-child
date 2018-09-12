import React from 'react';
import { Item, Icon, Header } from 'semantic-ui-react';
import moment from 'moment';

function SponsorMessage({ sponsors }) {
  return (
    <Item.Group>
      {sponsors && sponsors.map((sponsor, index) => {
        if (sponsor.isShowing)
          return (<div key={index}>
            <Item>
              <Item.Image size='small' rounded  src={`/api/v1/images/${sponsor.profileImages[0]}`} floated={'left'}/>
              <Item.Content>
                <Item.Header><Header as={'h3'}>{sponsor.fullName}</Header></Item.Header>
                <Item.Meta>
                  {/*<span className='price'>$1200</span>*/}
                  <span className='stay'>Since {moment(sponsor.createdAt).format('DD MMMM YYYY')}</span>
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
