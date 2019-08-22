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

  updateState = city => {
    this.setState({ city: city });
    console.log(this.state.city);
  }

  makeApiCall = async city => {
    const api_data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`).then((resp) => resp.json());

    if (api_data.cod === '200') {
      await this.updateState(city);
      console.log(api_data);
      return true;
    }
    else
      return false;
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainWeatherWindow city={this.state.city}>

            <CityInput city={this.state.city}
            makeApiCall={this.makeApiCall.bind(this)} />

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
