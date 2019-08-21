import React from 'react';
import './App.css';
import MainWeatherWindow from './components/MainWeatherWindow'
import CityInput from './components/CityInput'
import WeatherBox from './components/WeatherBox';

class App extends React.Component {
  state = {
    city: 'city name'
  }

  setCity = (e) => {
    this.setState({ city: e.target.value });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainWeatherWindow test={this.state.city}>
            <CityInput setCity={this.setCity.bind(this)}/>

            <ul className='weather-box-list'>
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
