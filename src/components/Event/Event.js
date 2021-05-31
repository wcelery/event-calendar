import React from "react";
import { CalendarContext } from "../../context/CalendarContext";
import { v4 as uuidv4 } from "uuid";

export default function Event(event) {
  const { dispatch } = React.useContext(CalendarContext);
  return (
    <div className="event">
      <span className="heading">
        <h4>{event.name}</h4>
        <button
          onClick={() =>
            dispatch({ type: "remove_event_from_context", payload: event.name })
          }
        >
          -
        </button>
      </span>
      {Object.entries(event).map((entry) => (
        <div
          key={uuidv4()} /** its safe to generate ids on the fly because entries remains unchanged */
        >
          {entry[0] !== "name" && entry[0] !== "date" && entry[0] !== "id" && (
            <div className="event-content">
              <span>{entry[0]}: </span>
              <span>{entry[1]}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
