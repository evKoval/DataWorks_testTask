import React from "react";
import styles from "./MonthCalendar.module.css";

const MonthCalendar = props => {
  let [day, month, year] =
    props.date.split(".").length > 2
      ? props.date.split(".")
      : props.date.split("-").length > 2
      ? props.date.split("-")
      : props.date.split("/");

  const selectedDate = new Date(year, month - 1, 1);
  let weekDay = selectedDate.getDay();
  weekDay = weekDay ? weekDay : (weekDay += 7);
  const daysInMonth = (new Date(year, month).getTime() - selectedDate.getTime()) / (1000 * 3600 * 24);
  const days = 7;
  const weeks = Math.ceil((weekDay - 1 + daysInMonth) / 7) + 1;

  let table = [],
    tr = [];
  const weekDays = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."];
  let k = 1;
  for (let i = 0; i < weeks; i++) {
    tr = [];
    for (let j = 0; j < days; j++) {
      if (i === 0) {
        tr.push(<th key={i + j} className={styles.day}>{weekDays[j]}</th>);
      } else if ((j >= weekDay - 1 || i > 1) && k <= daysInMonth) {
        tr.push(
          <td key={i + j} className={(k === +day ? styles.selectedDay : null) + " " + styles.calendarItem}>
            {k}
          </td>
        );
        k++;
      } else {
        tr.push(<td key={i + j} className={styles.calendarItem}></td>);
      }
    }
    table.push(<tr key={i}>{tr}</tr>);
  }

  return (
    <table className={styles.calendarTable}>
      <caption>{selectedDate.toLocaleString("en", { month: "long" }) + " " + selectedDate.getFullYear()}</caption>
      <tbody>{table}</tbody>
    </table>
  );
};

export default MonthCalendar;
