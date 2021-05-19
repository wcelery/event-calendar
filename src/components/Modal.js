import React from "react";
import { CalendarContext } from "../context/CalendarContext";

export default function Modal() {
  const { isOpen, setIsOpen } = React.useContext(CalendarContext);
  const [selected, setSelected] = React.useState();
  console.log(selected);

  const optionValues = ["None", "Holidays", "Events", "Other"];

  const additionalFields = (selected) => {
    switch (selected) {
      case "None":
        return null;

      case "Holidays":
        return (
          <>
            <label htmlFor="toSpend">Budget</label>
            <input type="text" name="toSpend" id="toSpend"></input>
          </>
        );

      case "Events":
        return (
          <>
            <label htmlFor="where">Where?</label>
            <input type="text" name="where" id="where"></input>
            <label htmlFor="when">When?</label>
            <input type="text" name="when" id="when"></input>
          </>
        );

      case "Other":
        return (
          <>
            <label htmlFor="note">Notes</label>
            <input type="text" name="note" id="note"></input>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <h1>test</h1>
      <button onClick={() => setIsOpen(!isOpen)}>Edit</button>
      <button onClick={() => setIsOpen(!isOpen)}>Delete</button>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="what" />
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          {optionValues.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
        {additionalFields(selected)}
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
