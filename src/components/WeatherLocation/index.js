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

class WeatherLocation extends Component  {

    constructor() {
        super();
        this.state = {
            city: 'Madrid',
            data: data,
        };
    }

    handleUpdateClick = () => {
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