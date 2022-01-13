import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Daily } from "../daily-prayer-times/daily-prayer-times";
import "./weekley-prayer-times-style.css";
const get_day_of_week_in_number_form = () => {
  var dayOfWeekInNumeral = Date();
  dayOfWeekInNumeral = dayOfWeekInNumeral.split(" ");
  dayOfWeekInNumeral = dayOfWeekInNumeral[0].toLowerCase();

  if (dayOfWeekInNumeral == "sun") {
    return 1;
  }

  if (dayOfWeekInNumeral == "mon") {
    return 2;
  }
  if (dayOfWeekInNumeral == "tue") {
    return 3;
  }
  if (dayOfWeekInNumeral == "wed") {
    console.log("Wed Is 4");
    return 4;
  }
  if (dayOfWeekInNumeral == "thu") {
    return 5;
  }
  if (dayOfWeekInNumeral == "fri") {
    return 6;
  }
  if (dayOfWeekInNumeral == "sat") {
    return 7;
  }

  return -99999;
};
const get_todays_date_in_numeral = () => {
  var today = Date();
  today = today.split(" ");
  console.log(today[2]);
  const todaysDate = today[2] - 1;
  console.log(todaysDate);
  return todaysDate;
};

export const Weekly = (props) => {
  const render_weekly_schedule = () => {
    const dayOfWeekInNumeral = get_day_of_week_in_number_form();
    const maximum_renders = 8;
    console.log(dayOfWeekInNumeral);

    var numberOfDays = [];

    var j = 0;
    for (var i = dayOfWeekInNumeral; i < maximum_renders; i++) {
      console.log("Day Of The WEek In Numeral", i);
      console.log("Maximum Renders: ", maximum_renders);

      numberOfDays.push(
        <Daily
          key={i}
          timesObj={props.weekTime ? props.weekTime : " "}
          dayInNumeral={get_todays_date_in_numeral() + j}
        />
      );
      j = j + 1;
    } // end for loop

    return <div className="center">{numberOfDays}</div>;
  }; // End function

  return (
    <div>
      <div>{render_weekly_schedule()}</div>
    </div>
  );
}; // end class
