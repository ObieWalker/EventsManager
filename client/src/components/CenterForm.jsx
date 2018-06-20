import React from 'react';
import PropTypes from 'prop-types';

const CenterForm = (props) => {
  const {
    center,
    errors,
    defaultCenterName,
    onFocus,
    onChange,
    centerNameValue,
    // addressValue,
    defaultAddressValue,
    // cityValue,
    defaultCityValue,
    // capacityValue,
    defaultCapacityValue,
    // facilityValue,
    defaultFacilityValue,
    modifyOnClick,
    createCenter,
    defaultImage,
    uploadImage
  } = props;
  return (
    <div className="centerForm" id={center && 'modifyDiv'}>
      {/* <div className="col-lg-12 col-xs-12 col-centered">
      <p> test</p> */}
      {center && <h3 className="center">Modify Center Details</h3>}
      <div
        className="grey lighten-4"
        style={{
          display: 'inline-block',
          width: '90%',
          margin: '5%',
          padding: '5%',
          border: '1px solid #EEE'
        }}
      >
        {/* <div className="input-field col s12"> */}
        <form className="formation">
          <div className="input-field col s12">
            <label htmlFor="name" className="active">
              Center Name:
            </label>
            <input
              type="text"
              className="form-control"
              // value={centerNameValue}
              error={props.errors}
              defaultValue={centerNameValue || defaultCenterName || ''}
              onFocus={onFocus}
              id="name"
              name="name"
              required
              onChange={onChange}
            />
            {errors.name && (
              <span id="centerNamerError" className="red-text">
                {errors.name}
              </span>
            )}
          </div>

          <div className="input-field col s12">
            <label className="active">Address:</label>
            <input
              type="text"
              // value={addressValue}
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
                // value={cityValue}
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
                // value={capacityValue}
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
                id={ defaultCityValue ? 'modifyFacility' : 'facility'}
                className="materialize-textarea"
                // value={facilityValue}
                defaultValue={defaultFacilityValue || ''}
                name={
                  defaultCityValue ? 'modifyFacility' : 'facility'
                }
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
              <input
                type="file"
                name="image"
                defaultValue={defaultImage || ''}
                onChange={uploadImage}
              />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder="Upload Center Picture"
              />
            </div>
          </div>
          {center ? (
            <button
              type="submit"
              id="update-center"
              className="waves-effect waves-light
            btn right hoverable dark-green"
              onClick={(e) => {
                modifyOnClick(e);
              }}
            >
              <i className="large material-icons right" aria-hidden="true">
                {' '}
                done
              </i>Update Center
            </button>
          ) : (
            <button
              type="submit"
              id="create-center"
              className="waves-effect waves-dark
              btn right hoverable dark-green"
              onClick={(e) => {
                createCenter(e);
              }}
            >
              <i className="large material-icons right" aria-hidden="true">
                {' '}
                done
              </i>Add Center
            </button>
          )}
        </form>
      </div>
    </div>
    /* </div> */
    // </div>
  );
};

CenterForm.propTypes = {
  center: PropTypes.object,
  errors: PropTypes.object,
  defaultCenterName: PropTypes.string,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  centerNameValue: PropTypes.string,
  addressValue: PropTypes.string,
  defaultAddressValue: PropTypes.string,
  cityValue: PropTypes.string,
  defaultCityValue: PropTypes.string,
  capacityValue: PropTypes.string,
  defaultCapacityValue: PropTypes.number,
  facilityValue: PropTypes.string,
  defaultFacilityValue: PropTypes.string,
  modifyOnClick: PropTypes.func,
  createCenter: PropTypes.func,
  uploadImage: PropTypes.func,
  defaultImage: PropTypes.string
};

export default CenterForm;
