import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

function Admin({ isAuthenticated, logout }) {
  return (
    <Menu secondary size='small' borderless={true} color='blue' style={{boxShadow: '0 1px 2px 0 rgba(34,36,38,.15)', margin:'1em 0', padding: '0 15px', borderRadius: 'none'}}>
      <div className="ui container">
        <Link to='/admin' className='item'>Admin</Link>
        <Link to='/admin/kids' className='item'>Kids</Link>
        <Link to='/admin/messages' className='item' >Messages</Link>
        <Link to='/admin/sponsors' className='item'>Sponsors</Link>
        <Link to='/admin/donations' className='item'>Donations</Link>
        <span className="item right floated">
          {isAuthenticated? <a onClick={()=> logout()} className='item'>Logout</a>:
            <Link to='/login' className='item'>Login</Link>}
            <Link to='/admin/signup' className='item'>Sign Up</Link>
        </span>
      </div>
    </Menu>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.user.token
});

export default connect(mapStateToProps, { logout })(Admin);
