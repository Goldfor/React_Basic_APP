import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App2 extends Component {
  render(){

    return (
      <div>
        <title>Not Main</title>
        Demo
        <div>{this.props.children}</div>
        <Link to='/'>Lox</Link>
      </div>
    )}
};