import React from "react";
import { CalendarContext } from "../context/CalendarContext";

export default function EventsList() {
  const { isOpen, setIsOpen, events, date } = React.useContext(CalendarContext);

  const selectedDateEvents = Object.values(events).filter(
    (value) => value.date === date
  );

  return (
    <section className="events-list">
      <h1>tse</h1>
      {Object.values(selectedDateEvents).map((val1) => (
        <>
          <h1>{val1.name}</h1>
        </>
      ))}
      <button onClick={() => setIsOpen(!isOpen)}>Create event</button>
    </section>
  );
}
