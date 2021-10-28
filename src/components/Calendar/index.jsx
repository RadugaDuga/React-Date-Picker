import React from "react";
import classnames from "classnames";

import * as calendar from "./calendar";

import "./index.css";



class Calendar extends React.Component {
  static defaultProps = {
    date: new Date(),
    years: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010],
    monthNames: [
      "Янв",
      "Февр",
      "Март",
      "Апр",
      "Май",
      "Июнь",
      "Июль",
      "Авг",
      "Сент",
      "Окт",
      "Нояб",
      "Дек",
    ],
    weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    onChange: Function.prototype,
  };

  state = {
    date: this.props.date,
    currentDate: new Date(),
    selectedDate: null
  };




  
  handlePrevMonthButtonClick = () => {
    const date = new Date(this.state.date.getFullYear(), this.state.date.getMonth() - 1);
    this.setState({ date });
  };
  handleNextMonthButtonClick = () => {
    const date = new Date(this.state.date.getFullYear(), this.state.date.getMonth() + 1);
    this.setState({ date });
  };


  handlePrevYearButtonClick = () => {
    const date = new Date(this.state.date.getFullYear() - 1, this.state.date.getMonth() );
    this.setState({ date });
  };
  handleNextYearButtonClick = () => {
    const date = new Date(this.state.date.getFullYear() + 1, this.state.date.getMonth() );
    this.setState({ date });
  };


  
  handleSelectChange = () => {
    const year = this.yearSelect.value;
    const month = this.monthSelect.value;
    const date = new Date(year, month);
    this.setState({ date });
  };

  handleDayClick = (date) => {
    this.setState({ selectedDate: date });
    this.props.onChange(date);
  };

  render() {
    const { years, monthNames, weekDayNames } = this.props;
    const { currentDate, selectedDate } = this.state;
    const monthData = calendar.getMonthData(this.state.date.getFullYear(), this.state.date.getMonth());

    return (
      <div>
        <div>{this.state.selectedDate && this.state.selectedDate.}</div>
        <div className="calendar">
        <header>

          <button disabled={this.state.date.getFullYear() === 2010 ? true : false} onClick={this.handlePrevYearButtonClick}>
            <span className="prev-year-icon" />
          </button>
          <button onClick={this.handlePrevMonthButtonClick}>
            <span className="prev-month-icon" />
          </button>

          <div className="date-container">
            <select
              ref={(element) => (this.monthSelect = element)}
              value={this.state.date.getMonth()}
              onChange={this.handleSelectChange}
            >
              {monthNames.map((name, index) => (
                <option key={name} value={index}>
                  {name}
                </option>
              ))}
            </select>

            <select
              ref={(element) => (this.yearSelect = element)}
              value={this.state.date.getFullYear()}
              onChange={this.handleSelectChange}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <button onClick={this.handleNextMonthButtonClick}>
            <span className="next-month-icon" />
          </button>
          <button disabled={this.state.date.getFullYear() === 2025 ? true : false} onClick={this.handleNextYearButtonClick}>
            <span className="next-year-icon" />
          </button>
        </header>

        <table>
          <thead>
            <tr>
              {weekDayNames.map((name) => (
                <th className="week-name" key={name}>{name}</th>
              ))}
            </tr>
          </thead>

          {/* ___________ Отрисовка компонентов дней ___________  */}

          <tbody>
            {monthData.map((week, index) => (
              <tr key={index} >
                {week.map((date, index) =>
                  date ? (
                    <td
                      className="day-container"
                      key={index}
                      onClick={() => this.handleDayClick(date)}
                    >
                      <div
                        className={classnames("day", {
                          today: calendar.areEqual(date, currentDate),
                          selected: calendar.areEqual(date, selectedDate),
                        })}
                      >
                        {date.getDate()}
                      </div>
                    </td>
                  ) : (
                    <td key={index} />
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <div />
      </div>
      </div>
    );
  }
}



export default Calendar