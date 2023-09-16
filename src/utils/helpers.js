export function getDaysInMonth(year, month) {
  return Array.apply(null, Array(new Date(year, month, 0).getDate()));
}
export const isObjectEmpty = (objectName) => {
  return Object.keys(objectName).length === 0;
};

export function allAreEqual(array) {
  const result = array.every((element) => {
    if (element === array[0]) {
      return true;
    }
  });

  return result;
}

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
export const dateFormatDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
