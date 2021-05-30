import React from "react";
import "./Events.module.scss";
import { CalendarContext } from "../../context/CalendarContext";
import Event from "../Event/Event";

export default function EventsList() {
  const { setIsOpen, events, date } = React.useContext(CalendarContext);

  const selectedDateEvents = Object.values(events).filter(
    (value) => value.date === date
  );

  return (
    <section className="events-list">
      <span className="heading">
        <h1>Events List</h1>
        <button onClick={() => setIsOpen(true)}>+</button>
      </span>

      {Object.values(selectedDateEvents).map((event) => (
        <Event key={event.id} {...event} />
      ))}
    </section>
  );
}
