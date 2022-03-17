import React, { useState } from "react";

export default function TimerSlot({index, timer}) {
    const [time, setTime] = useState(timer.time);
    const [text, setText] = useState(timer.text);
    return (
      <form className="timer" key={index}>
        <input 
          type="number" 
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    )
  }