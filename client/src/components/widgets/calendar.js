import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../../assets/styles/calendar.css"
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker className="inputCal" dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};
export default Calendar;