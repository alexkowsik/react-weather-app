import React from 'react';
import './WeatherBox.css'
import sun from '../images/sun.svg'

export default class WeatherBox extends React.Component {
    render(props) {
        return(
            <div className='weather-box'>
                <h1>{this.props.day}</h1>
                <img src={sun} alt='sun' />
                <span className='temp'>23°C</span>
            </div>
        );
    }
}