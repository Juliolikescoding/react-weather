import React, { Component } from 'react';
import './App.css';
import Weather from './components/Weather';

class App extends Component {

  render() {
    return (
      <div className="App">
         <p>Julio</p>
         <Weather condition="rain" temp="30"/>
      </div>
    );
  }
}

export default App;