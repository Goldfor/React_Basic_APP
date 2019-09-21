import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  render(){
    return (
      <div>
        Demo
        <title>Main</title>
        <div>{this.props.children}</div>
        <Link to='/Api'>Schedule</Link>
      </div>
    )}
};