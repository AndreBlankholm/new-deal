import React, { useEffect, useState } from "react";

function TimePicker() {
  var [time, setTime] = useState(new Date());
  
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div>
      <p>Time is waisting, you need to hire this guy {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default TimePicker;
