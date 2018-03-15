import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import validator from 'validator';
import editCenterActions from '../../actions/actionTypes'
import getCenterDetailsAction from '../../actions/actionTypes'
import getAllCentersAction from '../../actions/actionTypes'
import Checkbox from './Checkbox';

class ModifyCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            centerId: 0,
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
    // componentDidMount() {
    //     this.selectedCheckboxes = new Set();
    // }
    componentDidMount() {
        this.props.getAllCenters();
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.center.id !== nextProps.center.id) {
            this.setState({
                centerName: Object.assign({}, this.state.name, { value: nextProps.center.name }),
                address: Object.assign({}, this.state.address, { value: nextProps.center.address }),
                facility: Object.assign({}, this.state.facility, { value: nextProps.center.facility }),
                region: Object.assign({}, this.state.region, { value: nextProps.center.region }),
                capacity: Object.assign({}, this.state.capacity, { value: nextProps.center.capacity}),
                isAvailable: Object.assign({}, this.state.isAvailable, { value: nextProps.center.isAvailable }),
            });
        }
    }

    handleEditMode() {
        this.setState({ editMode: true });
    }

    closeEdit() {
    return this.setState({ editMode: false });
    }

    handleChange(event) {
        event.preventDefault();
        const {editMode} = this.state;
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        
    }
        
    
    formIsValid() {
        let fieldValue = true;
        const state = Object.assign({}, this.state);

        if (validator.isEmpty(state.name.value)) {
            state.name.isValid = false;
            state.name.message = 'Name cannot be empty';

            this.setState({ name: state.name });
            fieldValue = false;
        }
        if (validator.isEmpty(state.address.value)) {
            state.address.isValid = false;
            state.address.message = 'Address cannot be empty';

            this.setState({ address: state.address });
            fieldValue = false;
        }
        if (validator.isEmpty(state.region.value)) {
            state.state.isValid = false;
            state.state.message = 'The regionmust be filled';

            this.setState({ region: state.region });
            fieldValue = false;
        }
        if (validator.isEmpty(state.capacity.value)) {
            state.capacity.isValid = false;
            state.capacity.message = 'Please set a Capacity';

            this.setState({ capacity: state.capacity });
            fieldValue = false;
        }
        if (!fieldValue) {
            return false;
        }
        return true;
    }
   
    updateCenter(event) {
        event.preventDefault();
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

    render() {
        return (
            <div className="container max-width-six-hundred">
                <div className="card">
                    <div className="container">
                        <h3 className="center-heading">Edit a Center</h3>
                    </div>
                    <form >
                        <div className="row"> 
                            <label>
                                Available:
                                    <input
                                    name="isAvailable" 
                                    type="checkbox" 
                                    checked={this.state.isAvailable} 
                                    onChange={this.handleChange} />
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
        center = state.center;
}
function mapDispatchToProps(dispatch) {
    bindActionCreators({
        editCenterActions,
        getCenterDetailsAction,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ModifyCenter);