import "./App.css";
import React from "react";
import "react-calendar/dist/Calendar.css";
import CalendarProvider from "./context/CalendarContext";
import CalendarComponent from "./components/Calendar/CalendarComponent";
import SmartModal from "./components/Modal/SmartModal";
import EventsList from "./components/EventsList/EventsList";

function App() {
  return (
    <div className="App">
      <CalendarProvider>
        <CalendarComponent />
        <EventsList />
        <SmartModal />
      </CalendarProvider>
    </div>
  );
}

export default App;
