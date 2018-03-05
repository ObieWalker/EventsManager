import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import classNames from 'classnames';
import validator from 'validator';


import { Button, Modal, Row, Input } from 'react-materialize'

import addCenterAction from '../../actions/addCenterAction'



class AddCenter extends Component {
    // constructor(props) {
    //     super(props);
    this.state = {
      name: { value: '', isValid: true, message: '' },
      address: { value: '', isValid: true, message: '' },
      region: { value: '', isValid: true, message: '' },
      capacity: { value: '', isValid: true, message: '' },
      facility: { value: '', isValid: true, message: '' },
      isavailable: { value: '', isValid: true, message: '' },
    };

  

    //     this.handleChange = this.handleChange.bind(this);
    //     this.addCenter = this.addCenter.bind(this);



    // }

    componentWillReceiveProps(nextProps) {
        //checks to see if props change and then sets a state
    if (this.props.center.id !== nextProps.center.id) {
      this.setState({
        name: Object.assign({}, this.state.name, { value: nextProps.center.name }),
        address: Object.assign({}, this.state.address, { value: nextProps.center.address }),
        region: Object.assign({}, this.state.region, { value: nextProps.center.region }),
        capacity: Object.assign({}, this.state.capacity, { value: nextProps.center.capacity }),
        facility: Object.assign({}, this.state.facility, {value: nextProps.center.facility }),
        isAvailable: Object.assign({}, this.state.image, { value: nextProps.center.isAvailable }),
      });
    }
  }


    handleChange(e) {
        this.setState({value: event.target.value});
    }

    formIsValid() {
    let fieldCheck = true;
    const state = Object.assign({}, this.state);

    if (validator.isEmpty(state.name.value)) {
      state.name.isValid = false;
      state.name.message = 'Name cannot be empty.'
      this.setState({ name: state.name });
      fieldCheck = false;
    }
    if (validator.isEmpty(state.address.value)) {
      state.address.isValid = false;
      state.address.message = 'Address cannot be empty';

      this.setState({ address: state.address });
      fieldCheck = false;
    }
    if (validator.isEmpty(state.region.value)) {
      state.region.isValid = false;
      state.region.message = 'The center must have a region';

      this.setState({ region: state.region });
      fieldCheck = false;
    }
    if (validator.isEmpty(state.capacity.value)) {
      state.capacity.isValid = false;
      state.capacity.message = 'Please set a center capacity';

      this.setState({ capacity: state.capacity });
      fieldCheck = false;
    }
    if (!fieldCheck) {
      return false;
    }
    return true;
  }

//this will add a centers details
  addCenter(center) {
    center.preventDefault();
    const center = {
      name: e.target[0].value,
      address: e.target[1].value,
      region: e.target[2].value,
      capacity: e.target[3].value,
      facility: e.target[4].value,
      isAvailable: e.target[5].value,
    };
    if (this.formIsValid()) {
      this.props.addCenterAction(center);
    }
  }


    render() {
        return (
            <div>
                <div className="container" style={{width:'100%'}}>

                    <div className="grey lighten-4" style={{display: 'inline-block',  width: '100%', margin: '50px 20px 20px 50px', padding: '10%' , border: '1px solid #EEE'}}>
                        <div className="row">

                            <div className="nav-wrapper">

                                <div className="col s12">
                                    <h3 className="brand-logo col s12">Add a Center</h3>
                                </div>
                            </div>
                        </div>

                        <div className="input-field col s12">

                            <form className="col s14" onSubmit={this.addCenter}>
                                <div className="input-field col s12">
                                    <label>Center Name</label>
                                    <input type="text" id="centerName" className="form-control" placeholder="" required />
                                </div>
                                <div className="input-field col s12">
                                    <label>Region</label>
                                    <input type="text" id="region" className="form-control" placeholder="" required />
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
        
        )
    }
}

// const mapStateToProps = state => ({
//     center: state.centerState
// });

// const mapDispatchToProps = dispatch => bindActionCreators({
//     addCenter: addCenterAction,
// }, dispatch);

export default AddCenter
// connect(mapStateToProps, mapDispatchToProps)(AddCenter);