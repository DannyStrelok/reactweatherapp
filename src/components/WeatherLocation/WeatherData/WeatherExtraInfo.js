import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoComponent">
        <span className="humidity">{`${humidity} % - `}</span>
        <span className="wind">{`${wind} m/s` }</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,

}

export default WeatherExtraInfo;
