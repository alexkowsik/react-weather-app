import React from 'react';
import './MainWeatherWindow.css';
import sun from '../images/sun.svg';

export default class MainWeatherWindow extends React.Component {
    render(props) {
        return(
            <div className='main'>
                <div className='inner-main'>
                    <img src={sun} 
                        alt='sun' 
                        style={{ visibility: this.props.city ? 'visible' : 'hidden' }} />

                    <div className='today'
                        style={{ visibility: this.props.city ? 'visible' : 'hidden' }}>
                        <span>Today</span>
                        <h1>{this.props.city}</h1>
                        <p>27°C</p>
                        <p>Rain: 30%</p>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}