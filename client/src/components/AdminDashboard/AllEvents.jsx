import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getAllEvents from '../../actions/getAllEventsAction';
import EventsCard from './EventsCard.jsx';
import cancelEvent from '../../actions/cancelEventAction';

class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: '',
    };
  }

  cancelEvent() {

  }
  componentDidMount() {
    this.props.getAllEvents();
  }


  render() {
    const Events = this.props.allEvents;
    return (
      <div >

        <h3>All Events and details.</h3>
        <div>{Events ?
          <Row>
            {Events.fetchedEvents.map((events, i) =>
              <EventsCard key={i} events={events} />)}
            <button onClick={cancelEvent}>Cancel Event</button>
          </Row> : 'There are no events booked.'
        }
        </div>
      </div>
    );
  }
}

AllEvents.propTypes = {
  allEvents: PropTypes.object,
  getAllEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  allEvents: state.allEvents
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllEvents }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AllEvents);
