import React from "react";
import { CalendarContext } from "../context/CalendarContext";
import Event from "./Event";

export default function EventsList() {
  const { isOpen, setIsOpen, events, date } = React.useContext(CalendarContext);

  const selectedDateEvents = Object.values(events).filter(
    (value) => value.date === date
  );

  return (
    <section className="events-list">
      <h1>Events List</h1>
      {Object.values(selectedDateEvents).map((event) => (
        <Event {...event} />
      ))}
      <button onClick={() => setIsOpen(!isOpen)}>Create event</button>
    </section>
  );
}
