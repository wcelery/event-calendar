import "./App.css";
import React from "react";
import "react-calendar/dist/Calendar.css";
import CalendarProvider from "./context/CalendarContext";
import CalendarComponent from "./components/CalendarComponent";

function App() {
  return (
    <div className="App">
      <CalendarProvider>
        <CalendarComponent />
      </CalendarProvider>
    </div>
  );
}

export default App;
