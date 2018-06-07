import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';
import updateCenterRequest from '../../actions/editCenterAction';
import validateForm from '../../../helpers/validators/centerValidator';
import CenterForm from '../CenterForm.jsx';
/**
 *
 *
 * @class ModifyCenter
 * @extends {Component}
 */
export class ModifyCenter extends Component {
  /**
   * Creates an instance of ModifyCenter.
   * @param {any} props
   * @memberof ModifyCenter
   */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      capacity: '',
      facility: '',
      uploadedImage: {},
      defaultImageUrl: 'http://i68.tinypic.com/dh5vk.jpg',
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateCenter = this.updateCenter.bind(this);
    this.reset = this.reset.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  /**
   * @method componentWillMount
   * @returns {object} state
   * @memberof ModifyCenter
   */
  componentWillMount() {
    const { center } = this.props;
    this.setState({
      name: center.name,
      address: center.address,
      city: center.city,
      capacity: center.capacity,
      facility: center.facility,
      uploadedImage: center.image
    });
  }

  /**
   * @returns {object} state
   *
   * @memberof ModifyCenter
   */
  reset() {
    const { center } = this.props;
    this.setState({
      name: center.name,
      address: center.address,
      city: center.city,
      capacity: center.capacity,
      facility: center.facility,
      uploadedImage: center.image
    });
  }

  /**
   * @returns {object} state
   *
   * @param {any} event
   * @memberof ModifyCenter
   */
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * @returns {object} boolean
   *
   * @memberof ModifyCenter
   */
  isValid() {
    const { errors, isValid } = validateForm(this.state);
    if (!isValid) {
      console.log('errors', errors);
      this.setState({ errors });
    }
    return isValid;
  }

  /**
   * @returns {object} updated center
   *
   * @param {any} e
   * @memberof ModifyCenter
   */
  updateCenter(e) {
    console.log('update center =====');
    e.preventDefault();
    if (this.isValid()) {
      console.log('it is valid');
      this.setState({ errors: {} });
      const newCenterDetails = this.state;
      this.props
        .modifyCenter(newCenterDetails, this.props.center.id)
        .then(() => {
          const { updateSuccess, updateError } = this.props;
          if (updateError === '') {
            // clear toasts before showing new
            toastr.remove();
            toastr.success(updateSuccess);
            this.props.onHide();
          } else {
            toastr.remove();
            toastr.error(updateError);
          }
          this.reset();
        });
    }
  }

  /**
   *
   *
   * @returns {object} updated center
   * @memberof ModifyCenter
   */
  render() {
    const { errors } = this.state;
    const { center } = this.props;
    return (
      <div className="modifyCenterForm">
        <CenterForm
          center={center}
          errors={errors}
          defaultCenterName={center.name}
          centerNameValue={this.state.name.value}
          onChange={this.handleChange}
          onFocus={this.handleOnFocus}
          addressValue={this.state.address.value}
          defaultAddressValue={center.address}
          cityValue={this.state.city.value}
          defaultCityValue={center.city}
          capacityValue={this.state.capacity.value}
          defaultCapacityValue={center.capacity}
          defaultFacilityValue={center.facility}
          facilityValue={this.state.facility.value}
          modifyOnClick={this.updateCenter}
          // defaultImage={this.state.uploadedImage || defaultImageUrl}
        />
      </div>
    );
  }
}
ModifyCenter.propTypes = {
  center: PropTypes.object,
  modifyCenter: PropTypes.func,
  isCenterUpdating: PropTypes.bool,
  updateSuccess: PropTypes.string,
  updateError: PropTypes.string,
  onHide: PropTypes.func
};

const mapStateToProps = state => ({
  isCenterUpdating: state.updateCenter.isCenterUpdating,
  updateSuccess: state.updateCenter.updateCenterSuccess,
  updateError: state.updateCenter.updateCenterError
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      modifyCenter: updateCenterRequest
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(ModifyCenter);
