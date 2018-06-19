import React, { Component } from 'react';
import Footer from './Footer.jsx';
// import Testimonials from './Testimonials.jsx';
import LoginComponent from './Login.jsx';
/**
 *
 *
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
  /**
   *
   *
   * @returns {object} landing page
   * @memberof Home
   */
  render() {
    return (
      <div>
        {/* <Carousel /> */}
        <br /><br /><br />
        <LoginComponent />
        {/* <Testimonials /> */}
        <br/> <br/>
        <Footer />
      </div>
    );
  }
}

export default Home;
