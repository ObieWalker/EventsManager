import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import PropTypes from 'prop-types';

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
class CreateCenter extends Component {
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
        if (fileType === 'image/png' || fileType === 'image/gif' ||
              fileType === 'image/jpeg') {
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
      this.setState({ defaultImageUrl: 'http://i68.tinypic.com/dh5vk.jpg', uploadedImage: '' });
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
      this.props.createCenter(centerDetails)
        .then(() => {
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
      <div>
        <div className='col-lg-8 col-xs-12 col-centered'>

          <div className="grey lighten-4" style={{
            display: 'inline-block', width: '100%', margin: '50px 20px 20px 50px', padding: '10%', border: '1px solid #EEE'
          }}>
            <div className="row">

              <div className="nav-wrapper">

                <div className='col-lg-12 col-xs-12 col-centered'>
                  <h3 className="brand-logo col s12">Add A Center</h3>
                </div>
              </div>
            </div>

            <div className="input-field col s12">

              <form className="col s14" onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                  <label>Center Name:</label>
                  <input type="text"
                    className="form-control"
                    value ={this.state.name.value}
                    onFocus={this.state.handleOnFocus}
                    id='name'
                    name='name'
                    placeholder="" required
                    onChange={this.handleChange}/>
                </div>

                <div className="input-field col s12">
                  <label>Address:</label>
                  <input type="text"
                    value ={this.state.address.value}
                    onFocus={this.state.handleOnFocus}
                    id="address"
                    className="form-control"
                    name='address'
                    placeholder="" required
                    onChange={this.handleChange}/>
                </div>
                <div className="row">
                  <div className="input-field col s8">
                    <label>City:</label>
                    <input type="text"
                      value ={this.state.city.value}
                      onFocus={this.state.handleOnFocus}
                      id="city"
                      name='city'
                      className="form-control"
                      placeholder="" required
                      onChange={this.handleChange} />
                  </div>
                  <div className="input-field col s4">
                    <label>Capacity:</label>
                    <input type="number"
                      value ={this.state.capacity.value}
                      onFocus={this.state.handleOnFocus}
                      id="capacity"
                      name='capacity'
                      className="form-control"
                      placeholder="" required
                      onChange={this.handleChange} />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <textarea id="facility"
                      className="materialize-textarea"
                      value ={this.state.facility.value}
                      onFocus={this.state.handleOnFocus}
                      name='facility'
                      placeholder="Separate with commas"
                      onChange={this.handleChange} >
                    </textarea>
                    <label htmlFor="facilities">Center Description</label>
                  </div>
                </div>

                <button type="submit" className="waves-effect waves-light btn right hoverable indigo">
                  <i className="large material-icons right" aria-hidden="true"> done</i>Add Center
                </button>
              </form>
            </div>
          </div>
        </div>
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


const mapDispatchToProps = dispatch => bindActionCreators({
  createCenter: createCenterRequest
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateCenter);
