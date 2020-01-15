import React from 'react';
import LocationList from './components/LocationList';

import './App.css';

const cities = [
  'Madrid,es',
  'Washington,us',
  'Tokio,jp',
  'Segovia,es',
  'Lima,pe'
]

function App() {
  return (
    <div className="App">
      
      <LocationList cities={cities}></LocationList>
      
    </div>
  );
}

export default App;
