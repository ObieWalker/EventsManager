import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import Loading from 'react-loading-animation';
import ScrollUp from 'react-scroll-up';
import { connect } from 'react-redux';
import getAllEvents from '../../actions/getAllEventsAction';
import EventsCard from './EventsCard.jsx';
import cancelEvent from '../../actions/cancelEventAction';
/**
 *
 *
 * @class AllEvents
 * @extends {Component}
 */
export class AllEvents extends Component {
  /**
   * Creates an instance of AllEvents.
   * @param {any} props
   * @memberof AllEvents
   */
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isLoading: false,
      pageNo: 1,
      limit: 6
    };

    this.cancelEvent = this.cancelEvent.bind(this);
    this.loadMoreContent = this.loadMoreContent.bind(this);
  }

  /**
   * @returns {object} all events
   *
   * @memberof AllEvents
   */
  componentWillMount() {
    this.props.getAllEvents(this.state.pageNo, this.state.limit).then(() => {
      if (this.props.fetchedEvents) {
        this.setState({
          events: this.props.fetchedEvents
        });
      }
    });
  }
  /**
   * @returns {object} state
   *
   * @param {any} nextProps
   * @memberof UserEvents
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.fetchedEvents && this.props.fetchedEvents.length > 0) {
      this.setState({
        events: this.props.fetchedEvents,
        isLoading: false
      });
    }
    if (nextProps !== this.props) {
      this.setState({
        events: nextProps.fetchedEvents,
        isLoading: false
      });
    }
  }
  /**
   * @returns {*} null
   *
   * @memberof AllEvents
   */
  loadMoreContent() {
    this.setState(
      {
        pageNo: this.state.pageNo + 1,
        isLoading: true
      },
      () => {
        this.getMoreEvents(this.state.pageNo, this.state.limit);
      }
    );
  }

  /**
   * @returns {*} null
   *
   * @param {any} pageNo
   * @param {any} limit
   * @memberof UserEvents
   */
  getMoreEvents(pageNo, limit) {
    this.props.getAllEvents(pageNo, limit);
  }
  /**
   * @returns {*} null
   *
   * @param {any} eventId
   * @memberof AllEvents
   */
  cancelEvent(eventId) {
    this.props.cancelEvent(eventId);
  }
  /**
   *
   *
   * @returns {object} event card
   * @memberof AllEvents
   */
  render() {
    // const { events } = this.state;
    const { events } = this.state;
    return (
      <div>
        <h3 className="center">All Events and details.</h3>
        <div>
          {events && events.length > 0 ? (
            <Row>
              {events.map((event, i) => (
                <EventsCard
                  key={i}
                  event={event}
                  cancelEvent={this.cancelEvent.bind(this, event.id)}
                />
              ))}
            </Row>
          ) : (
            'There are no events booked.'
          )}
          {this.state.isLoading === true && (
            <div>
              <p>Loading...</p> <Loading />
            </div>
          )}
          <ScrollUp showUnder={100}>
            <button
              type="button"
              className="btn btn-floating btn-rounded waves-effect"
            >
              TOP
            </button>
          </ScrollUp>
          {this.props.moreEvents && (
            <button
              onClick={this.loadMoreContent}
              className="btn btn-primary active"
              id="loadMore"
              disabled={!this.props.moreEvents}
            >
              Load More
            </button>
          )}
          <br />
          <br />
        </div>
      </div>
    );
  }
}

AllEvents.propTypes = {
  allEvents: PropTypes.object,
  events: PropTypes.array,
  getAllEvents: PropTypes.func.isRequired,
  fetchedEvents: PropTypes.array,
  cancelEvent: PropTypes.func,
  moreEvents: PropTypes.bool
};

const mapStateToProps = state => ({
  fetchedEvents: state.allEvents.fetchedEvents,
  moreEvents: state.allEvents.moreEvents
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllEvents,
      cancelEvent
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AllEvents);
