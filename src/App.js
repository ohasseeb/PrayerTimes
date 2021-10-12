import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { thistle } from "color-name";

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
    console.log(
      this.state.times.data ? this.state.times.data[0].date.readable : " "
    );
    console.log(
      "Asr",
      this.state.times.data ? this.state.times.data[0].timings.Asr : " "
    );

    return (
      <div>
        <div>
          Asr:{" "}
          {this.state.times.data ? this.state.times.data[0].timings.Asr : " "}
        </div>
      </div>
    );
  }
} // End class

export default App;
