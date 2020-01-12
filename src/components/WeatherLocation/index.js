import React, { Component } from 'react';
import PropTypes from 'prop-types'
import transformWeather from '../../services/transformWeather';
import { api_weather } from '../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';

import './styles.css';


class WeatherLocation extends Component  {
    state = {};
    
    constructor( props ) {
        super( props );
        const { city } = props;

        this.state = {
            city: 'Madrid',
            data: null,
        };
        console.log('constructor');
        this.handleUpdateClick();
    }

    componentDidMount() {
        console.log('component did mount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componen did update');
    }

    componentWillMount() {
        console.log('component will mount');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('component will update');
    }
    
    
    
    

    handleUpdateClick = () => {

        fetch(api_weather)
        .then( resolve => {
            //console.log(resolve);
            return resolve.json();
        })
        .then( data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });

        })
        .catch( err => {
            console.log(err);
        });

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
                
                
            </div>
        );
    }
    
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;