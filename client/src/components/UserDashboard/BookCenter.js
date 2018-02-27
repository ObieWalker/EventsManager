import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'


import { Button, Modal, Row, Input } from 'react-materialize'

import addEventAction from '../../actions/addEventAction'
import getAllCentersAction from '../../actions/getAllCentersAction'



class BookCenter extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         editting: false,

    //     }

    //     this.handleAddEvent = this.handleAddEvent.bind(this);
    //     this.handleAddEventForm = this.handleAddEventForm.bind(this);



    // }

    componentDidMount() {

        // this.props.getAllCenters();

        var element = ReactDOM.findDOMNode(this.refs.dropdown)

        $(element).ready(function () {
            $('select').material_select();
        });
    }

    handleStoringId(index) {
        localStorage.setItem('index', index);
        this.props.eventState.map((event) => {
            if (event.id === index) {
                window.document.getElementById('eventnameEdit').value = event.name;
                this.props.centerState.map((center) => {
                    if (center.id === event.centerId) {
                        window.document.getElementById('eventCentreEdit').value = center.name;
                    }
                    return center;
                });
                window.document.getElementById('eventdateEdit').value = event.eventDate;
            }
        });
    }


    handleAddEvent(e) {
        event.preventDefault();
        this.props.centerState.map((center) => {
            if (this.refs.eventCenterId.value === center.name) {
                const centerId = center.id;
                localStorage.setItem('AddCenterId', center.id);
                return centerId;
            }
        });

        // get event 
        const eventToAdd = {
            name: eventDetails.target[0].value,
            centerId: localStorage.getItem('AddCenterId'),
            eventDate: eventDetails.target[2].value,
            bookingStatus: 1
        };

        // Add event
        this.props.addNewEvent(event);
        // checks availability
        if (localStorage.getItem('message') === 'This center is already booked on this day') {
            return window.document.getElementById('dateAvailable').innerHTML = 'You cannot book this day';
        }

        // reset the form if the data is available
        if (localStorage.getItem('message') === 'sucessfully created') {
            window.document.getElementById('dateAvailable').innerHTML = '';
            return window.document.getElementById('addEventForm').reset();
        }


    }

    render() {
        return (
            <div>
                <div className="container" style={{width:'100%'}}>

                    <div className="grey lighten-4" style={{display: 'inline-block',  width: '100%', margin: '50px 20px 20px 50px', padding: '10%' , border: '1px solid #EEE'}}>
                        <div className="row">

                            <div className="nav-wrapper">

                                <div className="col s12">
                                    <h3 className="brand-logo col s12">Booking Information</h3>
                                </div>
                            </div>
                        </div>

                        <div className="input-field col s12">

                            <form className="col s14">


                                <div className="input-field col s12">
                                    <select ref="dropdown" defaultValue=''>
                                        <option value="" disabled>Choose your option</option>
                                        <option value="1">Wedding</option>
                                        <option value="2">Party</option>
                                        <option value="3">Conference</option>
                                        <option value="4">Ceremony</option>
                                        <option value="5">Other</option>
                                    </select>
                                    <label>Event type</label>
                                </div>


                                <div className="input-field col s12">
                                    <select ref="dropdown" defaultValue=''>
                                        {/* <option value="" disabled>Choose your option</option>
                                        <option value="1">The Party Hub - Victoria Island</option>
                                        <option value="2">Lekki Plaza - Lekki</option>
                                        <option value="3">Ikeja Cribs - Ikeja</option> */}
                                        {/* {this.props.centerState.map((center, i) => <option key={i} i={i} value={center.name}>{center.name} - {center.location}</option>)} */}
                                    </select>
                                    <label>Event Center and Location</label>
                                </div>


                                <div className="input-field col s12">  
                                        <Row> <span style={{float:'left', padding:'2%'}}>Event Date:</span>
                                        <Input name='on' id='dateAvailable' type='date' onChange={function(e, value) {}} />
                                        </Row>
                                 </div>

                                    <div className="input-field col s12">
                                        <label htmlFor="idate">Estimated Number of Guests</label><br />
                                        <p className="range-field">
                                            <input type="range" id="test5" min="1" max="1000" />
                                        </p>
                                    </div>

                                <button type="submit" className="waves-effect waves-light btn right hoverable indigo">
                                    <i className="large material-icons right" aria-hidden="true"> done</i>Make Booking
                                </button>                              
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }
}

// const mapStateToProps = state => ({
//     centerState: state.centerState,
//     eventState: state.eventState,
// });

// const mapDispatchToProps = dispatch => bindActionCreators({
//     getAllCenters: getAllCentersAction,
//     addNewEvent: addEventAction,
// }, dispatch);

export default 
// connect(mapStateToProps, mapDispatchToProps)
(BookCenter);