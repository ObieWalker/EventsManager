import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ScrollUp from 'react-scroll-up';
import { Row } from 'react-materialize';
import Loading from 'react-loading-animation';
import Dialog from 'material-ui/Dialog';
import BookCenterModal from './BookCenterModal.jsx';
import SearchForm from '../Search.jsx';
import CenterList from '../CenterCard.jsx';
import EventList from '../EventList.jsx';
import '../../styles/index.less';
import addEventAction from '../../actions/addEventAction';
import getAllCenters from '../../actions/getAllCentersAction';
import centerEvents, { clearCenterEvents } from '../../actions/getCenterEventsAction';

/**
 *
 * @class BookCenter
 * @extends {Component}
 */
export class CentersPage extends Component {
  /**
   * @constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      centers: '',
      center: '',
      pageNo: 1,
      limit: 6,
      isLoading: false,
      show: false,
      filter: '',
      capacity: '',
      facility: '',
      showCenterEvents: false
    };

    this.loadMoreContent = this.loadMoreContent.bind(this);
    this.getMoreCenters = this.getMoreCenters.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.changeSearchState = this.changeSearchState.bind(this);
    this.getCenterEvents = this.getCenterEvents.bind(this);
    this.revertPageState = this.revertPageState.bind(this);
    this.resetPage = this.resetPage.bind(this);
  }

  /**
   * @method componentWillMount
   * @returns { * } null
   * @memberof AllCenters
   */
  componentWillMount() {
    const { pageNo, limit } = this.state;
    this.props.getAllCenters(pageNo, limit).then(() => {
      this.setState({ centers: this.props.allCenters.fetchedCenters });
    });
  }
  /**
   * @method componentWillReceiveProps
   * @returns { * } null
   * @param {any} nextProps
   * @memberof AllCenters
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        centers: nextProps.allCenters.fetchedCenters,
        isLoading: false
      });
    }
  }
  /**
   * @returns {object} center state
   *
   * @param {any} center
   * @memberof CentersPage
   */
  handleShowModal(center) {
    this.setState({
      center,
      show: true
    });
  }
  /**
   * @returns {object} events
   *
   * @param {any} center
   * @memberof CentersPage
   */
  getCenterEvents(center) {
    this.setState({
      showCenterEvents: true
    });
    this.props.centerEvents(center.id, 1, 10);
  }
  /**
   * @returns {object} state
   *
   * @param {any} e
   * @memberof CentersPage
   */
  resetPage() {
    this.setState({
      pageNo: 1,
      filter: '',
      capacity: '',
      facility: ''
    });
  }
  /**
   * @returns {object} page state
   *
   * @param {any} e
   * @memberof CentersPage
   */
  revertPageState(e) {
    e.preventDefault();
    this.setState({
      showCenterEvents: false
    });
    this.props.clearCenterEvents();
  }
  /**
   * @returns {object} search state
   *
   * @param {any} filter
   * @param {any} capacity
   * @param {any} facility
   * @memberof CentersPage
   */
  changeSearchState(filter, capacity, facility) {
    this.setState({
      filter,
      capacity,
      facility
    });
  }

  /**
   *
   * @returns {object} state
   * @memberof AdminCenters
   */
  handleClose() {
    this.setState({
      show: false
    });
  }

  /**
   * @method loadMoreContent
   * @returns {object} state
   * @memberof AllCenters
   */
  loadMoreContent() {
    this.setState(
      {
        pageNo: this.state.pageNo + 1,
        isLoading: true
      },
      () => {
        this.getMoreCenters(this.state.pageNo, this.state.limit);
      }
    );
  }

  /**
   * @returns { * } null
   *
   * @param {any} pageNo
   * @param {any} limit
   * @memberof AllCenters
   */
  getMoreCenters(pageNo, limit) {
    const { filter, facility, capacity } = this.state;
    this.props.getAllCenters(pageNo, limit, filter, facility, capacity);
  }

  /**
   *
   *
   * @returns {object} booked center
   * @memberof BookCenter
   */
  render() {
    const { centers, showCenterEvents } = this.state;
    if (showCenterEvents === false) {
      return (
        <div>
          <div>
            <h3>Available Centers.</h3>
            <div className="center">
              <SearchForm
                changeSearchState={this.changeSearchState.bind(this)}
                resetPage={this.resetPage.bind(this)}
              />{' '}
              <br /> <br />
            </div>
            <div>
              {' '}
              {centers ? (
                <Row>
                  {centers.map((center, i) => (
                    <CenterList
                      key={i}
                      center={center}
                      handleShowModal={this.handleShowModal}
                      getCenterEvents={this.getCenterEvents.bind(this, center)}
                    />
                  ))}
                </Row>
              ) : (
                'There are no registered centers.'
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
              {this.props.moreCenters && (
                <button
                  onClick={this.loadMoreContent}
                  className="btn btn-primary active"
                  id="loadMore"
                  disabled={!this.props.moreCenters}
                  style={{ position: 'center' }}
                >
                  Load More
                </button>
              )}
              <br />
              <br />
            </div>
          </div>
          <Dialog
            open={this.state.show}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
            // onHide={this.handleClose}
          >
            <BookCenterModal
              center={this.state.center}
              onHide={this.handleClose}
            />
          </Dialog>
        </div>
      );
    }
    const events = this.props.fetchedCenterEvents;
    return (
      <div>
        {/* <button
          onClick={this.revertPageState}
          className="animated bounceInUp btn btn-small left"
        >
          <i className="large material-icons">reply</i>
          Go Back
        </button> */}
        <div>
          {events && events.length > 0 ? (
            <div>
              <div className="row">
                <h4>
                  Upcoming Events at{' '}
                  {this.props.fetchedCenterEvents[0].Center.name}
                </h4>
                <button
                  onClick={this.revertPageState}
                  className="animated bounceInUp btn btn-small left"
                >
                  <i className="large material-icons">reply</i>
                  Go Back
                </button>
              </div>
              <Row>
                {events.map((event, i) => <EventList key={i} event={event} />)}
              </Row>
            </div>
          ) : (
            <h4>This Center has no upcoming events.</h4>
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
          <br />
          <br />
        </div>
      </div>
    );
  }
}

CentersPage.propTypes = {
  allCenters: PropTypes.object,
  getAllCenters: PropTypes.func.isRequired,
  createSuccess: PropTypes.string,
  createError: PropTypes.string,
  addNewEvent: PropTypes.func,
  Center: PropTypes.object,
  moreCenters: PropTypes.bool,
  centerEvents: PropTypes.func,
  fetchedCenterEvents: PropTypes.array,
  clearCenterEvents: PropTypes.func
};

const mapStateToProps = state => ({
  allCenters: state.allCenters,
  eventState: state.eventState,
  createError: state.createCenter.createCenterError,
  createSuccess: state.createCenter.createCenterSuccess,
  moreCenters: state.allCenters.moreCenters,
  fetchedCenterEvents: state.centerEvents.fetchedCenterEvents
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllCenters,
      addNewEvent: addEventAction,
      centerEvents,
      clearCenterEvents
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CentersPage);
