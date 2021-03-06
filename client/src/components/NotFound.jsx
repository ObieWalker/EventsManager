import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../assets/notFound.jpg';

const NotFound = () => (
  <div className="bg-faded">
    <div className="not-found lead">
      <br />
      <br />
      <i className="large material-icons center">warning</i>
      {'    '}
      <img
        src={PageNotFound}
        style={{
          width: 400,
          height: 400,
          display: 'block',
          margin: 'auto',
          position: 'relative'
        }}
      />
      <center>
        <Link
          to="/"
          className={['animated', 'bounceInUp', 'btn', 'btn-large'].join(' ')}
        >
            Back to Home Page
        </Link>
      </center>
    </div>
  </div>
);

export default NotFound;
