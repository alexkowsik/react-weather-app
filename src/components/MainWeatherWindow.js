import React from 'react';
import './MainWeatherWindow.css';

export default class MainWeatherWindow extends React.Component {
    render(props) {
        return(
            <div className='main'>
                <div className='inner-main'>
                    <img src={this.props.data ? require(`../images/${this.props.data.icon}.svg`) : require('../images/01d.svg')} 
                        alt='sun' 
                        style={{ visibility: this.props.city ? 'visible' : 'hidden' }} />

                    <div className='today'
                        style={{ visibility: this.props.city ? 'visible' : 'hidden' }}>
                        <span>Today</span>
                        <h1>{this.props.city}</h1>
                        <p>Temperature: {this.props.data ? Math.round(this.props.data.temp - 273.15) : 0}°C</p>
                        <p>{this.props.data ? this.props.data.weather_desc.toLowerCase() : ''}</p>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}