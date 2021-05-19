import React from "react";
import { CalendarContext } from "../context/CalendarContext";

export default function Modal() {
  const { isOpen, setIsOpen } = React.useContext(CalendarContext);
  const [selected, setSelected] = React.useState();
  console.log(selected);

  const additionalFields = (selected) => {
    switch (selected) {
      case "Пункт 1":
        return <h1>test</h1>;

      case "Пункт 2":
        return <input>36</input>;

      default:
        return null;
    }
  };
  return (
    <div>
      <h1>test</h1>
      <button onClick={() => setIsOpen(!isOpen)}>test</button>
      <select
        onChange={(e) => {
          setSelected(() => e.target.value);
        }}
      >
        <option>Пункт 1</option>
        <option>Пункт 2</option>
      </select>
      <input type="text" name="Name" />
      <input type="where" name="Name" />
      <input type="when" name="Name" />
      {additionalFields()}
    </div>
  );
}
