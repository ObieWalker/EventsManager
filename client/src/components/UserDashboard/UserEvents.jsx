import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'


import { Button, Modal, Row, Input } from 'react-materialize';

import getUsersEventsAction from '../../actions/getUserEventsAction';
import deleteEventAction from '../../actions/actionTypes';
import editEventAction from '../../actions/actionTypes';

// this component will be to view, update or delete a users events.

class UserEvents extends Component {
  constructor(props) {
    super(props);

    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
  }

  componentDidMount() {
    // this.props.getUsersEventsAction(localStorage.getItem('userIdNo'));
  }

  handleEditEvent(edit) {
    // stops default action
    edit.preventDefault();

    this.props.centerState.map((center) => {
      if (window.document.getElementById('eventCenterEdit').value === center.name) {
        localStorage.setItem('centerEditId', center.id);
        return center.id;
      }
    });

    const editDetail = {
      name: window.document.getElementById('eventNameEdit').value,
      date: window.document.getElementById('dateEdit').value,
      centerId: parseInt(localStorage.getItem('centerEditId')),
    };

    // call action with changed state and event id
    this.props.editEventAction(editDetail, parseInt(localStorage.getItem('index')));

    if (localStorage.getItem('message') === 'date not available') {
      return window.document.getElementById('dateAvailableModal').innerHTML = 'Date not Available for booking';
    }
  }

  handleStoringId(index) {
    localStorage.setItem('index', index);
    this.props.eventState.map((event) => {
      if (event.id === index) {
        window.document.getElementById('eventNameEdit').value = event.name;
        this.props.centerState.map((center) => {
          if (center.id === event.centerId) {
            window.document.getElementById('eventCenterEdit').value = center.name;
          }
          return center;
        });
        window.document.getElementById('dateEdit').value = event.date;
      }
    });
  }

  handleDeleteEvent(index) {
    this.props.deleteEventAction(index);
  }


  render() {
    return (
      <div>
        <div style={{ width: '100%' }}>
          <div style={{ margin: '20%', textAlign: 'center', width: '100%' }}>
            <div className="grey lighten-4" style={{ 
display: 'inline-block', width: '100%', padding: '0px 15px 20px 15px', border: '1px solid #EEE' 
}}>
              <div className="row">

                <div className="nav-wrapper">
                  <div className="col s12">
                    <h3 className="brand-logo col s12">Booked Events</h3>
                  </div>
                </div>


                <table className="highlight">
                  <thead>
                    <tr>
                      <th>Event Type</th>
                      <th>Center Name</th>
                      <th>Date</th>
                      <th>Guest est.</th>
                      <th >Change</th>
                      <th> Cancel Event</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* <tr>
                                            <td>Alvin</td>
                                            <td>Eclai Halls</td>
                                            <td>November 4th, 2020</td>
                                            <td>235</td>
                                            <td> <a className="btn-floating btn-large waves-effect waves-light red">
                                                <i className="material-icons">edit</i></a></td>
                                            <td><a className="btn-floating btn-large waves-effect waves-light red">
                                                <i className="material-icons">delete</i></a></td>
                                        </tr> */}


                    {/* { this.props.eventState.map((event, index) =>

                                                //populate table with events and information

                                                <tr key={index} index={index} eventId={event.id}>
                                                    <td >{index + 1}</td>
                                                    <td>{event.type}</td>
                                                    <td>{this.props.centerState.map((center) => {
                                                        if (center.id === event.centerId) {
                                                            return center.name;
                                                        }
                                                    })}</td>
                                                    <td>{event.date}</td>
                                                    <td>{event.guestNo}</td>
                                                <td><button onClick={this.handleStoringId.bind(this, event.id)} className="btn-floating btn-large waves-effect waves-light red">
                                                    <i className="material-icons">edit</i></button></td>
                                                <td><button  onClick={this.handleDeleteEvent.bind(this, event.id)} className="btn-floating btn-large waves-effect waves-light red">
                                                    <i className="material-icons">delete</i></button></td>
                                                </tr>
                                        )} */}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default UserEvents;
