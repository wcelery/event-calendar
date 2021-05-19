import React from "react";
import { CalendarContext } from "../context/CalendarContext";

export default function Modal() {
  const { isOpen, setIsOpen } = React.useContext(CalendarContext);
  const [selected, setSelected] = React.useState();
  const [createdEvent, setCreatedEvent] = React.useState({});
  console.log(selected);

  const optionValues = [
    { name: "none" },
    { name: "Holidays", fields: ["Budget"] },
    { name: "Events", fields: ["Where", "When"] },
    { name: "Other", fields: ["Notes"] },
  ];

  const additionalFields = (selected) => {
    switch (selected) {
      case "None":
        return null;

      case "Holidays":
        return (
          <>
            {optionValues[1].fields.map((field, idx) => (
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
            {optionValues[2].fields.map((field, idx) => (
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
            {optionValues[3].fields.map((field, idx) => (
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
          {optionValues.map((option, idx) => (
            <option key={idx} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        {additionalFields(selected)}
        <button
          type="submit"
          onClick={() => {
            let test = Object.keys(createdEvent);
            console.log("selected", selected);
            test.filter((key) => key !== selected);

            console.log(test);
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
}
