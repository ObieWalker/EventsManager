import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row } from 'react-materialize';
import ScrollUp from 'react-scroll-up';
import PropTypes from 'prop-types';
import Loading from 'react-loading-animation';
import getUsersHistoryRequest from '../../actions/getUserHistoryAction';
import EventList from './EventsCard.jsx';

/**
 *
 *
 * @class UserEvents
 * @extends {Component}
 */
class UserHistory extends Component {
  /**
   * Creates an instance of UserEvents.
   * @param {any} props
   * @memberof UserEvents
   */
  constructor(props) {
    super(props);
    this.state = {
      userHistory: '',
      pageNo: 1,
      limit: 6,
      isLoading: false
    };

    this.loadMoreContent = this.loadMoreContent.bind(this);
    this.getMoreEvents = this.getMoreEvents.bind(this);
  }

  /**
   * @method componentWillMount
   * @returns {object} state
   * @memberof UserEvents
   */
  componentWillMount() {
    this.props.getUsersHistory(this.state.pageNo, this.state.limit)
      .then(() => {
        this.setState({ userHistory: this.props.userHistory.fetchedUserHistory });
      });
  }

  /**
   * @returns {object} state
   *
   * @param {any} nextProps
   * @memberof UserEvents
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ userHistory: nextProps.userHistory.fetchedUserHistory, isLoading: false });
    }
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
    this.props.getUsersHistory(pageNo, limit);
  }

  /**
   *
   *
   * @returns {object} upcoming events
   * @memberof UserEvents
   */
  render() {
    const History = this.state.userHistory;
    return (
      <div>
        <div>
          <h3>Your booking history.</h3>
          <div> {(History.length > 0) ?
            <Row>
              {History.map((event, i) =>
                <EventList key={i} event={event} />)}
            </Row> : 'You have no booking history'
          }
          {this.state.isLoading === true &&
          <div><p>Loading...</p> <Loading /></div> }
          <ScrollUp showUnder={100}>
            <button type="button" className="btn btn-floating btn-rounded waves-effect">TOP</button>
          </ScrollUp>
          <button onClick={this.loadMoreContent}
            className="btn btn-primary active" id="loadMore" disabled={!this.props.moreHistory}>Load More</button>
          <br /><br />
          </div>
        </div>
      </div>
    );
  }
}

UserHistory.propTypes = {
  getUsersHistory: PropTypes.func,
  userHistory: PropTypes.object,
  user: PropTypes.object,
  moreHistory: PropTypes.bool
};

const mapStateToProps = state => ({
  user: state.loginUser,
  userHistory: state.userHistory,
  moreHistory: state.userHistory.moreHistory
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getUsersHistory: getUsersHistoryRequest
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserHistory);
