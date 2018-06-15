import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row } from 'react-materialize';
import ScrollUp from 'react-scroll-up';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import swal from 'sweetalert';
import Loading from 'react-loading-animation';
import getUsersEventsRequest from '../../actions/getUserEventsAction';
import deleteEventAction from '../../actions/deleteEventAction';
// import editEventAction from '../../actions/editEventAction';
import EventList from './EventsCard.jsx';
import EditForm from './EditModal.jsx';

/**
 *
 *
 * @class UserEvents
 * @extends {Component}
 */
export class UserEvents extends Component {
  /**
   * Creates an instance of UserEvents.
   * @param {any} props
   * @memberof UserEvents
   */
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      userEvents: {},
      pageNo: 1,
      limit: 6,
      isLoading: false,
      showModal: false
    };

    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.loadMoreContent = this.loadMoreContent.bind(this);
    this.getMoreEvents = this.getMoreEvents.bind(this);
    this.handleShowEditModal = this.handleShowEditModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  /**
   * @method componentWillMount
   * @returns {object} state
   * @memberof UserEvents
   */
  componentWillMount() {
    this.props.getUsersEvents(this.state.pageNo, this.state.limit).then(() => {
      if (this.props.allUserEvents.fetchedUserEvents) {
        this.setState({
          userEvents: this.props.allUserEvents.fetchedUserEvents
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
    if (
      this.props.allUserEvents.fetchedUserEvents &&
      this.props.allUserEvents.fetchedUserEvents.length > 0
    ) {
      this.setState({
        userEvents: this.props.allUserEvents.fetchedUserEvents,
        isLoading: false
      });
    }
    if (nextProps !== this.props) {
      this.setState({
        userEvents: nextProps.allUserEvents.fetchedUserEvents,
        isLoading: false
      });
    }
  }

  /**
   * @returns {object} state
   *
   * @param {any} event
   * @memberof UserEvents
   */
  handleShowEditModal(event) {
    console.log('show edit modal');
    this.setState({
      event,
      showModal: true
    });
  }
  /**
   * @returns {*} null
   *
   * @memberof UserEvents
   */
  handleClose() {
    this.setState({
      showModal: false
    });
  }
  /**
   * @returns {*} null
   *
   * @param {any} event
   * @memberof UserEvents
   */
  handleDeleteEvent(event) {
    swal({
      title: 'Are you sure?',
      text: `If this ${event.eventType} at ${
        event.Center.name
      } is cancelled, it cannot be undone`,
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        this.props.deleteEvent(event);
      }
    });
  }

  /**
   * @returns {object} state
   *
   * @memberof UserEvents
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
    return (
      <div style={{ margin: 'auto' }}>
        <h3>All Your Upcoming Events.</h3>
        <div>
          {' '}
          {Events && Events.length > 0 ? (
            <Row>
              {Events.map((event, i) => (
                <EventList
                  key={i}
                  event={event}
                  handleDeleteEvent={this.handleDeleteEvent.bind(this, event)}
                  handleShowEditModal={this.handleShowEditModal.bind(
                    this,
                    event
                  )}
                />
              ))}
            </Row>
          ) : (
            'You have no booked events'
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
              style={{ margin: 'auto' }}
            >
              Load More
            </button>
          )}
          <br />
          <br />
        </div>
        <Dialog
          open={this.state.showModal}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <EditForm event={this.state.event} hideModal={this.handleClose} />
        </Dialog>
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
  bindActionCreators(
    {
      getUsersEvents: getUsersEventsRequest,
      deleteEvent: deleteEventAction
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserEvents);
