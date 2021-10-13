import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Daily } from "./components/daily-prayer-times/daily-prayer-times.jsx";

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
        <Daily timesObj={this.state.times} />
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
