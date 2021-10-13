import React, { Component } from "react";

export const Daily = (props) => {
  // Props imported as  this.state.times
  console.log(props);
  return (
    <div>
      <div>
        Date:
        {props.timesObj.data ? props.timesObj.data[0].date.readable : " "}
      </div>

      <div>
        Fajr:
        {props.timesObj.data ? props.timesObj.data[0].timings.Fajr : " "}
      </div>

      <div>
        SunRise:
        {props.timesObj.data ? props.timesObj.data[0].timings.Sunrise : " "}
      </div>

      <div>
        Dhuhr:
        {props.timesObj.data ? props.timesObj.data[0].timings.Dhuhr : " "}
      </div>

      <div>
        {" "}
        Asr:{" \n"}
        {props.timesObj.data ? props.timesObj.data[0].timings.Asr : " "}
      </div>

      <div>
        Sunset{" "}
        {props.timesObj.data ? props.timesObj.data[0].timings.Sunset : " "}
      </div>

      <div>
        Maghrib{" "}
        {props.timesObj.data ? props.timesObj.data[0].timings.Maghrib : " "}
      </div>

      <div>
        Isha {props.timesObj.data ? props.timesObj.data[0].timings.Isha : " "}
      </div>
      <div>
        Imsak:
        {props.timesObj.data ? props.timesObj.data[0].timings.Imsak : " "}
      </div>

      <div>
        Midnight
        {props.timesObj.data ? props.timesObj.data[0].timings.Midnight : " "}
      </div>
    </div>
  );
};

{
  /* <div>
  Dhuhr:
  {props.timesObj.data ? props.timesObj.data[0].timings.Dhuhr : " "}
</div>

<div>
  {" "}
  Asr:{" \n"}
  {props.timesObj.data ? props.timesObj.data[0].timings.Asr : " "}
</div>

<div>Sunset {props.timesObj.data ? props.timesObj.data[0].timings.Sunset : " "}</div>

<div>Magrib {props.timesObj.data ? props.timesObj.data[0].timings.Magrib : " "}</div>

<div>Isha {props.timesObj.data ? props.timesObj.data[0].timings.Isha : " "}</div>
<div>
  Imsak:
  {props.timesObj.data ? props.timesObj.data[0].timings.Imsak : " "}
</div> */
}
