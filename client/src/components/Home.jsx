import React, { Component } from 'react';
// import Carousel from './Carousel';
import Footer from './Footer.jsx';
import Testimonials from './Testimonials.jsx';
import Login from './Login.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        {/* <Carousel /> */}
        <Login />
        <Testimonials />
        <br/> <br/>
        <Footer />
      </div>
    );
  }
}

export default Home;
