import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import PropTypes from 'prop-types';
import moment from 'moment';
import swal from 'sweetalert';
import ScrollUp from 'react-scroll-up';
import { Row } from 'react-materialize';
import Loading from 'react-loading-animation';
import { Modal } from 'react-bootstrap';
import BookCenter from './BookCenterModal.jsx';
import Search from '../Search.jsx';
import CenterList from '../CenterCard.jsx';
import '../../styles/index.less';
import addEventAction from '../../actions/addEventAction';
import getAllCenters from '../../actions/getAllCentersAction';
import validateForm from '../../../helpers/validators/eventValidator';

/**
 *
 * @class BookCenter
 * @extends {Component}
 */
class CentersPage extends Component {
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
      facility: ''
    };

    this.loadMoreContent = this.loadMoreContent.bind(this);
    this.getMoreCenters = this.getMoreCenters.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.changeSearchState = this.changeSearchState.bind(this);
  }

  /**
 * @method componentWillMount
 * @returns { * } null
 * @memberof AllCenters
 */
  componentWillMount() {
    const { pageNo, limit } = this.state;
    this.props.getAllCenters(pageNo, limit)
      .then(() => {
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
      this.setState({ centers: nextProps.allCenters.fetchedCenters, isLoading: false });
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
 * @returns {object} void
 *
 * @param {any} e
 * @memberof BookCenter
 */
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
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
    this.setState({
      pageNo: this.state.pageNo + 1, isLoading: true
    }, () => { this.getMoreCenters(this.state.pageNo, this.state.limit); });
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
 * @returns {object} boolean
 * @memberof BookCenter
 */
  formIsValid() {
    const { errors, formIsValid } = validateForm(this.state);
    if (!formIsValid) {
      console.log('there are errors', errors);
      this.setState({ errors });
    }
    return formIsValid;
  }

  /**
 * @returns {object} void
 *
 * @param {any} e
 * @memberof BookCenter
 */
  onSubmit(e) {
    console.log('inside onsubmit');
    e.preventDefault();
    if (this.formIsValid()) {
      this.setState({ errors: {} });
      const eventDetails = {
        center: this.state.center.value,
        eventType: this.state.eventType,
        date: moment(this.state.date.date).format('YYYY-MM-DD HH:mm:ss'),
        guestNo: this.state.guestNo
      };
      console.log('center details', eventDetails.center);
      swal({
        title: 'Are you sure?',
        text: 'You will be booking the center with the set date.',
        icon: 'info',
        dangerMode: true,
      });
      this.props.addNewEvent(eventDetails)
        .then(() => {
          const { createSuccess, createError } = this.props;
          console.log('create success', createSuccess);
          if (createError === '') {
            toastr.remove();
            toastr.success(createSuccess);
          } else {
            toastr.remove();
            toastr.error(createError);
          }
          this.clear();
        });
    }
  }
  /**
 *
 *
 * @returns {object} booked center
 * @memberof BookCenter
 */
  render() {
    const { centers } = this.state;
    return (
      <div>
        <div>
          <h3>Available Centers.</h3>
          <div className='center'>
            <Search changeSearchState={this.changeSearchState.bind(this)}/> <br/> <br/>
          </div>
          <div> {(centers) ?
            <Row>
              {centers.map((center, i) =>
                <CenterList key={i} center={center} handleShowModal={this.handleShowModal.bind(this)}/>)}
            </Row> : 'There are no registered centers.'
          }
          {this.state.isLoading === true &&
          <div><p>Loading...</p> <Loading /></div> }
          <ScrollUp showUnder={100}>
            <button type="button" className="btn btn-floating btn-rounded waves-effect">TOP</button>
          </ScrollUp>
          <button onClick={this.loadMoreContent}
            className="btn btn-primary active" id="loadMore" disabled={!this.props.moreCenters}>Load More</button>
          <br /><br />
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <BookCenter center ={this.state.center}/>
        </Modal>
      </div>
    );
  }
}

CentersPage.propTypes = {
  allCenters: PropTypes.object,
  getAllCenters: PropTypes.func.isRequired,
  createSuccess: PropTypes.func,
  createError: PropTypes.func,
  addNewEvent: PropTypes.func,
  Centers: PropTypes.array,
  moreCenters: PropTypes.bool
};

const mapStateToProps = state => ({
  allCenters: state.allCenters,
  eventState: state.eventState,
  createError: state.createCenter.createCenterError,
  createSuccess: state.createCenter.createCenterSuccess,
  moreCenters: state.allCenters.moreCenters
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllCenters,
  addNewEvent: addEventAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CentersPage);
