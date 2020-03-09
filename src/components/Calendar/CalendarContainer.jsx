import React, { Component } from "react";
import MonthCalendar from "./MonthCalendar";
import DateForm from "./DateForm";

export default class CalendarContainer extends Component {
  constructor() {
    super();
    this.state = {
      date: "05.03.2020"
    };
  }

  refreshDate = newDate => {
    this.setState({ date: newDate });
  };

  render() {
    const { date } = this.state;
    return (
      <div>
        <MonthCalendar date={date} />
        <DateForm date={date} refreshDate={this.refreshDate} />
      </div>
    );
  }
}
