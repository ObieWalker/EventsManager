import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import PropTypes from 'prop-types';
import moment from 'moment';
import swal from 'sweetalert';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider, { createSliderWithTooltip } from 'rc-slider';
// import ReactBootstrapSlider from 'react-bootstrap-slider';
import '../../styles/index.less';
import addEventAction from '../../actions/addEventAction';
import getAllCenters from '../../actions/getAllCentersAction';
import validateForm from '../../../helpers/validators/eventValidator';

const SliderWithTooltip = createSliderWithTooltip(Slider);

class BookCenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: { value: '' },
      eventType: '',
      date: '',
      guestNo: 100,
      max: 100000,
      email: '',
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clear = this.clear.bind(this);
    this.handleCenterSelection = this.handleCenterSelection.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
  }

  componentDidMount() {
    console.log('this.props.getAllCenters===>', this.props.getAllCenters);
    this.props.getAllCenters();

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

  onSliderChange = (guestNo) => {
    console.log(guestNo);
    this.setState({
      guestNo,
    });
  }

  onAfterChange = (value) => {
    console.log(value); //eslint-disable-line
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleDateChange(e) {
    console.log(moment(e.select).format('l'));
    this.setState({
      date: Object.assign({}, this.state, { date: moment(e.select).format('l') })
    });
  }


  handleOnFocus(e) {
    this.setState({
      errors: Object.assign({}, this.state.errors, { [e.target.name]: '' })
    });
  }
  handleCenterSelection(event, target, value) {
    console.log(value);
    this.setState({
      center: Object.assign({}, this.state.center, { value })
    });
  }


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

  formIsValid() {
    const { errors, formIsValid } = validateForm(this.state);
    if (!formIsValid) {
      console.log('not valid');
      this.setState({ errors });
    }
    return formIsValid;
  }


  onSubmit(e) {
    console.log('onsubmit');
    e.preventDefault();
    if (this.formIsValid()) {
      console.log('is valid');
      this.setState({ errors: {} });
      console.log(this.state, 'state object');
      const eventDetails = {
        center: this.state.center.value,
        eventType: this.state.eventType,
        date: moment(this.state.date.date).format('YYYY-MM-DD HH:mm:ss'),
        guestNo: this.state.guestNo,
        email: this.state.email
      };
      swal({
        title: 'Are you sure?',
        text: 'You will be booking the center with the set date.',
        icon: 'info',
        dangerMode: true,
      });
      console.log(eventDetails);
      this.props.addNewEvent(eventDetails)
        .then(() => {
          console.log('create event');
          console.log(this.props);
          const { createSuccess, createError } = this.props;
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

  render() {
    return (
      <div>
        <div className="col s8" style={{ margin: '5%' }}>

          <div className="grey lighten-4" style={{
            display: 'inline-block',
            width: '100%',
            border: '1px solid #EEE',
            padding: '5%'
          }}>
            <div className="row">

              <div className="nav-wrapper">

                <div className="col s12">
                  <h4 className="brand-logo col s12">Booking Information.</h4>
                </div>
              </div>
            </div>

            <div className="input-field col s12" >

              <form className="col s12" onSubmit={this.onSubmit}>

                <div className="row">
                  <div className="input-field col s8">
                    <div>
                      <SelectField
                        value={this.state.center.value}
                        onChange= {this.handleCenterSelection}>
                        {this.props.allCenters.fetchedCenters.map(center => (
                          // <option key={center.id} value={center.id}>  { center.name } - {center.city}</option>
                          <MenuItem key={center.id} value= {center.id} primaryText= {`${center.name} - ${center.city}`}/>
                        ))}
                      </SelectField>
                      <label htmlFor="event-center" className="active">Select a Center below<br /></label>
                    </div>
                  </div>
                </div><br />

                <div className="input-field col s12">
                  <select
                    name="eventType"
                    value={this.state.eventType.value}
                    onChange={this.handleChange}
                    className="form-control"
                    id="type">
                    <option value="">Choose the type of event</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Party">Party</option>
                    <option value="Conference">Conference</option>
                    <option value="Ceremony">Ceremony</option>
                    <option value="Other">Other</option>
                  </select>
                  <label htmlFor="event-type" className="active">Type of event<br /><br /></label>
                </div>

                <div className="row">
                  <div className="input-field col s6">
                    <input
                      name="date"
                      value={this.state.date.value}
                      onChange={this.handleDateChange}
                      type="text"
                      className="datepicker"
                      id="event-date"
                    />
                    <label htmlFor="event-center" className="active">Pick a date</label>
                  </div>
                </div>

                <div>
                  <p className="range-field">
                    <label htmlFor='range'>Select the approximate number of guests.</label>
                  </p>
                </div><br /><br />

                <SliderWithTooltip
                  max={this.state.max}
                  value={this.state.guestNo}
                  onChange={this.onSliderChange}
                  onAfterChange={this.onAfterChange}
                />

                <div className='input-field col s12'>
                  <i className="material-icons prefix">contacts</i>
                  <input
                    className='validate'
                    value={this.state.email.value}
                    error={this.state.errors.email}
                    onFocus={this.state.handleOnFocus}
                    type='email'
                    name='email'
                    id='email'
                    onChange={this.handleChange}/>
                  <label htmlFor='email'>Enter a contact email.</label>
                </div>

                <button type="submit" className="waves-effect waves-light btn right hoverable indigo">
                  <i className="large material-icons right" aria-hidden="true"> done</i>Make Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

BookCenter.propTypes = {
  allCenters: PropTypes.object,
  getAllCenters: PropTypes.func.isRequired,
  createSuccess: PropTypes.func,
  createError: PropTypes.func,
  addNewEvent: PropTypes.func,
  Centers: PropTypes.array
};

const mapStateToProps = state => ({
  allCenters: state.allCenters,
  eventState: state.eventState,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllCenters,
  addNewEvent: addEventAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookCenter);
