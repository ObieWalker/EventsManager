import React, { Component } from 'react';
import '../styles/App.css';
import Home from './Home'
import {Button, Icon} from 'react-materialize'



export default class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        
        <Home />
      </div>);
  }
}
  