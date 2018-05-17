import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row } from 'react-materialize';
import Loading from 'react-loading-animation';
import getAllCenters from '../actions/getAllCentersAction';
import Search from './Search.jsx';
import CenterList from './CenterCard.jsx';

/**
 * @returns {object} centers
 *
 * @class AllCenters
 * @extends {Component}
 */
class AllCenters extends Component {
  /**
   * Creates an instance of AllCenters.
   * @param {any} props
   * @memberof AllCenters
   */
  constructor(props) {
    super(props);
    this.state = {
      centers: '',
      pageNo: 1,
      limit: 6,
      isLoading: false
    };

    this.loadMoreContent = this.loadMoreContent.bind(this);
    this.getMoreCenters = this.getMoreCenters.bind(this);
  }
  /**
 * @method componentWillMount
 * @returns { * } null
 * @memberof AllCenters
 */
  componentWillMount() {
    const { pageNo, limit } = this.state;
    this.props.getAllCenters(pageNo, limit)
      .then(() => {
        this.setState({ centers: this.props.allCenters.fetchedCenters });
      });
  }

  /**
   * @method componentWillReceiveProps
   * @returns { * } null
   * @param {any} nextProps
   * @memberof AllCenters
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ centers: nextProps.allCenters.fetchedCenters, isLoading: false });
    }
  }

  /**
   * @method loadMoreContent
   * @returns {object} state
   * @memberof AllCenters
   */
  loadMoreContent() {
    this.setState({ pageNo: this.state.pageNo + 1, isLoading: true }, () => { this.getMoreCenters(this.state.pageNo, this.state.limit); });
  }

  /**
   * @returns { * } null
   *
   * @param {any} pageNo
   * @param {any} limit
   * @memberof AllCenters
   */
  getMoreCenters(pageNo, limit) {
    this.props.getAllCenters(pageNo, limit);
  }

  /**
   *
   *
   * @returns {object} centers
   * @memberof AllCenters
   */
  render() {
    const Centers = this.state.centers;
    return (
      <div>
        <div>
          <h3>All centers and details.</h3>
          <div className='center'>
            <Search /> <br/> <br/>
          </div>
          <div> {(Centers) ?
            <Row>
              {Centers.map((centers, i) =>
                <CenterList key={i} centers={centers} />)}
            </Row> : 'There are no registered centers.'
          }
          {this.state.isLoading === true &&
          <div><p>Loading...</p> <Loading /></div> }

          <button onClick={this.loadMoreContent}
            className="btn btn-primary active" id="loadMore">Load More</button>
          <br /><br />
          </div>
        </div>
      </div>
    );
  }
}

AllCenters.propTypes = {
  allCenters: PropTypes.object,
  getAllCenters: PropTypes.func.isRequired,
  onEnter: PropTypes.func
};

const mapStateToProps = state => ({
  allCenters: state.allCenters
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllCenters }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AllCenters);
