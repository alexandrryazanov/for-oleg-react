import {
  eachWeekOfInterval,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  format,
} from "date-fns";
import { ru, enUS } from "date-fns/locale";

const locale = ru;

export const getWeekDayNames = () =>
  eachDayOfInterval({
    start: startOfWeek(new Date(), { locale }),
    end: endOfWeek(new Date(), { locale }),
  }).map((weekDay) => format(weekDay, "EEEEEE", { locale }));

export const getEachDaysOfMonth = (selectedDate: Date) => {
  return eachWeekOfInterval(
    {
      start: startOfMonth(selectedDate),
      end: endOfMonth(selectedDate),
    },
    { locale }
  ).map((startWeekDay) =>
    eachDayOfInterval({
      start: startWeekDay,
      end: endOfWeek(startWeekDay, { locale }),
    })
  );
};

export const formatWithLocale = (date: Date, formatString: string) =>
  format(date, formatString, { locale });
