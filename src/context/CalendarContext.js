import React from "react";
import rootReducer, { initialState } from "./rootReducer";

export const CalendarContext = React.createContext();

export default function CalendarProvider({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [date, dispatch] = React.useReducer(rootReducer, initialState);
  return (
    <CalendarContext.Provider value={{ isOpen, setIsOpen, date, dispatch }}>
      {children}
    </CalendarContext.Provider>
  );
}
