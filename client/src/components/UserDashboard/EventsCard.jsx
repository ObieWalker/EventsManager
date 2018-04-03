import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-materialize';
// import centerPic from '../../../assets/centerpic.jpg';

const EventCard = (props) => {
  const { events } = props;
  return (
    <div style={{ margin: '5%' }}>
      <Col s={10} m={4}>
        <div className="col 12">
          <div className="card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="http://i68.tinypic.com/dh5vk.jpg"/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Center Name: {events.center}<i className="material-icons right">more_vert</i></span>
              <p style={{ float: 'left' }}>{events.eventType} </p><br />
              <p style={{ float: 'left' }}>{events.date} </p><br />
              <p>click on image to see more details.</p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Center Name: {events.center}<i className="material-icons right">close</i></span>
              <span className="card-title grey-text text-darken-4">Type of Event: {events.eventType}</span>
              <span className="card-title grey-text text-darken-4">Date of Event: {events.date}</span>
              <span className="card-title grey-text text-darken-4">Est. Guest No.: {events.guestNo}</span>
              <span className="card-title grey-text text-darken-4">Contact Email: {events.email}</span>
            </div>
          </div>
        </div>
      </Col>

    </div>
  );
};

EventCard.propTypes = {
  events: PropTypes.object,
  name: PropTypes.string,
  date: PropTypes.string,
  guestNo: PropTypes.number,
  email: PropTypes.string
};

export default EventCard;
