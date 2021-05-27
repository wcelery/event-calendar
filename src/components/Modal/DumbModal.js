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
    <form className="modal-content" onSubmit={(e) => e.preventDefault()}>
      <h1>Create event</h1>
      <div className="input-field">
        <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          type="text"
          name="what"
          id="name"
          onChange={(e) =>
            setBuildingEvent({ ...buildingEvent, name: e.target.value })
          }
        />
      </div>
      <div className="input-field">
        <label htmlFor="select">
          <b>Type</b>
        </label>
        <select
          value={selected}
          id="select"
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
      </div>

      {additionalFields(selected)}
      <button
        type="submit"
        className="create-button"
        onClick={() => {
          submitHandler();
        }}
      >
        Create
      </button>
    </form>
  );
}
