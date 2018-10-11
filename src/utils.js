const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

/**
 * @param {object} date - target date
 * @returns {string} - name of the week day
 */
export const getDayName = (date) => {
  return days[date.getDay()];
};

/**
 * @param {object} date - target date
 * @returns {string} - short name of the month
 */
export const getMonthShortName = (date) => {
  return months[date.getMonth()].slice(0, 3);
};
