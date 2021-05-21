import React from "react";

export default function DumbModal({
  buildingEvent,
  setBuildingEvent,
  selected,
  setSelected,
  optionValues,
  additionalFields,
  submitHandler,
}) {
  return (
    <div>
      <h1>test</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="what"
          onChange={(e) =>
            setBuildingEvent({ ...buildingEvent, name: e.target.value })
          }
        />
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          {Object.values(optionValues).map((obj, idx) => (
            <option key={idx} value={obj.name}>
              {obj.name}
            </option>
          ))}
        </select>
        {additionalFields(selected)}
        <button
          type="submit"
          onClick={() => {
            submitHandler();
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
}
