import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';
// import centerPic from '../..//'

const CenterCard = (props) => {
  const { centers } = props;
  return (
    <div style={{ margin: '5%' }}>
      <Col s={10} m={4}>
        <div className="col 12">
          <div className="card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="http://i68.tinypic.com/dh5vk.jpg"/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{centers.name}<i className="material-icons right">more_vert</i></span>
              <p style={{ float: 'left' }}>{centers.city} </p><br />
              <p style={{ float: 'left' }}><Link to="/" href='/'>Book Center</Link></p>
            </div>
            <div className="card-reveal">
              <Row>
                <span className="card-title grey-text text-darken-4" style={{ float: 'left' }}>{centers.name}</span>
                <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
              </Row>
              <div className='row'><p style={{ float: 'left' }}>{centers.address},<br/>{centers.city}</p></div>
              <p style={{ float: 'left' }}> Center Capacity: {centers.capacity}</p><br />
              <p>{ centers.facility}</p>
            </div>
          </div>
        </div>
      </Col>

    </div>
  );
};

CenterCard.propTypes = {
  centers: PropTypes.object,
  name: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  facility: PropTypes.string,
  getAllCenters: PropTypes.func
};

export default CenterCard;
