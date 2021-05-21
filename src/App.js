import "./App.css";
import React from "react";
import "react-calendar/dist/Calendar.css";
import CalendarProvider from "./context/CalendarContext";
import CalendarComponent from "./components/CalendarComponent";
import SmartModal from "./components/Modal/SmartModal";

function App() {
  return (
    <div className="App">
      <CalendarProvider>
        <CalendarComponent />
        <SmartModal />
      </CalendarProvider>
    </div>
  );
}

export default App;
