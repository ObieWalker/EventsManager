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

    this.handleModify = this.handleModify.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.getAllCenters();
  }

  handleModify(e) {
    e.preventDefault();
  }

  handleDelete(e) {
    e.preventDefault();
  }


  render() {
    const Centers = this.props.getAllCenters;
    console.log('in admin centers===>', this.props.allCenters);
    return (
      <div>
        <div >
          <div className='center col s12 m12'>
            <div><div>{Centers ?
              <table className="table text-center table-hover
            mx-auto bg-white table-responsive-sm table-striped" style={{ width: '100%' }}>
                <thead className="text-center text-white bg-info border border-white">
                  <tr className="p-3">
                    <th scope="col" className="border border-white"> S/N</th>
                    <th scope="col" className="border border-white">Center Name</th>
                    <th scope="col" className="border border-white">Address</th>
                    <th scope="col" className="border border-white">City</th>
                    <th scope="col" className="border border-white">Capacity</th>
                    <th scope="col" className="border border-white">Facilities</th>
                    <th scope="col" className="border border-white"></th>
                    <th scope="col" className="border border-white"></th>

                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.allCenters.fetchedAllCenters.map((center, i) =>

                      <tr id="#1" key={i} index = {i} className="border border-white">
                        <td scope="row">{ i + 1 }</td>
                        <td>{center.name}</td>
                        <td>{center.address}</td>
                        <td>{center.city}</td>
                        <td>{center.capacity}</td>
                        <td>{center.facility}</td>
                        <td><button onClick={this.handleModify} type="button" className="btn-warning btn-sm">Edit</button></td>
                        <td><button onClick={this.handleDelete} type="button" className="btn-danger btn-sm">Delete</button></td>
                      </tr>)
                  }
                </tbody>
              </table> : <p style={{ margin: '10%', fontSize: '20px', fontStyle: 'Sans-serif' }}>There are no registered centers.</p>
            }
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AdminCenters.propTypes = {
  allCenters: PropTypes.array,
  getAllCenters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  allCenters: state.allCenters
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllCenters, editCenter }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdminCenters);
