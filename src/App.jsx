import React, { useState } from "react";
import Calendar from "./components/Calendar";

const App = () => {
  const [date, setDate] = useState(null);
  const handleDateChange = (date) => setDate(date);

  return (
    <div>
      <svg
        width="14"
        height="14"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27 30H3C1.3 30 0 28.7 0 27V5C0 3.3 1.1 2 2.5 2H4V4H2.5C2.3 4 2 4.4 2 5V27C2 27.6 2.4 28 3 28H27C27.6 28 28 27.6 28 27V5C28 4.4 27.7 4 27.5 4H26V2H27.5C28.9 2 30 3.3 30 5V27C30 28.7 28.7 30 27 30Z"
          fill="#CFCFCF"
        />
        <path
          d="M7 6C6.4 6 6 5.6 6 5V1C6 0.4 6.4 0 7 0C7.6 0 8 0.4 8 1V5C8 5.6 7.6 6 7 6Z"
          fill="#CFCFCF"
        />
        <path
          d="M23 6C22.4 6 22 5.6 22 5V1C22 0.4 22.4 0 23 0C23.6 0 24 0.4 24 1V5C24 5.6 23.6 6 23 6Z"
          fill="#CFCFCF"
        />
        <path d="M10 2H20V4H10V2Z" fill="#CFCFCF" />
        <path d="M2 8H28V10H2V8Z" fill="#CFCFCF" />
        <path d="M24 12H26V14H24V12Z" fill="#CFCFCF" />
        <path d="M20 12H22V14H20V12Z" fill="#CFCFCF" />
        <path d="M16 12H18V14H16V12Z" fill="#CFCFCF" />
        <path d="M12 12H14V14H12V12Z" fill="#CFCFCF" />
        <path d="M8 12H10V14H8V12Z" fill="#CFCFCF" />
        <path d="M24 16H26V18H24V16Z" fill="#CFCFCF" />
        <path d="M20 16H22V18H20V16Z" fill="#CFCFCF" />
        <path d="M16 16H18V18H16V16Z" fill="#CFCFCF" />
        <path d="M12 16H14V18H12V16Z" fill="#CFCFCF" />
        <path d="M8 16H10V18H8V16Z" fill="#CFCFCF" />
        <path d="M4 16H6V18H4V16Z" fill="#CFCFCF" />
        <path d="M24 20H26V22H24V20Z" fill="#CFCFCF" />
        <path d="M20 20H22V22H20V20Z" fill="#CFCFCF" />
        <path d="M16 20H18V22H16V20Z" fill="#CFCFCF" />
        <path d="M12 20H14V22H12V20Z" fill="#CFCFCF" />
        <path d="M8 20H10V22H8V20Z" fill="#CFCFCF" />
        <path d="M4 20H6V22H4V20Z" fill="#CFCFCF" />
        <path d="M20 24H22V26H20V24Z" fill="#CFCFCF" />
        <path d="M16 24H18V26H16V24Z" fill="#CFCFCF" />
        <path d="M12 24H14V26H12V24Z" fill="#CFCFCF" />
        <path d="M8 24H10V26H8V24Z" fill="#CFCFCF" />
        <path d="M4 24H6V26H4V24Z" fill="#CFCFCF" />
      </svg>

      {date && <p>Выбранная дата: {date.toLocaleDateString()}</p>}
      <Calendar onChange={handleDateChange} />
    </div>
  );
};

export default App;