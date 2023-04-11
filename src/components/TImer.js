import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setseconds] = useState(60);
  var stopwatch;
  useEffect(() => {
    stopwatch = setInterval(() => {
      setseconds(seconds - 1);
    }, 1000);
    return () => clearInterval(stopwatch);
  });
  const Start = () => {
    setseconds(60);
  };
  if (seconds > 0) {
    return (
      <>
        <h2 className="text-xl">{seconds}</h2>
        <button
          className="ml-2 border-solid border-2 border-black-500"
          onClick={Start}
        >
          ReStart
        </button>
      </>
    );
  } else {
    return (
      <>
        <h1 className="mt-1 ml-1">Time Up</h1>
        <button
          className="ml-2 border-solid border-2 border-red-500"
          onClick={Start}
        >
          ReStart
        </button>
      </>
    );
  }
};
export default Timer;
