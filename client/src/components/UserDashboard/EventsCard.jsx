import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-materialize';


const EventCard = (props) => {
  const { event } = props;
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
                {eventDate > cutOffTime &&
                <div>
                  <button className="btn blue-gradient active btn-sm" id="loadMore">Edit</button>
                  <button className="btn btn-primary btn-danger btn-sm" id="loadMore">Delete</button>
                </div>
                }
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
  name: PropTypes.string,
  date: PropTypes.string,
  guestNo: PropTypes.number,
  email: PropTypes.string
};

export default EventCard;
