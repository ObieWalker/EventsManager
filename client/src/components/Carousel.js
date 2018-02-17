import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Carousel } from 'react-materialize'
import $ from 'jquery'
import {Slider, Slide} from 'react-materialize'



class Carouselfunc extends Component {


    render() {
        return (
            <div>
                
                <Slider>
                    <Slide
                        src='http://i68.tinypic.com/dh5vk.jpg'
                        title="Manage your events efficiently,">
                        The Events Manager eases the workload.
	                </Slide>
                    <Slide
                        src="http://i66.tinypic.com/f39g1g.jpg"
                        title="No matter the kind of event"
                        placement="left">
                        Our state-of-the-art centers will fit your needs.
	                </Slide>
                    <Slide
                        src="http://i67.tinypic.com/2jebkpc.jpg"
                        title="High-class weddings?"
                        placement="right">
                        Our centers and management fit like OJ glove.
	                </Slide>
                    <Slide
                        src="http://i67.tinypic.com/rj2usy.jpg"
                        title="Massive Dinner parties?"
                        placement="center">
                        We make sure you have peace of mind.
	                </Slide>
                </Slider>
            </div>

        )
    }
}

export default Carouselfunc;