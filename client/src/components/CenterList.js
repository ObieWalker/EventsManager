import React from 'react';
import PropTypes from 'prop-types';

const CenterList = (centers) => (
    <div>
        {centers.map(center => (
            <div className="col s12 m6" key={center.id}>
                <div className="card">
                    <div className="card-image">
                       <img src="http://i68.tinypic.com/dh5vk.jpg" alt={center.name} />
                    </div>
                    <div className="card-content">
                        <span className='card-title'>
                            <a href="show-center.html">{center.name}</a>
                        </span><br />
                        <span className= 'grey-text text-darken-4'>{center.address}</span>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{center.name}<i className="material-icons right">close</i></span>
                        <p>{center.address}<br/>{center.region}<br/>This center has a capacity of {center.capacity} with facilities like { center.facilities}</p>
                    </div>
                    </div>
                </div>
        ))}
    </div>
);
CenterList.propTypes = {
    centers: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default CenterList;
