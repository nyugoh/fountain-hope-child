import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <Grid.Row columns="1">
      <Grid.Column>
        <Menu size='small' borderless={true} color='blue'>
          <div className="ui container">
            <Link to='/admin' className='item'>Admin</Link>
            <Link to='/admin/kids' className='item'>Kids</Link>
            <Link to='/admin/messages' className='item' >Messages</Link>
            <Link to='/admin/sponsors' className='item'>Sponsors</Link>
            <Link to='/admin/donations' className='item'>Donations</Link>
          </div>
        </Menu>
      </Grid.Column>
    </Grid.Row>
  );
}

export default Admin;
