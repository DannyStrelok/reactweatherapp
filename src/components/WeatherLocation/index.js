import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from '../../constants/weathers';
const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const location = "Madrid, es";
const api_key = "dd2b496f5430517a515f84f8458cd9ec";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component  {

    constructor() {
        super();
        this.state = {
            city: 'Madrid',
            data: data,
        };
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp} = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState;

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }

        return data;
    }

    handleUpdateClick = () => {

        fetch(api_weather)
        .then( resolve => {
            //console.log(resolve);
            return resolve.json();
        })
        .then( data => {
            const newWeather = this.getData(data);
            console.log(newWeather);
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
        this.setState({
            city: 'BCN',
            //data: data
        })
    }
    render() {
        const { city, data } = this.state;

        return (
            <div className="weatherLocationComponent">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
    
}

export default WeatherLocation;