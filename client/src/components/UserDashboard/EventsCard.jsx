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
 * @returns {*}  null
 *
 * @param {any} event
 * @memberof EventCard
 */
  handleEdit(event) {
    this.props.handleShowEditModal(event);
    // this.props.handleEditEvent();
  }

  /**
 * @returns {*} null
 *
 * @memberof EventCard
 */
  handleDelete() {
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
    const cutOffTime = Date.now() + 86400000;
    const eventDate = new Date(event.date);
    const today = Date.now();
    if (event) {
      return (
        <div style={{ margin: '5%' }}>
          <Col s={10} m={4}>
            <div className="col 12">
              <div className="card elegant-color white-text"
                style={{
                  width: '18rem', padding: '5%', borderRadius: '10%', height: '260px'
                }}>
                <div className="card-body">
                  <h5 className="card-title white-text">{event.eventType}</h5>
                  <h6 className="card-subtitle mb-2 text-muted white-text">
                  Center: {event.Center.name}</h6>
                  <p className="card-text white-text">Date: {event.date}</p>
                  <p className="card-text white-text">
                  Address {event.Center.address}</p>
                  <p className="card-text white-text">
                  Guest Estimate: {event.guestNo}</p>
                  <hr className="hr-light"/>
                  {event.isCancelled ?
                    <h6 className="red-text">
                    Apologies!!! This event was cancelled.</h6> :
                    <div>{(eventDate > today) &&
                    <div>{(eventDate > cutOffTime) ?
                      <div>
                        <button className="btn blue-gradient active btn-sm"
                          onClick={this.handleEdit.bind(this, event)}>
                          Edit</button>
                        <button className="btn btn-primary btn-danger btn-sm"
                          onClick={this.handleDelete}>Cancel </button>
                      </div> :
                      <div><h6 className="red-text">
                      Unable to Cancel or Modify 24 hrs to event.</h6></div>
                    }</div>}</div>
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
  handleShowEditModal: PropTypes.func,
  handleDeleteEvent: PropTypes.func,
  event: PropTypes.object,
  name: PropTypes.string,
  date: PropTypes.string,
  guestNo: PropTypes.number,
  email: PropTypes.string
};

export default EventCard;
