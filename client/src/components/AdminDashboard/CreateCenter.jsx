import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

import validateImage from '../../../helpers/validators/validateImage';
import validateForm from '../../../helpers/validators/centerValidator';

import addCenterAction from '../../actions/addCenterAction';


class CreateCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      capacity: '',
      facility: '',
      isAvailable: '',
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
      isAvailable: '',
      uploadedImage: {},
      defaultImageUrl: 'http://i68.tinypic.com/dh5vk.jpg',
      errors: {}
    });
  }

  formIsValid() {
    const { errors, formIsValid } = validateForm(this.state);
    if (!formIsValid) {
      this.setState({ errors });
    }
    return formIsValid;
  }


  onSubmit(e) {
    e.preventDefault();
    if (this.formIsValid()) {
      this.setState({ errors: {} });
      this.props.addCenterAction(this.state)
        .then(() => {
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
                  <h3 className="brand-logo col s12">Add a Center</h3>
                </div>
              </div>
            </div>

            <div className="input-field col s12">

              <form className="col s14" onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                  <label>Center Name</label>
                  <input type="text" id="name" className="form-control" placeholder="" required />
                </div>
                <div className="input-field col s12">
                  <label>City</label>
                  <input type="text" id="city" className="form-control" placeholder="" required />
                </div>
                <div className="input-field col s12">
                  <label>Capacity</label>
                  <input type="text" id="capacity" className="form-control" placeholder="" required />
                </div>
                <div className="input-field col s12">
                  <label>Facility</label>
                  <input type="text" id="facility" className="form-control" placeholder="" required />
                </div>
                <div>
                  <label>
                                        Available For Booking?:
                    <input name="isAvailable" type="checkbox" checked={this.state.isAvailable} onChange={this.handleInputChange} />
                  </label>
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

// const mapStateToProps = state => ({
//     center: state.centerState
// });

function mapDispatchToProps(dispatch) {
  bindActionCreators({
    addCenterAction
  }, dispatch);
}


export default connect(null, mapDispatchToProps)(CreateCenter);
