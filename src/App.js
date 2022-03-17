import React, { useState } from 'react';
import TimerSlot from './components/TimerSlot';
import './App.css';

export default function App() {
  const [timers, setTimers] = useState([
    { time: 3, text: 'I'},
    { time: 5, text: 'love'},
    { time: 7, text: 'you'},
  ]);

  function handleBlur(index, time, text) {
    const newTimers = [...timers];
    newTimers[index].time = time;
    newTimers[index].text = text;

    setTimers(newTimers);
  }

  function addTimer() {
    const newTimer = { time: 100, text: 'yoo' }

    setTimers(timers => [...timers, newTimer]);
  }

  return (
    <div className="app">
      <h2>Talk the Talk</h2>

      <div className="timers">
        {/* timers go here */}
        {timers.map((timer, index) =>  (
            <TimerSlot key={index} index={index} timer={timer} handleBlur={handleBlur}/>
        ))}

        <button className="add-button" onClick={addTimer}>Add</button>
      </div>

      {/* seconds */}
      <h2>0</h2>

      {/* buttons */}
      <div className="buttons">
        <button className="start-button">Start</button>
        <button className="stop-button">Stop</button>
      </div>
    </div>
  );
}