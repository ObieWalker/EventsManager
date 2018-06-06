import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-materialize';

const EventCard = (props) => {
  const { event } = props;
  if (!event.isCancelled) {
    return (
      <div style={{ margin: '5%' }}>
        <Col s={10} m={4}>
          <div className="col 12">
            <div
              className="card elegant-color white-text"
              style={{ borderRadius: '10%', width: '18rem', padding: '5%' }}
            >
              <div className="card-body">
                <h5 className="card-title white-text">{event.eventType}</h5>
                <p className="card-text white-text">
                  Address: {event.Center.address}, {event.Center.city}
                </p>
                <p className="card-text white-text">Date: {event.date}</p>
                <p className="card-text white-text">
                  Guest Estimate: {event.guestNo}
                </p>
                <hr className="hr-light" />
              </div>
            </div>
          </div>
        </Col>
      </div>
    );
  }
  return null;
};

EventCard.propTypes = {
  event: PropTypes.object,
  center: PropTypes.object,
  handleShowModal: PropTypes.func,
  name: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  facility: PropTypes.string,
  getAllCenters: PropTypes.func,
  getCenterEvents: PropTypes.func
};

export default EventCard;
