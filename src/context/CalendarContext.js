import React from "react";
export const CalendarContext = React.createContext();

export default function CalendarProvider({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <CalendarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CalendarContext.Provider>
  );
}
