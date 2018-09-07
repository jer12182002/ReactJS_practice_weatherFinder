import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/weather";
import "bootstrap/dist/css/bootstrap.min.css";

//const API_KEY = "d700c30fbd441353a2527629fab566dd";
class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault(); //prevent full page refresh
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //console.log(city + "  " + country);
    //async reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    const api_call = await fetch(
      "https://openweathermap.org/data/2.5/weather?q=" +
        city +
        "," +
        country +
        "&appid=b6907d289e10d714a6e88b30761fae22"
    );

    const data = await api_call.json();

    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temp: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter City and Country"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  {" "}
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  {" "}
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        This project is perfect now. There are few things still need to be
        fixed. I will update soon!
      </div>
    );
  }
}

export default App;
