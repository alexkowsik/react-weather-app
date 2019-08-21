import React from 'react';
import './WeatherBox.css'
import sun from './sun.svg'

export default class WeatherBox extends React.Component {
    render() {
        return(
            <div className='weather-box'>
                <img src={sun} alt='sun' />
                <h1>Day X</h1>
            </div>
        );
    }
}