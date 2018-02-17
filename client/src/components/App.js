import React, { Component } from 'react';
import '../styles/App.css';
import Main from './Main'
import Header1 from './Header1'



export default class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Header1 />
        <Main />
      </div>);
  }
}
  