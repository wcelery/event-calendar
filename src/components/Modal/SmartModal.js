import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import "./Modal.module.scss";
import { CalendarContext } from "../../context/CalendarContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import DumbModal from "./DumbModal";
import FieldsFragment from "./FieldsFragment";

export default function SmartModal() {
  const { date, isOpen, setIsOpen, dispatch } =
    React.useContext(CalendarContext);
  const [selected, setSelected] = React.useState("None");
  const [buildingEvent, setBuildingEvent] = React.useState({ name: "" });
  const [persistedEvent, setPersistedEvent] = useLocalStorage(
    `event-${buildingEvent.name}`,
    []
  );
  const { register, handleSubmit, errors } = useForm();

  const optionValues = {
    None: { name: "None", fields: ["name"] },
    Holidays: { name: "Holidays", fields: ["Budget"] },
    Event: { name: "Event", fields: ["Where", "When"] },
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
    const event = { ...filteredEvent, date, id: uuidv4() };
    setPersistedEvent(event);
    dispatch({ type: "push_event_to_context", payload: event });
  };

  const onSubmit = () => {
    createEventObject();
    setIsOpen(false);
  };

  const fieldsFragmentProps = {
    register,
    errors,
    buildingEvent,
    setBuildingEvent,
  };

  const additionalFields = (selected) => {
    switch (selected) {
      case "None":
        return null;

      case "Holidays":
        return (
          <>
            {optionValues[selected].fields.map((field, idx) => (
              <FieldsFragment
                key={idx + field}
                field={field}
                {...fieldsFragmentProps}
              />
            ))}
          </>
        );

      case "Event":
        return (
          <>
            {optionValues[selected].fields.map((field, idx) => (
              <FieldsFragment
                key={idx + field}
                field={field}
                {...fieldsFragmentProps}
              />
            ))}
          </>
        );

      case "Other":
        return (
          <>
            {optionValues[selected].fields.map((field, idx) => (
              <FieldsFragment
                key={idx + field}
                field={field}
                {...fieldsFragmentProps}
              />
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
    handleSubmit,
    onSubmit,
    errors,
    register,
  };

  return (
    <>
      {
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          contentLabel="Create event"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <DumbModal {...sourceOfTruth} />
        </Modal>
      }
    </>
  );
}
