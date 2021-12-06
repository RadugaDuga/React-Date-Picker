import React, { useState } from "react";
import Calendar from "./components/Calendar";
import "./styles.css"

const App = () => {
  const [date, setDate] = useState(null);
  const handleDateChange = (date) => setDate(date);
  return (
    <div className="wrapper">
      <Calendar onChange={handleDateChange} />
    </div>
  );
};

export default App;
