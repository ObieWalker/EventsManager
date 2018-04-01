import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import getAllCenters from '../../actions/getAllCentersAction';
import editCenter from '../../actions/editCenterAction';
import ModifyCenter from './ModifyCenterModal.jsx';
// import Search from './Search.jsx';
// import CenterList from './CenterCard.jsx';

class AdminCenters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centerId: '',
      show: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleModify = this.handleModify.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.props.getAllCenters();
  }

  handleClose() {
    this.setState({
      show: false
    });
  }


  handleModify(center) {
    console.log('this is the center ID', center);
    this.setState({
      center,
      show: true
    });
  }

  handleDelete(e) {
    e.preventDefault();
  }


  render() {
    console.log('in admin centers===>', this.props.allCenters);
    return (
      <div>
        <div >
          <div className='center col s12 m12'>
            <div><div>{this.props.allCenters.fetchedCenters ?
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
                    this.props.allCenters.fetchedCenters.map((center, i) =>

                      <tr id="#1" key={i} index = {i} className="border border-white">
                        <td scope="row">{ i + 1 }</td>
                        <td>{center.name}</td>
                        <td>{center.address}</td>
                        <td>{center.city}</td>
                        <td>{center.capacity}</td>
                        <td>{center.facility}</td>
                        <td><button onClick={this.handleModify.bind(this, center)}
                          type="button"
                          className="btn-warning btn-sm" >Edit</button></td>
                        <td><button
                          onClick={this.handleDelete}
                          type="button"
                          className="btn-danger btn-sm">Delete</button></td>
                      </tr>)
                  }
                </tbody>
              </table> : <p style={{ margin: '10%', fontSize: '20px', fontStyle: 'Sans-serif' }}>There are no registered centers.</p>
            }
            </div>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modify Center Details.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModifyCenter center ={this.state.center}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

AdminCenters.propTypes = {
  allCenters: PropTypes.object,
  getAllCenters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  allCenters: state.allCenters
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllCenters, editCenter }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdminCenters);
