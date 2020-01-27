import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ForecastItem from '../ForecastItem';
import transformForecast from '../../services/transformForecast';
import './styles.css';

// const days = [
//     'lunes',
//     'martes',
//     'miercoles',
//     'jueves',
//     'viernes',
//     'sabado',
//     'domingo'
// ]

// const data = {
//     temperature: 10,
//     weatherState: 'normal',
//     humidity: 10,
//     wind: '2',
// }

export const api_key = "dd2b496f5430517a515f84f8458cd9ec";
export const url_base_weather = "http://api.openweathermap.org/data/2.5/forecast";

export default class ForecastExtended extends Component {
    
    constructor( props ) {
        super(props);
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        this.updateCity( this.props.city );
    }

    componentDidUpdate(prevProps, prevState) {
        if( this.props.city !== prevProps.city ) {
            this.setState( {forecastData: null });
            this.updateCity( this.props.city.city );
        }
    }

    updateCity = city => {
        const url_forecast = `${url_base_weather}?q=${this.props.city}&appid=${api_key}`;
        fetch( url_forecast )
            .then(
                data => {
                    return data.json()
                }
            )
            .then(
                weather_data => {
                    console.log('nuevo fetch');
                    console.log(weather_data);
                    const forecastData = transformForecast(weather_data);
                    console.log( forecastData );
                    this.setState({ forecastData });
                    
                }
            )
            .catch( err => {
                console.log(err);
            });
    }

    renderForecastItemDays( forecastData) {
        return forecastData.map( (forecast) => 
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>
            </ForecastItem> 
        );
        
    }

    renderProgress = () => {
        return 'Cargando pronostico extendido...';
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;

        return (
            <div className='ForecastExtendedComponent'>
                <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
                { forecastData ? 
                    this.renderForecastItemDays( forecastData ) 
                    :
                    this.renderProgress()
                }
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}