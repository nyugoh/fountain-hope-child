import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route { ...rest } render={props => isAuthenticated? <Component {...props}/>:  <Redirect to={'/login'}/>}/>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.user.token
});

export default connect(mapStateToProps)(AuthRoute)