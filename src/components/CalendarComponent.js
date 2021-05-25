import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarContext } from "../context/CalendarContext";

export default function CalendarComponent() {
  const { isOpen, setIsOpen, events, dispatch } =
    React.useContext(CalendarContext);

  const highlightedDates = [
    new Date(2021, 4, 25, 0, 0, 0).toISOString(),
    new Date(2021, 4, 26, 0, 0, 0).toISOString(),
  ];

  const extractedDatesFrom = Object.values(events).map((value) => value.date);

  const getClassName = (date) => {
    if (extractedDatesFrom.includes(date.toISOString())) {
      return "highlighted_dates";
    } else {
      return "not_highlighted_dates";
    }
  };
  return (
    <>
      <Calendar
        tileClassName={(props) => getClassName(props.date)}
        onClickDay={(date) => {
          dispatch({
            type: "push_date_to_context",
            payload: date.toISOString(),
          });
          setIsOpen(!isOpen);
        }}
      />
    </>
  );
}
