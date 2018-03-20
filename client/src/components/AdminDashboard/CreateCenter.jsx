import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import PropTypes from 'prop-types';

import validateImage from '../../../helpers/validators/validateImage';
import validateForm from '../../../helpers/validators/centerValidator';

import createCenterRequest from '../../actions/addCenterAction';
// import success from '../../actions/'


class CreateCenter extends Component {
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
    this.formIsValid = this.formIsValid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnFocus(e) {
    this.setState({
      errors: Object.assign({}, this.state.errors, { [e.target.name]: '' })
    });
  }

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
      console.log(this.state);
      const centerDetails = {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        capacity: this.state.capacity,
        facility: this.state.facility
      };
      this.props.createCenter(centerDetails)
        .then(() => {
          console.log('create center');
          const { createSuccess, createError } = this.props;
          if (createError === '') {
            toastr.remove();
            toastr.success(createSuccess);
          } else {
            toastr.remove();
            toastr.error(createError);
          }
          $('button[id=close]').click();
          this.clear();
        });
    }
  }


  render() {
    return (
      <div>
        <div className="container" style={{ width: '100%' }}>

          <div className="grey lighten-4" style={{
            display: 'inline-block', width: '100%', margin: '50px 20px 20px 50px', padding: '10%', border: '1px solid #EEE'
          }}>
            <div className="row">

              <div className="nav-wrapper">

                <div className="col s12">
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
                <div className="input-field col s12">
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
                <div className="input-field col s12">
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
                <div className="input-field col s12">
                  <label>Facilities:</label>
                  <input type="text"
                    value ={this.state.facility.value}
                    onFocus={this.state.handleOnFocus}
                    id="facility"
                    name='facility'
                    className="form-control"
                    placeholder="" required
                    onChange={this.handleChange} />
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
  createSuccess: PropTypes.func,
  createError: PropTypes.func
};

// const mapStateToProps = state => ({
//   createCenter: state.createCenter
// });

const mapDispatchToProps = dispatch => bindActionCreators({
  createCenter: createCenterRequest,
}, dispatch);

export default connect(null, mapDispatchToProps)(CreateCenter);
