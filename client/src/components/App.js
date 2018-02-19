import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main'
import Header1 from './Header1'



export default class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
      <BrowserRouter>
        <Header1 />
        <Main />
      </BrowserRouter>
      </div>);
  }
}
  