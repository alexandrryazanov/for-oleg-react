export const getLongNumber = (number: number) =>
  number < 10 ? `0${number}` : number;

export const getFormattedDate = (date: Date) =>
  `${getLongNumber(date.getHours())}:${getLongNumber(
    date.getMinutes()
  )}:${getLongNumber(date.getSeconds())}`;
