import React, {Component} from 'react';
import Update from './micros/updates'
import { Item, Header } from 'semantic-ui-react'

class KidsUpdates extends Component {
  render() {
    const { updates, id } = this.props;
    let update;
    if (updates.length > 0)
      update = updates.filter( update => (update.kidId === id ? update: '' ));
    return <div>
      <Header color={'grey'} as={'h5'}>Updates</Header>
      <div>
        {update && update.length == 0 && <p>No updates</p> }
        {update && update.map((ud, index) => {
          return <Item.Group divided key={index}>
            <Update
              update={ud}
              deleteUpdate={this.props.deleteUpdate.bind(this)}/>
            <div className="ui horizontal divider"/>
          </Item.Group>
        })}
      </div>
    </div>;
  }
}

export default KidsUpdates;
