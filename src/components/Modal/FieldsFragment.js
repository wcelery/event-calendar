export default function FieldsFragment({
  field,
  register,
  errors,
  buildingEvent,
  setBuildingEvent,
}) {
  return (
    <div className="input-field">
      <label htmlFor={field}>
        <b>{field}</b>
      </label>
      <input
        key={88}
        type="text"
        name={field}
        id={field}
        ref={register({
          required: { value: true, message: "This field is required" },
          maxLength: { value: 100, message: "Only 100 chars is allowed" },
        })}
        className={errors[field] && "invalid_field"}
        onChange={(e) =>
          setBuildingEvent({
            ...buildingEvent,
            [field]: e.target.value,
          })
        }
      ></input>
      {errors[field] && (
        <span className="error-message">{errors[field].message}</span>
      )}
    </div>
  );
}
