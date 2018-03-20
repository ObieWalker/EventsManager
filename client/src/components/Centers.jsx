import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getAllCenters from '../actions/getAllCentersAction';
import Search from './Search.jsx';
import CenterList from './CenterCard.jsx';
import { Row } from 'react-materialize';

class Centers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centers: '',
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
          <div>
            <Row>
              {this.props.allCenters.fetchedAllCenters.map((centers, i) =>
                <CenterList key={i} centers={centers} />)}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

Centers.propTypes = {
  allCenters: PropTypes.array,
  getAllCenters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  allCenters: state.allCenters
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllCenters }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Centers);
