import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Menu size='huge'>
        <Link to='/' className='item'>
          <img alt='Fountain Hope Logo' src='/assets/images/logo.png' />
        </Link>
        <Link to='/kids' className='item' >Kids</Link>
        <Link to='/admin' className='item'>Admin</Link>
        <Link to='/donate' className='item'>Donate</Link>
      </Menu>
    );
  }
}

export default Main;
