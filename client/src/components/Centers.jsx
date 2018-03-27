import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row } from 'react-materialize';
import getAllCenters from '../actions/getAllCentersAction';
import Search from './Search.jsx';
import CenterList from './CenterCard.jsx';

class AllCenters extends Component {
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
    const Centers = this.props.allCenters;
    console.log('this is it here ===>', Centers);
    return (
      <div>
        <div>
          <h3>All centers and details.</h3>
          <div className='center'>
            <Search /> <br/> <br/>
          </div>
          <div> {Centers.fetchedAllCenters.length > 0 ?
            <Row>
              {Centers.fetchedAllCenters.map((centers, i) =>
                <CenterList key={i} centers={centers} />)}
            </Row> : 'There are no registered centers.'
          }
          </div>
        </div>
      </div>
    );
  }
}

AllCenters.propTypes = {
  allCenters: PropTypes.array,
  getAllCenters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  allCenters: state.allCenters
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllCenters }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AllCenters);
