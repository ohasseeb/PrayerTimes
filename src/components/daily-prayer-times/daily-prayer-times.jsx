import React, { Component } from "react";
import "./daily-prayer-times-style.css";

export const Daily = (props) => {
  // Props imported as  this.state.times
  var today = Date();
  today = today.split(" ");
  // console.log(today[2]);
  const todaysDate = today[2] - 1;

  console.log(props);
  return (
    <div className="bordering">
      <div>
        Date:
        {props.timesObj.data
          ? props.timesObj.data[props.dayInNumeral].date.readable
          : " "}
      </div>

      <div>
        Fajr:
        {props.timesObj.data
          ? props.timesObj.data[props.dayInNumeral].timings.Fajr
          : " "}
      </div>

      <div>
        SunRise:
        {props.timesObj.data
          ? props.timesObj.data[props.dayInNumeral].timings.Sunrise
          : " "}
      </div>

      <div>
        Dhuhr:
        {props.timesObj.data
          ? props.timesObj.data[props.dayInNumeral].timings.Dhuhr
          : " "}
      </div>

      <div>
        {" "}
        Asr:{" \n"}
        {props.timesObj.data
          ? props.timesObj.data[props.dayInNumeral].timings.Asr
          : " "}
      </div>

      <div>
        Sunset{" "}
        {props.timesObj.data
          ? props.timesObj.data[props.dayInNumeral].timings.Sunset
          : " "}
      </div>

      <div>
        Maghrib{" "}
        {props.timesObj.data
          ? props.timesObj.data[props.dayInNumeral].timings.Maghrib
          : " "}
      </div>

      <div>
        Isha{" "}
        {props.timesObj.data
          ? props.timesObj.data[props.dayInNumeral].timings.Isha
          : " "}
      </div>
      <div>
        Imsak:
        {props.timesObj.data
          ? props.timesObj.data[props.dayInNumeral].timings.Imsak
          : " "}
      </div>

      <div>
        Midnight
        {props.timesObj.data
          ? props.timesObj.data[props.dayInNumeral].timings.Midnight
          : " "}
      </div>
    </div>
  );
};
