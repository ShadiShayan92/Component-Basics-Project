import React, { useState, useEffect } from "react";
import "./ExpenseItem.css";

const CurrentTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="expense-item-time">
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default CurrentTimeDisplay;
