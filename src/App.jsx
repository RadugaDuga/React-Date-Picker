import React, { useState } from "react";
import Calendar from "./components/Calendar";

const App = () => {
  const [date, setDate] = useState(null);
  const handleDateChange = (date) => setDate(date);

  return <Calendar alignment="0" onChange={handleDateChange} />;
};

export default App;
