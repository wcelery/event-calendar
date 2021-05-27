import React from "react";
import Modal from "react-modal";
import { CalendarContext } from "../../context/CalendarContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import DumbModal from "./DumbModal";

export default function SmartModal() {
  const { date, isOpen, setIsOpen, dispatch } =
    React.useContext(CalendarContext);
  const [selected, setSelected] = React.useState("None");
  const [buildingEvent, setBuildingEvent] = React.useState({ name: "" });
  const [persistedEvent, setPersistedEvent] = useLocalStorage(
    `event-${buildingEvent.name}`,
    []
  );

  const optionValues = {
    None: { name: "None", fields: ["name"] },
    Holidays: { name: "Holidays", fields: ["Budget"] },
    Events: { name: "Events", fields: ["Where", "When"] },
    Other: { name: "Other", fields: ["Notes"] },
  };

  Modal.setAppElement("#root");

  const createEventObject = () => {
    const filteredEvent = Object.keys(buildingEvent)
      .filter(
        (key) => key === "name" || optionValues[selected].fields.includes(key) //exclude field 'name' from filtering
      )
      .reduce((obj, key) => {
        obj[key] = buildingEvent[key];
        return obj;
      }, {});
    const event = { ...filteredEvent, date };
    setPersistedEvent(event);
    dispatch({ type: "push_event_to_context", payload: event });
  };

  const submitHandler = () => {
    createEventObject();
    setIsOpen(false);
  };

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
                    setBuildingEvent({
                      ...buildingEvent,
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
                    setBuildingEvent({
                      ...buildingEvent,
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
                    setBuildingEvent({
                      ...buildingEvent,
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

  const sourceOfTruth = {
    buildingEvent,
    setBuildingEvent,
    selected,
    setSelected,
    optionValues,
    additionalFields,
    submitHandler,
  };

  return (
    <>
      {
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          contentLabel="Example Modal"
        >
          <DumbModal {...sourceOfTruth} />
        </Modal>
      }
    </>
  );
}
