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


class UserEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEvents: '',
      pageNo: 1,
      limit: 6,
      isLoading: false
    };

    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.loadMoreContent = this.loadMoreContent.bind(this);
    this.getMoreEvents = this.getMoreEvents.bind(this);
  }

  componentWillMount() {
    this.props.getUsersEvents()
      .then(() => {
        this.setState({ userEvents: this.props.allUserEvents.fetchedUserEvents });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ userEvents: nextProps.allUserEvents.fetchedUserEvents, isLoading: false });
    }
  }

  handleEditEvent() {
    this.props.editEvent();
  }

  handleDeleteEvent() {
    this.props.deleteEvent();
  }
  loadMoreContent() {
    this.setState({ pageNo: this.state.pageNo + 1, isLoading: true }, () => { this.getMoreEvents(this.state.pageNo, this.state.limit); });
  }
  getMoreEvents(pageNo, limit) {
    this.props.getUsersEvents(pageNo, limit);
  }

  render() {
    const Events = this.state.userEvents;
    return (
      <div>
        <div>
          <h3>All Your Upcoming Events.</h3>
          <div> {(Events) ?
            <Row>
              {Events.map((events, i) =>
                <EventList key={i} events={events} />)}
            </Row> : 'You have no booked events'
          }
          {this.state.isLoading === true &&
          <div><p>Loading...</p> <Loading /></div> }

          <button onClick={this.loadMoreContent}
            className="btn btn-primary active" id="loadMore" disabled={!this.props.moreEvents}>Load More</button>
          <br /><br />
          </div>
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
