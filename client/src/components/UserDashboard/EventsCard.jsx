import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-materialize';

/**
 *
 *
 * @class EventCard
 * @extends {Component}
 */
class EventCard extends Component {
  /**
   * Creates an instance of EventCard.
   * @param {any} props
   * @memberof EventCard
   */
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  /**
 * @returns {*} null
 *
 * @memberof EventCard
 */
  handleEdit() {
    console.log('handle edit in events card');
    this.props.handleEditEvent();
  }

  /**
 * @returns {*} null
 *
 * @memberof EventCard
 */
  handleDelete() {
    console.log('handle delete in events card');
    this.props.handleDeleteEvent();
  }
  /**
 *
 *
 * @returns {object} event information
 * @memberof EventCard
 */
  render() {
    const { event } = this.props;
    console.log('this.props.event', event);
    const cutOffTime = Date.now() + 86400000;
    const eventDate = new Date(event.date);
    if (event) {
      return (
        <div style={{ margin: '5%' }}>
          <Col s={10} m={4}>
            <div className="col 12">
              <div className="card elegant-color white-text" style={{ width: '18rem', padding: '5%' }}>
                <div className="card-body">
                  <h5 className="card-title white-text">{event.eventType}</h5>
                  <h6 className="card-subtitle mb-2 text-muted white-text">Center: {event.Center.name}</h6>
                  <p className="card-text white-text">Date: {event.date}</p>
                  <p className="card-text white-text">Address {event.Center.address}</p>
                  <p className="card-text white-text">Guest Estimate: {event.guestNo}</p>
                  <hr className="hr-light"/>
                  {event.isCancelled ?
                    <h6 className="red-text">Apologies!! This event has been cancelled.</h6> :
                    <div>{eventDate > cutOffTime &&
                    <div>
                      <button className="btn blue-gradient active btn-sm" onClick={this.handleEdit}>Edit</button>
                      <button className="btn btn-primary btn-danger btn-sm" onClick={this.handleDelete}>Cancel </button>
                    </div>
                    }</div>
                  }

                </div>
              </div>
            </div>
          </Col>
        </div>
      );
    }
  }
}

EventCard.propTypes = {
  handleEditEvent: PropTypes.func,
  handleDeleteEvent: PropTypes.func,
  event: PropTypes.object,
  name: PropTypes.string,
  date: PropTypes.string,
  guestNo: PropTypes.number,
  email: PropTypes.string
};

export default EventCard;
