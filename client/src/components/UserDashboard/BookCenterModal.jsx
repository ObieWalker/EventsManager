import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import PropTypes from 'prop-types';
import moment from 'moment';
import swal from 'sweetalert';
import '../../styles/index.less';
import addEventAction from '../../actions/addEventAction';
import validateForm from '../../../helpers/validators/eventValidator';
import CenterFormModal from '../EventFormModal.jsx';


/**
 *
 * @class BookCenter
 * @extends {Component}
 */
export class BookCenter extends Component {
  /**
   * @constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      center: '',
      eventType: '',
      date: '',
      guestNo: 100,
      max: 100000,
      step: 50,
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clear = this.clear.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
  }

  /**
   * @returns {object} void
   *
   * @memberof BookCenter
   */
  componentDidMount() {
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 5, // dropdown of 5 years
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: true, // Close after selection
      onSet: this.handleDateChange
    });
  }

  /**
   *
   * @param {any} guestNo
   * @returns {object} state
   * @memberof BookCenter
   */
  onSliderChange(guestNo) {
    this.setState({
      guestNo
    });
  }

  /**
   *
   * @param {any} value
   * @returns {object} state
   * @memberof BookCenter
   */
  onAfterChange(value) {
    console.log(value);
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
   * @returns {object} void
   *
   * @param {any} e
   * @memberof BookCenter
   */
  handleDateChange(e) {
    this.setState({
      date: Object.assign({}, this.state, {
        date: moment(e.select).format('l')
      })
    });
  }

  /**
   * @returns {object} void
   *
   * @param {any} e
   * @memberof BookCenter
   */
  handleOnFocus(e) {
    this.setState({
      errors: Object.assign({}, this.state.errors, { [e.target.name]: '' })
    });
  }

  /**
   * @returns {object} void
   *
   * @memberof BookCenter
   */
  clear() {
    this.setState({
      center: '',
      eventType: '',
      date: '',
      guestNo: '',
      email: '',
      errors: {}
    });
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
      this.setState({ errors });
    }
    return formIsValid;
  }

  /**
   * @returns {object} void
   * @param {any} e
   * @param {any} centerId
   * @memberof BookCenter
   */
  onSubmit(e) {
    // const e = { preventDefault: () => undefined };
    e.preventDefault();
    const { center } = this.props;
    if (this.formIsValid()) {
      this.setState({ errors: {} });
      const eventDetails = {
        centerId: center.id,
        eventType: this.state.eventType,
        date: moment(this.state.date.date).format('YYYY-MM-DD HH:mm:ss'),
        guestNo: this.state.guestNo
      };
      swal({
        title: 'Are you sure?',
        text: 'You will be booking the center with the set date.',
        icon: 'info',
        dangerMode: true
      });
      this.props.addNewEvent(eventDetails).then(() => {
        this.clear();
        const { createSuccess, createError } = this.props;
        if (createError === '') {
          this.props.onHide();
          toastr.remove();
          toastr.success(createSuccess);
        }
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
    const { errors } = this.state;
    const { center } = this.props;
    return (
      <CenterFormModal
        center={center}
        centerName={center.name}
        bookCenterValue={this.state.eventType.value}
        onChange={this.handleChange}
        onFocus={this.handleOnFocus}
        errors={errors}
        bookDateValue={this.state.date.value}
        dateOnChange={this.handleDateChange}
        sliderMax={this.state.max}
        guestValue={this.state.guestNo}
        sliderStep={this.state.step}
        sliderOnChange={this.onSliderChange}
        onAfterChange={this.onAfterChange}
        bookOnSubmit={(e) => {
          this.onSubmit(e);
        }}
      />
    );
  }
}

BookCenter.propTypes = {
  center: PropTypes.object,
  createSuccess: PropTypes.string,
  createError: PropTypes.string,
  addNewEvent: PropTypes.func,
  onHide: PropTypes.func
};

const mapStateToProps = state => ({
  createError: state.createEvent.createEventError,
  createSuccess: state.createEvent.createEventSuccess
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addNewEvent: addEventAction
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(BookCenter);
