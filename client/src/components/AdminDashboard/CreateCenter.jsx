import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import Loading from 'react-loading-animation';
import PropTypes from 'prop-types';
import CenterForm from '../CenterForm.jsx';
import validateImage from '../../../helpers/validators/validateImage';
import validateForm from '../../../helpers/validators/centerValidator';

import createCenterRequest from '../../actions/addCenterAction';
// import success from '../../actions/'

/**
 *
 *
 * @class CreateCenter
 * @extends {Component}
 */
export class CreateCenter extends Component {
  /**
   * Creates an instance of CreateCenter.
   * @param {any} props
   * @memberof CreateCenter
   */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      capacity: undefined,
      facility: '',
      uploadedImage: {},
      defaultImageUrl: 'http://i68.tinypic.com/dh5vk.jpg',
      errors: {},
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clear = this.clear.bind(this);
  }
  /**
   * @returns {object} state
   *
   * @param {any} e
   * @memberof CreateCenter
   */
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  /**
   * @returns {object} state
   *
   * @param {any} e
   * @memberof CreateCenter
   */
  handleOnFocus(e) {
    this.setState({
      errors: Object.assign({}, this.state.errors, { [e.target.name]: '' })
    });
  }
  /**
   * @returns {object} state
   *
   * @param {any} event
   * @memberof CreateCenter
   */
  handleImage(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const filereader = new FileReader();
      validateImage(filereader, file, (fileType) => {
        if (
          fileType === 'image/png' ||
          fileType === 'image/gif' ||
          fileType === 'image/jpeg'
        ) {
          this.setState({ uploadedImage: file });
          filereader.onload = (e) => {
            this.setState({ imageSrc: e.target.result });
          };
          filereader.readAsDataURL(file);
        } else {
          toastr.clear();
          toastr.error('please provide a valid image file');
        }
      });
    } else {
      this.setState({
        defaultImageUrl: 'http://i68.tinypic.com/dh5vk.jpg',
        uploadedImage: ''
      });
    }
  }
  /**
   * @returns {object} state
   *
   * @memberof CreateCenter
   */
  clear() {
    this.setState({
      name: '',
      address: '',
      city: '',
      capacity: '',
      facility: '',
      uploadedImage: {},
      defaultImageUrl: 'http://i68.tinypic.com/dh5vk.jpg',
      errors: {}
    });
  }
  /**
   *
   *
   * @returns {boolean} form validity
   * @memberof CreateCenter
   */
  formIsValid() {
    const { errors, isValid } = validateForm(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  /**
   * @returns {*} null
   *
   * @param {any} e
   * @memberof CreateCenter
   */
  onSubmit(e) {
    e.preventDefault();
    if (this.formIsValid()) {
      this.setState({ errors: {}, isLoading: true });
      const centerDetails = {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        capacity: this.state.capacity,
        facility: this.state.facility
      };
      this.props.createCenter(centerDetails).then(() => {
        const { createSuccess, createError } = this.props;
        if (createError === '') {
          // clear toasts before showing new
          toastr.remove();
          this.setState({ isLoading: false });
          toastr.success(createSuccess);
          this.clear();
        } else {
          toastr.remove();
          toastr.error(createError);
        }
      });
    }
  }

  /**
   *
   *
   * @returns {object} create center
   * @memberof CreateCenter
   */
  render() {
    return (
      // <CenterForm

      // />
      <div>
        <h4 className="center">Add Center Information</h4>
        {this.state.isLoading === true && (
          <div>
            <p>Loading...</p> <Loading />
          </div>
        )}
        <CenterForm
          errors={this.state.errors}
          centerNameValue={this.state.name}
          onChange={this.handleChange}
          onFocus={this.handleOnFocus}
          addressValue={this.state.address}
          cityValue={this.state.city}
          capacityValue={this.state.capacity}
          facilityValue={this.state.facility}
          createCenter={this.onSubmit}
          uploadImage={this.handleImage}
        />
      </div>
    );
  }
}

CreateCenter.propTypes = {
  createCenter: PropTypes.func,
  createSuccess: PropTypes.string,
  createError: PropTypes.string
};

const mapStateToProps = state => ({
  isCenterCreating: state.createCenter.isCenterCreating,
  createSuccess: state.createCenter.createCenterSuccess,
  createError: state.createCenter.createCenterError
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createCenter: createCenterRequest
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CreateCenter);
