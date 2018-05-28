import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import PropTypes from 'prop-types';
import moment from 'moment';
import swal from 'sweetalert';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import '../../styles/index.less';
import addEventAction from '../../actions/addEventAction';
import validateForm from '../../../helpers/validators/eventValidator';

const SliderWithTooltip = createSliderWithTooltip(Slider);

/**
 *
 * @class BookCenter
 * @extends {Component}
 */
class BookCenter extends Component {
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
      errors: {},
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
      guestNo,
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
 *
 * @param {any} centerId
 * @memberof BookCenter
 */
  onSubmit(centerId) {
    if (this.formIsValid()) {
      this.setState({ errors: {} });
      const eventDetails = {
        centerId,
        eventType: this.state.eventType,
        date: moment(this.state.date.date).format('YYYY-MM-DD HH:mm:ss'),
        guestNo: this.state.guestNo
      };
      swal({
        title: 'Are you sure?',
        text: 'You will be booking the center with the set date.',
        icon: 'info',
        dangerMode: true,
      });
      this.props.addNewEvent(eventDetails)
        .then(() => {
          const { createSuccess, createError } = this.props;
          if (createError === '') {
            toastr.remove();
            toastr.success(createSuccess);
          } else {
            swal({
              title: 'Unable to add new event',
              text: createError,
              icon: 'error',
              dangerMode: false,
            });
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
    const { errors } = this.state;
    const { center } = this.props;
    return (
      <div className="card card-image" style={{
        backgroundImage: "url('http://i68.tinypic.com/dh5vk.jpg')",
        width: '95%',
        height: '100%',
        padding: '5%'
      }}>
        <section className="form-dark">
          <div
            className="text-uppercase card-title font-weight-bold blue-text ">
            {center.name}</div>
          <br /><br />
          <div>
            <div className="text-blue  z-depth-4">
              <div className="input-field col s12">
                <select
                  name="eventType"
                  value={this.state.eventType.value}
                  onChange={this.handleChange}
                  onFocus={this.handleOnFocus}
                  className="form-control"
                  id="type">
                  <option value="">Choose the type of event</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Party">Party</option>
                  <option value="Conference">Conference</option>
                  <option value="Ceremony">Ceremony</option>
                  <option value="Other">Other</option>
                </select>
                <label htmlFor="event-type"
                  className="active">Type of event<br /><br /></label>
                {errors.eventType &&
                <p className="red-text">{errors.eventType}</p>}
              </div>
              <br /><br />
              <div className="row">
                <div className="input-field col s6 blue-text font-weight-bold">
                  <input
                    name="date"
                    value={this.state.date.value}
                    onChange={this.handleDateChange}
                    type="text"
                    className="datepicker"
                    id="event-date"
                  />
                  <label htmlFor="event-center"
                    className="active">Pick a date</label>
                </div>
              </div>
              {errors.date &&
                <p className="red-text">{errors.date}</p>}
              <div>
                <p className="range-field">
                  <label htmlFor='range'>Approximate number of guests:</label>
                </p>
              </div>
              {this.state.guestNo > 99990 ?
                <p className="text-monospace font-weight-bold blue-text">
                Over {this.state.guestNo}</p> :
                <p className="text-monospace font-weight-bold blue-text">
                Less than {this.state.guestNo}</p>}

              <SliderWithTooltip
                max={this.state.max}
                value={this.state.guestNo}
                step={this.state.step}
                onChange={this.onSliderChange}
                onAfterChange={this.onAfterChange}
              />
              { errors.guestNo &&
                <p className="red-text">{errors.guestNo}</p>
              }
              <br /><br />
              <button onClick={this.onSubmit.bind(this, center.id)}
                type="submit"
                className="waves-effect waves-light btn right hoverable indigo">
                <i className="large material-icons right"
                  aria-hidden="true" > done</i>Make Booking
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

BookCenter.propTypes = {
  center: PropTypes.Object,
  createSuccess: PropTypes.func,
  createError: PropTypes.func,
  addNewEvent: PropTypes.func
};


const mapDispatchToProps = dispatch => bindActionCreators({
  addNewEvent: addEventAction,
}, dispatch);

export default connect(null, mapDispatchToProps)(BookCenter);
