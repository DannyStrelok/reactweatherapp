import moment from 'moment';
import 'moment/locale/es';
import transformWeather from '../services/transformWeather';


const transformForecast = (data) => {

    var datos = data.list.filter( item => (
        moment.unix( item.dt ).hour() === 7 || 
        moment.unix( item.dt ).hour() === 13 ||
        moment.unix( item.dt ).hour() === 19
    ) );

    datos = datos.map( item => (
      {
          weekDay: moment.unix( item.dt ).format('ddd'),
          hour: moment.unix( item.dt ).hour(),
          data: transformWeather(item)
      }  
    ) );

    return datos;
    // return {
    // temperature: 10,
    // weatherState: 'normal',
    // humidity: 10,
    // wind: '2',         
    // }
}

export default transformForecast;