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
        display: 'inline-block',
        width: '100%',
        padding: '10%',
        border: '1px solid #EEE'
      }}>
        <div className=" col s12">
          <form className="col s14" onSubmit={this.onSubmit}>
            <div>
              <p><label htmlFor="name">Center Name:</label></p></div>
            <div className="input-field col s12">
              <input type="text"
                className="form-control"
                value ={this.state.name.value}
                defaultValue={this.props.center.name}
                onFocus={this.state.handleOnFocus}
                id='name'
                name='name'
                placeholder="" required
                onChange={this.handleChange}/>
            </div>
            <div>
              <p><label htmlFor="address">Address:</label></p>
            </div>
            <div className="input-field col s12">
              <input type="text"
                placeholder="Placeholder" required
                value ={this.state.address.value}
                onFocus={this.state.handleOnFocus}
                defaultValue={this.props.center.address}
                id="address"
                className="form-control"
                name='address'
                onChange={this.handleChange}/>
            </div>
            <div>
              <p><label htmlFor="city">City:</label></p>
            </div>
            <div className="input-field col s12">
              <input type="text"
                value ={this.state.city.value}
                onFocus={this.state.handleOnFocus}
                defaultValue={this.props.center.city}
                id="city"
                name='city'
                className="form-control"
                placeholder="" required
                onChange={this.handleChange} />
            </div>
            <div>
              <p><label htmlFor="capacity">Capacity:</label></p>
            </div>
            <div className="input-field col s12">
              <input type="number"
                value ={this.state.capacity.value}
                defaultValue={this.props.center.capacity}
                onFocus={this.state.handleOnFocus}
                id="capacity"
                name='capacity'
                className="form-control"
                placeholder="" required
                onChange={this.handleChange} />
            </div>
            <div>
              <p><label htmlFor="facilities">Description/Facilities:</label></p>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="facility"
                  className="materialize-textarea"
                  defaultValue={this.props.center.facility}
                  value ={this.state.facility.value}
                  onFocus={this.state.handleOnFocus}
                  name='facility'
                  onChange={this.handleChange} >
                </textarea>
              </div>
            </div>
            <div className="file-field input-field">
              <div className="btn">
                <span>File</span>
                <input type="file" multiple/>
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate"
                  type="text" placeholder="Update Center Picture"/>
              </div>
            </div><br/><br/>

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
