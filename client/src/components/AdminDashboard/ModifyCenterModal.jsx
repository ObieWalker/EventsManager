import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';
import updateCenterRequest from '../../actions/editCenterAction';
import validateForm from '../../../helpers/validators/centerValidator';

/**
 *
 *
 * @class ModifyCenter
 * @extends {Component}
 */
class ModifyCenter extends Component {
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
    e.preventDefault();
    // if (this.isValid()) {
    this.setState({ errors: {} });
    const newCenterDetails = this.state;
    this.props.modifyCenter(newCenterDetails, this.props.center.id)
      .then(() => {
        const { updateSuccess, updateError } = this.props;
        if (updateError === '') {
          // clear toasts before showing new
          toastr.remove();
          toastr.success(updateSuccess);
        } else {
          toastr.remove();
          toastr.error(updateError);
        }
        this.reset();
      });
    // }
  }

  /**
 *
 *
 * @returns {object} updated center
 * @memberof ModifyCenter
 */
  render() {
    return (

      <div className="grey lighten-4" style={{
        display: 'inline-block', width: '100%', padding: '10%', border: '1px solid #EEE'
      }}>
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
              <label >Facilities (comma separated):</label>
              <input type="text"
                value ={this.state.facility.value}
                onFocus={this.state.handleOnFocus}
                id="facility"
                name='facility'
                className="form-control"
                onChange={this.handleChange} />
            </div>


            <div className="row center-align">
              <button
                className="btn waves-effect waves-light navbar-purple round-btn"
                type="submit" name="action"
                onClick={this.updateCenter} >Update Center
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
ModifyCenter.propTypes = {
  center: PropTypes.object,
  modifyCenter: PropTypes.func,
  isCenterUpdating: PropTypes.bool,
  updateSuccess: PropTypes.string,
  updateError: PropTypes.string
};

const mapStateToProps = state => ({
  isCenterUpdating: state.updateCenter.isCenterUpdating,
  updateSuccess: state.updateCenter.updateCenterSuccess,
  updateError: state.updateCenter.updateCenterError
});


const mapDispatchToProps = dispatch => bindActionCreators({
  modifyCenter: updateCenterRequest
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ModifyCenter);
