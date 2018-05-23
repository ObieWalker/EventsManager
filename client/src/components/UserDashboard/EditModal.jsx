
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import swal from 'sweetalert';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import moment from 'moment';

import editEventAction from '../../actions/editEventAction';
import validateForm from '../../../helpers/validators/eventValidator';

const SliderWithTooltip = createSliderWithTooltip(Slider);

/**
 *
 *
 * @class TestModal
 * @extends {Component}
 */
class EditModal extends Component {
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
      errors: {},
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
  onSliderChange = (guestNo) => {
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
  onAfterChange = (value) => {
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
 * @returns {object} event
 *
 * @param {any} event
 * @memberof EditModal
 */
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
 *
 * @returns {object} modified event
 * @param {any} event
 * @memberof EditModal
 */
  onSubmit() {
    if (this.formIsValid()) {
      this.setState({ errors: {} });
      const modifiedEvent = {
        eventId: this.props.event.id,
        centerId: this.props.event.centerId,
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
        dangerMode: true,
      });
      this.props.editEvent(modifiedEvent)
        .then(() => {
          this.props.handleClose();
          const { updateSuccess, updateError } = this.props;
          if (updateError === '') {
            toastr.remove();
            toastr.success(updateSuccess);
          } else {
            toastr.remove();
            toastr.error(updateError);
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
    return (
      <div className="card card-image" style={{
        backgroundImage: "url('http://i68.tinypic.com/dh5vk.jpg')",
        width: '120%',
        height: '100%',
        paddingRight: '35%',
        paddingLeft: '5%',
        paddingTop: '0px',
        marginLeft: '-2.5%'
      }}>
        <section className="form-dark">
          <div
            className="text-uppercase card-title font-weight-bold blue-text ">
          Venue: <h4>{this.props.event.Center.name}</h4></div>

          <br /><br />
          <div>
            <div className="text-blue  z-depth-4">
              <div className="input-field col s12">
                <select
                  name="eventType"
                  value={this.state.eventType.value}
                  defaultValue={this.props.event.eventType}
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
                { errors.eventType &&
              <p className="red-text">{errors.eventType}</p>
                }
              </div>
              <br /><br />
              <div className="row">
                <div className="input-field col s6 blue-text font-weight-bold">
                  <input
                    name="date"
                    value={this.state.date.value}
                    onChange={this.handleDateChange}
                    defaultValue={this.props.event.date}
                    type="text"
                    className="datepicker"
                    id="event-date"
                  />
                  <label htmlFor="event-center"
                    className="active">Pick a date</label>
                </div>
              </div>
              { errors.date &&
              <p className="red-text">{errors.date}</p>
              }
              <div>
                <p className="range-field">
                  <label htmlFor='range'>Approximate number of guests:</label>
                </p>
              </div>
              {this.state.guestNo > 99990 ?
                <p className="text-monospace font-weight-bold blue-text">
                Over {this.state.guestNo}</p> :
                <p className="text-monospace font-weight-bold blue-text">
                Approximately {this.state.guestNo}</p>}

              <SliderWithTooltip
                max={this.state.max}
                value={this.state.guestNo}
                step={this.state.step}
                defaultValue={this.props.event.guestNo}
                onChange={this.onSliderChange}
                onAfterChange={this.onAfterChange}
              />
              { errors.guestNo &&
              <p className="red-text">{errors.guestNo}</p>
              }
              <br /><br />
              <button
                onClick={this.onSubmit.bind(this, this.props.event)}
                type="submit"
                className="waves-effect waves-light btn right hoverable indigo">
                <i className="large material-icons right" aria-hidden="true" >
                done</i>Update Event
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

EditModal.propTypes = {
  event: PropTypes.object,
  editEvent: PropTypes.func,
  handleClose: PropTypes.func,
  updateSuccess: PropTypes.string,
  updateError: PropTypes.string,
};

const mapStateToProps = state => ({
  updateSuccess: state.updateEvent.updateEventSuccess,
  updateError: state.updateEvent.updateEventError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editEvent: editEventAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);

