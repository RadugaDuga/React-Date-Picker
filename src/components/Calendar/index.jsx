import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import * as calendar from "./calendar";
import "./index.css";


const Calendar = (props) => {
  // Получаем сегодняшнюю дату
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(null);

  // Отображать или нет календарь
  const [calendarActive, setCalendarActive] = useState(false);

  // Обработчики select'ов месяца и года
  const [monthSelect, setMonthSelect] = useState(null);
  const [yearSelect, setYearSelect] = useState(null);

  // Рефы для отслеживания клика вне 
  const dateShowCompo = useRef()

  const [style, setStyle] = useState()
  // Кнопки пред. и след. года
  const handlePrevMonthButtonClick = () => {
    const newdate = new Date(date.getFullYear(), date.getMonth() - 1);
    setDate(newdate);
  };
  const handleNextMonthButtonClick = () => {
    const newdate = new Date(date.getFullYear(), date.getMonth() + 1);
    setDate(newdate);
  };

  // Кнопки пред. и след. месяца
  const handlePrevYearButtonClick = () => {
    const newdate = new Date(date.getFullYear() - 1, date.getMonth());
    setDate(newdate);
  };
  const handleNextYearButtonClick = () => {
    const newdate = new Date(date.getFullYear() + 1, date.getMonth());
    setDate(newdate);
  };

  // Обработчик изменения любого селекта
  const handleSelectChange = () => {
    const year = yearSelect.value;
    const month = monthSelect.value;
    const date = new Date(year, month);
    setDate(date);
  };
  
  // Обработчик клика вне элементов календаря и даты 
  useEffect(() => {
		let handler = (e) => {
			if (dateShowCompo.current && !dateShowCompo.current.contains(e.target)) {
				setCalendarActive(false)
			}
		};
    console.log("handler effect activated");
		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, [calendarActive]);

  
  // Обработчик выбора дня
  const handleDayClick = (date) => {
    setSelectedDate(date);
    props.onChange(date);
    setTimeout(() => {
      setCalendarActive(false);
    }, 200);
  };

  const { years, monthNames, weekDayNames } = props;
  const monthData = calendar.getMonthData(date.getFullYear(), date.getMonth());

  return (
    <>
      {/* Компонент отображения даты */}
      <div
        ref={dateShowCompo}
        tabIndex="-1"
        onClick={() => setCalendarActive(true)}
        className="date-show"
      >
        {selectedDate
          ? selectedDate.toLocaleDateString()
          : new Date().toLocaleDateString()}
        <svg
          width="12.5"
          height="12.5"
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
      
        {calendarActive && (
        <div className="calendar">
          <header>
            <button 
              disabled={date.getFullYear() === 2010 ? true : false}
              onClick={handlePrevYearButtonClick}
            >
              <span className="prev-year-icon" />
            </button>
            <button onClick={handlePrevMonthButtonClick}>
              <span className="prev-month-icon" />
            </button>

            <div className="date-container">
              <select ref={el => setMonthSelect(el)} value={date.getMonth()} onChange={handleSelectChange}>
                {monthNames.map( (name, index) => (
                  <option key={name} value={index}>
                    {name}
                  </option>
                ))}
              </select>

              <select ref={ el => setYearSelect(el)} value={date.getFullYear()} onChange={handleSelectChange}>
                {years.map(year => (
                  <option key={year} value={year}> 
                    {year} 
                  </option>
                ))}
              </select>
            </div>

            <button onClick={handleNextMonthButtonClick}>
              <span className="next-month-icon" />
            </button>
            <button
              disabled={date.getFullYear() === 2025 ? true : false}
              onClick={handleNextYearButtonClick}
            >
              <span className="next-year-icon" />
            </button>
          </header>

          <table>
            <thead>
              <tr>
                {weekDayNames.map(wname => (
                  <th className="week-name" key={wname}>
                    {wname}
                  </th>
                ))}
              </tr>
            </thead>

            {/* ___________ Отрисовка компонентов дней ___________  */}

            <tbody>
              {monthData.map((week, index) => (
                <tr key={index}>
                  {week.map((date, index) =>
                    date 
                    ? <td className="day-container" key={index} onClick={() => handleDayClick(date)}>
                          <div
                            className={classnames("day", {
                              today: calendar.areEqual(date, currentDate),
                              selected: calendar.areEqual(date, selectedDate),
                            })}
                          >
                            {date.getDate()}
                          </div>
                        </td>
                    : <td key={index}/>
                  )}
                </tr>
              ))}
            </tbody>

          </table>
          <div onClick={()=>{handleDayClick(new Date())}} className="today-btn">Сегодня</div>
        </div>
      )}
      </div>
    </>
  )
}




Calendar.defaultProps = {
  years: [
    2025, 2024, 2023, 2022,
    2021, 2020, 2019, 2018,
    2017, 2016, 2015, 2014, 
    2013, 2012, 2011, 2010
  ],
  monthNames: [
    "Янв",  "Февр", "Март",
    "Апр",  "Май",  "Июнь",
    "Июль", "Авг",  "Сент",
    "Окт",  "Нояб", "Дек",
  ],
  weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  onChange: Function.prototype,
};

export default Calendar;
