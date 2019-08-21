import React from 'react';
import './WeatherBox.css'
import sun from './sun.svg'

export default class WeatherBox extends React.Component {
    render() {
        return(
            <div className='weather-box'>
                <h1>Saturday</h1>
                <img src={sun} alt='sun' />
                <span className='temp'>23°C</span>
            </div>
        );
    }
}