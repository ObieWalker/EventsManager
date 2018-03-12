import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getAllCentersAction from '../actions/actionTypes'
import Search from './Search'

class Centers extends Component {
    componentWillMount() {
        // if (this.props.centers.length === 0) {
        //     this.props.getAllCentersAction();
        // }
    }


    render() {
        return (
            <div>
                <div >
                    <h3>All centers and details.</h3>
                    <div className='center col s12 m6'>
                    <Search />
                    </div>
                    <div className="row">
                        <CenterList centers={this.props.centers} />
                    </div> 
                </div>
            </div>
        );
    }
}

// Centers.propTypes = {
//     centers: PropTypes.arrayOf(PropTypes.object).isRequired,
//     getAllCenterActions: PropTypes.objectOf(PropTypes.func).isRequired
// };

// const mapStateToProps = state => {
//         centers: state.centers
//     };

// const mapDispatchToProps = dispatch => 
//     bindActionCreators({getAllCenterActions}, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Centers);
export default Centers