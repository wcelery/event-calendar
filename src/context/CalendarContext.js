import React from "react";
import rootReducer, { initialState } from "./rootReducer";

export const CalendarContext = React.createContext();

export default function CalendarProvider({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [state, dispatch] = React.useReducer(rootReducer, initialState);
  return (
    <CalendarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        date: state.date,
        events: state.events,
        dispatch,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
