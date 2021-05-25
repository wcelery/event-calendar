import React from "react";
import { CalendarContext } from "../context/CalendarContext";

export default function EventsList() {
  const { events } = React.useContext(CalendarContext);

  return (
    <section className="events-list">
      <h1>tse</h1>
      {Object.values(events).map((val1) => (
        <>
          <h1>{val1.name}</h1>
          <h1>{val1.Budget}</h1>
        </>
      ))}
    </section>
  );
}
