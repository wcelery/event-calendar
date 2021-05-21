import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function EventsList() {
  const [persistedEvent, returnLocalStorage, setPersistedEvent] =
    useLocalStorage();

  React.useEffect(() => {
    returnLocalStorage();
  }, [persistedEvent]);

  const eventsList = returnLocalStorage();
  console.log(Object.values(eventsList));
  return (
    <section className="events-list">
      <h1>tse</h1>
      {Object.values(eventsList).map((val1) => (
        <>
          <h1>{val1.name}</h1>
          <h1>{val1.Budget}</h1>
        </>
      ))}
    </section>
  );
}
