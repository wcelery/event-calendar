import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarContext } from "../../context/CalendarContext";
import "./OverrideDefault.css";

export default function CalendarComponent() {
  const { setIsOpen, events, dispatch } = React.useContext(CalendarContext);

  const extractedDatesFrom = Object.values(events).map((value) => value.date);

  const getClassName = (date) => {
    if (extractedDatesFrom.includes(date.toISOString())) {
      return "highlighted_dates";
    }
    return "not_highlighted_dates";
  };
  return (
    <div className="calendar">
      <Calendar
        tileClassName={(props) => getClassName(props.date)}
        onClickDay={(date) => {
          dispatch({
            type: "push_date_to_context",
            payload: date.toISOString(),
          });
        }}
      />
    </div>
  );
}
