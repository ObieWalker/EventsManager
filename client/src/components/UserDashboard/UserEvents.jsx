import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row } from 'react-materialize';
import PropTypes from 'prop-types';
import Loading from 'react-loading-animation';
import getUsersEventsRequest from '../../actions/getUserEventsAction';
// import deleteEventAction from '../../actions/deleteEventAction';
// import editEventAction from '../../actions/editEventAction';
import EventList from './EventsCard.jsx';

/**
 *
 *
 * @class UserEvents
 * @extends {Component}
 */
class UserEvents extends Component {
  /**
   * Creates an instance of UserEvents.
   * @param {any} props
   * @memberof UserEvents
   */
  constructor(props) {
    super(props);
    this.state = {
      userEvents: {},
      pageNo: 1,
      limit: 6,
      isLoading: false
    };

    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.loadMoreContent = this.loadMoreContent.bind(this);
    this.getMoreEvents = this.getMoreEvents.bind(this);
  }

  /**
   * @method componentWillMount
   * @returns {object} state
   * @memberof UserEvents
   */
  componentWillMount() {
    this.props.getUsersEvents()
      .then(() => {
        if (this.props.allUserEvents.fetchedUserEvents) {
          this.setState({ userEvents: this.props.allUserEvents.fetchedUserEvents });
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
    if (this.props.allUserEvents.fetchedUserEvents && this.props.allUserEvents.fetchedUserEvents.length > 0) {
      this.setState({ userEvents: this.props.allUserEvents.fetchedUserEvents, isLoading: false });
    }
    if (nextProps !== this.props) {
      this.setState({ userEvents: nextProps.allUserEvents.fetchedUserEvents, isLoading: false });
    }
  }

  /**
   * @returns {null} null
   *
   * @memberof UserEvents
   */
  handleEditEvent() {
    this.props.editEvent();
  }

  /**
   * @returns {*} null
   *
   * @memberof UserEvents
   */
  handleDeleteEvent() {
    this.props.deleteEvent();
  }

  /**
   * @returns {object} state
   *
   * @memberof UserEvents
   */
  loadMoreContent() {
    this.setState({ pageNo: this.state.pageNo + 1, isLoading: true }, () => { this.getMoreEvents(this.state.pageNo, this.state.limit); });
  }

  /**
   * @returns {*} null
   *
   * @param {any} pageNo
   * @param {any} limit
   * @memberof UserEvents
   */
  getMoreEvents(pageNo, limit) {
    this.props.getUsersEvents(pageNo, limit);
  }

  /**
   *
   *
   * @returns {object} upcoming events
   * @memberof UserEvents
   */
  render() {
    const Events = this.state.userEvents;
    console.log('Events======>>>>>>>', Events);
    return (
      <div>
        <h3>All Your Upcoming Events.</h3>
        <div> {(Events && Events.length > 0) ? (
          <Row>
            {Events.map((event, i) =>
              <EventList key={i} event={event} />)}
          </Row>) : 'You have no booked events'
        }
        {this.state.isLoading === true &&
          <div><p>Loading...</p> <Loading /></div> }

        <button onClick={this.loadMoreContent}
          className="btn btn-primary active" id="loadMore" disabled={!this.props.moreEvents}>Load More</button>
        <br /><br />
        </div>
      </div>
    );
  }
}

UserEvents.propTypes = {
  getUsersEvents: PropTypes.func,
  allUserEvents: PropTypes.object,
  deleteEvent: PropTypes.func,
  editEvent: PropTypes.func,
  user: PropTypes.object,
  moreEvents: PropTypes.bool
};

const mapStateToProps = state => ({
  user: state.loginUser,
  allUserEvents: state.allUserEvents,
  moreEvents: state.allUserEvents.moreEvents
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getUsersEvents: getUsersEventsRequest
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserEvents);
