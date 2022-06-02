import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";
import { formatWithLocale, getEachDaysOfMonth, getWeekDayNames } from "./utils";
import { isSameDay } from "date-fns";
import { DatePickerProps } from "./types";
import { usePopper } from "react-popper";

const DatePicker = ({ onChangeDate }: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [input, setInput] = useState("");

  const [referenceRef, setReferenceRef] = useState<HTMLInputElement | null>(
    null
  );
  const [popperRef, setPopperRef] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceRef, popperRef, {
    placement: "bottom-start",
  });

  const eachDaysOfMonth = getEachDaysOfMonth(selectedDate);
  const weekDayNames = useMemo(getWeekDayNames, []);

  useEffect(() => {
    setInput(formatWithLocale(selectedDate, "dd.MM.yyyy"));
  }, [selectedDate]);

  const changeSelectedDay = (day: Date) => {
    setSelectedDate(day);
    onChangeDate(day);
  };

  const onInputClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div>
        <input
          ref={setReferenceRef}
          className="date-picker-input"
          onClick={onInputClick}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <div ref={setPopperRef} style={styles.popper} {...attributes.popper}>
          {open && (
            <div className="date-picker-container">
              <h4>
                {formatWithLocale(selectedDate, "LLLL yyyy").toUpperCase()}
              </h4>
              <table className="date-picker-table">
                <thead>
                  <tr>
                    {weekDayNames.map((dayName) => (
                      <th key={dayName}>{dayName}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {eachDaysOfMonth.map((weekDays) => (
                    <tr key={weekDays[0].getTime()}>
                      {weekDays.map((day) => {
                        const isSelected = isSameDay(day, selectedDate);

                        return (
                          <td
                            key={day.getTime()}
                            onClick={() => changeSelectedDay(day)}
                          >
                            <div className={isSelected ? "selected-day" : ""}>
                              {day.getDate()}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DatePicker;
