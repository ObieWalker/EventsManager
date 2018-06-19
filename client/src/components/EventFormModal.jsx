import React from 'react';
import PropTypes from 'prop-types';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const EventForm = (props) => {
  const {
    errors,
    // center,
    event,
    eventCenter,
    centerName,
    eventTypeValue,
    bookCenterValue,
    eventTypeDefaultValue,
    onChange,
    onFocus,
    dateValue,
    bookDateValue,
    dateDefaultValue,
    guestValue,
    sliderMax,
    sliderStep,
    guestDefaultValue,
    sliderOnChange,
    onAfterChange,
    submitOnClick,
    bookOnSubmit
  } = props;
  return (
    <div
      className="card card-image"
      style={{
        backgroundImage: "url('http://i68.tinypic.com/dh5vk.jpg')",
        // width: '120%',
        // height: '400%',
        // paddingRight: '35%',
        // paddingLeft: '5%',
        // paddingTop: '5%',
        // marginLeft: '-4.5%',
        // marginTop: '-4%',
        // paddingBottom: '5%'

        width: '110%',
        minHeight: '91vh',
        padding: '5% 5% 5% 5%',
        marginLeft: '-4.5%',
        marginBottom: '-1%',
        marginTop: '-8%'
      }}
    >
      <section className="form-dark" style={{ justifyContent: 'center' }}>
        <div className="text-uppercase card-title font-weight-bold white-text ">
          <h4 className="modal-header">{eventCenter || centerName}</h4>
        </div>
        <br />
        <br />
        <div>
          <div className="text-blue  z-depth-4">
            <div className="input-field col s12">
              <select
                name="eventType"
                value={eventTypeValue || bookCenterValue}
                defaultValue={eventTypeDefaultValue || ''}
                onChange={onChange}
                onFocus={onFocus}
                className="form-control"
                id="type"
              >
                <option value="">Choose the type of event</option>
                <option value="Wedding">Wedding</option>
                <option value="Party">Party</option>
                <option value="Conference">Conference</option>
                <option value="Ceremony">Ceremony</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="event-type" className="active">
                Type of event<br />
                <br />
              </label>
              {errors.eventType && (
                <p id="eventTypeError" className="red-text">
                  {errors.eventType}
                </p>
              )}
            </div>
            <br />
            <div className="row">
              <div className="input-field col s6 blue-text font-weight-bold">
                <input
                  name="date"
                  value={dateValue || bookDateValue}
                  onChange={props.dateOnChange}
                  defaultValue={dateDefaultValue || ''}
                  type="text"
                  className="datepicker"
                  id="event-date"
                />
                <label htmlFor="event-center" className="active">
                  Pick a date
                </label>
              </div>
            </div>
            {errors.date && (
              <p id="dateError" className="red-text">
                {errors.date}
              </p>
            )}
            <div>
              <p className="range-field">
                <label htmlFor="range">Approximate number of guests:</label>
              </p>
            </div>
            {guestValue > 99990 ? (
              <p className="text-monospace font-weight-bold white-text">
                Over {guestValue}
              </p>
            ) : (
              <p className="text-monospace font-weight-bold white-text">
                Approximately {guestValue}
              </p>
            )}

            <SliderWithTooltip
              max={sliderMax}
              value={guestValue}
              step={sliderStep}
              defaultValue={guestDefaultValue || null}
              onChange={sliderOnChange}
              onAfterChange={onAfterChange}
            />
            {errors.guestNo && (
              <p id="guestNoError" className="red-text">
                {errors.guestNo}
              </p>
            )}
            <br />
            <br />
            {event ? (
              <button
                onClick={(e) => {
                  submitOnClick(e);
                }}
                type="submit"
                id="update-event"
                className="waves-effect waves-light btn right hoverable indigo"
              >
                <i className="large material-icons right" aria-hidden="true">
                  done
                </i>Update Event
              </button>
            ) : (
              <button
                style={{ marginBottom: '10px' }}
                onClick={() => {
                  bookOnSubmit();
                }}
                type="submit"
                className="waves-effect waves-light btn right hoverable indigo"
              >
                <i className="large material-icons right" aria-hidden="true">
                  {' '}
                  done
                </i>Make Booking
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

EventForm.propTypes = {
  event: PropTypes.object,
  eventCenter: PropTypes.string,
  eventTypeValue: PropTypes.string,
  bookCenterValue: PropTypes.string,
  eventTypeDefaultValue: PropTypes.string,
  errors: PropTypes.object,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  dateDefaultValue: PropTypes.string,
  bookDateValue: PropTypes.string,
  guestValue: PropTypes.number,
  dateValue: PropTypes.string,
  dateOnChange: PropTypes.func,
  sliderMax: PropTypes.number,
  sliderStep: PropTypes.number,
  guestDefaultValue: PropTypes.number,
  sliderOnChange: PropTypes.func,
  onAfterChange: PropTypes.func,
  submitOnClick: PropTypes.func,
  bookOnSubmit: PropTypes.func,
  centerName: PropTypes.string,
  center: PropTypes.object
};

export default EventForm;
