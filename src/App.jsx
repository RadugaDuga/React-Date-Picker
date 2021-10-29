import React, { useState } from "react";
import Calendar from "./components/Calendar";

const App = () => {
  const [date, setDate] = useState(null);
  const handleDateChange = (date) => setDate(date);

  return (
    <div>
      
      {/* {date && <p>Выбранная дата: {date.toLocaleDateString()}</p>} */}
      <Calendar onChange={handleDateChange} />
    </div>
  );
};

export default App;
