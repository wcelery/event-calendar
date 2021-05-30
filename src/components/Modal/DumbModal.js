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
          ref={register({
            required: { value: true, message: "This field is required" },
            maxLength: { value: 30, message: "Only 30 chars is allowed" },
          })}
          className={errors.what && "invalid_field"}
          onChange={(e) => {
            setBuildingEvent({ ...buildingEvent, name: e.target.value });
          }}
        />
        {errors.what && (
          <span className="error-message">{errors.what.message}</span>
        )}
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
