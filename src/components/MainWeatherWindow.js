import React from 'react';
import './MainWeatherWindow.css';

export default class MainWeatherWindow extends React.Component {
    render(props) {
        return(
            <div className='main'>
                <p>{this.props.test}</p>
                {this.props.children}
            </div>
        );
    }
}