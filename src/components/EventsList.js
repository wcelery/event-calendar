import React from "react";
import { CalendarContext } from "../context/CalendarContext";

export default function EventsList() {
  const { events, date } = React.useContext(CalendarContext);

  const newObj = Object.values(events).filter((value) => value.date === date);
  /* .reduce((obj, key) => {
    obj[key] = buildingEvent[key];
    return obj;
  }, {}); */

  console.log(newObj);
  return (
    <section className="events-list">
      <h1>tse</h1>
      {Object.values(newObj).map((val1) => (
        <>
          <h1>{val1.name}</h1>
          {/*           <h1>{val1.Budget}</h1> */}
        </>
      ))}
    </section>
  );
}
