import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-materialize';

/**
 *
 *
 * @class EventsCard
 * @extends {Component}
 */
class EventsCard extends Component {
  /**
   * Creates an instance of EventsCard.
   * @param {any} props
   * @memberof EventsCard
   */
  constructor(props) {
    super(props);

    this.handleCancel = this.handleCancel.bind(this);
  }
  /**
 * @returns {*} null
 *
 * @param {any} id
 * @memberof EventsCard
 */
  handleCancel(id) {
    this.props.cancelEvent(id);
  }
  /**
 *
 *
 * @returns {object} event
 * @memberof EventsCard
 */
  render() {
    const { event } = this.props;
    return (
      <div style={{ margin: '5%' }}>
        <Col s={10} m={4}>
          <div className="card elegant-color white-text"
            style={{
              width: '18rem', padding: '5%', borderRadius: '10%', height: '200px'
            }}>
            <div className="card-body">
              <h5 className="card-title white-text">{event.eventType}</h5>
              <h6 className="card-subtitle mb-2 text-muted white-text">
                @ {event.Center.name}</h6>
              <p className="card-text white-text">{event.date}</p>
              <p className="card-text white-text">
              Estimated guest No.: {event.guestNo}</p>
            </div>
            {!event.isCancelled ?
              <button className="btn btn-danger btn-sm btn-rounded"
                onClick={this.handleCancel.bind(this, event.id)}
              >Cancel</button> :
              <p className="red-text">
              This event has been canceled by an admin.</p>
            }
          </div>
        </Col>
      </div>
    );
  }
}

EventsCard.propTypes = {
  event: PropTypes.object,
  cancelEvent: PropTypes.func,
  center: PropTypes.string,
  eventType: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  email: PropTypes.string,
  getAllCenters: PropTypes.func,
  guestNo: PropTypes.number
};

export default EventsCard;
