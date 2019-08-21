import React from 'react';
import './App.css';
import MainWeatherWindow from './components/MainWeatherWindow'
import CityInput from './components/CityInput'
import WeatherBox from './components/WeatherBox';

class App extends React.Component {
  state = {
    city: undefined
  }

  setCity = (e) => {
    this.setState({ city: e.target.value });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainWeatherWindow city={this.state.city}>

            <CityInput city={this.state.city}
            setCity={this.setCity.bind(this)}/>

            <ul className='weather-box-list'
                style={{ display: this.state.city ? 'flex' : 'none' }}>
              <li><WeatherBox /></li>
              <li><WeatherBox /></li>
              <li><WeatherBox /></li>
              <li><WeatherBox /></li>
              <li><WeatherBox /></li>
            </ul>

          </MainWeatherWindow>
        </header>
      </div>
    );
  }
}

export default App;
