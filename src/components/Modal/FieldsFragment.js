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
          required: true,
          maxLength: 100,
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
        <span>This field is required and must be below 100 chars</span>
      )}
    </div>
  );
}
