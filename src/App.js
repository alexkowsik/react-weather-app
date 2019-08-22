import React from 'react';
import './App.css';
import MainWeatherWindow from './components/MainWeatherWindow'
import CityInput from './components/CityInput'
import WeatherBox from './components/WeatherBox';

class App extends React.Component {
  state = {
    city: undefined,

    // data: day, weather, avg-temp, rain
    data_day1: [],
    data_day2: [],
    data_day3: [],
    data_day4: [],
    data_day5: []
  }

  setCity = (e) => {
    this.setState({ city: e.target.value });
    this.getWeather();
  }

  getWeather = () => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainWeatherWindow city={this.state.city}>

            <CityInput city={this.state.city}
            setCity={this.setCity.bind(this)}/>

            <ul className='weather-box-list'
                style={{ visibility: this.state.city ? 'visible' : 'hidden' }}>
              <li><WeatherBox day='Tomorrow'/></li>
              <li><WeatherBox day='Tomorrow 2'/></li>
              <li><WeatherBox day='Tomorrow 3'/></li>
              <li><WeatherBox day='Tomorrow 4'/></li>
            </ul>

          </MainWeatherWindow>
        </header>
      </div>
    );
  }
}

export default App;
