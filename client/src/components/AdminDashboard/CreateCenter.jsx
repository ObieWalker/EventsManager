import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import PropTypes from 'prop-types';
import CenterForm from '../CenterForm.jsx';

// import validateImage from '../../../helpers/validators/validateImage';
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
      capacity: '',
      facility: '',
      uploadedImage: {},
      defaultImageUrl: 'http://i68.tinypic.com/dh5vk.jpg',
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    // this.handleImage = this.handleImage.bind(this);
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
  // handleImage(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     const file = event.target.files[0];
  //     const filereader = new FileReader();
  //     validateImage(filereader, file, (fileType) => {
  //       if (
  //         fileType === 'image/png' ||
  //         fileType === 'image/gif' ||
  //         fileType === 'image/jpeg'
  //       ) {
  //         this.setState({ uploadedImage: file });
  //         filereader.onload = (e) => {
  //           this.setState({ imageSrc: e.target.result });
  //         };
  //         filereader.readAsDataURL(file);
  //       } else {
  //         toastr.clear();
  //         toastr.error('please provide a valid image file');
  //       }
  //     });
  //   } else {
  //     this.setState({
  //       defaultImageUrl: 'http://i68.tinypic.com/dh5vk.jpg',
  //       uploadedImage: ''
  //     });
  //   }
  // }
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
    const { errors, formIsValid } = validateForm(this.state);
    if (!formIsValid) {
      this.setState({ errors });
    }
    return formIsValid;
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
      this.setState({ errors: {} });
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
          toastr.success(createSuccess);
        } else {
          toastr.remove();
          toastr.error(createError);
        }
        this.clear();
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
        <h4 className="brand-logo col s8">Add Center Information</h4>
        <CenterForm
          centerNameValue={this.state.name.value}
          onChange={this.handleChange}
          onFocus={this.handleOnFocus}
          addressValue={this.state.address.value}
          cityValue ={this.state.city.value}
          capacityValue ={this.state.capacity.value}
          facilityValue ={this.state.facility.value}
          createCenter={this.onSubmit}
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
