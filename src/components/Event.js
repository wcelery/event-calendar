export default function Event(event) {
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
    </div>
  );
}
