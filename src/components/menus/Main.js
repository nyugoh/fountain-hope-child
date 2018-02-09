import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Main extends Component {
  logout = () =>{
    localStorage.jwtToken = '';
  };

  render() {
    return (
      <Menu size='huge'>
        <Link to='/' className='item'>
          <img alt='Fountain Hope Logo' src='/assets/images/logo.png' />
        </Link>
        <Link to='/kids' className='item' >Kids</Link>
        <Link to='/admin' className='item'>Admin</Link>
        <Link to='/donate' className='item'>Donate</Link>
        {this.props.isAuthenticate? <Link to='#' className='item right floated' onClick={this.logout}>Logout</Link>: <Link to='/login' className='item right floated'>Login</Link>}
      </Menu>
    );
  }
}

const mapStateToProp = (state) =>{
  return {
    isAuthenticate: !!state.user.token
  }
};

export default connect(mapStateToProp)(Main);
