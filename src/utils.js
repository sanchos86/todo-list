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
 * @returns {string} - name of the current week day
 */
export const getDayName = () => {
  return days[new Date().getDay()];
};

/**
 * @returns {string} - short name of the current month
 */
export const getMonthShortName = () => {
  return months[new Date().getMonth()].slice(0, 3);
};
