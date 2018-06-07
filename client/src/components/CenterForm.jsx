import React from 'react';
import PropTypes from 'prop-types';

const CenterForm = (props) => {
  const {
    center,
    defaultCenterName,
    onFocus,
    onChange,
    centerNameValue,
    addressValue,
    defaultAddressValue,
    cityValue,
    defaultCityValue,
    capacityValue,
    defaultCapacityValue,
    facilityValue,
    defaultFacilityValue,
    modifyOnClick,
    createCenter
  } = props;
  return (
    <div>
      {/* <div className="col-lg-12 col-xs-12 col-centered">
      <p> test</p> */}
      <div
        className="grey lighten-4"
        style={{
          display: 'inline-block',
          width: '80%',
          margin: '5%',
          padding: '5%',
          border: '1px solid #EEE'
        }}
      >
        {/* <div className="input-field col s12"> */}
        <form className="">
          <div className="input-field col s12">
            <label htmlFor="name" className="active">Center Name:</label>
            <input
              type="text"
              className="form-control"
              value={centerNameValue}
              defaultValue={defaultCenterName || ''}
              onFocus={onFocus}
              id="name"
              name="name"
              required
              onChange={onChange}
            />
          </div>

          <div className="input-field col s12">
            <label className="active">Address:</label>
            <input
              type="text"
              value={addressValue}
              defaultValue={defaultAddressValue || ''}
              id="address"
              className="form-control"
              name="address"
              required
              onFocus={onFocus}
              onChange={onChange}
            />
          </div>
          <div className="row">
            <div className="input-field col s8">
              <label className="active">City:</label>
              <input
                type="text"
                value={cityValue}
                defaultValue={defaultCityValue || ''}
                id="city"
                name="city"
                className="form-control"
                required
                onFocus={onFocus}
                onChange={onChange}
              />
            </div>
            <div className="input-field col s4">
              <label className="active">Capacity:</label>
              <input
                type="number"
                value={capacityValue}
                defaultValue={defaultCapacityValue || ''}
                id="capacity"
                name="capacity"
                className="form-control"
                required
                onFocus={onFocus}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="facility"
                className="materialize-textarea"
                value={facilityValue}
                defaultValue={defaultFacilityValue || ''}
                name="facility"
                onFocus={onFocus}
                onChange={onChange}
              />
              <label htmlFor="facilities" className="active">
                    Center Description/Facilities:
              </label>
            </div>
          </div>
          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" multiple />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder="Upload Center Picture"
              />
            </div>
          </div>
          {center ?
            <button
              type="submit"
              className="waves-effect waves-light
            btn right hoverable indigo"
              onClick={() => { modifyOnClick(); }}
            >
              <i className="large material-icons right" aria-hidden="true">
                {' '}
                done
              </i>Update Center
            </button>
            :
            <button
              type="submit"
              className="waves-effect waves-light
              btn right hoverable indigo"
              onClick={() => { createCenter(); }}
            >
              <i className="large material-icons right" aria-hidden="true">
                {' '}
                  done
              </i>Add Center
            </button>

          }
        </form>
      </div>
    </div>
  /* </div> */
    // </div>
  );
};

CenterForm.propTypes = {
  center: PropTypes.object,
  defaultCenterName: PropTypes.string,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  centerNameValue: PropTypes.string,
  addressValue: PropTypes.string,
  defaultAddressValue: PropTypes.string,
  cityValue: PropTypes.string,
  defaultCityValue: PropTypes.string,
  capacityValue: PropTypes.number,
  defaultCapacityValue: PropTypes.number,
  facilityValue: PropTypes.string,
  defaultFacilityValue: PropTypes.string,
  modifyOnClick: PropTypes.func,
  createCenter: PropTypes.func
};

export default CenterForm;