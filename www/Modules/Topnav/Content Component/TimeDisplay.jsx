import "../Topnav.css";

import React, { useState, useEffect } from "react";

export default function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const losAngelesTime = new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
      });
      setCurrentTime(new Date(losAngelesTime));
    }, 1000); // Fetch time every second

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, []);

  const addLeadingZero = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  return (
    <div className="time">
      {`${addLeadingZero(currentTime.getHours())}:${addLeadingZero(
        currentTime.getMinutes()
      )}:${addLeadingZero(currentTime.getSeconds())}`}
    </div>
  );
}
