import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {


    render() {

      var filename = "img/" + this.props.condition + ".png"

      // var weather = [
      //   {"condition":"Sunny(Clear)", "image":"clear","temp":"300"},
      //   {"condition":"Cloudy", "temp":"75&deg; F"},
      //   {"condition":"Rain", "temp":"67&deg; F"},
      //   {"condition":"Heay Rains", "temp":"69&deg; F"},
      //   {"condition":"Snow", "temp":"30&deg; F"},
      //   {"condition":"Partly Cloudy", "temp":"300&deg; F"},
      //   {"condition":"Thunder Storm", "temp":"300&deg; F"}
      // ];

      return (
            <div className="main">
                <button className="arr arrLeft">⦉</button>
                <button className="arr arrRight">⦊</button>
                <h4>{this.props.condition}</h4>
                <img src={filename} alt="weather img"/>
                <h3>{this.props.temp}&deg; F</h3>
            </div>
      );
    }
}
  
export default Weather;