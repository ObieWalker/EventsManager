import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import validator from 'validator';
import editCenterActions from '../../actions/actionTypes'
import getCenterDetailsAction from '../../actions/actionTypes'
import Checkbox from './Checkbox';

class ModifyCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            centerName: { value: '', isValid: true, message: '' },
            capacity: { value: '', isValid: true, message: '' },
            address: { value: '', isValid: true, message: '' },
            facility: {value: '', isValid: true, message: ''},
            region: { value: '', isValid: true, message: '' },
            isAvailable: { value: '', isValid: true, message: '' }
        };
        this.handleChange = this.handleChange.bind(this);
        this.updateCenter = this.updateCenter.bind(this);
    }
    componentDidMount() {
        this.selectedCheckboxes = new Set();
    }
    componentDidMount() {
        this.props.actions.getCenterDetailsAction(parseInt(this.props.match.params.id, 10));
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.center.id !== nextProps.center.id) {
            this.setState({
                centerName: Object.assign({}, this.state.name, { value: nextProps.center.name }),
                address: Object.assign({}, this.state.address, { value: nextProps.center.address }),
                facility: Object.assign({}, this.state.facility, { value: nextProps.center.facility }),
                region: Object.assign({}, this.state.region, { value: nextProps.center.region }),
                capacity: Object.assign({}, this.state.capacity, { value: (nextProps.center.capacity).toString() }),
                isAvailable: Object.assign({}, this.state.isAvailable, { value: nextProps.center.isAvailable }),
            });
        }
    }
    handleChange(event) {
        const { state } = this;
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const field = state[name];
        field.value = value;

        this.setState({
            //[name]:value
            [field]: [field]
        });
    }
    formIsValid() {
        let fieldCheck = true;
        const state = Object.assign({}, this.state);

        if (validator.isEmpty(state.name.value)) {
            state.name.isValid = false;
            state.name.message = 'Name must not be empty';

            this.setState({ name: state.name });
            fieldCheck = false;
        }
        if (validator.isEmpty(state.address.value)) {
            state.address.isValid = false;
            state.address.message = 'Address must not be empty';

            this.setState({ address: state.address });
            fieldCheck = false;
        }
        if (validator.isEmpty(state.region.value)) {
            state.state.isValid = false;
            state.state.message = 'The region must not be empty';

            this.setState({ region: state.region });
            fieldCheck = false;
        }
        if (validator.isEmpty(state.capacity.value)) {
            state.capacity.isValid = false;
            state.capacity.message = 'Capacity must not be empty';

            this.setState({ capacity: state.capacity });
            fieldCheck = false;
        }
        if (!fieldCheck) {
            return false;
        }
        return true;
    }
    resetValidationStates() {
        const state = Object.assign({}, this.state);

        Object.keys(state).map((key) => {
            if ({}.hasOwnProperty.call(state[key], 'isValid')) {
                state[key].isValid = true;
                state[key].message = '';
            }
        });
        this.setState(state);
    }
    updateCenter(event) {
        event.preventDefault();
        this.resetValidationStates();
        const center = {
            id: this.props.match.params.id,
            name: this.state.name.value,
            capacity: this.state.capacity.value,
            address: this.state.address.value,
            facility: this.state.facility.value,
            region: this.state.region.value,
            isAvailable: this.state.isAvailable.value,
        };
        if (this.formIsValid()) {
            this.props.editCenterActions(center, center.id);
        }
    }

    //checkbox code
    toggleCheckbox(label) {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    }

    handleFormSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();

    }

    createCheckbox(label) {
        (
            <Checkbox
                label={label}
                handleCheckboxChange={this.toggleCheckbox}
                key={label}
            />
        )
    }

    createCheckboxes() {
        (
            items.map(this.createCheckbox)
        )
    }
    render() {
        const nameClasses = classNames('help-block', { 'has-error': !this.state.centerName.isValid });
        const facilityClasses = classNames('help-block', { 'has-error': !this.state.facility.isValid });
        const addressClasses = classNames('help-block', { 'has-error': !this.state.address.isValid });
        const regionClasses = classNames('help-block', { 'has-error': !this.state.region.isValid });
        const capacityClasses = classNames('help-block', { 'has-error': !this.state.capacity.isValid });
        return (
            <div className="container max-width-six-hundred">
                <div className="card">
                    <div className="container">
                        <h3 className="center-heading">Edit a Center</h3>
                    </div>
                    <form className="card-content">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="center-name"
                                    name="name"
                                    type="text"
                                    className="validate"
                                    value={this.state.name.value}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="center-name" className="active">Name</label>
                                <span className={nameClasses}>{this.state.name.message}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="center-address"
                                    name="address"
                                    type="text"
                                    className="validate"
                                    value={this.state.address.value}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="center-address" className="active">Address</label>
                                <span className={addressClasses}>{this.state.address.message}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="center-region"
                                    name="region"
                                    type="text"
                                    className="validate"
                                    value={this.state.state.value}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="center-region" className="active">Region</label>
                                <span className={regionClasses}>{this.state.region.message}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s4">
                                <input
                                    id="center-capacity"
                                    name="capacity"
                                    value={this.state.capacity.value}
                                    type="number"
                                    className="validate"
                                    onChange={this.handleChange}
                                />
                                <label for="center-capacity" className="active">Capacity</label>
                                <span className={capacityClasses}>{this.state.capacity.message}</span>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea
                                    id="center-facility"
                                    name="facility"
                                    value={this.state.facility.value}
                                    className="materialize-textarea validate"
                                    onChange={this.handleChange}
                                ></textarea>
                                <label for="center-facility" className="active">Facilities</label>
                                <span className={facilityClasses}>{this.state.facility.message}</span>
                            </div>
                            <label>
                                Available:
                                    <input
                                    name="isAvailable"
                                    type="checkbox"
                                    checked={this.state.isAvailable}
                                    onChange={this.handleInputChange} />
                            </label>
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
EditCenter.propTypes = {
    center: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        capacity: PropTypes.number,
        region: PropTypes.string,
        facility: PropTypes.bool,
        isAvailable: PropTypes.bool
    }).isRequired,
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.node,
        }).isRequired,
    }).isRequired
};
function mapStateToProps(state) {
    let center;
    if (state.center && state.center.id === '') {
        center = {
            id: '',
            name: '',
            capacity: '',
            state: '',
            address: '',
            chairs: '',
            detail: '',
            projector: '',
            image: '',
            events: []
        };
    } else {
        center = state.center;
    }
    return {
        center
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, singleCenterActions, centerActions), dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ModifyCenter);