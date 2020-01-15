import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from '../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import './styles.css';


class WeatherLocation extends Component  {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
        //console.log('constructor');
        
    }

    
    componentDidMount() {
        //console.log('componentDidMount');
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log('componentDidUpdate')
    }    
    

    handleUpdateClick = () => {
        
        const api_weather = getUrlWeatherByCity( this.state.city );

        fetch(api_weather)
        .then( resolve => {
            //console.log(resolve);
            return resolve.json();
        })
        .then( data => {
            console.log('RESULTADO AJAX');
            //console.log(data);
            const newWeather = transformWeather(data);
            //console.log(newWeather);
            this.setState({
                data: newWeather
            });

        })
        .catch( err => {
            console.log(err);
        });

        //let weather_promise = fetch(api_weather);
        // weather_promise.then( (data) => {
        //     console.log('exito');
        //     console.log(data);
        // } )
        // .catch( (err) => {
        //     console.log('error');
        //     console.log(err);
        // } );

        console.log('actualizado');
        // this.setState({
        //     city: 'BCN',
        //     //data: data
        // });
    }

    render() {
        console.log('RENDER')
        const { city, data } = this.state;

        return (
            <div className="weatherLocationComponent">
                <Location city={city}></Location>
                {data ? 
                    <WeatherData data={data}></WeatherData> : 
                    <CircularProgress />
                }
            </div>
        );
    }
    
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}
export default WeatherLocation;