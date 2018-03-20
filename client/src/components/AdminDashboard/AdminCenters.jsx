import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getAllCenters from '../../actions/getAllCentersAction';
import editCenter from '../../actions/editCenterAction';
// import Search from './Search.jsx';
// import CenterList from './CenterCard.jsx';

class AdminCenters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centers: '',
    };


    this.handleEditCenter = this.handleEditCenter.bind(this);
    this.handleEditCenterDetails = this.handleEditCenterDetails.bind(this);
  }
  componentDidMount() {
    this.props.getAllCenters();
  }

  handleSwitchingToEditMode() {
    this.setState({ edittingMode: true });
  }

  handleSwitchingToViewMode() {
    return this.props.history.push('/center-details');
  }

  handleCloseEdit() {
    return this.setState({ edittingMode: false });
  }


  render() {
    console.log('===>', this.props.allCenters);
    return (
      <div>
        <div >
          <h3>All centers and details.</h3>
          <div className='center col s12 m6'>
            {/* <Search /> */}
          </div>
          {/* <div className="row">
            {centers.map(center =>
              (
                <CenterList key={center.id} centers={centers} />
              ))}
          </div> */}
          <div>
            <table className="table-sm text-center table-hover
            mx-auto bg-white table-responsive-sm table-striped" style={{ width: '80%' }}>
              <thead className="text-center text-white bg-info border border-white">
                <tr className="p-3">
                  <th scope="col" className="border border-white"> S/N</th>
                  <th scope="col" className="border border-white">Center Name</th>
                  <th scope="col" className="border border-white">Address</th>
                  <th scope="col" className="border border-white">City</th>
                  <th scope="col" className="border border-white">Center Capacity</th>
                  <th scope="col" className="border border-white">Facilities</th>

                </tr>
              </thead>
              <tbody>
                {
                  this.props.allCenters.fetchedAllCenters.map((centers, i) =>

                    <tr id="#1" key={i} index = {i} className="border border-white">
                      <td scope="row">{ i + 1 }</td>
                      <td>{centers.name}</td>
                      <td>{centers.address}</td>
                      <td>{centers.city}</td>
                      <td>{centers.capacity}</td>
                      <td>{centers.facility}</td>
                    </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

AdminCenters.propTypes = {
  allCenters: PropTypes.array,
  getAllCenters: PropTypes.func.isRequired,
  editCenter: PropTypes.func,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  allCenters: state.allCenters
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllCenters, editCenter }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AdminCenters);
