import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert';
import moment from 'moment';

import editEventAction from '../../actions/editEventAction';
import validateForm from '../../../helpers/validators/eventValidator';
import EventModal from '../EventFormModal.jsx';

/**
 *
 *
 * @class TestModal
 * @extends {Component}
 */
export class EditModal extends Component {
  /**
   * Creates an instance of EditModal.
   * @param {any} props
   * @memberof EditModal
   */
  constructor(props) {
    super(props);

    this.state = {
      center: '',
      eventType: '',
      date: '',
      guestNo: 179,
      max: 100000,
      step: 50,
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  /**
   * @returns {object} void
   *
   * @memberof BookCenter
   */
  componentDidMount() {
    this.setState({
      eventType: this.props.event.eventType,
      guestNo: this.props.event.guestNo,
      date: this.props.event.date
    });
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
  handleDateChange(e) {
    this.setState({
      date: moment(e.select).format('l')
      // date: Object.assign({}, this.state, {
      //   date: moment(e.select).format('l')
      // })
    });
  }

  /**
   *
   *
   * @returns {object} boolean
   * @memberof EditModal
   */
  formIsValid() {
    const { errors, formIsValid } = validateForm(this.state);
    if (!formIsValid) {
      this.setState({ errors });
    }
    return formIsValid;
  }
  /**
   *
   * @returns {object} modified event
   * @param {any} e
   * @memberof EditModal
   */
  onSubmit(e) {
    e.preventDefault();
    if (this.formIsValid()) {
      this.setState({ errors: {} });
      const modifiedEvent = {
        centerId: this.props.event.centerId,
        eventId: this.props.event.id,
        eventType: this.state.eventType,
        date: moment(this.state.date).format('YYYY-MM-DD HH:mm:ss'),
        guestNo: this.state.guestNo
      };
      swal({
        title: 'Modify your Event?',
        text: `Event Type: ${modifiedEvent.eventType}
        Date: ${this.state.date}
        guest Est.: ${modifiedEvent.guestNo}`,
        icon: 'info',
        buttons: true,
        dangerMode: false
      })
        .then((willEdit) => {
          if (willEdit) {
            this.props.editEvent(modifiedEvent);
          }
        })
        .then(() => {
          if (this.props.updateError === '') {
            this.props.hideModal();
          } else {
            swal({
              title: 'Unable to modify this event',
              text: this.props.updateError,
              icon: 'error',
              dangerMode: false
            });
          }
        });
    }
  }
  /**
   *
   *
   * @returns {object} modified event
   * @memberof EditModal
   */
  render() {
    const { errors } = this.state;
    const { event } = this.props;
    return (
      <EventModal
        event={event}
        errors={errors}
        eventCenter={event.Center.name}
        eventTypeValue={this.state.eventType.value}
        eventTypeDefaultValue={this.props.event.eventType}
        onChange={this.handleChange}
        onFocus={this.handleOnFocus}
        dateValue={this.state.date.value}
        dateOnChange={this.handleDateChange}
        dateDefaultValue={this.props.event.date}
        sliderMax={this.state.max}
        guestValue={this.state.guestNo}
        sliderStep={this.state.step}
        guestDefaultValue={this.props.event.guestNo}
        sliderOnChange={this.onSliderChange}
        onAfterChange={this.onAfterChange}
        submitOnClick={(e) => {
          this.onSubmit(e);
        }}
      />
    );
  }
}

EditModal.propTypes = {
  event: PropTypes.object,
  editEvent: PropTypes.func,
  handleClose: PropTypes.func,
  updateSuccess: PropTypes.string,
  updateError: PropTypes.string,
  hideModal: PropTypes.func
};

const mapStateToProps = state => ({
  updateSuccess: state.updateEvent.updateEventSuccess,
  updateError: state.updateEvent.updateEventError
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      editEvent: editEventAction
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
