import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Daily } from "./components/daily-prayer-times/daily-prayer-times.jsx";
import { Weekly } from "./components/weekly-prayer-times/weekly-prayer-times.jsx";
//API
// http://api.aladhan.com/v1/calendarByCity?city=Alameda&country=United%20States&method=2&month=Oct&year=2021

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: [],
      name: "Obaid",
    }; // end state
  } // end ctro

  componentDidMount() {
    fetch(
      "http://api.aladhan.com/v1/calendarByCity?city=Alameda&country=United%20States&method=2&month=Oct&year=2021"
    )
      .then((response) => response.json())
      .then((users) => this.setState({ times: users }));
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="horizontal">
            {/* <Daily timesObj={this.state.times} dayInNumeral={0} /> */}
            <Weekly weekTime={this.state.times} />
          </div>
          {/* <Daily timesObj={this.state.times} /> */}
        </div>
      </div>
    );
  }
} // End class

// Fajr
// Sunrise
// Duhr
// AsrSunset
// Maghrib
// Imsak
// Midnight

export default App;
