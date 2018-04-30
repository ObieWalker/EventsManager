import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-materialize';
// import centerPic from '../..//'
/**
 *
 *
 * @class CenterCard
 * @extends {Component}
 */
class CenterCard extends Component {
  /**
   * Creates an instance of CenterCard.
   * @memberof CenterCard
   */
  constructor() {
    super();
    this.state = {
      center: '',
      show: false
    };
  }
  /**
   *
   *
   * @returns {object} center card
   * @memberof CenterCard
   */
  render() {
    const { center } = this.props;
    return (
      <div>
        <div style={{ margin: '5%' }}>
          <Col s={10} m={6}>
            <div className="col 12">
              <div
                className="card card-cascade narrower"
                style={{ height: '400px' }}
              >
                <div className="view overlay">
                  <img
                    className="card-img-top img-fluid"
                    src="http://i68.tinypic.com/dh5vk.jpg"
                    alt="center"
                  />
                  <a>
                    <div className="mask rgba-white-slight" />
                  </a>
                </div>

                <div className="card-body" style={{ padding: '5%' }}>
                  <h5 className="card-title pink-text pb-2 pt-1">
                    {' '}
                    {center.name}
                  </h5>
                  <p className="card-text">
                    {center.address}, {center.city}
                  </p>
                  <p className="card-text">Capacity: {center.capacity}</p>
                  {center.facility ? (
                    <p className="card-text">
                      Facilities/Description: {center.facility}
                    </p>
                  ) : (
                    <p>Information on facilities provided on demand.</p>
                  )}
                  <button
                    onClick={this.props.handleShowModal.bind(this, center)}
                    className="btn btn-primary btn-sm active"
                  >
                    Book Center
                  </button>
                  <button
                    onClick={this.props.getCenterEvents.bind(this, center)}
                    className="btn btn-info btn-sm active"
                    id="loadMore"
                  >
                    Booked Events
                  </button>
                  <br />
                </div>
              </div>
            </div>
          </Col>
        </div>
      </div>
    );
  }
}

CenterCard.propTypes = {
  center: PropTypes.object,
  handleShowModal: PropTypes.func,
  name: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  facility: PropTypes.string,
  getAllCenters: PropTypes.func,
  getCenterEvents: PropTypes.func
};

export default CenterCard;
