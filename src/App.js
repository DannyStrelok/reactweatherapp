import React, { Component } from 'react';
import {MuiThemeProvider} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { createStore } from 'redux';

import './App.css';

const cities = [
  'Madrid,es',
  'Washington,us',
  'Tokio,jp',
  'Segovia,es',
  'Lima,pe'
]

const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null
    }
  }
  
  handleSelectedLocation = city => {
    console.log('handleSelectedLocation ' + city);
    this.setState(
      {
        city: city
      }
      );
      const action = { type: 'setCity', value: city }
      store.dispatch( action );
  }

  render() {
    return (
      //<MuiThemeProvider theme={theme}>
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className="details">
                  { !this.state.city ? 
                        <h2 className='forecast-title'>Sin ciudad seleccionada</h2>
                        :
                        <ForecastExtended city={this.state.city}></ForecastExtended>  
                }
                  
                </div>
              </Paper>
              
            </Col>
          </Row>
        </Grid>
      //</MuiThemeProvider>
    );
  }
  
}

export default App;
