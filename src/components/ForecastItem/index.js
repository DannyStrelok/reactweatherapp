import React from 'react'
import PropTypes from 'prop-types'
import WeatherData from '../WeatherLocation/WeatherData';



const ForecastItem = ( {weekDay, hour, data} ) => {

    return (
        <div>
            <p>{weekDay} Hora: {hour}</p>
            <WeatherData data={data}></WeatherData>
        </div>
    );
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        humidity: PropTypes.number.isRequired,
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        wind: PropTypes.string.isRequired,
    }).isRequired,
}

export default ForecastItem;