import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getAllCenters, { clearCenterState }
  from '../actions/getAllCentersAction';

/**
 *
 *
 * @class Search
 * @extends {Component}
 */
export class Search extends Component {
  /**
   * Creates an instance of Search.
   * @param {any} props
   * @memberof Search
   */
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      capacity: '',
      facility: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.fetchCenters = this.fetchCenters.bind(this);
  }

  /**
 * @returns {object} state
 *
 * @param {any} e
 * @memberof Search
 */
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  /**
 * @returns {*} null
 *
 * @param {any} e
 * @memberof Search
 */
  handleSearch(e) {
    e.preventDefault();
    this.props.clearCenterState();
    const { filter, capacity, facility } = this.state;
    this.props.getAllCenters(1, 6, filter, facility, capacity);
    this.props.changeSearchState(filter, capacity, facility);
  }
  /**
   * @returns {object} state
   *
   * @param {any} e
   * @memberof Search
   */
  fetchCenters(e) {
    e.preventDefault();
    this.setState({
      filter: '',
      capacity: '',
      facility: ''
    });
    this.props.resetPage();
    this.props.clearCenterState();
    this.props.getAllCenters();
  }
  /**
   *
   *
   * @returns {object} search bar
   * @memberof Search
   */
  render() {
    return (
      <div>
        <form className='col s12 full-width'>
          <div className="input-field col s12 l3">
            <label htmlFor="filter">Name or Location</label>
            <input
              id="filter"
              type="search"
              onChange={this.handleChange}
              name="filter"
              className="validate"
              value={this.state.filter}
            />
          </div>
          <div className="input-field col s12 l4">
            <label htmlFor="facility">Facility</label>
            <input
              id="facility"
              type="search"
              onChange={this.handleChange}
              name="facility"
              className="validate"
              value={this.state.facility}
            />
          </div>
          <div className="input-field col s12 l1">
            <label htmlFor="capacity">Capacity</label>
            <input
              id="capacity"
              type="number"
              name="capacity"
              onChange={this.handleChange}
              min="1"
              className="validate"
              value={this.state.capacity}
            />
          </div>
          <div className="input-field col s12 l4">
            <button onClick={this.handleSearch}
              className="btn peach-gradient btn-sm" type="submit">
            search
            </button>
            <button className="btn peach-gradient btn-sm" onClick={this.fetchCenters}
            >Clear Search</button>
          </div>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  getAllCenters: PropTypes.func,
  clearCenterState: PropTypes.func,
  changeSearchState: PropTypes.func,
  resetPage: PropTypes.func
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllCenters, clearCenterState
}, dispatch);

export default connect(null, mapDispatchToProps)(Search);
