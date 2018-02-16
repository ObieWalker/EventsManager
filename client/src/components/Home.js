import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Router from 'react-router-dom'
import PropTypes from 'prop-types';
import Header1 from './Header1'
import Carousel from './Carousel'
import Footer from './Footer'
import Testimonials from './Testimonials'
import AuthModal from './AuthModal'
//import Contact from './contact';
//import CardBlock from './cards';
//import { getCenters } from '../actions/center';
//import { history } from '../actions/history';
/**
 *
 *
 * @class HomePage
 * @extends {Component}
 */
class Home extends Component {
    /**
     * Creates an instance of HomePage.
     * @param {any} props
     * @memberof HomePage
     */
    // constructor(props) {
    //     super(props);
    //     this.eventURL = '/event';
    //     this.OnEventClick = this
    //         .onEventClick
    //         .bind(this);
    // }
    /**
     *
     * @returns {null} no return
     * @memberof HomePage
     */
    // componentWillMount() {
    //     this
    //         .props
    //         .getCenters();
    // }
    /**
   *
   * @returns{null} no return
   * @memberof HomePage
   */
    // onEventClick() {
    //     history.push(this.eventURL);
    // }
    /**
     *
     *
     * @returns {element} HTML element
     * @memberof HomePage
     */
    render() {
        // const { listOfCenters } = this.props;
        // const listSize = listOfCenters.length;
        // const pageItems = listOfCenters.slice((listSize - 6), listSize.length);

        return (
            <div>
                    <Header1 />
                    <AuthModal />
                    <Carousel />
                    <br/> <br/>
                    <Testimonials />
                    <br/> <br/>
                    <Footer />
                
            </div>
        );
    }
}

// const mapStateToProps = state => ({ listOfCenters: state.center.allCenterList });
// const matchDispatchToProps = dispatch => bindActionCreators({
//     getCenters
// }, dispatch);

// HomePage.propTypes = {
//     listOfCenters: PropTypes.arrayOf(PropTypes.object).isRequired,
//     getCenters: PropTypes.func.isRequired
// };
// export default connect(mapStateToProps, matchDispatchToProps)(HomePage);

export default Home