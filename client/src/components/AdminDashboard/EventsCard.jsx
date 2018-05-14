

import React from 'react';
import PropTypes from 'prop-types';

const EventsCard = (props) => {
  const { events } = props;
  return (
    <div style={{ margin: '5%' }}>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
        
          {/* <h5 className="card-title">{events.eventType}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{events.center}</h6>
          <p className="card-text">{events.date}</p>
          <p className="card-text">Estimated guest No.: {events.guestNo}</p>
          <p className="card-text">Contact Email: {events.email}</p> */}

        </div>
      </div>
    </div>
  );
};

EventsCard.propTypes = {
  events: PropTypes.object,
  center: PropTypes.string,
  eventType: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  email: PropTypes.string,
  getAllCenters: PropTypes.func,
  guestNo: PropTypes.number
};

export default EventsCard;
