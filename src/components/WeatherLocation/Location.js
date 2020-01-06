import React from 'react';
import PropTypes from 'prop-types';

const Location = (props) => {

    // DESTRUCTURING
    const { city } = props;
    
    return (
        <div className="locationComponent">
            <h1 className="c-location">{city}</h1>
        </div>
    )
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;
