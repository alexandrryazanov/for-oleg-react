import React, { useEffect, useMemo, useState } from "react";
import { getFormattedDate } from "./utils";

const Alarm = ({ className }: { className?: string }) => {
  const [time, setTime] = useState(new Date());

  const formattedDate = useMemo(() => getFormattedDate(time), [time]);

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return <div className={className}>{formattedDate}</div>;
};

export default Alarm;
