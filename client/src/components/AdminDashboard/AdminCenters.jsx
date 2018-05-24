import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import ScrollUp from 'react-scroll-up';
import swal from 'sweetalert';
import Loading from 'react-loading-animation';
import getAllCenters from '../../actions/getAllCentersAction';
import editCenter from '../../actions/editCenterAction';
import deleteCenter from '../../actions/deleteCenterAction';
import ModifyCenter from './ModifyCenterModal.jsx';
// import Search from './Search.jsx';
// import CenterList from './CenterCard.jsx';
/**
 *
 *
 * @class AdminCenters
 * @extends {Component}
 */
class AdminCenters extends Component {
  /**
   * Creates an instance of AdminCenters.
   * @param {any} props
   * @memberof AdminCenters
   */
  constructor(props) {
    super(props);
    this.state = {
      centers: '',
      isLoading: false,
      show: false,
      pageNo: 1,
      limit: 10,
      filter: '',
      facility: '',
      capacity: ''
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleModify = this.handleModify.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.loadMoreContent = this.loadMoreContent.bind(this);
  }
  /**
 * @method componentDidMount
 * @returns {*} null
 * @memberof AdminCenters
 */
  componentDidMount() {
    this.props.getAllCenters(this.state.pageNo, this.state.limit)
      .then(() => {
        this.setState({ centers: this.props.allCenters.fetchedCenters });
      });
  }
  /**
 * @returns {*} null
 *
 * @param {any} nextProps
 * @memberof AdminCenters
 */
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        centers: nextProps.allCenters.fetchedCenters,
        isLoading: false
      });
    }
  }
  /**
   * @method loadMoreContent
   * @returns {object} state
   * @memberof AllCenters
   */
  loadMoreContent() {
    this.setState({
      pageNo: this.state.pageNo + 1, isLoading: true
    }, () => { this.getMoreCenters(this.state.pageNo, this.state.limit); });
  }

  /**
   * @returns { * } null
   *
   * @param {any} pageNo
   * @param {any} limit
   * @memberof AllCenters
   */
  getMoreCenters(pageNo, limit) {
    const { filter, facility, capacity } = this.state;
    this.props.getAllCenters(pageNo, limit, filter, facility, capacity);
  }

  /**
 *
 * @returns {object} state
 * @memberof AdminCenters
 */
  handleClose() {
    this.setState({
      show: false
    });
  }
  /**
 * @returns {object} state
 *
 * @param {any} center
 * @memberof AdminCenters
 */
  handleModify(center) {
    this.setState({
      center,
      show: true
    });
  }
  /**
 * @returns {*} null
 *
 * @param {any} center
 * @memberof AdminCenters
 */
  handleDelete(center) {
    swal({
      title: 'Are you sure?',
      text: 'If this center is deleted, it cannot be undone',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.deleteCenter(center.id);
        }
      });
  }
  /**
 *
 *
 * @returns {object} centers
 * @memberof AdminCenters
 */
  render() {
    return (
      <div>
        <div>
          <div className='center col s12 m12'>
            <h3>Centers and Details.</h3>
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
                          onClick={this.handleDelete.bind(this, center)}
                          type="button"
                          className="btn-danger btn-sm">Delete</button></td>
                      </tr>)
                  }
                </tbody>
              </table> : <p style={{
                margin: '10%', fontSize: '20px', fontStyle: 'Sans-serif'
              }}>There are no registered centers.</p>
            }
            </div>
            </div>
          </div>
          {this.state.isLoading === true &&
          <div><p>Loading...</p> <Loading /></div> }
          <ScrollUp showUnder={100}>
            <button type="button"
              className="btn btn-floating btn-rounded waves-effect"
            >TOP</button>
          </ScrollUp>
          <button onClick={this.loadMoreContent}
            className="btn btn-primary active"
            id="loadMore" disabled={!this.props.moreCenters}
          >Load More</button>
        </div>
        <div style={{ height: '1000px' }}>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Body>
              <ModifyCenter center ={this.state.center}/>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

AdminCenters.propTypes = {
  allCenters: PropTypes.object,
  getAllCenters: PropTypes.func.isRequired,
  deleteCenter: PropTypes.func,
  moreCenters: PropTypes.bool
};

const mapStateToProps = state => ({
  allCenters: state.allCenters,
  moreCenters: state.allCenters.moreCenters
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllCenters, editCenter, deleteCenter }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdminCenters);
