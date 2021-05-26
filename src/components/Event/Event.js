import React from "react";
import { CalendarContext } from "../../context/CalendarContext";

export default function Event(event) {
  const { dispatch } = React.useContext(CalendarContext);
  return (
    <div className="event">
      <h2>{event.name}</h2>
      {Object.entries(event).map((entry) => (
        <>
          {entry[0] !== "name" && entry[0] !== "date" && (
            <p>{`${entry[0]}: ${entry[1]}`}</p>
          )}
        </>
      ))}
      <button
        onClick={() =>
          dispatch({ type: "remove_event_from_context", payload: event.name })
        }
      >
        Remove
      </button>
    </div>
  );
}
