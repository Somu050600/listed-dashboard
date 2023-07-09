import React from "react";
import "./Schedule.css";

function Schedule(props) {
  return (
    <div className="schedule-container">
      <div className="schedule-container-title">
        <strong>Today’s schedule</strong>
      </div>
      <div className="schedule-container-div div1">
        <strong>Meeting with suppliers from Kuta Bali</strong>
        <span>14:00-15:00</span>
        <span>at Sunset Road, Kuta, Bali </span>
      </div>
      <div className="schedule-container-div div2">
        <strong>Check operation at Giga Factory 1</strong>
        <span>18:00-20:00</span>
        <span>at Central Jakarta </span>
      </div>
    </div>
  );
}

export default Schedule;
