import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getAllCenters from '../actions/getAllCentersAction';
import Search from './Search.jsx';
import CenterList from './CenterCard.jsx';

class Centers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: '',
    };
  }

  componentDidMount() {
    this.props.getAllCenters();
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
            <CenterList centers={this.props.getAllCenters} />
          </div>
        </div>
      </div>
    );
  }
}

Centers.propTypes = {
  centers: PropTypes.arrayOf(PropTypes.object),
  getAllCenters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  center: state.centers
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllCenters }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Centers);
