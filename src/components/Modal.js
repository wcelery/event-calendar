import React from "react";
import { CalendarContext } from "../context/CalendarContext";

export default function Modal() {
  const { isOpen, setIsOpen } = React.useContext(CalendarContext);
  const [selected, setSelected] = React.useState();
  const [createdEvent, setCreatedEvent] = React.useState({});

  const optionValues = {
    None: { name: "None" },
    Holidays: { name: "Holidays", fields: ["Budget"] },
    Events: { name: "Events", fields: ["Where", "When"] },
    Other: { name: "Other", fields: ["Notes"] },
  };

  console.log(Object.values(optionValues).map((obj) => obj.name));
  const additionalFields = (selected) => {
    switch (selected) {
      case "None":
        return null;

      case "Holidays":
        return (
          <>
            {optionValues[selected].fields.map((field, idx) => (
              <>
                <label htmlFor={field}>{field}</label>
                <input
                  key={idx}
                  type="text"
                  name={field}
                  id={field}
                  onChange={(e) =>
                    setCreatedEvent({
                      ...createdEvent,
                      [field]: e.target.value,
                    })
                  }
                ></input>
              </>
            ))}
          </>
        );

      case "Events":
        return (
          <>
            {optionValues[selected].fields.map((field, idx) => (
              <>
                <label htmlFor={field}>{field}</label>
                <input
                  key={idx}
                  type="text"
                  name={field}
                  id={field}
                  onChange={(e) =>
                    setCreatedEvent({
                      ...createdEvent,
                      [field]: e.target.value,
                    })
                  }
                ></input>
              </>
            ))}
          </>
        );

      case "Other":
        return (
          <>
            {optionValues[selected].fields.map((field, idx) => (
              <>
                <label htmlFor={field}>{field}</label>
                <input
                  key={idx}
                  type="text"
                  name={field}
                  id={field}
                  onChange={(e) =>
                    setCreatedEvent({
                      ...createdEvent,
                      [field]: e.target.value,
                    })
                  }
                ></input>
              </>
            ))}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <h1>test</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="what"
          onChange={(e) =>
            setCreatedEvent({ ...createdEvent, name: e.target.value })
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
            console.log();
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
}
