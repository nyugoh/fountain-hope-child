import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Main = () =>{
  return <Menu size='massive' borderless={true} color='blue' style={{border: 'none', borderRadius: 'none'}}>
    <div className="ui container">
      <Link to='/' className='item'>
        <img alt='Fountain Hope Logo' src='/assets/images/logo.png' />
      </Link>
      <Link to='/kids' className='item' >Kids</Link>
      <Link to='/donate' className='item'>Donate</Link>
    </div>
  </Menu>
};

export default Main;
