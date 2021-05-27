import React from "react";
import { v4 as uuidv4 } from "uuid";
import { CalendarContext } from "../../context/CalendarContext";
import Event from "../Event/Event";

export default function EventsList() {
  const { setIsOpen, events, date } = React.useContext(CalendarContext);

  const selectedDateEvents = Object.values(events).filter(
    (value) => value.date === date
  );

  return (
    <section className="events-list">
      <h1>Events List</h1>
      <button onClick={() => setIsOpen(true)}>+</button>
      {Object.values(selectedDateEvents).map((event) => (
        <Event key={uuidv4()} {...event} />
      ))}
    </section>
  );
}
