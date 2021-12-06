const DAYS_IN_WEEK = 7;

const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

export const areEqual = (a, b) => {
  if (!a || !b) return false;

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};

export const isLeapYear = (year) => {
  return !(year % 4 || (!(year % 100) && year % 400));
};

export const getDaysInMonth =(date)=> {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export const getDayOfWeek = (date) => {
  const dayOfWeek = date.getDay();

  return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
};

export const getMonthData = (year, month) => {
  const result = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const monthStartsOn = getDayOfWeek(date);
  let day = 1;

  for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
    result[i] = [];

    for (let j = 0; j < DAYS_IN_WEEK; j++) {
      if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
        result[i][j] = undefined;
      } else {
        result[i][j] = new Date(year, month, day++);
      }
    }
  }

  return result;
};
