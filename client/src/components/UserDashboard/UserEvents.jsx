import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row } from 'react-materialize';
import PropTypes from 'prop-types';

import getUsersEventsAction from '../../actions/getUserEventsAction';
import deleteEventAction from '../../actions/deleteEventAction';
import editEventAction from '../../actions/editEventAction';
import EventList from './EventsCard.jsx';

// this component will be to view, update or delete a users events.

class UserEvents extends Component {
  constructor(props) {
    super(props);

    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
  }

  componentDidMount() {
    this.props.getUsersEvents();
  }

  handleEditEvent() {
    this.props.editEvent();
  }

  handleDeleteEvent() {
    this.props.deleteEvent();
  }


  render() {
    const Events = this.props.getUsersEvents;
    return (
      <div>
        <div>
          <h3>All Your Upcoming Events.</h3>
          <div> {Events.fetchedCenters ?
            <Row>
              {Events.fetchedCenters.map((events, i) =>
                <EventList key={i} events={events} />)}
            </Row> : 'You have no booked events'
          }
          </div>
        </div>
      </div>
    );
  }
}

UserEvents.propTypes = {
  getUsersEvents: PropTypes.object,
  deleteEvent: PropTypes.func,
  editEvent: PropTypes.func,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  allEvents: state.allEvents,
  user: state.loginUser
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getUsersEvents: getUsersEventsAction,
    deleteEvent: deleteEventAction,
    editEvent: editEventAction
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserEvents);
