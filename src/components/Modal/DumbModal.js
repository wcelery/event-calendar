import React from "react";

export default function DumbModal({
  buildingEvent,
  setBuildingEvent,
  selected,
  setSelected,
  optionValues,
  additionalFields,
  handleSubmit, //from react-hook-form
  onSubmit,
  register,
  errors,
}) {
  return (
    <form className="modal-content" onSubmit={handleSubmit(onSubmit)}>
      <h1>Create event</h1>
      <div className="input-field">
        <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          type="text"
          name="what"
          id="name"
          ref={register({ required: true, minLength: 3, maxLength: 30 })}
          className={errors.what && "invalid_field"}
          onChange={(e) => {
            setBuildingEvent({ ...buildingEvent, name: e.target.value });
          }}
        />
        {errors.what && <span>Event name must be between 3 and 30 chars</span>}
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
      <button type="submit" className="create-button">
        Create
      </button>
    </form>
  );
}
